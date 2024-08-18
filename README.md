# LemonAid
![image](https://github.com/user-attachments/assets/7d5314af-1991-4481-9aae-99f049da01c8)
Clean your fridge, Save money, Help the environment! 🫨🫨🫨 LemonAid tracks your food items for delicious recipes before they spoil and rot! Scan your groceries, and we'll remind you to use them up!

Created by [`@claireg0`](https://github.com/claireg0), [`@will2dai4`](https://github.com/will2dai4), [`@Williamwu277`](https://github.com/Williamwu277), [`@1spyral`](https://github.com/1spyral)

## How to run
Server: navigate to `Backend/` folder. Execute `flask run` or `python3 -m flask run`.

Client: navigate to `Frontend/` folder. Execute `npm install` -> `npm run build` -> `npm run dev`.

## Inspiration
Does your household ever buy food, forget about it, and find it when it's expired and nasty? Our team member, William, recently decided to make hot dogs, and thought it would be a good idea to add some long-lost salad dressing from the back of his fridge. Unfortunately, his hot dog was ruined by a rancid and rotten surprise. Taking inspiration from this disaster, we've vowed to help William never make a mistake like this again.

## What it does
LemonAid is a must-have addition to your home life! Just went on a grocery spree? Scan your purchases and LemonAid will remind you when they're about to expire! Are your lamb chops about to go bad? LemonAid will cook up a quick recipe for you to use them up! A web app designed to help you keep track of your soon-to-expire food items, LemonAid tracks the foods that you buy for your home's pantry or refrigerator. It can quickly deliver a sorted list of foods that are going bad soon, and also recommends easy recipes that use those ingredients.

## How we built it
LemonAid, as a web app, is built on a client and a server. The front-end client is built with React.js, with styling from Tailwind CSS. The client connects to the back-end server, which is built on flask.py, a Python web framework. The back-end utilizes multiple OpenAI API features such as GPT-4, Vision, and DALL-E to scan and recognize food products; analyze and predict expiry/best before dates; and design and visualize authentic recipes.

## Challenges we ran into
While developing LemonAid, we were initially faced with a problem of finding a solution to one of the app's main features: image recognition. After experimenting with multiple free sources such as ImageNet, Tensorflow and OpenCV, it was decided that the limited data and capabilities of these services would be insufficient for the purposes of the project. Deciding to take a paid approach, we settled on OpenAI's expansive API that encompassed both text and image AI processing. However, a side effect of using a paid service meant that we would have to strictly limit our API usage in order to keep our project affordable and realistic.

## Accomplishments that we're proud of
Through creating LemonAid, our members on both the front- and back-ends took huge steps out of their comfort zones. On the front-end, we tried Tailwind CSS, a framework that completely reimagines the website design process. Meanwhile, the back-end was faced with the task of delivering a functional product using an unfamiliar paid service. It was a great source of pride to our team to succeed in building our project, whilst overcoming these hurdles and venturing into unfamiliar territory.

## What we learned
Ignition Hacks has provided a great learning experience to the team, not only by allowing us to advance our technical programming skills, but also to open our eyes to how much we can accomplish with hard work and collaboration. Although we had two formal front-end and two formal back-end developers, to say that these were rigid positions is a complete falsity. Our roles were very much dynamic, filling in for each other during times of confusion and strain. Ignition Hacks taught us all that a great work ethic and approach to teamwork can result in a beautiful result such as LemonAid.

## What's next for LemonAid
Despite the rumbose functionality of LemonAid, there are still great steps to be taken before this application can reach its fullest potential. Firstly, we are working on significantly increasing the accuracy of the AI models being used to predict expiration dates by using manual inputs and large datasets. Finally, the model that generates instructions and uses dedicated ingredients can be trained with already-existing recipe databases for more popular and well-suited recipes for personal preferences. 
