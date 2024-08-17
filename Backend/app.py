from flask import Flask, request, make_response, jsonify
from flask_cors import CORS
import json

from const import *

from server import Server

app = Flask(__name__)
CORS(app)

server = Server()

app.run()


@app.route("/api/upload_item", methods=["POST"])
def upload_item():
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
    


