import { useState, useEffect, useRef } from 'react'
import { X, ChevronLeft, ChevronRight, Camera } from 'lucide-react'

interface GalleryImage {
  id: number
  src: string
  title: string
  location: string
  category: string
}

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState<GalleryImage | null>(null)
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
    { id: 'all', name: 'Барлығы' },
    { id: 'nature', name: 'Табиғат' },
    { id: 'city', name: 'Қалалар' },
    { id: 'culture', name: 'Мәдениет' },
    { id: 'adventure', name: 'Приключение' },
  ]

  const images: GalleryImage[] = [
    {
      id: 1,
      src: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
      title: 'Алматы таулары',
      location: 'Алматы облысы',
      category: 'nature',
    },
    {
      id: 2,
      src: 'https://images.unsplash.com/photo-1518005020951-eccb494ad742?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
      title: 'Астана қаласы',
      location: 'Астана',
      category: 'city',
    },
    {
      id: 3,
      src: 'https://images.unsplash.com/photo-1469474968028-56623f02e42e?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
      title: 'Іле-Алатау',
      location: 'Алматы облысы',
      category: 'nature',
    },
    {
      id: 4,
      src: 'https://images.unsplash.com/photo-1548013146-72479768bada?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
      title: 'Түркістан',
      location: 'Түркістан облысы',
      category: 'culture',
    },
    {
      id: 5,
      src: 'https://images.unsplash.com/photo-1551524559-8af4e6624178?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
      title: 'Шымбұлақ',
      location: 'Алматы облысы',
      category: 'adventure',
    },
    {
      id: 6,
      src: 'https://images.unsplash.com/photo-1501785888041-af3ef285b470?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
      title: 'Бурабай',
      location: 'Ақмола облысы',
      category: 'nature',
    },
    {
      id: 7,
      src: 'https://images.unsplash.com/photo-1480714378408-67cf0d13bc1b?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
      title: 'Нұр-Сұлтан түнде',
      location: 'Астана',
      category: 'city',
    },
    {
      id: 8,
      src: 'https://images.unsplash.com/photo-1439066615861-d1af74d74000?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
      title: 'Алакөл көлі',
      location: 'Жетісу облысы',
      category: 'nature',
    },
    {
      id: 9,
      src: 'https://images.unsplash.com/photo-1599940824399-b87987ce0799?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
      title: 'Тарихи ескерткіш',
      location: 'Түркістан облысы',
      category: 'culture',
    },
    {
      id: 10,
      src: 'https://images.unsplash.com/photo-1526772662000-3f88f10405ff?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
      title: 'Тау шаңғысы',
      location: 'Алматы облысы',
      category: 'adventure',
    },
    {
      id: 11,
      src: 'https://images.unsplash.com/photo-1441974231531-c6227db76b6e?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
      title: 'Қорғалжын',
      location: 'Ақмола облысы',
      category: 'nature',
    },
    {
      id: 12,
      src: 'https://images.unsplash.com/photo-1477959858617-67f85cf4f1df?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
      title: 'Алматы қаласы',
      location: 'Алматы',
      category: 'city',
    },
  ]

  const filteredImages = activeCategory === 'all'
    ? images
    : images.filter((img) => img.category === activeCategory)

  const currentIndex = selectedImage
    ? filteredImages.findIndex((img) => img.id === selectedImage.id)
    : -1

  const goToPrevious = () => {
    if (currentIndex > 0) {
      setSelectedImage(filteredImages[currentIndex - 1])
    }
  }

  const goToNext = () => {
    if (currentIndex < filteredImages.length - 1) {
      setSelectedImage(filteredImages[currentIndex + 1])
    }
  }

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (selectedImage) {
        if (e.key === 'Escape') setSelectedImage(null)
        if (e.key === 'ArrowLeft') goToPrevious()
        if (e.key === 'ArrowRight') goToNext()
      }
    }

    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [selectedImage, currentIndex])

  return (
    <section
      id="gallery"
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
          <span className="inline-block px-4 py-2 bg-yellow-100 text-yellow-600 rounded-full text-sm font-semibold mb-6">
            Фотогалерея
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-slate-800 mb-6">
            Көрнекті <span className="gradient-text">суреттер</span>
          </h2>
          <p className="text-slate-600 text-lg max-w-2xl mx-auto">
            Қазақстанның ең әдемі жерлерінің суреттері. Табиғаттың сұлулығын
            тамашалаңыз.
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
              className={`px-6 py-2 rounded-full font-medium transition-all duration-300 ${
                activeCategory === category.id
                  ? 'bg-gradient-to-r from-sky-500 to-teal-500 text-white shadow-lg shadow-sky-500/30'
                  : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
              }`}
            >
              {category.name}
            </button>
          ))}
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {filteredImages.map((image, index) => (
            <div
              key={image.id}
              className={`group relative aspect-square overflow-hidden rounded-2xl cursor-pointer transition-all duration-500 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              } ${index === 0 || index === 5 ? 'md:col-span-2 md:row-span-2' : ''}`}
              style={{ transitionDelay: `${index * 50 + 300}ms` }}
              onClick={() => setSelectedImage(image)}
            >
              <img
                src={image.src}
                alt={image.title}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="absolute bottom-0 left-0 right-0 p-4 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                <div className="flex items-center space-x-2 text-white/80 text-sm mb-1">
                  <Camera className="w-4 h-4" />
                  <span>{image.location}</span>
                </div>
                <h3 className="text-white font-semibold">{image.title}</h3>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      {selectedImage && (
        <div
          className="fixed inset-0 z-50 bg-black/95 backdrop-blur-sm flex items-center justify-center"
          onClick={() => setSelectedImage(null)}
        >
          {/* Close Button */}
          <button
            onClick={() => setSelectedImage(null)}
            className="absolute top-4 right-4 w-12 h-12 bg-white/10 hover:bg-white/20 rounded-full flex items-center justify-center text-white transition-colors z-10"
          >
            <X className="w-6 h-6" />
          </button>

          {/* Navigation */}
          <button
            onClick={(e) => {
              e.stopPropagation()
              goToPrevious()
            }}
            disabled={currentIndex === 0}
            className={`absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-white/10 hover:bg-white/20 rounded-full flex items-center justify-center text-white transition-all ${
              currentIndex === 0 ? 'opacity-30 cursor-not-allowed' : ''
            }`}
          >
            <ChevronLeft className="w-6 h-6" />
          </button>

          <button
            onClick={(e) => {
              e.stopPropagation()
              goToNext()
            }}
            disabled={currentIndex === filteredImages.length - 1}
            className={`absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-white/10 hover:bg-white/20 rounded-full flex items-center justify-center text-white transition-all ${
              currentIndex === filteredImages.length - 1 ? 'opacity-30 cursor-not-allowed' : ''
            }`}
          >
            <ChevronRight className="w-6 h-6" />
          </button>

          {/* Image */}
          <div
            className="max-w-5xl max-h-[80vh] px-16"
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src={selectedImage.src}
              alt={selectedImage.title}
              className="max-w-full max-h-[70vh] object-contain rounded-lg"
            />
            <div className="mt-4 text-center">
              <h3 className="text-white text-xl font-semibold">{selectedImage.title}</h3>
              <p className="text-white/60 flex items-center justify-center space-x-2 mt-1">
                <Camera className="w-4 h-4" />
                <span>{selectedImage.location}</span>
              </p>
            </div>
          </div>

          {/* Image Counter */}
          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 text-white/60 text-sm">
            {currentIndex + 1} / {filteredImages.length}
          </div>
        </div>
      )}
    </section>
  )
}

export default Gallery
