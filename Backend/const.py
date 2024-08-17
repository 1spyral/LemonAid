VALID_FILE_TYPES = {'png', 'jpg', 'jpeg'}
PHOTO_PATH = "imgs/"
PROMPT = """The current date is August 17, 2024.
            
            Please output the response to these questions in a dictionary object with the following format:
            {
            isfooditem: yes or no
            name: string
            confidence: integer
            guessnumberofdays: integer
            isdateonimage: yes or no
            dateonimage: date (YYYY-MM-DD) or none
            }

            Is there a food item in this image, and if so, what is it?
            How confident is this prediction of the food item? (as a percentage)
            In about how many days will this product reach its best before or expiry date?
            Is there a best before or expiry date listed on the image? If so, what is it?"""
