import mongoose from "mongoose"

const scanSchema = new mongoose.Schema({
  userId: {
    type: String,
    required: true,
  },
  imageUrl: {
    type: String,
  },
  detectedText: {
    type: String, // Raw OCR text extracted from the image
  },
  ingredients: {
    type: [String], // Array of ingredients parsed from text
    default: [],
  },
  recipe: {
    type: String, // Final AI-generated recipe
    required: true,
  },
}, { timestamps: true })

export default mongoose.model("Scan", scanSchema)
