import express from "express"
import { saveUser } from "../controllers/userController.js"

const router = express.Router()

router.post("/save", saveUser)

export default router
