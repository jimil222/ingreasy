import axios from 'axios'
import FormData from 'form-data'
import dotenv from 'dotenv'

dotenv.config()

export const extractTextFromImage = async (req, res) => {
  try {
    console.log("OCR request received")

    if (!req.file) {
      console.log("No file received")
      return res.status(400).json({ success: false, message: "No image uploaded" })
    }

    const formData = new FormData()
    formData.append('apikey', process.env.OCR_API_KEY)
    formData.append('language', 'eng')
    formData.append('isOverlayRequired', 'false')
    formData.append('file', req.file.buffer, {
      filename: req.file.originalname,
      contentType: req.file.mimetype,
    })

    console.log("Sending request to OCR.Space API...")

    const response = await axios.post('https://api.ocr.space/parse/image', formData, {
      headers: formData.getHeaders(),
    })

    const parsedResults = response.data.ParsedResults

    if (!parsedResults || parsedResults.length === 0) {
      console.log("OCR.Space returned no results")
      return res.status(500).json({ success: false, message: "OCR failed to extract text" })
    }

    const resultText = parsedResults[0].ParsedText
    console.log("Text extracted successfully")
    console.log("Extracted Text:", resultText)

    res.json({ success: true, resultText })
  } catch (error) {
    console.error("OCR error:", error.message)
    res.status(500).json({ success: false, message: "OCR failed", error: error.message })
  }
}
