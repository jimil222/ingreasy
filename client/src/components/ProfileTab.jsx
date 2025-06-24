import { User, Mail, Calendar, Settings } from "lucide-react"
import { useEffect, useState } from "react"
import axios from "axios"
import { useAuth } from "@clerk/clerk-react"
import { useUser } from "@clerk/clerk-react"


const ProfileTab = () => {
  const [profile, setProfile] = useState(null)
  const userStats = [
    { label: "Recipes Generated", value: profile?.recipeCount || 0 },
    { label: "Days Active", value: profile?.daysActive || 0 },
  ]

  const { getToken } = useAuth()

  useEffect(() => {
    const fetchProfile = async () => {
      const token = await getToken({ template: "backend-auth" })
      const res = await axios.get("http://localhost:4000/api/user/profile", {
        headers: {
          Authorization: `Bearer ${token}`
        }
      })
      setProfile(res.data.profile)
    }

    fetchProfile()
  }, [])

  return (
    <div className="p-4 lg:p-8 pl-16 lg:pl-8">
      <h1 className="text-center text-2xl lg:text-3xl font-bold text-gray-800 mb-6 lg:mb-8">Profile</h1>

      <div className="max-w-4xl mx-auto space-y-6">
        {/* Profile Info - Full width at top */}
        <div className="bg-white rounded-xl shadow-md p-4 lg:p-6">
          <div className="flex flex-col sm:flex-row sm:items-start justify-between mb-6 gap-4">
            <div className="flex items-center space-x-4">
              <div className="w-16 h-16 lg:w-20 lg:h-20 bg-orange-100 rounded-full flex items-center justify-center flex-shrink-0 overflow-hidden">
                {profile?.photo ? (
                  <img
                    src={profile.photo}
                    alt="User"
                    className="w-full h-full object-cover"
                  />
                ) : (
                  <User className="w-8 h-8 lg:w-10 lg:h-10 text-orange-500" />
                )}
              </div>

              <div className="min-w-0 flex-1">
                <h2 className="text-xl lg:text-2xl font-semibold text-gray-800">{profile?.name || "Loading..."}</h2>
                <p className="text-gray-600 text-sm lg:text-base">Home Chef</p>
              </div>
            </div>
          </div>

          <div className="space-y-3 lg:space-y-4">
            <div className="flex items-center space-x-3">
              <Mail className="w-4 h-4 lg:w-5 lg:h-5 text-gray-400 flex-shrink-0" />
              <span className="text-gray-700 text-sm lg:text-base break-all">{profile?.email || "Loading..."}</span>
            </div>
            <div className="flex items-center space-x-3">
              <Calendar className="w-4 h-4 lg:w-5 lg:h-5 text-gray-400 flex-shrink-0" />
              <span className="text-gray-700 text-sm lg:text-base">{profile?.joinedAt || "Loading..."}</span>
            </div>
          </div>
        </div>

        {/* Stats & Settings - Side by side */}
        <div className="grid grid-cols-1 md:grid-cols-1 gap-6">
          {/* Stats */}
          <div className=" bg-white rounded-xl shadow-md p-4 lg:p-6">
            <h3 className="text-base lg:text-lg font-semibold text-gray-800 mb-4">Your Stats</h3>
            <div className="space-y-3 lg:space-y-4">
              {userStats.map((stat, index) => (
                <div key={index} className="flex justify-between items-center">
                  <span className="text-gray-600 text-sm lg:text-base">{stat.label}</span>
                  <span className="text-xl lg:text-2xl font-bold text-orange-500">{stat.value}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProfileTab
