# 🥘 Ingreasy – AI-Powered Recipe Generator

Ingreasy is a full-stack AI-powered web app that generates recipes from uploaded grocery item images using OCR and Gemini API. It features Clerk authentication, recipe history, PDF downloads, and a sleek, responsive UI built with React and TailwindCSS.

---

## ✨ Features

- Upload grocery item images and extract ingredients using **Google Cloud Vision OCR**
- Generate creative recipes using **Gemini API**
- Clerk-based JWT authentication with protected routes
- Download recipes as printable PDFs
- View history and recently generated recipes
- Fully responsive UI (TailwindCSS + Lucide icons)

---

## 🛠️ Tech Stack

- **Frontend:** React, Vite, TailwindCSS, Clerk, Lucide Icons
- **Backend:** Node.js, Express.js, MongoDB, Gemini API, **Google Cloud Vision API**
- **PDF Generator:** jsPDF
- **Auth:** Clerk

---

## 🔗 Live Demo

🌐 [https://ingreasy-frontend.onrender.com](https://ingreasy-frontend.onrender.com)

---

## ⚙️ Environment Variables

### 🔐 Client (`client/.env`)
```env
VITE_CLERK_PUBLISHABLE_KEY=your_clerk_publishable_key
VITE_API_BASE_URL=VITE_API_BASE_URL=http://localhost:4000/api
```

### 🔐 Server (`server/.env`)
```env
MONGODB_URI=your_mongodb_uri
PORT=4000
CLERK_JWT_SECRET=your_clerk_jwt_secret
GEMINI_API_KEY=your_google_gemini_api_key
GOOGLE_CREDENTIALS_BASE64=base64_encoded_google_credentials_json
```

---

## 🔐 How Google Vision Key Works (OCR Setup)

We use **Google Cloud Vision API** to extract text from uploaded grocery images. To keep credentials secure on platforms like Render or GitHub, we use **Base64 encoding** of the key file.

### ✅ Steps:

#### 1. Enable Google Vision API
- Go to [Google Cloud Console](https://console.cloud.google.com/)
- Create/select a project → Enable **Vision API**
- Go to **APIs & Services > Credentials**
- Click **“Create Credentials” → “Service Account”**
- After setup, go to **Keys** → **Add Key** → **Create JSON Key**

> This will download a `.json` file (your service account key)

---

#### 2. Convert to Base64 (on your system)

Run this PowerShell command:

```powershell
[Convert]::ToBase64String([System.IO.File]::ReadAllBytes("$PWD\ingreasy-vision-key.json"))
```

📋 Copy the full output.

---

#### 3. Paste in `.env`

```env
GOOGLE_CREDENTIALS_BASE64=eyJ0eXBlIjoi...
```

---

#### 4. How it works in the app

On server startup, the app:

- Decodes the Base64 string
- Recreates the `.json` file inside `server/configs/google-key.json`
- Automatically sets `GOOGLE_APPLICATION_CREDENTIALS` in memory

✅ This approach works perfectly with **Render** or **any host**, no manual file upload needed.

---

## 📁 Folder Structure

```
client/
├── public/
├── src/
├── .env
└── vite.config.js

server/
├── configs/            → MongoDB, Clerk, Google key setup
├── controllers/        → OCR, Gemini logic
├── middleware/         → Clerk JWT auth
├── models/             → Mongoose schemas
├── routes/             → Express routers
├── .env
└── server.js
```

---

## 🚀 Getting Started

### 1️⃣ Clone the Repo
```bash
git clone https://github.com/your-username/ingreasy.git
cd ingreasy
```

### 2️⃣ Setup Frontend
```bash
cd client
npm install
npm run dev
```

### 3️⃣ Setup Backend
```bash
cd server
npm install
node server.js
```

---

## 🚨 API Base URL

Default frontend is set to production:

```env
VITE_API_BASE_URL=https://ingreasy-backend.onrender.com/api
```

To run locally, switch to:

```env
VITE_API_BASE_URL=http://localhost:4000/api
```

Use in code:
```js
axios.get(`${import.meta.env.VITE_API_BASE_URL}/recipes`)
```

---

## 🧪 Testing

- Upload grocery item image
- OCR via Google Vision
- Recipe generation via Gemini
- View steps, download PDF
- Recent & historical recipes accessible

---

## 📩 Contact

- 📧 Email: jimil4117@gmail.com  
- 💻 GitHub: [https://github.com/jimil222](https://github.com/jimil222)  
- 🔗 LinkedIn: [linkedin.com/in/jimil-v-soni](https://linkedin.com/in/jimil-v-soni)

---

## 📝 License

Licensed under the MIT License.
