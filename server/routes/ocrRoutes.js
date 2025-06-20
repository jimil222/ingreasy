import express from 'express';
import upload from '../middleware/multer.js';
import { extractTextFromImage } from '../controllers/ocrController.js';

const router = express.Router();

router.post('/extract', upload.single('image'), extractTextFromImage);

export default router;
