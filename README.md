# 🥘 Ingreasy – AI-Powered Recipe Generator

Ingreasy is a full-stack AI-based web application that generates recipes based on grocery items using image upload and Gemini API. It features authentication with Clerk, PDF recipe downloads, recipe history, and a modern responsive UI built with React and TailwindCSS.

---

## ✨ Features

- Upload grocery item images and extract ingredients using OCR.
- Generate creative recipes using Google's Gemini API.
- Secure authentication with Clerk.
- View and manage recipe history.
- Download recipes as beautiful PDFs.
- Responsive design using Tailwind CSS and Lucide icons.

---

## 🛠️ Tech Stack

- **Frontend:** ReactJS, TailwindCSS, Clerk, Vite, Lucide Icons
- **Backend:** NodeJS, ExpressJS, MongoDB, Gemini API, OCR.space API
- **Auth:** Clerk (JWT protected routes)
- **PDF Download:** jspdf

---

## 🔐 Environment Variables

### 📦 Client Side (`.env`)
```
VITE_CLERK_PUBLISHABLE_KEY=your_clerk_frontend_key
```

### 💻 Server Side (`.env`)
```
MONGODB_URI=your_mongodb_connection_string
PORT=4000
OCR_API_KEY=your_ocr_api_key
CLERK_JWT_SECRET=your_clerk_backend_jwt_secret
GEMINI_API_KEY=your_google_gemini_api_key
```

---

## 📁 Folder Structure

```
client/                 → Frontend (React + Vite)
├── public/             → Static assets
├── src/                → Source files
│   ├── assets/         → Images and icons
│   ├── components/     → Reusable React components
│   ├── context/        → React Context for global state (e.g., recipes)
│   ├── lib/            → External libraries/helpers (if any)
│   ├── pages/          → Page-level components
│   ├── utils/          → Utility functions (e.g., PDF helpers)
│   ├── App.jsx         → Root component
│   ├── main.jsx        → App entry point
│   ├── App.css         → Global styles
│   └── index.css       → Tailwind base styles
├── .env                → Client environment variables
├── index.html          → HTML entry point
├── package.json        → Frontend dependencies
└── vite.config.js      → Vite configuration

server/                 → Backend (Node.js + Express)
├── configs/            → MongoDB & Clerk config
├── controllers/        → Route handler logic
├── middleware/         → Clerk authentication middleware
├── models/             → Mongoose schemas (User, Recipe)
├── routes/             → Express routes for API
├── uploads/            → Uploaded image storage (via multer)
├── .env                → Server environment variables
├── server.js           → Express entry point
└── package.json        → Backend dependencies
```


---

## 🚀 Getting Started

### 🔧 1. Clone the repository
```bash
git clone https://github.com/your-username/ingreasy.git
cd ingreasy
```

### 📦 2. Setup Client
```bash
cd client
npm install
# Create .env file and add VITE_CLERK_PUBLISHABLE_KEY
npm run dev
```

### 🖥️ 3. Setup Server
```bash
cd server
npm install
# Create .env file and add server-side variables
npm run dev
```

---

## 🧪 Testing

- Upload a grocery item image
- Get recipe suggestions
- Mark steps done
- Download recipe as PDF
- View recently generated recipe in Recents tab
- View history in the History tab

---

## 🎥 Demo

Click **"View Demo"** on the landing page to watch the demo video.

---

## 📩 Contact

- 📧 Email: jimil4117@gmail.com
- 🔗 LinkedIn: [https://www.linkedin.com/in/jimil-v-soni/](https://www.linkedin.com/in/jimil-v-soni/)
- 💻 GitHub: [https://github.com/jimil222](https://github.com/jimil222)
