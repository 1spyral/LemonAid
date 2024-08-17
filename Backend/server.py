from flask import jsonify
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
        with open("data.json", "r") as d:
            self.data = json.load(d)

    
    def write_data(self) -> None:
        """Update data to data.json"""
        with open("data.json", "w") as d:
            json.dump(self.data, d)


    def upload_item(self, image, description: str, expiry: str):
        """
        Upload food item image or text description to the server.

        Request:
        {
            "image": png, jpg or jpeg image,
            "description": "2 liter vanilla ice cream bucket" (optional)
            "expiry": "2023-12-31" (optional)
        }
        Response:
        {
            "id": "123456",
            "name": "vanilla ice cream",
            "instructions": "store in freezer once opened",
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