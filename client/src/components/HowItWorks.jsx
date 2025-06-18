import { Camera, Brain, ChefHat } from "lucide-react"

const steps = [
  {
    icon: Camera,
    title: "Upload Image",
    desc: "Snap a picture of your grocery item or scan the barcode.",
    color: "bg-blue-500",
  },
  {
    icon: Brain,
    title: "AI Analysis",
    desc: "Gemini Vision AI analyzes and extracts ingredients instantly.",
    color: "bg-purple-500",
  },
  {
    icon: ChefHat,
    title: "Get Recipes",
    desc: "Receive personalized recipes tailored to your ingredients.",
    color: "bg-orange-500",
  },
]

const HowItWorks = () => {
  return (
    <section className="py-20 px-6 bg-gray-50">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-4xl font-bold text-gray-900 mb-6">
          How It <span className="text-emerald-600">Works</span>
        </h2>
        <p className="text-xl text-gray-600 mb-16">Three simple steps to amazing recipes</p>

        <div className="grid md:grid-cols-3 gap-8">
          {steps.map((step, i) => {
            const Icon = step.icon
            return (
              <div key={i} className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow">
                <div className="relative mb-6">
                  <div className="absolute -top-2 -left-2 w-6 h-6 bg-emerald-500 text-white rounded-full flex items-center justify-center text-sm font-bold">
                    {i + 1}
                  </div>
                  <div className={`w-16 h-16 ${step.color} rounded-2xl flex items-center justify-center`}>
                    <Icon className="w-8 h-8 text-white" />
                  </div>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">{step.title}</h3>
                <p className="text-gray-600">{step.desc}</p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export default HowItWorks
