import { Sparkles, ArrowRight } from "lucide-react"

const HeroSection = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-emerald-900 to-teal-800 text-white flex items-center justify-center px-6">
      <div className="text-center max-w-4xl">
        <div className="inline-flex items-center space-x-2 bg-white/10 rounded-full px-4 py-2 mb-8">
          <Sparkles className="w-4 h-4 text-yellow-400" />
          <span className="text-sm">AI-Powered Recipe Generation</span>
        </div>

        <h1 className="text-5xl md:text-7xl font-bold mb-6">
          <span className="block">Scan.</span>
          <span className="block text-orange-400">Cook.</span>
          <span className="block">Enjoy.</span>
        </h1>

        <p className="text-xl mb-12 text-white/80 max-w-2xl mx-auto">
          Transform your groceries into delicious recipes using AI. Just snap a photo and our system will turn them into tasty dishes.
        </p>

        <button className="px-8 py-4 bg-gradient-to-r from-orange-500 to-orange-600 text-white rounded-full font-semibold text-lg hover:shadow-xl transition-all flex items-center space-x-2 mx-auto">
          <span>Try It Now</span>
          <ArrowRight className="w-5 h-5" />
        </button>

        {/* Our Goal label */}
        <div className="mt-20 mb-4">
          <span className="text-white/70 text-sm uppercase tracking-widest">Our Goal</span>
        </div>

        {/* Metrics */}
        <div className="grid grid-cols-3 gap-8 max-w-lg mx-auto">
          <div className="text-center">
            <div className="text-3xl font-bold">1K+</div>
            <div className="text-white/60 text-sm">Recipes</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold">2K+</div>
            <div className="text-white/60 text-sm">Users</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold">90%</div>
            <div className="text-white/60 text-sm">Accuracy</div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default HeroSection
