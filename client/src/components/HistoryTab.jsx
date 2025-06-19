import { Clock, ChefHat, Star } from "lucide-react"

const HistoryTab = () => {
  const historyItems = [
    {
      id: 1,
      title: "Chicken Stir Fry",
      ingredients: ["Chicken", "Bell Peppers", "Onions", "Soy Sauce"],
      date: "2 hours ago",
      rating: 5,
    },
    {
      id: 2,
      title: "Vegetable Pasta",
      ingredients: ["Pasta", "Tomatoes", "Basil", "Garlic"],
      date: "1 day ago",
      rating: 4,
    },
    {
      id: 3,
      title: "Beef Tacos",
      ingredients: ["Ground Beef", "Tortillas", "Cheese", "Lettuce"],
      date: "3 days ago",
      rating: 5,
    },
  ]

  return (
    <div className="p-4 lg:p-8 pl-16 lg:pl-8">
      <h1 className="text-center text-2xl lg:text-3xl font-bold text-gray-800 mb-6 lg:mb-8">Recipe History</h1>

      <div className="max-w-4xl mx-auto">
        <div className="mb-6 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <p className="text-gray-600 text-sm lg:text-base">Your recent recipe generations</p>
          <button className="text-orange-500 hover:text-orange-600 font-medium text-sm lg:text-base self-start sm:self-auto">
            Clear All
          </button>
        </div>

        <div className="space-y-4">
          {historyItems.map((item) => (
            <div key={item.id} className="bg-white rounded-xl shadow-md p-4 lg:p-6 hover:shadow-lg transition-shadow">
              <div className="flex flex-col lg:flex-row lg:items-start justify-between gap-4">
                <div className="flex-1">
                  <div className="flex items-center space-x-3 mb-3">
                    <div className="w-10 h-10 lg:w-12 lg:h-12 bg-orange-100 rounded-lg flex items-center justify-center flex-shrink-0">
                      <ChefHat className="w-5 h-5 lg:w-6 lg:h-6 text-orange-500" />
                    </div>
                    <div className="min-w-0 flex-1">
                      <h3 className="text-lg lg:text-xl font-semibold text-gray-800 truncate">{item.title}</h3>
                      <div className="flex items-center space-x-2 text-xs lg:text-sm text-gray-500">
                        <Clock className="w-3 h-3 lg:w-4 lg:h-4 flex-shrink-0" />
                        <span>{item.date}</span>
                      </div>
                    </div>
                  </div>

                  <div className="mb-4">
                    <p className="text-xs lg:text-sm text-gray-600 mb-2">Ingredients used:</p>
                    <div className="flex flex-wrap gap-2">
                      {item.ingredients.map((ingredient, index) => (
                        <span
                          key={index}
                          className="px-2 lg:px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-xs lg:text-sm"
                        >
                          {ingredient}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="flex items-center space-x-1">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className={`w-3 h-3 lg:w-4 lg:h-4 ${
                          i < item.rating ? "text-yellow-400 fill-current" : "text-gray-300"
                        }`}
                      />
                    ))}
                    <span className="text-xs lg:text-sm text-gray-600 ml-2">({item.rating}/5)</span>
                  </div>
                </div>

                <button className="px-3 lg:px-4 py-2 bg-orange-500 text-white rounded-lg hover:bg-orange-600 transition-colors text-sm lg:text-base self-start lg:self-auto">
                  View Recipe
                </button>
              </div>
            </div>
          ))}
        </div>

        {historyItems.length === 0 && (
          <div className="text-center py-12">
            <div className="w-20 h-20 lg:w-24 lg:h-24 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <Clock className="w-10 h-10 lg:w-12 lg:h-12 text-gray-400" />
            </div>
            <h3 className="text-lg lg:text-xl font-semibold text-gray-600 mb-2">No History Yet</h3>
            <p className="text-gray-500 text-sm lg:text-base">
              Start scanning ingredients to see your recipe history here
            </p>
          </div>
        )}
      </div>
    </div>
  )
}

export default HistoryTab
