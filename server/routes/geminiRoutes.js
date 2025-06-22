import express from "express"
import { generateRecipe } from "../controllers/geminiController.js"

const router = express.Router()

router.post("/generate-recipe", generateRecipe)

export default router
