import vision from "@google-cloud/vision"
import dotenv from "dotenv"

dotenv.config()

const client = new vision.ImageAnnotatorClient({
  keyFilename: process.env.GOOGLE_APPLICATION_CREDENTIALS,
})

export const extractTextFromImage = async (req, res) => {
  try {
    console.log("OCR request received using Google Vision API")

    if (!req.file) {
      console.log("No file received")
      return res.status(400).json({ success: false, message: "No image uploaded" })
    }

    const [result] = await client.textDetection({
      image: { content: req.file.buffer },
    })

    const detections = result.textAnnotations

    if (!detections || detections.length === 0) {
      console.log("No text detected")
      return res.status(500).json({ success: false, message: "No text detected" })
    }

    const resultText = detections[0].description
    console.log("Text extracted successfully:", resultText)

    res.json({ success: true, resultText })
  } catch (error) {
    console.error("OCR error:", error.message)
    res.status(500).json({ success: false, message: "OCR failed", error: error.message })
  }
}
