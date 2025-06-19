// server/routes/userRoutes.js
import express from "express"
import userModel from "../models/UserModel.js"

const router = express.Router()

router.post("/save", async (req, res) => {
  const { clerkId, email, firstName, lastName, photo } = req.body

  try {
    if (!clerkId) {
      console.error("Clerk ID missing in request body")
      return res.status(400).json({ success: false, message: "Clerk ID is required" })
    }

    const userExists = await userModel.findOne({ clerkId })
    if (userExists) {
      console.log(`User already exists: ${clerkId}`)
      return res.status(200).json({ success: true, message: "User already exists" })
    }

    await userModel.create({ clerkId, email, firstName, lastName, photo })
    console.log(`New user saved: ${clerkId}`)
    res.status(201).json({ success: true, message: "User saved" })
  } catch (err) {
    console.error("Error saving user:", err.message)
    res.status(500).json({ success: false, message: err.message })
  }
})

export default router
