import jsPDF from "jspdf"
import "jspdf-autotable"

export const downloadRecipeAsPDF = (recipe) => {
  const doc = new jsPDF()

  doc.setFontSize(18)
  doc.text(recipe.title, 20, 20)

  doc.setFontSize(12)
  doc.text(`Prep Time: ${recipe.prepTime}`, 20, 30)
  doc.text(`Cook Time: ${recipe.cookTime}`, 20, 37)
  doc.text(`Servings: ${recipe.servings}`, 20, 44)

  doc.setFontSize(14)
  doc.text("Ingredients:", 20, 55)
  doc.setFontSize(12)
  let y = 63
  recipe.ingredients.forEach((item) => {
    doc.text(`- ${item}`, 25, y)
    y += 7
  })

  y += 10
  doc.setFontSize(14)
  doc.text("Instructions:", 20, y)
  y += 8
  doc.setFontSize(12)
  recipe.steps.forEach((step, i) => {
    doc.text(`${i + 1}. ${step}`, 25, y)
    y += 7
    if (y > 280) {
      doc.addPage()
      y = 20
    }
  })

  doc.save(`${recipe.title.replace(/\s+/g, "_")}_Recipe.pdf`)
}
