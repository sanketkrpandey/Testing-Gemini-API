# 💡 Gemini LLM Wrapper – Test Project

This is a simple web application that acts as a wrapper around Google's Gemini Large Language Model (LLM) API. It provides a minimal interface to send a text prompt and get a generated response.

This project was created as a personal experiment to learn how to integrate LLM APIs into a full-stack application using Node.js (Express) and vanilla HTML/JavaScript.

---

## ✨ Features

- ✅ Send user prompts from a simple web interface  
- ✅ Backend API call to Google's Gemini LLM (`generateContent`)  
- ✅ Fully working CORS configuration for local testing  
- ✅ Neatly handles loading states and error messages  

---

## 🗂️ Project Structure

```
gemini-llm-wrapper/
├── Backend/
│   └── server.js        # Node.js + Express server handling Gemini API
├── Frontend/
│   └── index.html       # Frontend with textarea input + Fetch API
├── .env                 # Stores Gemini API Key
├── .gitignore
└── README.md            # You're here!
```

---

## 🚀 Getting Started

### 🔧 Prerequisites

- Node.js & npm installed  
- Google Generative AI API key  
- Live Server (VS Code extension) **OR** Python to serve frontend  

---

### 🛠️ Installation

**1. Clone the Repository**
```bash
git clone https://github.com/<your-username>/gemini-llm-wrapper.git
cd gemini-llm-wrapper
```

**2. Install Backend Dependencies**
```bash
cd Backend
npm install
```

**3. Create a `.env` File**  
Inside the `Backend` folder, create a `.env` file:
```env
GEMINI_API_KEY=your_actual_google_generative_ai_key
```
Replace `your_actual_google_generative_ai_key` with your real key.

---

## ▶️ Running the Project

**1. Start Backend**
```bash
cd Backend
node server.js
```
Your backend should now run on: [http://localhost:4000](http://localhost:4000)

**2. Serve the Frontend**  
Navigate to the `Frontend/` folder and either:

**Option A: Use Python HTTP Server**
```bash
cd Frontend
python -m http.server 5500
```
Then open: [http://127.0.0.1:5500/index.html](http://127.0.0.1:5500/index.html)

**Option B: Use Live Server (VS Code)**  
Right-click `index.html` → **Open with Live Server**

---

## 🧪 Example Prompt

In the browser, type:
```
Write a haiku about the moon.
```
Click **Generate**, and the AI's response will appear below the button.

---

## 📦 Tech Stack

- **Frontend:** HTML, Vanilla JavaScript  
- **Backend:** Node.js, Express.js  
- **LLM API:** Google Generative AI (`@google/generative-ai`)  
- **Other:** CORS, dotenv  

---

## 📬 Learning Outcomes

- Set up a basic full-stack app using an LLM  
- Understood how Gemini's `generateContent` method works  
- Managed frontend-to-backend communication using Fetch API  
- Learned how to solve CORS issues in dev environments  

---

## 🧾 License

This is a personal learning project and is not intended for production use.  
You’re welcome to fork, clone, and modify it for educational purposes.

---

## 🙌 Acknowledgements

- Google Generative AI SDK for JavaScript  
- Express.js Framework  
- My curiosity to build and learn with LLMs 😄  

---

## 🧠 Author

**Sanket Pandey**  
Built with 💻 + ☕ as a personal learning experiment.