import { useEffect, useRef } from 'react'
import { ChevronDown, Compass, Mountain, Camera } from 'lucide-react'

const Hero = () => {
  const heroRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const handleParallax = () => {
      if (heroRef.current) {
        const scrolled = window.scrollY
        heroRef.current.style.transform = `translateY(${scrolled * 0.5}px)`
      }
    }

    window.addEventListener('scroll', handleParallax)
    return () => window.removeEventListener('scroll', handleParallax)
  }, [])

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Parallax */}
      <div
        ref={heroRef}
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      />

      {/* Gradient Overlay */}
      <div className="absolute inset-0 hero-gradient z-10" />

      {/* Content */}
      <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Badge */}
        <div className="inline-flex items-center space-x-2 bg-white/20 backdrop-blur-sm rounded-full px-4 py-2 mb-8 animate-fadeInUp">
          <Compass className="w-4 h-4 text-white" />
          <span className="text-white text-sm font-medium">Қазақстанның туристік нысандары</span>
        </div>

        {/* Main Title */}
        <h1 className="hero-title text-5xl md:text-7xl lg:text-8xl font-bold text-white mb-6 animate-fadeInUp stagger-1">
          Қазақтың <span className="text-yellow-300">Керемет</span>
          <br />
          <span className="text-white">Жерлері</span>
        </h1>

        {/* Subtitle */}
        <p className="text-lg md:text-xl text-white/90 max-w-2xl mx-auto mb-10 animate-fadeInUp stagger-2">
          Қазақстанның ең әдемі туристік нысандарымен танысыңыз. Табиғаттың сұлулығын,
          мәдениетті және тарихты бірге зерттеңіз.
        </p>

        {/* Stats */}
        <div className="flex flex-wrap justify-center gap-8 md:gap-16 mb-12 animate-fadeInUp stagger-3">
          <div className="text-center">
            <div className="flex items-center justify-center mb-2">
              <Mountain className="w-6 h-6 text-yellow-300 mr-2" />
              <span className="text-3xl md:text-4xl font-bold text-white">50+</span>
            </div>
            <p className="text-white/80 text-sm">Туристік нысан</p>
          </div>
          <div className="text-center">
            <div className="flex items-center justify-center mb-2">
              <Camera className="w-6 h-6 text-yellow-300 mr-2" />
              <span className="text-3xl md:text-4xl font-bold text-white">4</span>
            </div>
            <p className="text-white/80 text-sm">Курс бағдарлама</p>
          </div>
          <div className="text-center">
            <div className="flex items-center justify-center mb-2">
              <Compass className="w-6 h-6 text-yellow-300 mr-2" />
              <span className="text-3xl md:text-4xl font-bold text-white">1000+</span>
            </div>
            <p className="text-white/80 text-sm">Қанағаттанған турист</p>
          </div>
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-fadeInUp stagger-4">
          <button
            onClick={() => scrollToSection('#places')}
            className="px-8 py-4 bg-white text-sky-600 rounded-full font-semibold text-lg hover:bg-white/90 hover:shadow-xl hover:shadow-white/20 transition-all duration-300 transform hover:scale-105"
          >
            Нысандарды қарау
          </button>
          <button
            onClick={() => scrollToSection('#courses')}
            className="px-8 py-4 bg-transparent border-2 border-white text-white rounded-full font-semibold text-lg hover:bg-white/10 transition-all duration-300"
          >
            Курстарды зерттеу
          </button>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20 animate-bounce">
        <button
          onClick={() => scrollToSection('#about')}
          className="text-white/80 hover:text-white transition-colors duration-300"
        >
          <ChevronDown className="w-8 h-8" />
        </button>
      </div>

      {/* Decorative Elements */}
      <div className="absolute top-20 left-10 w-20 h-20 bg-white/10 rounded-full blur-xl animate-float" />
      <div className="absolute bottom-40 right-20 w-32 h-32 bg-yellow-300/20 rounded-full blur-2xl animate-float" style={{ animationDelay: '1s' }} />
      <div className="absolute top-1/3 right-10 w-16 h-16 bg-teal-300/20 rounded-full blur-xl animate-float" style={{ animationDelay: '2s' }} />
    </section>
  )
}

export default Hero
