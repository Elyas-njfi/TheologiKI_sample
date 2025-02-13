import React from 'react'
import Navbar from './components/Navbar'
import HeroSection from './components/HeroSection'
import FearureSection from './components/FearureSection'
import Pricing from './components/Pricing'
import Themes from './components/Themes'
import Resourses from './components/Resourses'
import Blog from './components/Blog'
import AboutUs from './components/AboutUs'
import Footer from './components/Footer'

export const App = () => {
  return (
    <>
      <Navbar />
      <div className="max-w-7xl mx-auto pt-20 px-6">
        <HeroSection />
        <FearureSection />
        <Themes />
        <Pricing />
        <Resourses />
        <Blog />
        <AboutUs />
        <Footer />
      </div>
    </>
  )
}


export default App
