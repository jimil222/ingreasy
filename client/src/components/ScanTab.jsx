  import { useRef, useState } from "react"
  import { Camera, Sparkles, Upload } from "lucide-react"
  import { useNavigate } from "react-router-dom"
  import axios from "axios"
  import { useAuth } from "@clerk/clerk-react"
  import { useRecipe } from "../context/RecipeContext"

  const ScanTab = () => {
    const fileInputRef = useRef(null)
    const [selectedFile, setSelectedFile] = useState(null)
    const [isLoading, setIsLoading] = useState(false)
    const [extractedText, setExtractedText] = useState("")
    const { getToken } = useAuth()
    const {setRecipes} = useRecipe()
    const navigate = useNavigate()

    const handleFileChange = (e) => {
      const file = e.target.files[0]
      if (file) setSelectedFile(file)
    }

    const handleUploadClick = () => {
      fileInputRef.current.click()
    }

    const handleGenerate = async () => {
      if (!selectedFile) return alert("Please upload an image first!")

      try {
        setIsLoading(true)
        setExtractedText("")

        const formData = new FormData()
        formData.append("image", selectedFile)

        const token = await getToken({ template: "backend-auth" })

        const response = await axios.post(
          "http://localhost:4000/api/ocr/extract",
          formData,
          {
            headers: {
              Authorization: `Bearer ${token}`,
              "Content-Type": "multipart/form-data"
            }
          }
        )

        const { resultText } = response.data
        setExtractedText(resultText)
        console.log("Sending text to Gemini:", resultText)
        // Gemini step (get 3 recipes)
        const geminiResponse = await axios.post(
          "http://localhost:4000/api/gemini/generate-recipe",
          { resultText },
          {
            headers: {
              Authorization: `Bearer ${token}`
            }
          }
        )

        setRecipes(geminiResponse.data);
        localStorage.setItem("latestRecipe", JSON.stringify(geminiResponse.data));
        console.log(geminiResponse.data);
        navigate('/dashboard/results')
        // console.log(recipes);
        

      } catch (err) {
        console.error("Error generating recipes:", err.response?.data || err.message)
        alert("Failed to generate recipes")
      } finally {
        setIsLoading(false)
      }
    }

    return (
      <div className="p-4 lg:p-8 pl-16 lg:pl-8">
        <h1 className="text-2xl text-center lg:text-3xl font-bold text-gray-800 mb-6 lg:mb-8">Scan Grocery Item (Labeled) </h1>

        <div className="max-w-2xl mx-auto">
          <div className="bg-white rounded-2xl shadow-lg p-6 lg:p-8 text-center">
            <div className="w-20 h-20 lg:w-24 lg:h-24 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-6">
              <Camera className="w-10 h-10 lg:w-12 lg:h-12 text-orange-500" />
            </div>

            <h2 className="text-xl lg:text-2xl font-semibold text-gray-800 mb-4">Upload a Labeled Grocery Item Only</h2>
            <p className="text-gray-600 mb-6 lg:mb-8 text-sm lg:text-base">
              Upload an image of your grocery item to get AI-generated recipes
            </p>

            <input
              type="file"
              accept="image/*"
              ref={fileInputRef}
              onChange={handleFileChange}
              style={{ display: "none" }}
            />

            <div className="grid grid-cols-1 gap-4 mb-6 lg:mb-8">
              <button
                onClick={handleUploadClick}
                className="flex items-center justify-center space-x-3 p-4 border-2 border-dashed border-orange-300 rounded-lg hover:border-orange-500 hover:bg-orange-50 transition-colors"
              >
                <Upload className="w-5 h-5 lg:w-6 lg:h-6 text-orange-500" />
                <span className="font-medium text-gray-700 text-sm lg:text-base">Upload Image</span>
              </button>

              <button
                onClick={handleGenerate}
                disabled={isLoading}
                className="flex items-center justify-center space-x-3 p-4 border-2 border-dashed border-orange-300 rounded-lg hover:border-orange-500 hover:bg-orange-50 transition-colors disabled:opacity-50"
              >
                <Sparkles className="w-5 h-5 lg:w-6 lg:h-6 text-orange-500 animate-spin" style={{ display: isLoading ? "inline" : "none" }} />
                <span className="font-medium text-gray-700 text-sm lg:text-base">
                  {isLoading ? "Analyzing..." : "Generate Recipes"}
                </span>
              </button>
            </div>

            <div className="text-xs lg:text-sm text-gray-500">Supported formats: JPG, PNG, WEBP (Max 5MB)</div>
          </div>

          {selectedFile && (
            <div className="mt-6 lg:mt-8 bg-gradient-to-r from-orange-50 to-orange-100 rounded-xl p-4 lg:p-6">
              <h3 className="font-semibold text-gray-800 mb-3 text-sm lg:text-base">Uploaded Product</h3>
              <div className="space-y-2 text-xs lg:text-sm text-gray-600">
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-orange-500 rounded-full flex-shrink-0"></div>
                  <span>{selectedFile.name}</span>
                </div>
                {extractedText && (
                  <div className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-orange-500 rounded-full flex-shrink-0"></div>
                    <span>Detected Items: {extractedText}</span>
                  </div>
                )}
              </div>
            </div>
          )}
        </div>
      </div>
    )
  }

  export default ScanTab
