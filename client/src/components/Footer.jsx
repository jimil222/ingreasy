import { Heart, ChefHat, Github, Twitter, Instagram, Mail } from "lucide-react"

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-16 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-4 gap-8 mb-12">
          <div className="md:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <ChefHat className="w-8 h-8 text-orange-500" />
              <h3 className="text-2xl font-bold text-orange-500">Ingreasy</h3>
            </div>
            <p className="text-gray-300 mb-6 max-w-md">
              Transform your cooking with AI-powered recipe generation. Discover endless possibilities.
            </p>
            <div className="flex space-x-4">
              <a
                href="#"
                className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-orange  -500 transition-colors"
              >
                <Twitter className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-orange  -500 transition-colors"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-orange  -500 transition-colors"
              >
                <Github className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-orange  -500 transition-colors"
              >
                <Mail className="w-5 h-5" />
              </a>
            </div>
          </div> 
        </div>
        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row items-center justify-between">
          <div className="flex items-center space-x-2 text-gray-300 mb-4 md:mb-0">
            <span>Made with</span>
            <Heart className="w-4 h-4 text-orange-400" />
            <span>
              by <span className="text-orange-400 font-semibold">Jimil</span> | Ingreasy 2025
            </span>
          </div>
          <div className="text-gray-400 text-sm">© 2025 Ingreasy. All rights reserved.</div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
