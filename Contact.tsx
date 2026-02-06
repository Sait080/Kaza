import { useState, useEffect, useRef } from 'react'
import { MapPin, Phone, Mail, Clock, Send, CheckCircle } from 'lucide-react'

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  })
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [isVisible, setIsVisible] = useState(false)
  const sectionRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
          observer.unobserve(entry.target)
        }
      },
      { threshold: 0.1 }
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [])

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Simulate form submission
    setIsSubmitted(true)
    setTimeout(() => {
      setIsSubmitted(false)
      setFormData({ name: '', email: '', phone: '', message: '' })
    }, 3000)
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  const contactInfo = [
    {
      icon: MapPin,
      title: 'Мекен-жай',
      content: 'Алматы қаласы, Абай даңғылы 50',
      color: 'from-sky-500 to-blue-500',
    },
    {
      icon: Phone,
      title: 'Телефон',
      content: '+7 (727) 123-45-67',
      color: 'from-teal-500 to-emerald-500',
    },
    {
      icon: Mail,
      title: 'Email',
      content: 'info@qaztourism.kz',
      color: 'from-orange-500 to-red-500',
    },
    {
      icon: Clock,
      title: 'Жұмыс уақыты',
      content: 'Дүйсенбі - Жұма: 9:00 - 18:00',
      color: 'from-purple-500 to-pink-500',
    },
  ]

  return (
    <section
      id="contact"
      ref={sectionRef}
      className="py-20 md:py-32 bg-gradient-to-b from-white to-sky-50"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div
          className={`text-center mb-16 transition-all duration-1000 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <span className="inline-block px-4 py-2 bg-teal-100 text-teal-600 rounded-full text-sm font-semibold mb-6">
            Байланыс
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-slate-800 mb-6">
            Бізбен <span className="gradient-text">байланысыңыз</span>
          </h2>
          <p className="text-slate-600 text-lg max-w-2xl mx-auto">
            Сұрақтарыңыз бар ма? Бізге хабарласыңыз, біз сізге көмектесуге дайынбыз.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Info */}
          <div
            className={`transition-all duration-1000 delay-200 ${
              isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-12'
            }`}
          >
            <div className="grid sm:grid-cols-2 gap-6 mb-8">
              {contactInfo.map((info, index) => (
                <div
                  key={info.title}
                  className="p-6 bg-white rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <div className={`w-12 h-12 bg-gradient-to-br ${info.color} rounded-xl flex items-center justify-center mb-4`}>
                    <info.icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-lg font-bold text-slate-800 mb-2">{info.title}</h3>
                  <p className="text-slate-600">{info.content}</p>
                </div>
              ))}
            </div>

            {/* Map */}
            <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
              <div className="h-64 bg-gradient-to-br from-sky-100 to-teal-100 flex items-center justify-center">
                <div className="text-center">
                  <MapPin className="w-16 h-16 text-sky-500 mx-auto mb-4" />
                  <p className="text-slate-600 font-medium">Алматы қаласы</p>
                  <p className="text-slate-500 text-sm">Қазақстан</p>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div
            className={`transition-all duration-1000 delay-400 ${
              isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-12'
            }`}
          >
            <div className="bg-white rounded-3xl shadow-xl p-8">
              <h3 className="text-2xl font-bold text-slate-800 mb-6">
                Хабарлама жіберу
              </h3>

              {isSubmitted ? (
                <div className="text-center py-12">
                  <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                    <CheckCircle className="w-10 h-10 text-green-500" />
                  </div>
                  <h4 className="text-2xl font-bold text-slate-800 mb-2">
                    Рахмет!
                  </h4>
                  <p className="text-slate-600">
                    Сіздің хабарламаңыз сәтті жіберілді. Біз жақын арада сізбен байланысамыз.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid sm:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-slate-700 mb-2">
                        Аты-жөні
                      </label>
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 border border-slate-200 rounded-xl focus:ring-2 focus:ring-sky-500 focus:border-transparent transition-all duration-200 outline-none"
                        placeholder="Аты-жөніңіз"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-slate-700 mb-2">
                        Email
                      </label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 border border-slate-200 rounded-xl focus:ring-2 focus:ring-sky-500 focus:border-transparent transition-all duration-200 outline-none"
                        placeholder="email@example.com"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-2">
                      Телефон
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-slate-200 rounded-xl focus:ring-2 focus:ring-sky-500 focus:border-transparent transition-all duration-200 outline-none"
                      placeholder="+7 (___) ___-__-__"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-2">
                      Хабарлама
                    </label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={4}
                      className="w-full px-4 py-3 border border-slate-200 rounded-xl focus:ring-2 focus:ring-sky-500 focus:border-transparent transition-all duration-200 outline-none resize-none"
                      placeholder="Хабарламаңызды жазыңыз..."
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full flex items-center justify-center space-x-2 px-8 py-4 bg-gradient-to-r from-sky-500 to-teal-500 text-white rounded-xl font-semibold hover:shadow-lg hover:shadow-sky-500/30 transition-all duration-300 transform hover:scale-[1.02]"
                  >
                    <Send className="w-5 h-5" />
                    <span>Жіберу</span>
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact
