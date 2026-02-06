import { useState, useEffect, useRef } from 'react'
import { Clock, Users, BookOpen, CheckCircle, Star, ArrowRight, Play } from 'lucide-react'

interface Course {
  id: number
  title: string
  description: string
  duration: string
  students: number
  lessons: number
  rating: number
  price: string
  image: string
  features: string[]
  level: string
}

const Courses = () => {
  const [selectedCourse, setSelectedCourse] = useState<Course | null>(null)
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

  const courses: Course[] = [
    {
      id: 1,
      title: 'Қазақстан географиясы мен туризмі',
      description: 'Қазақстанның географиялық ерекшеліктері, табиғи ресурстары және туристік әлеуетін терең зерттеу. Бұл курс туризм саласындағы негізгі білімдерді қамтиды.',
      duration: '12 апта',
      students: 1250,
      lessons: 48,
      rating: 4.8,
      price: '45 000 ₸',
      image: 'https://images.unsplash.com/photo-1469474968028-56623f02e42e?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
      features: [
        'Қазақстанның географиялық орны',
        'Табиғи ландшафттар',
        'Климаттық ерекшеліктер',
        'Туристік маршруттар',
        'Экологиялық туризм',
      ],
      level: 'Негізгі',
    },
    {
      id: 2,
      title: 'Мәдени мұра және тарихи туризм',
      description: 'Қазақстандың бай тарихы мен мәдениетін зерттеу. Археологиялық ескерткіштер, этнографиялық нысандар және мәдени туризмді дамыту.',
      duration: '10 апта',
      students: 980,
      lessons: 40,
      rating: 4.9,
      price: '50 000 ₸',
      image: 'https://images.unsplash.com/photo-1599940824399-b87987ce0799?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
      features: [
        'Тарихи ескерткіштер',
        'Мұрагерлік объектілер',
        'Этнографиялық туризм',
        'Мұражайлар мен көрмелер',
        'Мәдени іс-шаралар',
      ],
      level: 'Орташа',
    },
    {
      id: 3,
      title: 'Экотуризм және табиғатты қорғау',
      description: 'Экотуризм принциптері мен табиғатты қорғау тәсілдерін үйрену. Ұлттық парктер, қорықтар және экологиялық туризмді ұйымдастыру.',
      duration: '8 апта',
      students: 750,
      lessons: 32,
      rating: 4.7,
      price: '40 000 ₸',
      image: 'https://images.unsplash.com/photo-1441974231531-c6227db76b6e?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
      features: [
        'Экотуризм негіздері',
        'Ұлттық парктер',
        'Биоалуантүрлілік',
        'Тұрақты туризм',
        'Экологиялық білім',
      ],
      level: 'Негізгі',
    },
    {
      id: 4,
      title: 'Туристік бизнес және менеджмент',
      description: 'Туристік бизнесті басқару, маркетинг және туристік қызметтерді дамыту. Кәсіби туристік компанияны құру және дамыту.',
      duration: '16 апта',
      students: 650,
      lessons: 64,
      rating: 4.8,
      price: '60 000 ₸',
      image: 'https://images.unsplash.com/photo-1556761175-5973dc0f32e7?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
      features: [
        'Туристік бизнес негіздері',
        'Маркетинг стратегиясы',
        'Қызмет көрсету сапасы',
        'Туроператорлық қызмет',
        'Кәсіби даму',
      ],
      level: 'Кәсіби',
    },
  ]

  return (
    <section
      id="courses"
      ref={sectionRef}
      className="py-20 md:py-32 bg-gradient-to-b from-sky-50 to-white"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div
          className={`text-center mb-16 transition-all duration-1000 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <span className="inline-block px-4 py-2 bg-sky-100 text-sky-600 rounded-full text-sm font-semibold mb-6">
            Оқу бағдарламалары
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-slate-800 mb-6">
            4 курс <span className="gradient-text">мәліметтері</span>
          </h2>
          <p className="text-slate-600 text-lg max-w-2xl mx-auto">
            Туризм саласында білім алыңыз. Біздің курстар Қазақстан туризмін терең зерттеуге
            мүмкіндік береді.
          </p>
        </div>

        {/* Courses Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {courses.map((course, index) => (
            <div
              key={course.id}
              className={`tourist-card group bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
              style={{ transitionDelay: `${index * 150 + 200}ms` }}
            >
              <div className="flex flex-col lg:flex-row">
                {/* Image */}
                <div className="lg:w-2/5 relative h-64 lg:h-auto overflow-hidden">
                  <img
                    src={course.image}
                    alt={course.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-r from-black/40 to-transparent lg:bg-gradient-to-t" />
                  <div className="absolute top-4 left-4">
                    <span className="px-3 py-1 bg-white/90 backdrop-blur-sm text-slate-800 text-xs font-semibold rounded-full">
                      {course.level}
                    </span>
                  </div>
                  <div className="absolute bottom-4 left-4 right-4 lg:hidden">
                    <div className="flex items-center space-x-3 text-white">
                      <div className="flex items-center space-x-1">
                        <Star className="w-4 h-4 text-yellow-400 fill-yellow-400" />
                        <span className="text-sm font-semibold">{course.rating}</span>
                      </div>
                      <span className="text-white/60">|</span>
                      <span className="text-sm">{course.students} студент</span>
                    </div>
                  </div>
                </div>

                {/* Content */}
                <div className="lg:w-3/5 p-6 lg:p-8">
                  <div className="hidden lg:flex items-center space-x-4 mb-4">
                    <div className="flex items-center space-x-1 text-slate-600">
                      <Star className="w-4 h-4 text-yellow-400 fill-yellow-400" />
                      <span className="text-sm font-semibold">{course.rating}</span>
                    </div>
                    <span className="text-slate-300">|</span>
                    <div className="flex items-center space-x-1 text-slate-600">
                      <Users className="w-4 h-4" />
                      <span className="text-sm">{course.students} студент</span>
                    </div>
                  </div>

                  <h3 className="text-xl lg:text-2xl font-bold text-slate-800 mb-3 group-hover:text-sky-500 transition-colors">
                    {course.title}
                  </h3>

                  <p className="text-slate-600 text-sm mb-4 line-clamp-2">
                    {course.description}
                  </p>

                  {/* Stats */}
                  <div className="flex items-center space-x-6 mb-6">
                    <div className="flex items-center space-x-2 text-slate-500">
                      <Clock className="w-4 h-4" />
                      <span className="text-sm">{course.duration}</span>
                    </div>
                    <div className="flex items-center space-x-2 text-slate-500">
                      <BookOpen className="w-4 h-4" />
                      <span className="text-sm">{course.lessons} сабақ</span>
                    </div>
                  </div>

                  {/* Features */}
                  <div className="space-y-2 mb-6">
                    {course.features.slice(0, 3).map((feature, idx) => (
                      <div key={idx} className="flex items-center space-x-2">
                        <CheckCircle className="w-4 h-4 text-teal-500 flex-shrink-0" />
                        <span className="text-sm text-slate-600">{feature}</span>
                      </div>
                    ))}
                  </div>

                  {/* Price & CTA */}
                  <div className="flex items-center justify-between pt-4 border-t border-slate-100">
                    <div>
                      <span className="text-2xl font-bold text-sky-500">{course.price}</span>
                      <span className="text-slate-400 text-sm ml-2">/курс</span>
                    </div>
                    <button
                      onClick={() => setSelectedCourse(course)}
                      className="flex items-center space-x-2 px-6 py-3 bg-gradient-to-r from-sky-500 to-teal-500 text-white rounded-full font-medium hover:shadow-lg hover:shadow-sky-500/30 transition-all duration-300 transform hover:scale-105"
                    >
                      <Play className="w-4 h-4" />
                      <span>Толығырақ</span>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div
          className={`mt-16 text-center transition-all duration-1000 delay-700 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <div className="bg-gradient-to-r from-sky-500 to-teal-500 rounded-3xl p-8 md:p-12">
            <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">
              Барлық курстарға жазылғыңыз келе ме?
            </h3>
            <p className="text-white/90 mb-8 max-w-xl mx-auto">
              Барлық 4 курсты бірге алып, 20% жеңілдік алыңыз. Кәсіби туристік білім алыңыз!
            </p>
            <button className="inline-flex items-center space-x-2 px-8 py-4 bg-white text-sky-600 rounded-full font-semibold hover:bg-white/90 hover:shadow-xl transition-all duration-300 transform hover:scale-105">
              <span>Жазылу</span>
              <ArrowRight className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>

      {/* Course Detail Modal */}
      {selectedCourse && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm"
          onClick={() => setSelectedCourse(null)}
        >
          <div
            className="bg-white rounded-3xl max-w-2xl w-full max-h-[90vh] overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="relative h-64">
              <img
                src={selectedCourse.image}
                alt={selectedCourse.title}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
              <button
                onClick={() => setSelectedCourse(null)}
                className="absolute top-4 right-4 w-10 h-10 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-white/30 transition-colors"
              >
                ×
              </button>
              <div className="absolute bottom-4 left-6 right-6">
                <span className="px-3 py-1 bg-white/90 text-slate-800 text-xs font-semibold rounded-full">
                  {selectedCourse.level}
                </span>
                <h3 className="text-2xl font-bold text-white mt-2">{selectedCourse.title}</h3>
              </div>
            </div>

            <div className="p-6">
              <div className="flex items-center space-x-6 mb-6">
                <div className="flex items-center space-x-2">
                  <Star className="w-5 h-5 text-yellow-400 fill-yellow-400" />
                  <span className="font-semibold">{selectedCourse.rating}</span>
                </div>
                <div className="flex items-center space-x-2 text-slate-600">
                  <Users className="w-5 h-5" />
                  <span>{selectedCourse.students} студент</span>
                </div>
                <div className="flex items-center space-x-2 text-slate-600">
                  <Clock className="w-5 h-5" />
                  <span>{selectedCourse.duration}</span>
                </div>
              </div>

              <p className="text-slate-600 mb-6">{selectedCourse.description}</p>

              <h4 className="font-bold text-slate-800 mb-3">Курс мазмұны:</h4>
              <div className="space-y-2 mb-6">
                {selectedCourse.features.map((feature, idx) => (
                  <div key={idx} className="flex items-center space-x-3">
                    <CheckCircle className="w-5 h-5 text-teal-500" />
                    <span className="text-slate-600">{feature}</span>
                  </div>
                ))}
              </div>

              <div className="flex items-center justify-between pt-6 border-t border-slate-100">
                <div>
                  <span className="text-3xl font-bold text-sky-500">{selectedCourse.price}</span>
                  <span className="text-slate-400 ml-2">/курс</span>
                </div>
                <button className="px-8 py-3 bg-gradient-to-r from-sky-500 to-teal-500 text-white rounded-full font-semibold hover:shadow-lg hover:shadow-sky-500/30 transition-all duration-300">
                  Курсқа жазылу
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  )
}

export default Courses
