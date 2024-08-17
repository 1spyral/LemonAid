from flask import jsonify
import json
import threading

from const import PHOTO_PATH, VALID_FILE_TYPES


def format_response(info: dict, status: int):
    response = jsonify(info)
    response.status_code = status
    response.headers.add('Access-Control-Allow-Origin', '*')
    return response


class Server:
    def __init__(self) -> None:
        """Read stored data from data.json"""
        with open("data.json", "r") as d:
            self.data = json.load(d)
        

    
    def write_data(self) -> None:
        """Update data to data.json"""
        with open("data.json", "w") as d:
            json.dump(self.data, d)

#todo
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

        # Process description
        # Process expiry
        # Update data
        # Return response
        pass

#todo
    def view_item(self, id: str):
        """
        View information about a food item.

        Request:
        {
            "id": "123456"
        }
        Response:
        {
            "id": "123456",
            "name": "vanilla ice cream",
            "expiry": "2023-12-31",
            "image": png, jpg or jpeg image,
            "status": "success"
        }
        """
        # Get data
        # Return response
        pass
    
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
        if id in self.data:
            del self.data[id]
            return format_response({"id": id, "status": "success"}, 200)
        return format_response({"status": "error", "message": "Item not found"}, 404)

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
        # Return response
        pass
