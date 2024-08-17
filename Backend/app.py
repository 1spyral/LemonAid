from flask import Flask, request
from flask_cors import CORS
import json

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
        "image": base64 encoded png, jpg or jpeg image,
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
    image = request.form.get("image")
    name = request.form.get("name")
    expiry = request.form.get("expiry")

    return server.upload_item(image, name, expiry)


@app.route("/api/view_item", methods=["GET"])
def view_item():
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
    id = request.args.get("id")

    return server.view_item(id)


@app.route("/api/delete_item", methods=["DELETE"])
def delete_item():
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
    id = request.args.get("id")

    return server.delete_item(id)


@app.route("/api/view_due_items", methods=["GET"])
def view_due_items():
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
    count = request.args.get("count")

    return server.view_due_items(count)


@app.route("/api/view_all_items", methods=["GET"])
def view_all_items():
    """
    View all items in the database.

    Request:
    {
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
    return server.view_all_items()

