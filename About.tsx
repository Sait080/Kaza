import { useEffect, useRef, useState } from 'react'
import { Globe, Users, Award, Heart } from 'lucide-react'

const About = () => {
  const sectionRef = useRef<HTMLDivElement>(null)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
          observer.unobserve(entry.target)
        }
      },
      { threshold: 0.2 }
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [])

  const features = [
    {
      icon: Globe,
      title: 'Кең ауқым',
      description: 'Қазақстанның барлық аймақтарындағы туристік нысандарды қамтиды',
    },
    {
      icon: Users,
      title: 'Тәжірибелі гидтер',
      description: 'Кәсіби гидтермен таныстыру және экскурсиялар',
    },
    {
      icon: Award,
      title: 'Сапалы қызмет',
      description: 'Жоғары сапалы туристік қызмет көрсету',
    },
    {
      icon: Heart,
      title: 'Жеке көңіл бөлу',
      description: 'Әр туристке жеке көңіл бөлу және қамқорлық',
    },
  ]

  return (
    <section
      id="about"
      ref={sectionRef}
      className="py-20 md:py-32 bg-gradient-to-b from-white to-sky-50"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <div
            className={`transition-all duration-1000 ${
              isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-12'
            }`}
          >
            <span className="inline-block px-4 py-2 bg-sky-100 text-sky-600 rounded-full text-sm font-semibold mb-6">
              Біз туралы
            </span>
            <h2 className="text-4xl md:text-5xl font-bold text-slate-800 mb-6">
              Қазақстанның <span className="gradient-text">туристік әлеуеті</span>
            </h2>
            <p className="text-slate-600 text-lg leading-relaxed mb-6">
              Қазақстан - бұл кең байтақ жерде орналасқан, табиғаты әр алуан, мәдениеті
              бай ел. Біз сізге Қазақстанның ең әдемі жерлерін көрсетуге дайынбыз.
            </p>
            <p className="text-slate-600 text-lg leading-relaxed mb-8">
              Біздің мақсатымыз - туристерге Қазақстанның табиғи сұлулықтарын, тарихи
              ескерткіштерін және мәдени құндылықтарын таныстыру. Әрбір саяхат - бұл
              жаңа ашылымдар мен есте қаларлық тәжірибе.
            </p>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6">
              <div className="text-center p-4 bg-white rounded-2xl shadow-lg">
                <span className="block text-3xl font-bold text-sky-500">10+</span>
                <span className="text-sm text-slate-500">Жыл тәжірибе</span>
              </div>
              <div className="text-center p-4 bg-white rounded-2xl shadow-lg">
                <span className="block text-3xl font-bold text-teal-500">50+</span>
                <span className="text-sm text-slate-500">Нысандар</span>
              </div>
              <div className="text-center p-4 bg-white rounded-2xl shadow-lg">
                <span className="block text-3xl font-bold text-yellow-500">4</span>
                <span className="text-sm text-slate-500">Курс</span>
              </div>
            </div>
          </div>

          {/* Right Content - Features Grid */}
          <div
            className={`transition-all duration-1000 delay-300 ${
              isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-12'
            }`}
          >
            <div className="grid sm:grid-cols-2 gap-6">
              {features.map((feature, index) => (
                <div
                  key={feature.title}
                  className="tourist-card p-6 bg-white rounded-2xl shadow-lg hover:shadow-2xl"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="w-14 h-14 bg-gradient-to-br from-sky-500 to-teal-500 rounded-xl flex items-center justify-center mb-4">
                    <feature.icon className="w-7 h-7 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-slate-800 mb-2">{feature.title}</h3>
                  <p className="text-slate-600 text-sm leading-relaxed">{feature.description}</p>
                </div>
              ))}
            </div>

            {/* Image */}
            <div className="mt-8 relative">
              <img
                src="https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80"
                alt="Қазақстан таулары"
                className="w-full h-64 object-cover rounded-2xl shadow-xl"
              />
              <div className="absolute -bottom-6 -right-6 bg-white p-4 rounded-2xl shadow-xl">
                <div className="flex items-center space-x-3">
                  <div className="w-12 h-12 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-full flex items-center justify-center">
                    <Award className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <p className="text-sm text-slate-500">Рейтинг</p>
                    <p className="text-lg font-bold text-slate-800">4.9/5.0</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
