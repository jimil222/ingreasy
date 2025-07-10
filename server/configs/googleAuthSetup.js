import fs from 'fs'
import path from 'path'

export const setupGoogleCredentials = () => {
  const base64Credentials = process.env.GOOGLE_CREDENTIALS_BASE64
  if (!base64Credentials) {
    console.warn("GOOGLE_CREDENTIALS_BASE64 is not set")
    return
  }

  const outputPath = path.join(process.cwd(), 'configs', 'google-key.json')

  try {
    const jsonString = Buffer.from(base64Credentials, 'base64').toString('utf8')
    fs.writeFileSync(outputPath, jsonString)
    process.env.GOOGLE_APPLICATION_CREDENTIALS = outputPath
    console.log("Google credentials JSON created successfully")
  } catch (error) {
    console.error("Error writing Google credentials file:", error)
  }
}
