from flask import Flask, request, make_response, jsonify
from flask_cors import CORS
import json

from const import *

from server import Server

app = Flask(__name__)
CORS(app)

server = Server()

app.run()


