from openai import OpenAI
from secret import API_KEY, ORG_ID
from base64 import b64encode
from const import GPT_MODEL, GPT_PROMPT, GPT_MAX_TOKENS

'''

function to convert a local image path to a base64 string

'''
def b64_encode_file(path):

    with open(path, "rb") as file:
        encoding = b64encode(file.read()).decode('utf-8')
        return encoding


''' 

class to return ChatGPT predictions about the image

Example usage: 

image = "image.png"
b64_image = b64_encode_file(image)
r = Scanner()
print(r.scan(b64_image))

'''
class Scanner:

    def __init__(self):

        self.client = OpenAI(
            api_key=API_KEY,
            organization=ORG_ID
        )


    def scan(self, b64_encoded_file):

        response = self.client.chat.completions.create(
            model=GPT_MODEL,
            messages=[
                {
                    "role": "user",
                    "content": [
                        {
                            "type": "text", "text": GPT_PROMPT
                        },
                        {
                            "type": "image_url",
                            "image_url": {
                                "url": f"data:image/jpeg;base64,{b64_encoded_file}",
                            },
                        },
                    ],
                }
            ],
            max_tokens=GPT_MAX_TOKENS,
        )

        return response.choices[0].message.content
