import { useState, useEffect, useRef } from 'react'
import { MapPin, Star, ArrowRight, Mountain, Waves, Landmark, Trees } from 'lucide-react'

interface Place {
  id: number
  name: string
  location: string
  description: string
  image: string
  rating: number
  category: string
  price: string
}

const TouristPlaces = () => {
  const [activeCategory, setActiveCategory] = useState('all')
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

  const categories = [
    { id: 'all', name: 'Барлығы', icon: MapPin },
    { id: 'mountain', name: 'Таулар', icon: Mountain },
    { id: 'lake', name: 'Көлдер', icon: Waves },
    { id: 'history', name: 'Тарихи', icon: Landmark },
    { id: 'nature', name: 'Табиғат', icon: Trees },
  ]

  const places: Place[] = [
    {
      id: 1,
      name: 'Алматы қаласы',
      location: 'Алматы облысы',
      description: 'Қазақстанның бұрынғы астанасы, ірі мәдени және экономикалық орталық. Қаланың айналасында Іле-Алатау ұлттық паркі орналасқан.',
      image: 'https://images.unsplash.com/photo-1559827260-dc66d52bef19?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
      rating: 4.8,
      category: 'mountain',
      price: '50 000 ₸',
    },
    {
      id: 2,
      name: 'Каспий теңізі',
      location: 'Маңғыстау облысы',
      description: 'Әлемдегі ең ірі көл, Қазақстанның батыс шекарасында орналасқан. Керемет жағалар мен уникалды флора және фауна.',
      image: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
      rating: 4.7,
      category: 'lake',
      price: '80 000 ₸',
    },
    {
      id: 3,
      name: 'Түркістан көне қалашығы',
      location: 'Түркістан облысы',
      description: 'ЮНЕСКО-ның Бүкіләлемдік мұра тізіміне енген тарихи ескерткіш. Ходжа Ахмет Яссауи кесенесі - ортағасырлық архитектураның шедеврі.',
      image: 'https://images.unsplash.com/photo-1548013146-72479768bada?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
      rating: 4.9,
      category: 'history',
      price: '30 000 ₸',
    },
    {
      id: 4,
      name: 'Бурабай',
      location: 'Ақмола облысы',
      description: '"Қазақстан Швейцариясы" деп аталатын керемет табиғи аймақ. Орманды таулар мен мөлдір көлдер.',
      image: 'https://images.unsplash.com/photo-1501785888041-af3ef285b470?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
      rating: 4.8,
      category: 'nature',
      price: '45 000 ₸',
    },
    {
      id: 5,
      name: 'Шымбұлақ',
      location: 'Алматы облысы',
      description: 'Іле-Алатау ұлттық паркіндегі танымал тау шаңғысы курорты. Қысқы және жазғы демалысқа арналған керемет орын.',
      image: 'https://images.unsplash.com/photo-1551524559-8af4e6624178?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
      rating: 4.6,
      category: 'mountain',
      price: '60 000 ₸',
    },
    {
      id: 6,
      name: 'Алакөл көлі',
      location: 'Жетісу облысы',
      description: 'Қазақстанның шығысындағы тұзды көл. Емдік қасиеттері бар, жаздың ыстық күндерінде демалуға керемет орын.',
      image: 'https://images.unsplash.com/photo-1439066615861-d1af74d74000?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
      rating: 4.5,
      category: 'lake',
      price: '40 000 ₸',
    },
    {
      id: 7,
      name: 'Сарайшық',
      location: 'Атырау облысы',
      description: 'Алтын Орданың бұрынғы астанасы. Археологиялық қазбалар мен тарихи ескерткіштер.',
      image: 'https://images.unsplash.com/photo-1599940824399-b87987ce0799?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
      rating: 4.4,
      category: 'history',
      price: '35 000 ₸',
    },
    {
      id: 8,
      name: 'Қорғалжын қорығы',
      location: 'Ақмола облысы',
      description: 'ЮНЕСКО-ның Бүкіләлемдік мұра тізіміне енген биосфералық қорық. Құстарды бақылауға арналған ең жақсы орын.',
      image: 'https://images.unsplash.com/photo-1441974231531-c6227db76b6e?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
      rating: 4.7,
      category: 'nature',
      price: '25 000 ₸',
    },
  ]

  const filteredPlaces = activeCategory === 'all'
    ? places
    : places.filter((place) => place.category === activeCategory)

  return (
    <section
      id="places"
      ref={sectionRef}
      className="py-20 md:py-32 bg-white"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div
          className={`text-center mb-16 transition-all duration-1000 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <span className="inline-block px-4 py-2 bg-teal-100 text-teal-600 rounded-full text-sm font-semibold mb-6">
            Туристік нысандар
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-slate-800 mb-6">
            Қазақстанның <span className="gradient-text">көрнекті жерлері</span>
          </h2>
          <p className="text-slate-600 text-lg max-w-2xl mx-auto">
            Біз сізге Қазақстанның ең әдемі және тарихи маңызы бар жерлерін ұсынамыз.
            Әр нысан - бұл есте қаларлық саяхат.
          </p>
        </div>

        {/* Category Filter */}
        <div
          className={`flex flex-wrap justify-center gap-3 mb-12 transition-all duration-1000 delay-200 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setActiveCategory(category.id)}
              className={`flex items-center space-x-2 px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                activeCategory === category.id
                  ? 'bg-gradient-to-r from-sky-500 to-teal-500 text-white shadow-lg shadow-sky-500/30'
                  : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
              }`}
            >
              <category.icon className="w-4 h-4" />
              <span>{category.name}</span>
            </button>
          ))}
        </div>

        {/* Places Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredPlaces.map((place, index) => (
            <div
              key={place.id}
              className={`tourist-card group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
              style={{ transitionDelay: `${index * 100 + 300}ms` }}
            >
              {/* Image */}
              <div className="relative h-48 overflow-hidden">
                <img
                  src={place.image}
                  alt={place.name}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute top-3 right-3 bg-white/90 backdrop-blur-sm px-2 py-1 rounded-lg flex items-center space-x-1">
                  <Star className="w-4 h-4 text-yellow-400 fill-yellow-400" />
                  <span className="text-sm font-semibold text-slate-800">{place.rating}</span>
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>

              {/* Content */}
              <div className="p-5">
                <div className="flex items-center space-x-1 text-slate-500 text-sm mb-2">
                  <MapPin className="w-4 h-4" />
                  <span>{place.location}</span>
                </div>
                <h3 className="text-lg font-bold text-slate-800 mb-2 group-hover:text-sky-500 transition-colors">
                  {place.name}
                </h3>
                <p className="text-slate-600 text-sm line-clamp-2 mb-4">
                  {place.description}
                </p>
                <div className="flex items-center justify-between">
                  <span className="text-lg font-bold text-teal-500">{place.price}</span>
                  <button className="flex items-center space-x-1 text-sky-500 hover:text-sky-600 font-medium text-sm group/btn">
                    <span>Толығырақ</span>
                    <ArrowRight className="w-4 h-4 transition-transform group-hover/btn:translate-x-1" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* View All Button */}
        <div
          className={`text-center mt-12 transition-all duration-1000 delay-700 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <button className="inline-flex items-center space-x-2 px-8 py-4 bg-gradient-to-r from-sky-500 to-teal-500 text-white rounded-full font-semibold hover:shadow-lg hover:shadow-sky-500/30 transition-all duration-300 transform hover:scale-105">
            <span>Барлық нысандарды қарау</span>
            <ArrowRight className="w-5 h-5" />
          </button>
        </div>
      </div>
    </section>
  )
}

export default TouristPlaces
