import { Heart, ChefHat, Github, Twitter, Instagram, Mail, Linkedin } from "lucide-react"
import { FaLinkedin } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa";
import { SiGmail } from "react-icons/si";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-12 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-4 gap-8 mb-12">
          <div className="md:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <ChefHat className="w-8 h-8 text-orange-500" />
              <h3 className="text-2xl font-bold text-orange-500">Ingreasy</h3>
            </div>
            <p className="text-gray-300 mb-6 max-w-md">
              Make cooking easier with AI. Get new recipe ideas in seconds.
            </p>
            <div className="flex space-x-4">
              <a
                href="https://www.linkedin.com/in/jimil-v-soni/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-orange-500 transition-colors"
              >
                <FaLinkedin className="w-5 h-5" />
              </a>

              <a
                href="https://github.com/jimil222"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-orange-500 transition-colors"
              >
                <FaGithub className="w-5 h-5" />
              </a>

              <a
                href="https://mail.google.com/mail/?view=cm&fs=1&to=jimil4117@gmail.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-orange-500 transition-colors"
              >
                <SiGmail className="w-5 h-5" />
              </a>

            </div>
          </div>
        </div>
        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row items-center justify-between">
          <div className="flex items-center space-x-2 text-gray-300 mb-4 md:mb-0">
            <span>Made with</span>
            <Heart className="w-4 h-4 text-orange-400" strokeWidth={2.8} />
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
