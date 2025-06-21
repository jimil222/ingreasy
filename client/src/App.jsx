import { Route, Routes } from 'react-router-dom'
import { useState } from 'react'
import './App.css'
import Home from './pages/Home'
import Navbar from './components/Navbar'
import ProtectedRoute from './lib/ProtectedRoute'
import Footer from './components/Footer'
import Dashboard from './pages/Dashboard'
import RecipeDisplay from './components/RecipeDisplay'
import ScanTab from './components/ScanTab'
import HistoryTab from './components/HistoryTab'
import ProfileTab from './components/ProfileTab'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="min-h-screen bg-slate-50">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />

        <Route
          path="/dashboard"
          element={
            <ProtectedRoute>
              <Dashboard/>
            </ProtectedRoute>
          }
        >
          <Route index element={<ScanTab/>} />
          <Route path="history" element={<HistoryTab />} />
          <Route path="profile" element={<ProfileTab />} />
          <Route path="results" element={<RecipeDisplay />} />
        </Route>
      </Routes>
      <Footer />
    </div>
  )
}

export default App
