# Fruit.ai

**Fruit.ai** is a web application that offers users a centralized platform for various fruit-related services. The platform includes:

- **Login Page**: A simple interface requiring dummy credentials to access the system.
- **Home Page**: A dashboard providing access to four main services:
    - **Chatbot**: A personalized chatbot that displays a list of fruits as cards, with detailed views for each fruit.
    - **Translator**: A tool that converts input text into a regional language.
    - **FAQ Section**: A CRUD-enabled page allowing users to create, read, update, and delete FAQs about fruits.
    - **About Page**: General information about the Fruit Info Portal.

This project includes a frontend built using React and Tailwind for a responsive, user-friendly interface, and a backend API using Flask for managing the FAQ section. The backend supports full CRUD functionality for FAQ entries and integrates seamlessly with the frontend to provide a smooth user experience.

---

## Project Structure

```
fruitai/
├── server/
│   ├── app.py                     # Main app/server file
│   ├── fruitai/                   # Main API file (Flask API setup)
│   │   └── routes/                # API Routes for CRUD operations
│   │       ├── chat.py            # '/chat' related API Routes
│   │       └── faqs.py            # '/faqs' related API Routes
│   └── requirements.txt           # Python dependencies
│   
├── client/
│   ├── public/
│   │   └── vite.svg               # Favicon file 
│   ├── src/
│   │   ├── assets/                # Essential image assets
│   │   │   ├── fruits.jpeg        # Fruits image for FAQ section
│   │   │   └── profile.jpeg       # Profile image for chat section 
│   │   ├── components/
│   │   │   ├── FAQAddForm.jsx     # Popup form for adding FAQ
│   │   │   ├── FAQCard.jsx        # (View) FAQ Card 
│   │   │   └── OptionCard.jsx     # Service Card on Home page
│   │   ├── lib/
│   │   │   ├── logo.js            # Figma logo lib
│   │   │   └── utils.js           # Extras utils lib
│   │   ├── pages/
│   │   │   ├── LoginPage.js       # Login page UI
│   │   │   ├── HomePage.js        # Home page with service links
│   │   │   ├── ChatPage.js        # Chat service page (list of fruits)
│   │   │   ├── TranslatePage.js   # Translator service page
│   │   │   ├── FAQPage.js         # FAQ CRUD page
│   │   │   └── AboutPage.js       # About page
│   │   ├── index.css              # Main CSS file
│   │   ├── main.jsx               # Starting React file
│   │   └── App.jsx                # Main React app
│   └── pacakge.json           # Frontend dependencies
└── README.md                  # Project-wide README
```

## Setup Instructions

### Prerequisites:

- **Node.js & npm** (for frontend)
- **Python 3.x & pip** (for backend)

### 1. Backend Setup (Flask)
1. **Navigate to the backend folder**:

```bash
cd server
```

2. **Create a virtual environment**:

```bash
python -m venv venv
source venv/bin/activate  # For Windows use venv\Scripts\activate
```

3. **Install dependencies**:

```bash
pip install -r requirements.txt
```

4. **Run the backend server**:
```bash
python app.py
```

By default, this should start the server at `http://127.0.0.1:3000/`. You can modify this in the app config.

### 2. Frontend Setup (React)
1. **Navigate to the frontend folder**:
```bash
cd client
```

2. **Install dependencies**:

```bash
npm install
```

3. **Run the frontend server**:
```bash
npm run dev
```

This will start the React app on `http://localhost:5173/`.

## Running the Application

- **Login Page**: Enter any dummy credentials (e.g., user: `admin`, password: `admin`) to access the homepage.
- **Home Page**: From the homepage, you can navigate to the following services:
    - **Chatbot**: Browse fruits as cards and view detailed information.
    - **Translator**: Input text to translate it into a regional language.
    - **FAQ Section**: Manage FAQs related to fruits with full CRUD capabilities.
    - **About Page**: Learn more about the platform.

## API Endpoints

- **GET /faqs**: Fetch all available FAQs.
- **GET /faqs/:id**: Fetch a specific FAQ.
- **POST /faqs**: Create a new FAQ.
- **PUT /faqs/:id**: Update an existing FAQ by its ID.
- **DELETE /faqs/:id**: Delete a specific FAQ by its ID.

Each endpoint includes error handling for input validation and returns appropriate messages for failed requests.

## Design Decisions

1. **Frontend Framework**:
    - React is chosen for its component-based architecture, making it easy to manage UI and handle API calls.
    - TailwindCSS is used for styling to keep the project lightweight.

2. **Backend Framework**:
    - Flask is selected for its simplicity and speed in setting up REST APIs.
    - However, Django or FastAPI can be used for more advanced use cases.

3. **API Design**:
    - REST API is structured for simplicity, allowing CRUD operations on FAQs.
    - Async/await is used in the frontend for API calls to improve readability and maintainability.

4. **UI/UX**:
    - A clean, intuitive user interface with responsive design.
    - Error handling, loading indicators, and form validation ensure a smooth user experience.
