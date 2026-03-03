import React from 'react'
import Navbar from './assets/components/Navbar/Navbar'
import Hero from './assets/components/HeroSection/hero'

const App = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <Hero />
    </div>
  )
}

export default App