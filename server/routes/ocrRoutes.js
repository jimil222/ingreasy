import express from 'express';
import upload from '../middleware/multer.js';
import { extractTextFromImage } from '../controllers/ocrController.js';
import authUser from '../middleware/authUser.js';

const router = express.Router();

router.post('/extract',authUser, upload.single('image'), extractTextFromImage);

export default router;
