import { createContext, useState, useContext, useEffect } from "react"

const RecipeContext = createContext()

export const useRecipe = () => useContext(RecipeContext)

export const RecipeProvider = ({ children }) => {
  const [recipes, setRecipes] = useState([])

  useEffect(() => {
    const stored = localStorage.getItem("latestRecipe");
    if (stored) {
      setRecipes(JSON.parse(stored));
    }
  }, []);
  

  return (
    <RecipeContext.Provider value={{ recipes, setRecipes }}>
      {children}
    </RecipeContext.Provider>
  )
}
