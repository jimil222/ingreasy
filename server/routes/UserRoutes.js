import express from "express"
import { saveUser,getProfileData } from "../controllers/userController.js"
import authUser from "../middleware/authUser.js"

const router = express.Router()

router.post("/save",authUser, saveUser)
router.get("/profile", authUser, getProfileData)


export default router
