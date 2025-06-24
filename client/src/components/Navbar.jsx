  // src/components/Navbar.jsx
  import { useClerk, useUser, UserButton } from "@clerk/clerk-react"
  import { useNavigate } from "react-router-dom"
  import { ChefHat } from "lucide-react"
  import { useState, useEffect } from "react"

  const Navbar = () => {
    const { openSignIn } = useClerk()
    const { isSignedIn, user } = useUser()
    const navigate = useNavigate()

    const [isScrolled, setIsScrolled] = useState(false)

    useEffect(() => {
      const handleScroll = () => {
        setIsScrolled(window.scrollY > 20)
      }
      window.addEventListener("scroll", handleScroll)
      return () => window.removeEventListener("scroll", handleScroll)
    }, [])

    return (
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? "bg-white/90 backdrop-blur-md shadow-lg border-b border-gray-200/20" : "bg-transparent"
          }`}
      >
        <div className="max-w-[95%] mx-auto py-4 flex justify-between items-center">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <ChefHat className="w-8 h-8 text-orange-500" />
            <h1 className="text-2xl font-bold bg-gradient-to-r from-orange-500 to-orange-600 bg-clip-text text-transparent">
              Ingreasy
            </h1>

            {/* bg-gradient-to-r from-orange-500 to-orange-600 */}
          </div>

          {/* Right Side */}
          <div className="flex items-center gap-4">
            {isSignedIn ? (
              <>
                <p className="hidden sm:block text-orange-600 font-medium bg-orange-100 p-2 rounded-md">Hi, {user.fullName}</p>
                <UserButton afterSignOutUrl="/" />
              </>
            ) : (
              <button
                onClick={() => openSignIn()}
                className="px-5 py-2 bg-gradient-to-r from-orange-500 to-orange-600 text-white rounded-full font-semibold hover:from-orange-600 hover:to-orange-700 transition"
              >
                Get Started
              </button>

            )}
          </div>
        </div>
      </nav>
    )
  }

  export default Navbar
