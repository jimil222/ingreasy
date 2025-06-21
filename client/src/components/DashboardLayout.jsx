import { useState } from "react"
import Sidebar from "./SideBar"
import ScanTab from "./ScanTab"
import HistoryTab from "./HistoryTab"
import ProfileTab from "./ProfileTab"
import { useUser } from "@clerk/clerk-react"
import { useEffect } from "react"
import axios from "axios"
import { useAuth } from "@clerk/clerk-react"

const DashboardLayout = () => {
  const [activeTab, setActiveTab] = useState("scan")
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  const { user } = useUser()

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

const { getToken } = useAuth() 


  const renderContent = () => {
    switch (activeTab) {
      case "scan":
        return <ScanTab />
      case "history":
        return <HistoryTab />
      case "profile":
        return <ProfileTab />
      default:
        return <ScanTab />
    }
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <Sidebar
        activeTab={activeTab}
        setActiveTab={setActiveTab}
        isMobileMenuOpen={isMobileMenuOpen}
        setIsMobileMenuOpen={setIsMobileMenuOpen}
      />

      {/* Main Content - No left margin since sidebar is always overlay */}
      <div className="pt-20">{renderContent()}</div>
    </div>
  )
}

export default DashboardLayout
