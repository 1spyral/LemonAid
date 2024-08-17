from flask import jsonify
from threading import Thread
from time import sleep
from scanner import Scanner
from datetime import date
from random import randint
from const import ID_CAP

import time
import json

from const import PHOTO_PATH, VALID_FILE_TYPES


def format_response(info: dict, status: int):
    response = jsonify(info)
    response.status_code = status
    response.headers.add('Access-Control-Allow-Origin', '*')
    return response


class Server:
    def __init__(self) -> None:
        """Read stored data from data.json"""
        try:
            with open("data.json", "r") as d:
                self.data = json.load(d)
                if "items" not in self.data:
                    raise json.decoder.JSONDecodeError
        except (json.decoder.JSONDecodeError, FileNotFoundError):
            print("data.json is empty. Setting up data.json")
            self.setup()
        # Start update loop
        Thread(target=self.update_loop).start()

        self.scanner = Scanner()
        
        
    def setup(self) -> None:
        """Set up data.json"""
        self.data = {
            "items": {}
        }
        print("data.json set up")
        self.write_data()

    
    def write_data(self) -> None:
        """Update data to data.json"""
        with open("data.json", "w") as d:
            json.dump(self.data, d)
        print("data.json updated")


    def update_loop(self) -> None:
        """Update data every 30 seconds"""
        while True:
            sleep(30)
            self.write_data()

    def upload_item(self, image, name: str, expiry: str):
        """
        Upload food item image or text description to the server.

        Request:
        {
            "image": png, jpg or jpeg image,
            "name": "2 liter vanilla ice cream bucket" (optional)
            "expiry": "2023-12-31" (optional)
        }
        Response:
        {
            "id": "123456",
            "name": "vanilla ice cream",
            "expiry": "2023-12-31",
            "status": "success"
        }
        """
        # Process image
        if image.filename.split(".")[-1] not in VALID_FILE_TYPES:
            return format_response({"status": "error", "message": "Invalid file type"}, 400)
        
        scanned_response = self.scan(image)

        # Process description
        description = scanned_response["name"]
        if name != "":
            description = name

        # Process expiry
        expiry_date = ""

        if expiry != "":
            expiry_date = expiry

        elif scanned_response["isdateonimage"] == "yes":
            expiry_date = scanned_response["dateonimage"]

        else:
            today_in_seconds = time.time()
            expiry_time_in_seconds = scanned_response["guessnumberofdays"] * 24 * 60 * 60
            expiry_day_in_seconds = today_in_seconds + expiry_time_in_seconds
            expiry_date = date.fromtimestamp(expiry_day_in_seconds).__str__()

        # Generate id
        id = randint(1, ID_CAP)
        while id in self.data["items"]:
             id = randint(1, ID_CAP)

        # Update data
        self.data["items"][str(id)] = {
             "id": str(id),
             "name": description,
             "expiry": expiry_date
        }

        # Return response
        response = self.data["items"][str(id)]
        response["status"] = "success"
        return format_response(response, 200)

    def view_item(self, id: str):
        """
        View information about a food item.

        Request:
        {
            "id": "123456"
        }
        Response:
        {
            item: {
                "id": "123456",
                "name": "vanilla ice cream",
                "expiry": "2023-12-31",
                "image": png, jpg or jpeg image,
                "status": "success"
            },
            status: "success"
        }
        """
        # Get data
        if id not in self.data:
            return format_response({"status": "error", "message": "Item not found"}, 404)
        return format_response({"item": self.data["items"][id], "status": "success"}, 200)
    
    def delete_item(self, id: str):
        """
        Delete a food item from the server.

        Request:
        {
            "id": "123456"
        } 
        Response:
        {
            "id": "123456",
            "status": "success"
        }
        """
        # Delete data
        if id not in self.data["items"]:
            return format_response({"status": "error", "message": "Item not found"}, 404)
        del self.data["items"][id]
        return format_response({"id": id, "status": "success"}, 200)

#todo
    def view_due_items(self, count: int):
        """
        View basic information about soon-to-expire items, sorted in whichever will expire first.

        Request:
        {
            "count": 10 - number of items to return
        }
        Response:
        {
            "items": [
                {
                    "id": "123456",
                    "name": "vanilla ice cream",
                    "expiry": "2023-12-31"
                },
                {
                    "id": "123457",
                    "name": "chocolate ice cream",
                    "expiry": "2023-12-31"
                }
            ],
            "status": "success"
        }
        """
        # Get data
        sorted_keys = sorted(self.data["items"], lambda x: self.data["items"][x]["expiry"])
        response = {
            "items": [],
            "status": "success"
        }
        for key in range(min(len(sorted_keys), count)):
            response["items"].append(self.data["items"][key])

        # Return response
        return format_response(response, 200)

    def view_all_items(self):
        """
        View basic information about all items.

        Request:
        {}
        Response:
        {
            "items": [
                {
                    "id": "123456",
                    "name": "vanilla ice cream",
                    "expiry": "2023-12-31"
                },
                {
                    "id": "123457",
                    "name": "chocolate ice cream",
                    "expiry": "2023-12-31"
                }
            ],
            "status": "success"
        }
        """
        # Get data
        # Return response