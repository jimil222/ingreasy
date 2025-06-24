import Recipe from "../models/recipeModel.js"

export const saveRecipes = async (req, res) => {
    try {
        const userId = req.user.clerkId
        const { detectedText, recipes } = req.body
        if (!Array.isArray(recipes)) {
            return res.status(400).json({ success: false, message: "Invalid recipe format" })
        }
        const dataToSave = recipes.map(recipe => ({
            userId,
            detectedText,
            title:recipe.title,
            ingredients: recipe.ingredients,
            steps: recipe.steps,
            prepTime: recipe.prepTime,
            cookTime: recipe.cookTime,
            servings: recipe.servings,
        }))
        await Recipe.insertMany(dataToSave)
        res.status(200).json({ success: true, message: "Recipe saved successfully" })
    } catch (error) {
        console.error("Error saving recipes:", error.message)
        res.status(500).json({ success: false, message: "Failed to save recipes" })
    }
}

export const getUserRecipes = async (req, res) => {
  try {
    const userId = req.user.clerkId
    const recipes = await Recipe.find({ userId }).sort({ createdAt: -1 })
    res.status(200).json({ success: true, recipes })
  } catch (error) {
    console.error("Error fetching recipes:", error.message)
    res.status(500).json({ success: false, message: "Failed to fetch recipes" })
  }
}
