import { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { Menu, X, ChevronDown, Globe } from 'lucide-react'
import { useLanguage } from '../contexts/LanguageContext'

const Header = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [isLangOpen, setIsLangOpen] = useState(false)
  const location = useLocation()
  const { language, setLanguage, t } = useLanguage()

  const navLinks = [
    { name: t('home'), path: '/' },
    { name: t('about'), path: '/about' },
    { name: t('community'), path: '/community' },
    { name: t('courseHub'), path: '/course-hub' },
    { name: t('gallery'), path: '/gallery' },
    { name: t('achievements'), path: '/achievements' },
  ]

  const languages = [
    { code: 'en', name: 'English'},
    { code: 'hi', name: 'हिंदी' },
    { code: 'or', name: 'ଓଡ଼ିଆ' }
  ]

  const isActive = (path) => location.pathname === path

  const handleLanguageChange = (langCode) => {
    setLanguage(langCode)
    setIsLangOpen(false)
  }

  return (
    <header className="fixed top-0 left-0 right-0 bg-white shadow-md z-50">
      <div className="container-max">
        <div className="flex items-center justify-between h-16 px-4">
          {/* Language Switcher - Left */}
          <div className="relative">
            <button
              onClick={() => setIsLangOpen(!isLangOpen)}
              className="flex items-center space-x-2 px-3 py-2 text-sm font-medium text-deep-navy hover:text-teal-start transition-colors duration-200"
            >
              <Globe size={16} />
              <span>{languages.find(lang => lang.code === language)?.flag}</span>
              <span className="hidden sm:inline">{languages.find(lang => lang.code === language)?.name}</span>
              <ChevronDown size={14} className={`transition-transform ${isLangOpen ? 'rotate-180' : ''}`} />
            </button>
            
            {isLangOpen && (
              <div className="absolute top-full left-0 mt-2 bg-white border border-gray-200 rounded-lg shadow-lg py-2 min-w-[120px] z-50">
                {languages.map((lang) => (
                  <button
                    key={lang.code}
                    onClick={() => handleLanguageChange(lang.code)}
                    className={`w-full flex items-center space-x-2 px-4 py-2 text-sm hover:bg-gray-50 transition-colors ${
                      language === lang.code ? 'text-teal-start bg-gray-50' : 'text-deep-navy'
                    }`}
                  >
                    <span>{lang.flag}</span>
                    <span>{lang.name}</span>
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Logo Section - Center */}
          <Link to="/" className="flex items-center space-x-3">
            <div className="flex items-center space-x-2">
              <img src="./Pages/Image/MES LOGO_20240209_124406_0000.png" alt="MES Logo" className="h-10 w-10" />
              <img src="./Pages/Image/igit logo 15 cm.png" alt="IGIT Logo" className="h-10 w-10" />
            </div>
            <div className="hidden sm:block">
              <h1 className="text-xl font-heading font-bold text-deep-navy">
                MES IGIT
              </h1>
              <p className="text-xs text-slate-grey">Mechanical Engineering Society</p>
            </div>
          </Link>

          {/* Desktop Navigation - Right */}
          <div className="hidden lg:flex items-center space-x-6">
            <nav className="flex items-center space-x-6">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className={`font-medium transition-colors duration-200 hover:text-teal-start ${
                    isActive(link.path) ? 'text-teal-start border-b-2 border-teal-start' : 'text-deep-navy'
                  }`}
                >
                  {link.name}
                </Link>
              ))}
            </nav>

            {/* Join Alumni Network Button */}
            <Link
              to="#"
              className="bg-teal-start text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-deep-navy hover:scale-105 transition-all duration-200"
            >
              {t('joinAlumni')}
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden p-2 text-deep-navy hover:text-teal-start transition-colors"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="lg:hidden bg-white border-t border-gray-200">
            <nav className="py-4 space-y-2">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  onClick={() => setIsOpen(false)}
                  className={`block px-4 py-2 font-medium transition-colors duration-200 hover:bg-light-grey ${
                    isActive(link.path) ? 'text-teal-start bg-light-grey' : 'text-deep-navy'
                  }`}
                >
                  {link.name}
                </Link>
              ))}

              {/* Mobile Join Alumni Button */}
              <div className="px-4 py-2">
                <Link
                  to="#"
                  className="block w-full text-center bg-teal-start text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-deep-navy transition-colors duration-200"
                >
                  {t('joinAlumni')}
                </Link>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  )
}

export default Header