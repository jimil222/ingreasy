import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import connectDB from './configs/mongodb.js';
import userRouter from './routes/UserRoutes.js'
import ocrRouter from './routes/ocrRoutes.js'
import geminiRoutes from './routes/geminiRoutes.js'
import recipeRoutes from './routes/recipeRoutes.js'

dotenv.config();
const app = express();
app.use(cors());
app.use(express.json());
app.use('/api/user', userRouter)
app.use('/api/ocr',ocrRouter)
app.use('/api/gemini',geminiRoutes)
app.use('/api/recipes',recipeRoutes)

await connectDB();

app.get("/", (req, res) => {
  res.send("Ingreasy API is running...");
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
