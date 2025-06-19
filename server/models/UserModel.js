// server/models/userModel.js
import mongoose from "mongoose"

const userSchema = new mongoose.Schema({
  clerkId: { type: String, required: true, unique: true },
  email: String,
  firstName: String,
  lastName: String,
  photo: String,
}, { timestamps: true })

export default mongoose.model("User", userSchema)
