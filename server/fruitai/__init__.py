from flask import Flask
from flask_cors import CORS

def create_app():
    app = Flask(__name__)
    CORS(app)

    from .routes.faqs import faqs
    from .routes.chat import chat

    app.register_blueprint(faqs, url_prefix="/api/faqs")
    app.register_blueprint(chat, url_prefix="/api/chat")

    return app
