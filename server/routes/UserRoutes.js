import express from "express"
import { saveUser } from "../controllers/userController.js"
import authUser from "../middleware/authUser.js"

const router = express.Router()

router.post("/save",authUser, saveUser)

export default router
