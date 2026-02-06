import { useState, useEffect } from 'react'
import { Menu, X, MapPin } from 'lucide-react'

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navLinks = [
    { name: 'Басты бет', href: '#hero' },
    { name: 'Біз туралы', href: '#about' },
    { name: 'Туристік нысандар', href: '#places' },
    { name: 'Курстар', href: '#courses' },
    { name: 'Галерея', href: '#gallery' },
    { name: 'Байланыс', href: '#contact' },
  ]

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
    setIsMobileMenuOpen(false)
  }

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-white/95 backdrop-blur-md shadow-lg py-3'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <a
            href="#hero"
            onClick={(e) => {
              e.preventDefault()
              scrollToSection('#hero')
            }}
            className="flex items-center space-x-2 group"
          >
            <div className={`p-2 rounded-lg transition-all duration-300 ${
              isScrolled ? 'bg-gradient-to-r from-sky-500 to-teal-500' : 'bg-white/20'
            }`}>
              <MapPin className={`w-6 h-6 ${isScrolled ? 'text-white' : 'text-white'}`} />
            </div>
            <span className={`text-xl font-bold transition-colors duration-300 ${
              isScrolled ? 'text-slate-800' : 'text-white'
            }`}>
              Qaz<span className="text-sky-500">Tourism</span>
            </span>
          </a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => {
                  e.preventDefault()
                  scrollToSection(link.href)
                }}
                className={`nav-link text-sm font-medium transition-colors duration-300 ${
                  isScrolled
                    ? 'text-slate-600 hover:text-sky-500'
                    : 'text-white/90 hover:text-white'
                }`}
              >
                {link.name}
              </a>
            ))}
          </div>

          {/* CTA Button */}
          <div className="hidden md:block">
            <button
              onClick={() => scrollToSection('#contact')}
              className={`px-6 py-2.5 rounded-full font-medium text-sm transition-all duration-300 ${
                isScrolled
                  ? 'bg-gradient-to-r from-sky-500 to-teal-500 text-white hover:shadow-lg hover:shadow-sky-500/30'
                  : 'bg-white text-sky-600 hover:bg-white/90'
              }`}
            >
              Тур брондау
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className={`md:hidden p-2 rounded-lg transition-colors duration-300 ${
              isScrolled ? 'text-slate-800' : 'text-white'
            }`}
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        <div
          className={`md:hidden overflow-hidden transition-all duration-300 ${
            isMobileMenuOpen ? 'max-h-96 opacity-100 mt-4' : 'max-h-0 opacity-0'
          }`}
        >
          <div className="bg-white/95 backdrop-blur-md rounded-2xl shadow-xl p-4 space-y-2">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => {
                  e.preventDefault()
                  scrollToSection(link.href)
                }}
                className="block px-4 py-3 text-slate-700 hover:text-sky-500 hover:bg-sky-50 rounded-lg transition-colors duration-200 font-medium"
              >
                {link.name}
              </a>
            ))}
            <button
              onClick={() => scrollToSection('#contact')}
              className="w-full mt-4 px-6 py-3 bg-gradient-to-r from-sky-500 to-teal-500 text-white rounded-full font-medium hover:shadow-lg transition-all duration-300"
            >
              Тур брондау
            </button>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
