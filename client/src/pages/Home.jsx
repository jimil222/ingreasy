import React from 'react'
import Navbar from '../components/Navbar'
import HeroSection from '../components/HeroSection'
import HowItWorks from '../components/HowItWorks'
import Features from '../components/Features'
import Footer from '../components/Footer'


const Home = () => {
  return (
    <div className='font-sans'>
      <Navbar />
      <HeroSection />
      <HowItWorks />
      <Features />
      <Footer />
    </div>
  )
}

export default Home