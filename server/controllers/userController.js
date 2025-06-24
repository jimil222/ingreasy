import userModel from "../models/UserModel.js"
import Recipe from "../models/recipeModel.js"


export const saveUser = async (req, res) => {
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
}


//Function for user profile
export const getProfileData = async (req, res) => {
  try {
    const userId = req.user.clerkId

    const user = await userModel.findOne({ clerkId: userId })
    if (!user) return res.status(404).json({ success: false, message: "User not found" })

    const recipeCount = await Recipe.countDocuments({ userId })

    const firstRecipe = await Recipe.findOne({ userId }).sort({ createdAt: 1 })
    const today = new Date()
    const daysActive = firstRecipe
      ? Math.ceil((today - firstRecipe.createdAt) / (1000 * 60 * 60 * 24))
      : 0
    const joinedAt = "2025-06-21T06:59:52.151Z"
    const dateOnly = joinedAt.split("T")[0]
    console.log(dateOnly)

    res.status(200).json({
      success: true,
      profile: {
        email: user.email,
        name: `${user.firstName} ${user.lastName}`,
        joinedAt: dateOnly,
        recipeCount,
        daysActive,
        photo:user.photo
      },
    })
  } catch (err) {
    console.error("Profile fetch error:", err)
    res.status(500).json({ success: false, message: "Failed to fetch profile data" })
  }
}
