import { useState, useEffect } from 'react'
import './App.css'
import Navbar from './sections/Navbar'
import Hero from './sections/Hero'
import About from './sections/About'
import TouristPlaces from './sections/TouristPlaces'
import Courses from './sections/Courses'
import Gallery from './sections/Gallery'
import Contact from './sections/Contact'
import Footer from './sections/Footer'

function App() {
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    // Simulate loading
    const timer = setTimeout(() => {
      setIsLoading(false)
    }, 1000)

    return () => clearTimeout(timer)
  }, [])

  if (isLoading) {
    return (
      <div className="fixed inset-0 flex items-center justify-center bg-gradient-to-br from-sky-500 to-teal-500">
        <div className="text-center">
          <div className="w-16 h-16 border-4 border-white border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
          <p className="text-white text-lg font-medium">Жүктелуде...</p>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <main>
        <Hero />
        <About />
        <TouristPlaces />
        <Courses />
        <Gallery />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}

export default App
