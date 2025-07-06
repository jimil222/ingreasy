
# 🥘 Ingreasy – AI-Powered Recipe Generator

Ingreasy is a full-stack AI-powered web app that generates recipes based on uploaded grocery item images using OCR and Gemini API. It includes authentication with Clerk, PDF recipe downloads, recipe history, and a sleek, responsive UI built with React and TailwindCSS.

---

## ✨ Features

- Upload grocery item images and extract ingredients using OCR (OCR.Space).
- Generate creative recipes using Google Gemini API.
- Clerk-based authentication and protected routes.
- View recipe history and recents.
- Download recipes as PDFs.
- Responsive UI built with TailwindCSS and Lucide icons.

---

## 🛠️ Tech Stack

- **Frontend:** ReactJS, Vite, TailwindCSS, Clerk, Lucide Icons
- **Backend:** NodeJS, ExpressJS, MongoDB, Gemini API, OCR.Space API
- **PDF Generator:** jsPDF
- **Auth:** Clerk

---

## 🔗 Live Demo

- 🔗 Link - [https://ingreasy-frontend.onrender.com](https://ingreasy-frontend.onrender.com)

---

## ⚙️ Environment Variables

### 🔐 Client (`client/.env`)
```env
VITE_CLERK_PUBLISHABLE_KEY=your_clerk_publishable_key
VITE_API_BASE_URL=http://localhost:4000/api
```

### 🔐 Server (`server/.env`)
```env
MONGODB_URI=your_mongodb_uri
PORT=4000
OCR_API_KEY=your_ocr_space_api_key
CLERK_JWT_SECRET=your_clerk_jwt_secret
GEMINI_API_KEY=your_google_gemini_api_key
```

---

## 📁 Folder Structure

```
client/                 → React frontend (Vite)
├── public/             → Static assets and _redirects
├── src/                → React components, pages, context, utils
├── .env                → Client-side environment config
└── vite.config.js      → Vite configuration

server/                 → Express backend
├── configs/            → MongoDB, Clerk configs
├── controllers/        → Route handlers
├── middleware/         → Clerk auth
├── models/             → Mongoose schemas
├── routes/             → Express routes
├── .env                → Server-side environment config
└── server.js           → Backend entry
```

---

## 🚀 Getting Started

### 1️⃣ Clone the Repository
```bash
git clone https://github.com/your-username/ingreasy.git
cd ingreasy
```

---

### 2️⃣ Setup Frontend
```bash
cd client
npm install
npm run dev
```

---

### 3️⃣ Setup Backend
```bash
cd server
npm install
node server.js
```

---

## 🚨 API URL Configuration

The frontend is currently set up to talk to:

```
https://ingreasy-backend.onrender.com/api
```

If you want to run the backend locally:

1. In `client/.env`, update:
```env
VITE_API_BASE_URL=http://localhost:4000/api
```

2. In your frontend code, make all API calls using:
```js
axios.get/post(`${import.meta.env.VITE_API_BASE_URL}/...`);
```

✅ This allows smooth switching between production and development.


## ⚠️ API Usage Limits

- OCR.Space free tier allows limited requests.  
- Rate limit: ~1–2 requests/second  
- Exceeding limits may cause empty OCR results

🧠 Add throttling or fallback logic to avoid delays.

---

## 🧪 Testing

- Upload a grocery item image.
- See OCR-extracted ingredients.
- Generate recipe via Gemini.
- View and interact with steps.
- Download as PDF.
- Access recent and historical recipes.

---

## 📩 Contact

- 📧 Email: jimil4117@gmail.com  
- 💻 GitHub: [https://github.com/jimil222](https://github.com/jimil222)  
- 🔗 LinkedIn: [https://linkedin.com/in/jimil-v-soni](https://linkedin.com/in/jimil-v-soni)

---

## 📝 License

This project is licensed under the MIT License.
