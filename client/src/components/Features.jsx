import { ArrowRight, Star } from "lucide-react"

const CTASection = () => {
  return (
    <section className="py-20 px-6 bg-gradient-to-br from-emerald-900 to-teal-800 text-white">
      <div className="max-w-4xl mx-auto text-center">
        <div className="inline-flex items-center space-x-2 bg-white/10 rounded-full px-4 py-2 mb-8">
          <Star className="w-4 h-4 text-yellow-400" />
          <span className="text-sm">Join thousands of happy cooks</span>
        </div>

        <h2 className="text-4xl md:text-6xl font-bold mb-6">
          Start your <span className="text-orange-400">smart cooking</span> journey now!
        </h2>

        <p className="text-xl mb-12 text-white/80 max-w-2xl mx-auto">
          Transform the way you cook with AI-powered recipe generation.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
          <button className="px-8 py-4 bg-gradient-to-r from-orange-500 to-orange-600 text-white rounded-full font-semibold text-lg hover:shadow-xl transition-all flex items-center space-x-2 justify-center" onClick={() =>
            window.open(
              "https://drive.google.com/file/d/1TCt7Sr3aG1SRa9jXMSSEcjBo8CrrxzNt/preview",
              "_blank"
            )
          }>
            <span>View demo</span>
            <ArrowRight className="w-5 h-5" />
          </button>
        </div>
      </div>
    </section>
  )
}

export default CTASection
