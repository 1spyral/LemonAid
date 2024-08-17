from openai import OpenAI
from secret import API_KEY, ORGANIZATION_ID
from base64 import b64encode
from ast import literal_eval
from const import GPT_MODEL, GPT_SCAN_PROMPT, GPT_MAX_TOKENS, GPT_RECIPE_PROMPT

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

client = OpenAI(
    api_key=API_KEY,
    organization=ORGANIZATION_ID
)


def scan(b64_encoded_file, date):
    prompt = GPT_SCAN_PROMPT.replace("[date]", date)
    response = client.chat.completions.create(
        model=GPT_MODEL,
        messages=[
            {
                "role": "user",
                "content": [
                    {
                        "type": "text", "text": prompt
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

    return literal_eval(response.choices[0].message.content.replace("\n", ""))


def generate_recipe(ingredient_list):
    prompt = GPT_RECIPE_PROMPT.replace("[pantry]", ", ".join(ingredient_list))
    response = client.chat.completions.create(
        model=GPT_MODEL,
        messages=[
            {
                "role": "user",
                "content": [
                    {
                        "type": "text", "text": prompt
                    },
                ],
            }
        ],
        max_tokens=GPT_MAX_TOKENS,
    )

    return literal_eval(response.choices[0].message.content.replace("\n", ""))


''' testing code 
l = []
data = {
    "items": {
        "4":{
            "name": "hi",
            "t": 4
        },
        "5":{
            "name": "bye",
            "t": 5
        },
        "6":{
            "name": "lo",
            "t": 6
        }
    }
}
pantry = list(map(lambda x: data["items"][x]["name"], data["items"]))
for _ in range(3):
    l.append(generate_recipe(pantry))

print(l)
'''