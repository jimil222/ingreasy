import { GoogleGenerativeAI } from "@google/generative-ai"
import dotenv from "dotenv"
dotenv.config()

const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY)

export const generateRecipe = async (req, res) => {
  try {
    const { resultText } = req.body
    if (!resultText) return res.status(400).json({ error: "Missing 'text' in request body" })

    const model = genAI.getGenerativeModel({
      model: "gemini-2.0-flash"
    })

    const prompt = `
You are a helpful recipe assistant.

I will give you raw text from a grocery product image. Identify the most relevant food product from it and generate 3 creative recipes.

Important: Return ONLY an array of 3 JSON recipe objects. DO NOT add any explanation, markdown, or text around it.

Each object must be in this format:
{
  "title": "",
  "ingredients": [],
  "steps": [],
  "prepTime": "",
  "cookTime": "",
  "servings": ""
}

Raw Text: """${resultText}"""
`

    const result = await model.generateContent(prompt)
    const response = await result.response
    const content = response.text()

    if (!content || !content.trim()) {
      console.error("Gemini returned an empty response")
      return res.status(500).json({ error: "Gemini returned empty response" })
    }

    console.log("Gemini Raw Output:\n", content)

    const match = content.match(/\[\s*{[\s\S]*?}\s*]/)
    if (!match) {
      console.error("No JSON array found. Raw output:\n", content)
      return res.status(500).json({ error: "Failed to parse recipes", raw: content })
    }

    const recipes = JSON.parse(match[0])
    if (!Array.isArray(recipes)) {
      return res.status(500).json({ error: "Invalid format: not an array", raw: content })
    }

    res.status(200).json(recipes)

  } catch (err) {
    console.error("Gemini error:", err)
    res.status(500).json({
      error: "Recipes cannot be generated",
      message: err.message
    })
  }
}
