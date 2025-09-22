import { useState, useEffect } from 'react'
import { Mail, Linkedin, Instagram, Cloud, Sun, CloudRain, Snowflake } from 'lucide-react'
import { useLanguage } from '../contexts/LanguageContext'

const Footer = () => {
  const { t } = useLanguage()
  const [weather, setWeather] = useState(null)
  const [loading, setLoading] = useState(true)

  const socialLinks = [
    {
      name: 'Email',
      icon: Mail,
      href: 'mailto:mes@igitsarang.ac.in',
      color: 'hover:text-red-400'
    },
    {
      name: 'LinkedIn',
      icon: Linkedin,
      href: '#',
      color: 'hover:text-blue-400'
    },
    {
      name: 'Instagram',
      icon: Instagram,
      href: '#',
      color: 'hover:text-pink-400'
    }
  ]

  const getWeatherIcon = (condition) => {
    switch (condition?.toLowerCase()) {
      case 'clear':
      case 'sunny':
        return Sun
      case 'rain':
      case 'drizzle':
        return CloudRain
      case 'snow':
        return Snowflake
      default:
        return Cloud
    }
  }

  useEffect(() => {
    // Simulate weather API call with placeholder data
    const fetchWeather = async () => {
      try {
        // Replace with actual OpenWeather API call
        // const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=Sarang,IN&appid=${API_KEY}&units=metric`)
        // const data = await response.json()

        // Placeholder weather data
        setTimeout(() => {
          setWeather({
            temperature: 28,
            condition: 'Clear',
            location: 'Sarang, Odisha'
          })
          setLoading(false)
        }, 1000)
      } catch (error) {
        console.error('Weather fetch error:', error)
        setLoading(false)
      }
    }

    fetchWeather()
  }, [])

  const WeatherIcon = weather ? getWeatherIcon(weather.condition) : Cloud

  return (
    <footer className="bg-deep-navy text-white py-8">
      <div className="container-max px-4">
        <div className="flex flex-col items-center space-y-6">
          {/* Logo Section */}
          <div className="flex items-center space-x-3">
            <img src="/mes-logo.png" alt="MES Logo" className="h-12 w-12" />
            <img src="/igit-logo.png" alt="IGIT Logo" className="h-12 w-12" />
            <div>
              <h3 className="text-xl font-heading font-bold">MES IGIT</h3>
              <p className="text-sm text-gray-300">Mechanical Engineering Society</p>
            </div>
          </div>

          {/* Weather Widget */}
          {weather && (
            <div className="flex items-center space-x-3 bg-white/10 rounded-lg px-4 py-2">
              <WeatherIcon size={20} className="text-teal-start" />
              <div className="text-sm">
                <span className="font-medium">{weather.temperature}°C</span>
                <span className="mx-2">•</span>
                <span>{weather.condition}</span>
                <span className="mx-2">•</span>
                <span className="text-gray-300">{weather.location}</span>
              </div>
            </div>
          )}

          {loading && (
            <div className="flex items-center space-x-2 text-gray-400 text-sm">
              <div className="animate-spin rounded-full h-4 w-4 border-2 border-teal-start border-t-transparent"></div>
              <span>Loading weather...</span>
            </div>
          )}

          {/* Social Links */}
          <div className="flex items-center space-x-6">
            {socialLinks.map((social) => {
              const IconComponent = social.icon
              return (
                <a
                  key={social.name}
                  href={social.href}
                  className={`p-2 rounded-full bg-white/10 transition-all duration-300 hover:bg-white/20 hover:scale-110 ${social.color}`}
                  aria-label={social.name}
                >
                  <IconComponent size={20} />
                </a>
              )
            })}
          </div>

          {/* Copyright */}
          <div className="text-center text-sm text-gray-300 border-t border-gray-600 pt-6 w-full">
            <p>&copy; {new Date().getFullYear()} {t('copyright')}</p>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer