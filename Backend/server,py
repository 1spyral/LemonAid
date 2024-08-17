import json

class Server:
    def __init__(self) -> None:
        """Read stored data from data.json"""
        with open("data.json", "r") as d:
            self.data = json.loads(d)

    
    def write_data(self) -> None:
        """Update data to data.json"""
        with open("data.json", "w") as d:
            json.dump(self.data, d)