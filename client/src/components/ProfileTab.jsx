import { User, Mail, Calendar, Settings, Edit } from "lucide-react"

const ProfileTab = () => {
  const userStats = [
    { label: "Recipes Generated", value: "24" },
    { label: "Favorite Recipes", value: "8" },
    { label: "Days Active", value: "15" },
  ]

  return (
    <div className="p-4 lg:p-8 pl-16 lg:pl-8">
      <h1 className="text-center text-2xl lg:text-3xl font-bold text-gray-800 mb-6 lg:mb-8">Profile</h1>

      <div className="max-w-4xl mx-auto">
        <div className="grid grid-cols-1 xl:grid-cols-3 gap-6 lg:gap-8">
          {/* Profile Info */}
          <div className="xl:col-span-2 space-y-6">
            <div className="bg-white rounded-xl shadow-md p-4 lg:p-6">
              <div className="flex flex-col sm:flex-row sm:items-start justify-between mb-6 gap-4">
                <div className="flex items-center space-x-4">
                  <div className="w-16 h-16 lg:w-20 lg:h-20 bg-orange-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <User className="w-8 h-8 lg:w-10 lg:h-10 text-orange-500" />
                  </div>
                  <div className="min-w-0 flex-1">
                    <h2 className="text-xl lg:text-2xl font-semibold text-gray-800">John Doe</h2>
                    <p className="text-gray-600 text-sm lg:text-base">Home Chef</p>
                  </div>
                </div>
                <button className="flex items-center space-x-2 px-3 lg:px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors text-sm lg:text-base self-start sm:self-auto">
                  <Edit className="w-4 h-4" />
                  <span>Edit</span>
                </button>
              </div>

              <div className="space-y-3 lg:space-y-4">
                <div className="flex items-center space-x-3">
                  <Mail className="w-4 h-4 lg:w-5 lg:h-5 text-gray-400 flex-shrink-0" />
                  <span className="text-gray-700 text-sm lg:text-base break-all">john.doe@example.com</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Calendar className="w-4 h-4 lg:w-5 lg:h-5 text-gray-400 flex-shrink-0" />
                  <span className="text-gray-700 text-sm lg:text-base">Joined January 2025</span>
                </div>
              </div>
            </div>

            {/* Preferences */}
            <div className="bg-white rounded-xl shadow-md p-4 lg:p-6">
              <h3 className="text-lg lg:text-xl font-semibold text-gray-800 mb-4">Cooking Preferences</h3>
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Dietary Restrictions</label>
                  <div className="flex flex-wrap gap-2">
                    <span className="px-2 lg:px-3 py-1 bg-green-100 text-green-700 rounded-full text-xs lg:text-sm">
                      Vegetarian
                    </span>
                    <span className="px-2 lg:px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-xs lg:text-sm">
                      Gluten-Free
                    </span>
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Favorite Cuisines</label>
                  <div className="flex flex-wrap gap-2">
                    <span className="px-2 lg:px-3 py-1 bg-orange-100 text-orange-700 rounded-full text-xs lg:text-sm">
                      Italian
                    </span>
                    <span className="px-2 lg:px-3 py-1 bg-purple-100 text-purple-700 rounded-full text-xs lg:text-sm">
                      Asian
                    </span>
                    <span className="px-2 lg:px-3 py-1 bg-red-100 text-red-700 rounded-full text-xs lg:text-sm">
                      Mexican
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Stats & Settings */}
          <div className="space-y-6">
            {/* Stats */}
            <div className="bg-white rounded-xl shadow-md p-4 lg:p-6">
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

            {/* Quick Settings */}
            <div className="bg-white rounded-xl shadow-md p-4 lg:p-6">
              <h3 className="text-base lg:text-lg font-semibold text-gray-800 mb-4">Quick Settings</h3>
              <div className="space-y-2 lg:space-y-3">
                <button className="w-full flex items-center space-x-3 p-3 text-left hover:bg-gray-50 rounded-lg transition-colors">
                  <Settings className="w-4 h-4 lg:w-5 lg:h-5 text-gray-400 flex-shrink-0" />
                  <span className="text-gray-700 text-sm lg:text-base">Account Settings</span>
                </button>
                <button className="w-full flex items-center space-x-3 p-3 text-left hover:bg-gray-50 rounded-lg transition-colors">
                  <User className="w-4 h-4 lg:w-5 lg:h-5 text-gray-400 flex-shrink-0" />
                  <span className="text-gray-700 text-sm lg:text-base">Privacy Settings</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProfileTab
