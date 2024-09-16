from flask import Blueprint, jsonify, request
import uuid

faqs = Blueprint("faqs", __name__)

faqs_data = [
    {
        "id": "ce745b60-156b-425b-b306-8a0c011ca390",
        "fruit": "Tangerine",
        "title": 'How is Tangerine healthy?',
        "description": 'Tangerine are a great health booster due to their high vitamin C content, which supports the immune system and skin health.'
    },
    {
        "id": "3c2512b0-9b1b-4ce9-bd73-9363d4267db0",
        "fruit": "Tangerine",
        "title": 'How is Tangerine healthy?',
        "description": 'Tangerine are a great health booster due to their high vitamin C content, which supports the immune system and skin health.'
    },
    {
        "id": "ca69ed90-474c-4cec-b7c8-97d42d6c745c",
        "fruit": "Tangerine",
        "title": 'How is Tangerine healthy?',
        "description": 'Tangerine are a great health booster due to their high vitamin C content, which supports the immune system and skin health.'
    }
]

# GET /faqs: Fetch all faqs.
@faqs.get("")
@faqs.get("/")
def getAllFaqs():
    if (len(faqs_data) > 0):
        return jsonify(faqs_data)
    else:
        error = {"error":"No FAQs available."}
        return jsonify(error), 404

# GET /faqs/:id: Fetch a single faq by ID.
@faqs.get("/<id>")
def getSingleFaq(id):
    for faq in faqs_data:
        if faq['id'] == int(id):
            return jsonify(faq)

    error = {"error":"No FAQ found."}
    return jsonify(error), 404

# POST /faqs: Create a new faq.
@faqs.post("")
@faqs.post("/")
def postFaq():
    if not request.is_json:
        error = { "error": "Please provide the FAQ deatils." }
        return jsonify(error), 400

    body = request.get_json()

    fruit = body.get('fruit')
    title = body.get('title')
    description = body.get('description')

    if not fruit or not title or not description:
        error = { "error": "Please enter all the deatils to add a new FAQ." }
        return jsonify(error), 400

    newFaq = {
        "id": str(uuid.uuid4()),
        "fruit": fruit,
        "title": title,
        "description": description
    }

    faqs_data.insert(0, newFaq)

    return jsonify(newFaq)

# PUT /faqs/:id: Update a faq by ID.
@faqs.put('<id>')
def updateFaq(id):
    for faq in faqs_data:
        if faq['id'] == id:
            if not request.is_json:
                error = { "error": "Please provide the FAQ deatils." }
                return jsonify(error), 400

            body = request.get_json()

            fruit = body.get('fruit')
            title = body.get('title')
            description = body.get('description')

            if not fruit or not title or not description:
                error = { "error": "Please enter all the deatils to add a new FAQ." }
                return jsonify(error), 400

            faq['fruit'] = fruit
            faq['title'] = title
            faq['description'] = description

            return jsonify(faq)

    error = {"error":"No FAQ found."}
    return jsonify(error), 404

# DELETE /faqs/:id: Delete a faq by ID.
@faqs.delete('/<id>')
def deleteFaq(id):
    for faq in faqs_data:
        if faq['id'] == id:
            faqs_data.remove(faq)
            return jsonify(faq)

    error = {"error":"No FAQ found."}
    return jsonify(error), 404
