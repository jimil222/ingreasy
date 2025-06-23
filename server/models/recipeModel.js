import mongoose from "mongoose"

const recipeSchema = new mongoose.Schema({
  userId: { type: String, required: true },
  detectedText: String,
  title: String,
  ingredients: [String],
  steps: [String],
  prepTime: String,
  cookTime: String,
  servings: String,
}, { timestamps: true })

export default mongoose.model("Recipe", recipeSchema)
