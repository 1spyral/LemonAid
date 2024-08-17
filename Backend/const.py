VALID_FILE_TYPES = {'png', 'jpg', 'jpeg'}
PHOTO_PATH = "imgs/"
GPT_MODEL = "gpt-4o"
GPT_MAX_TOKENS = 300
GPT_PROMPT = """The current date is August 17, 2024.
            
                            Please output the response to these questions in a dictionary object with the following format:
                            {
                                name: string
                                confidence: integer
                                guessnumberofdays: integer
                                isdateonimage: yes or no
                                dateonimage: date (YYYY-MM-DD) or none
                            }

                            What food item is in this image?
                            How confident is this prediction of the food item? (as a percentage)
                            In about how many days will this product reach its best before or expiry date?
                            Is there a best before or expiry date listed on the image? If so, what is it?"""
