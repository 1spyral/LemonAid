from openai import OpenAI
from secret import API_KEY, ORGANIZATION_ID
from base64 import b64encode
from ast import literal_eval
from const import GPT_MODEL, GPT_SCAN_PROMPT, GPT_MAX_TOKENS, GPT_RECIPE_PROMPT, GPT_RECIPE_IMAGE_PROMPT

import json

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


'''

Plug in description dictionary of recipe to generate an image of it

'''
def generate_recipe_image(description):

    prompt_dictionary = {
        "name": description["name"],
        "ingredients": description["ingredients"]
    }
    prompt = GPT_RECIPE_IMAGE_PROMPT.replace("[dict]", json.dumps(prompt_dictionary))
    response = client.images.generate(
        model="dall-e-2",
        prompt=prompt,
        size="512x512",
        n=1,
    )

    image_url = response.data[0].url
    print(image_url)
    return image_url

''' testing code
d = {
    "name": "Hearty Chicken Ramen Skillet",
    "ingredients": {
        "Chicken breast": "1 piece",
        "Ramen noodles": "1 package",
        "Eggs": "2",
        "Tomato": "1, diced",
        "Potatoes": "2, diced",
        "Salt": "to taste",
        "Pepper": "to taste",
        "Olive oil": "2 tablespoons"
    },
    "instructions": [
        "1. Season the chicken breast with salt and pepper. In a skillet, heat 1 tablespoon of olive oil and cook the chicken until golden brown and fully cooked. Remove and slice into strips.",
        "2. Boil the ramen noodles according to package instructions, then drain and set aside.",
        "3. In the same skillet, add the remaining olive oil and fry the diced potatoes until crispy and golden brown. Season with salt.",
        "4. Add the diced tomato to the skillet and cook for a few minutes until softened.",
        "5. Push the vegetables to the side of the skillet and crack the eggs into the empty space, cooking them to your preference (scrambled or fried).",
        "6. Add the cooked ramen noodles and chicken back into the skillet, mixing everything together.",
        "7. Serve hot and enjoy!"
    ]
}

generate_recipe_image(d)
'''