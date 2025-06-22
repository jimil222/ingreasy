import { useEffect, useState } from "react"
import Sidebar from "../components/SideBar"
import { useUser, useAuth } from "@clerk/clerk-react"
import axios from "axios"
import { Outlet, useLocation, useNavigate } from "react-router-dom"

const Dashboard = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const { user } = useUser()
  const { getToken } = useAuth()
  const location = useLocation()
  const navigate = useNavigate()

  useEffect(() => {
    const saveUser = async () => {
      if (!user) return

      try {
        const token = await getToken({ template: "backend-auth" })
        await axios.post("http://localhost:4000/api/user/save",
          {
            clerkId: user.id,
            email: user.primaryEmailAddress.emailAddress,
            firstName: user.firstName,
            lastName: user.lastName,
            photo: user.imageUrl,
          },
          {
            headers: {
              Authorization: `Bearer ${token}`
            }
          }
        )
      } catch (err) {
        console.error("Failed to save user:", err)
      }
    }

    saveUser()
  }, [user])

  const tabs = [
    { label: "Scan", path: "/dashboard" },
    { label: "History", path: "/dashboard/history" },
    { label: "Recent", path: "/dashboard/results" },
    { label: "Profile", path: "/dashboard/profile" }
  ]

  return (
    <div className="min-h-screen bg-gray-50">
      <Sidebar
        activePath={location.pathname}
        tabs={tabs}
        onTabClick={(path) => navigate(path)}
        isMobileMenuOpen={isMobileMenuOpen}
        setIsMobileMenuOpen={setIsMobileMenuOpen}
      />

      {/* Main Content - Render route-based content */}
      <div className="pt-20">
        <Outlet />
      </div>
    </div>
  )
}

export default Dashboard
