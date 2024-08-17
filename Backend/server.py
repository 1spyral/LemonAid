import json

class Server:
    def __init__(self) -> None:
        """Read stored data from data.json"""
        with open("data.json", "r") as d:
            self.data = json.load(d)

    
    def write_data(self) -> None:
        """Update data to data.json"""
        with open("data.json", "w") as d:
            json.dump(self.data, d)


    def upload_item(self, image: str, description: str, expiry: str) -> dict:
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
            "recommended_location": "freezer",
            "expiry": "2023-12-31",
            "status": "success"
        }
        """
        # Process image
        # Process description
        # Process expiry
        # Update data
        # Return response
        pass