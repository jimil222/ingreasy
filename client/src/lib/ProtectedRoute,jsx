import { useUser } from "@clerk/clerk-react"
import { useNavigate } from "react-router-dom"

const ProtectedRoute = ({ children }) => {
  const { isLoaded, isSignedIn } = useUser()
  const navigate = useNavigate()

  if (!isLoaded) return null // Show nothing or a spinner while Clerk loads

  return isSignedIn ? children : navigate('/')
}

export default ProtectedRoute
