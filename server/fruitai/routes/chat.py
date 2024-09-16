from flask import Blueprint, jsonify, request
import random

chat = Blueprint("chat", __name__)

responses = [
    "Let me check that for you! Could you please provide a bit more detail on what you're looking for?",
    "Thanks for reaching out! I'm here to help with any fruit-related questions or orders you may have.",
    "I'm happy to assist you! Could you clarify your question so I can help you better?",
    "If you're interested, I can provide more details or help you explore other options!",
    "Is there anything else you'd like to know or any other fruit you'd like to inquire about?",
    "We offer fast and reliable delivery for all our fruits! Could you share your location for estimated delivery times?",
    "I can help you place an order for any fruit you need. Just let me know which one you'd like!",
    "We deliver faster than a Cadillac on chrome, ya feel me? Drop your spot, and I'll tell you when the fruits will slide through."
]

@chat.post("/")
@chat.post("")
def postMessage():
    if not request.is_json:
        error = { "error": "Please provide the message body." }
        return jsonify(error), 400

    body = request.get_json()
    message = body.get('message')

    if not message:
        error = { "error": "Please send some message for output." }
        return jsonify(error), 400

    response = {
        "type": "bot",
        "message": random.choice(responses)
    }

    return jsonify(response)

