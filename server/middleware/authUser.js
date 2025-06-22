import jwt from 'jsonwebtoken'

const authUser = async (req, res, next) => {
  try {
    const authHeader = req.headers.authorization

    if (!authHeader || !authHeader.startsWith("Bearer ")) {
      return res.status(401).json({ success: false, message: "Not authorized, please log in again" })
    }

    const token = authHeader.split(" ")[1]

    const decoded = jwt.verify(token, process.env.CLERK_JWT_SECRET, {
      algorithms: ["HS256"],
    })

    console.log("JWT Verified")
    console.log("Decoded Clerk ID:", decoded.sub || decoded.clerkId)

    req.user = { clerkId: decoded.sub || decoded.clerkId }

    next()
  } catch (error) {
    console.error("JWT Error:", error.message)
    res.status(401).json({ success: false, message: "Unauthorized: " + error.message })
  }
}

export default authUser
