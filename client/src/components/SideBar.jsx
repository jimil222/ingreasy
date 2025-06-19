import { Camera, History, User, X, Menu } from "lucide-react"

const Sidebar = ({ activeTab, setActiveTab, isMobileMenuOpen, setIsMobileMenuOpen }) => {
  const menuItems = [
    { id: "scan", label: "Scan", icon: Camera },
    { id: "history", label: "History", icon: History },
    { id: "profile", label: "Profile", icon: User },
  ]

  return (
    <>
      {/* Menu Button - Always visible on all screens */}
      <button
        className="fixed top-24 left-4 z-40 p-2 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow"
        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
      >
        <Menu className="w-6 h-6 text-gray-600" />
      </button>

      {/* Overlay - Shows when sidebar is open */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-30" onClick={() => setIsMobileMenuOpen(false)} />
      )}

      {/* Sidebar - Always slides in/out from left */}
      <div
        className={`
          fixed left-0 top-0 h-screen bg-white shadow-lg z-40 transition-transform duration-300
          w-64 pt-20
          ${isMobileMenuOpen ? "translate-x-0" : "-translate-x-full"}
        `}
      >
        {/* Close Button inside sidebar */}
        <button
          className="absolute top-24 right-4 p-2 hover:bg-gray-100 rounded-lg transition-colors"
          onClick={() => setIsMobileMenuOpen(false)}
        >
          <X className="w-6 h-6 text-gray-600" />
        </button>

        <div className="p-6">
          <h2 className="text-lg font-semibold text-gray-800 mb-6">Dashboard</h2>

          <nav className="space-y-2">
            {menuItems.map((item) => {
              const Icon = item.icon
              return (
                <button
                  key={item.id}
                  onClick={() => {
                    setActiveTab(item.id)
                    setIsMobileMenuOpen(false) // Close sidebar after selection
                  }}
                  className={`w-full flex items-center space-x-3 px-4 py-3 rounded-lg text-left transition-colors ${
                    activeTab === item.id
                      ? "bg-orange-100 text-orange-600 border-r-4 border-orange-500"
                      : "text-gray-600 hover:bg-gray-100"
                  }`}
                >
                  <Icon className="w-5 h-5" />
                  <span className="font-medium">{item.label}</span>
                </button>
              )
            })}
          </nav>
        </div>
      </div>
    </>
  )
}

export default Sidebar
