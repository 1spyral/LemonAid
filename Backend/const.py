VALID_FILE_TYPES = {'png', 'jpg', 'jpeg'}
PHOTO_PATH = "imgs/"
ID_CAP = 999999999
GPT_MODEL = "gpt-4o"
GPT_MAX_TOKENS = 300
GPT_SCAN_PROMPT = """
The current date is [date].
            
Please output the response to these questions in a dictionary object with the following format exactly without markup:

{
    "isfooditem": yes or no
    "name": string
    "confidence": integer
    "guessnumberofdays": integer
    "isdateonimage": yes or no
    "dateonimage": date (YYYY-MM-DD) or none
}

Is there a food item in this image, and if so, what is it?
How confident is this prediction of the food item? (as a percentage)
In about how many days will this product reach its best before or expiry date?
Is there a best before or expiry date listed on the image? If so, what is it?"""

GPT_RECIPE_PROMPT = """
Please output the response to these questions in a dictionary object with the following format exactly without markup:

{
    "name": string,
    "ingredients": {
        "name": amount -> string
    },
    "instructions": list,
}

Given that my pantry includes [pantry].

What is a clever name of a recipe I can make using some of those ingredients?
What is the ingredients list of this recipe?
What are the instructions to make this recipe?"""

GPT_RECIPE_IMAGE_PROMPT = """
Please generate an image of the dish based on the name, and ingredients below.

[dict]
"""