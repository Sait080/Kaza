import { MapPin, Phone, Mail, Facebook, Instagram, Twitter, Youtube, ArrowUp } from 'lucide-react'

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  const footerLinks = {
    company: [
      { name: 'Біз туралы', href: '#about' },
      { name: 'Туристік нысандар', href: '#places' },
      { name: 'Курстар', href: '#courses' },
      { name: 'Галерея', href: '#gallery' },
    ],
    services: [
      { name: 'Тур брондау', href: '#contact' },
      { name: 'Гид қызметі', href: '#contact' },
      { name: 'Трансфер', href: '#contact' },
      { name: 'Қонақ үй', href: '#contact' },
    ],
    support: [
      { name: 'Жиі қойылатын сұрақтар', href: '#' },
      { name: 'Қолдау қызметі', href: '#contact' },
      { name: 'Құпиялылық саясаты', href: '#' },
      { name: 'Қызмет көрсету шарттары', href: '#' },
    ],
  }

  const socialLinks = [
    { icon: Facebook, href: '#', label: 'Facebook' },
    { icon: Instagram, href: '#', label: 'Instagram' },
    { icon: Twitter, href: '#', label: 'Twitter' },
    { icon: Youtube, href: '#', label: 'Youtube' },
  ]

  return (
    <footer className="footer-gradient text-white">
      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-12">
          {/* Brand */}
          <div className="lg:col-span-2">
            <a href="#hero" className="flex items-center space-x-2 mb-6">
              <div className="p-2 bg-gradient-to-r from-sky-500 to-teal-500 rounded-lg">
                <MapPin className="w-6 h-6 text-white" />
              </div>
              <span className="text-2xl font-bold">
                Qaz<span className="text-sky-400">Tourism</span>
              </span>
            </a>
            <p className="text-slate-400 mb-6 max-w-sm">
              Қазақстандың ең әдемі туристік нысандарын ашыңыз. Біз сізге есте қаларлық
              саяхатты ұйымдастыруға көмектесеміз.
            </p>

            {/* Contact Info */}
            <div className="space-y-3">
              <div className="flex items-center space-x-3 text-slate-400">
                <MapPin className="w-5 h-5 text-sky-400" />
                <span>Алматы қаласы, Абай даңғылы 50</span>
              </div>
              <div className="flex items-center space-x-3 text-slate-400">
                <Phone className="w-5 h-5 text-teal-400" />
                <span>+7 (727) 123-45-67</span>
              </div>
              <div className="flex items-center space-x-3 text-slate-400">
                <Mail className="w-5 h-5 text-orange-400" />
                <span>info@qaztourism.kz</span>
              </div>
            </div>
          </div>

          {/* Links */}
          <div>
            <h4 className="text-lg font-semibold mb-6">Компания</h4>
            <ul className="space-y-3">
              {footerLinks.company.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-slate-400 hover:text-white transition-colors duration-200"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-6">Қызметтер</h4>
            <ul className="space-y-3">
              {footerLinks.services.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-slate-400 hover:text-white transition-colors duration-200"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-6">Қолдау</h4>
            <ul className="space-y-3">
              {footerLinks.support.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-slate-400 hover:text-white transition-colors duration-200"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0">
            {/* Copyright */}
            <p className="text-slate-400 text-sm">
              © 2024 QazTourism. Барлық құқықтар қорғалған.
            </p>

            {/* Social Links */}
            <div className="flex items-center space-x-4">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  aria-label={social.label}
                  className="w-10 h-10 bg-slate-800 hover:bg-sky-500 rounded-full flex items-center justify-center transition-colors duration-300"
                >
                  <social.icon className="w-5 h-5" />
                </a>
              ))}
            </div>

            {/* Scroll to Top */}
            <button
              onClick={scrollToTop}
              className="flex items-center space-x-2 text-slate-400 hover:text-white transition-colors duration-200"
            >
              <span className="text-sm">Жоғарыға</span>
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
