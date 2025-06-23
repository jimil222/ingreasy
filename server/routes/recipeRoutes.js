import express from "express"
import authUser from '../middleware/authUser.js';
import { saveRecipes } from "../controllers/recipeController.js"


const router = express.Router()

router.post('/save-recipe',authUser,saveRecipes)

export default router