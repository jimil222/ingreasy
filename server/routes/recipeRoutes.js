import express from "express"
import authUser from '../middleware/authUser.js';
import { saveRecipes,getUserRecipes } from "../controllers/recipeController.js"


const router = express.Router()

router.post('/save-recipe',authUser,saveRecipes)
router.get("/history", authUser, getUserRecipes)

export default router