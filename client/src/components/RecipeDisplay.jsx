import { Clock, Users, ChefHat, CheckCircle, DownloadIcon } from "lucide-react"
import { useState } from "react"
import { useRecipe } from "../context/RecipeContext"
import { downloadRecipeAsPDF } from "../utils/pdfHelper"
import RecipeSkeleton from "./RecipeSkeleton"
import { useEffect } from "react"


const RecipeDisplay = () => {
  const { recipes,loading } = useRecipe()
  const [checkedSteps, setCheckedSteps] = useState({})

  const handleDownload = (recipe) => {
    downloadRecipeAsPDF(recipe)
  }

  // For displaying only time and avoiding rest
  const cleanTime = (time) => {
    if (!time) return ""
    const cleaned = time.replace(/\s*\(.*?\)/g, "").trim()
    return cleaned === "0" || cleaned === "0 minutes" ? "N/A" : cleaned
  }

  const toggleStep = (recipeIndex, stepIndex) => {
    const key = `${recipeIndex}-${stepIndex}`
    setCheckedSteps((prev) => ({
      ...prev,
      [key]: !prev[key],
    }))
  }

  if (!recipes || recipes.length === 0) {
    return (
      <div className="text-center py-12">
        <ChefHat className="w-16 h-16 text-gray-400 mx-auto mb-4" />
        <h3 className="text-xl font-semibold text-gray-600 mb-2">No Recipes Found</h3>
        <p className="text-gray-500">Try scanning some ingredients to get recipe suggestions</p>
      </div>
    )
  }

  return (
    <div className="p-4 lg:p-8 pl-16 lg:pl-8">
      <div className="mb-8">
        <h1 className="text-center text-2xl lg:text-3xl font-bold text-gray-800 mb-2">Recipe Suggestions</h1>
        <p className="text-center text-gray-600">Here are some delicious recipes based on your grocery item</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6 max-w-7xl mx-auto">
        {
          loading
            ? Array.from({ length: 3 }).map((_, index) => (
                <RecipeSkeleton key={index}/>
            )) :
            recipes.map((recipe, recipeIndex) => (
              <div
                key={recipeIndex}
                className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-shadow overflow-hidden flex flex-col"
              >
                {/* Recipe Header */}
                <div className="bg-gradient-to-r from-orange-500 to-orange-600 p-6 text-white">
                  <h2 className="text-xl lg:text-2xl font-bold mb-4">{recipe.title}</h2>

                  <div className="flex items-center justify-between text-sm">
                    <div className="flex items-center space-x-1">
                      <Clock className="w-4 h-4" />
                      <span>Prep: {cleanTime(recipe.prepTime)}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Clock className="w-4 h-4" />
                      <span>Cook: {cleanTime(recipe.cookTime)}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Users className="w-4 h-4" />
                      <span>{recipe.servings} servings</span>
                    </div>
                  </div>
                </div>

                {/* Recipe Content */}
                <div className="p-6 flex flex-col h-full">
                  {/* Ingredients Section */}
                  <div className="mb-6">
                    <h3 className="text-lg font-semibold text-gray-800 mb-3 flex items-center">
                      <ChefHat className="w-5 h-5 text-orange-500 mr-2" />
                      Ingredients
                    </h3>
                    <ul className="space-y-2">
                      {recipe.ingredients.map((ingredient, index) => (
                        <li key={index} className="flex items-start space-x-2 text-sm text-gray-700">
                          <div className="w-2 h-2 bg-orange-500 rounded-full mt-2 flex-shrink-0"></div>
                          <span>{ingredient}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Steps Section */}
                  <div className="mb-6">
                    <h3 className="text-lg font-semibold text-gray-800 mb-3">Instructions</h3>
                    <ol className="space-y-3">
                      {recipe.steps.map((step, stepIndex) => {
                        const isChecked = checkedSteps[`${recipeIndex}-${stepIndex}`]
                        return (
                          <li key={stepIndex} className="flex items-start space-x-3">
                            <button
                              onClick={() => toggleStep(recipeIndex, stepIndex)}
                              className={`flex-shrink-0 w-6 h-6 rounded-full border-2 flex items-center justify-center transition-colors ${isChecked
                                ? "bg-green-500 border-green-500 text-white"
                                : "border-gray-300 hover:border-orange-500"
                                }`}
                            >
                              {isChecked ? (
                                <CheckCircle className="w-4 h-4" />
                              ) : (
                                <span className="text-xs font-semibold text-gray-500">{stepIndex + 1}</span>
                              )}
                            </button>
                            <span
                              className={`text-sm text-gray-700 leading-relaxed ${isChecked ? "line-through text-gray-400" : ""
                                }`}
                            >
                              {step}
                            </span>
                          </li>
                        )
                      })}
                    </ol>
                  </div>

                  <div className="pt-4 mt-auto flex justify-center">
                    <button
                      onClick={() => handleDownload(recipe)}
                      className="text-center w-[90%] px-4 py-2 bg-orange-500 text-white rounded-lg hover:bg-orange-600 transition-colors text-sm font-medium flex items-center justify-center space-x-2"
                    >
                      <span className="flex items-center justify-center gap-2">
                        Download
                        <DownloadIcon className="w-4 h-4" strokeWidth={2.5} />
                      </span>
                    </button>
                  </div>

                </div>
              </div>
            ))
        }
      </div>
    </div>
  )
}

export default RecipeDisplay
