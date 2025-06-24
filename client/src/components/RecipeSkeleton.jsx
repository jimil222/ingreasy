const RecipeSkeleton = () => {
  return (
    <div className="bg-white rounded-2xl shadow animate-pulse p-6 h-[450px] flex flex-col justify-between">
      <div className="bg-gray-300 h-6 w-3/4 mb-4 rounded"></div>
      <div className="space-y-3 mb-6">
        <div className="bg-gray-200 h-4 w-2/3 rounded"></div>
        <div className="bg-gray-200 h-4 w-5/6 rounded"></div>
        <div className="bg-gray-200 h-4 w-1/2 rounded"></div>
      </div>
      <div className="bg-gray-300 h-10 w-full rounded"></div>
    </div>
  )
}

export default RecipeSkeleton
