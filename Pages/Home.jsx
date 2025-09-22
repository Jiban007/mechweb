import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { ChevronLeft, ChevronRight, Users, Trophy, Image, ArrowRight, GraduationCap, BookOpen, Award, Microscope } from 'lucide-react'
import { motion } from 'framer-motion'
import { fadeIn, slideUp } from '../utils/motion'
import { useLanguage } from '../contexts/LanguageContext'

const Home = () => {
  const [currentSlide, setCurrentSlide] = useState(0)
  const { t } = useLanguage()

  const events = [
    {
      id: 1,
      title: 'Vishwakarma Puja Celebration',
      date: 'September 17, 2024',
      image: '/api/placeholder/400/250',
      description: 'Annual celebration honoring Lord Vishwakarma'
    },
    {
      id: 2,
      title: 'IoT Symposium 2024',
      date: 'August 15, 2024',
      image: '/api/placeholder/400/250',
      description: 'Technical symposium on Internet of Things'
    },
    {
      id: 3,
      title: 'ATAL FDP Workshop',
      date: 'July 20, 2024',
      image: '/api/placeholder/400/250',
      description: 'Faculty Development Program on emerging technologies'
    },
    {
      id: 4,
      title: 'Abhiyantrix Tech Fest',
      date: 'June 10, 2024',
      image: '/api/placeholder/400/250',
      description: 'Annual technical festival with competitions'
    }
  ]

  const quickLinks = [
    {
      title: t('gallery'),
      description: 'Explore our event photos and memories',
      icon: Image,
      path: '/gallery',
      color: 'bg-blue-500'
    },
    {
      title: t('achievements'),
      description: 'View placement records and success stories',
      icon: Trophy,
      path: '/achievements',
      color: 'bg-green-500'
    },
    {
      title: t('community'),
      description: 'Meet our faculty and student representatives',
      icon: Users,
      path: '/community',
      color: 'bg-purple-500'
    }
  ]

  const stats = [
    {
      icon: GraduationCap,
      value: '200+',
      label: t('diplomaStudents'),
      color: 'bg-blue-500'
    },
    {
      icon: BookOpen,
      value: '400+',
      label: t('btechStudents'),
      color: 'bg-green-500'
    },
    {
      icon: Award,
      value: '50+',
      label: t('mtechStudents'),
      color: 'bg-purple-500'
    },
    {
      icon: Microscope,
      value: '20+',
      label: t('phdScholars'),
      color: 'bg-orange-500'
    }
  ]

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % events.length)
    }, 5000)
    return () => clearInterval(timer)
  }, [])

  const nextSlide = () => setCurrentSlide((prev) => (prev + 1) % events.length)
  const prevSlide = () => setCurrentSlide((prev) => (prev - 1 + events.length) % events.length)

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <motion.section
        className="bg-deep-navy text-white section-padding"
        initial="hidden"
        animate="visible"
        variants={fadeIn}
      >
        <div className="container-max text-center">
          <div className="flex justify-center items-center space-x-6 mb-8">
            <img src="/mes-logo.png" alt="MES Logo" className="h-20 w-20" />
            <img src="/igit-logo.png" alt="IGIT Logo" className="h-20 w-20" />
          </div>

          <motion.h1
            className="text-4xl md:text-6xl font-heading font-bold mb-6"
            variants={slideUp}
          >
            {t('heroTitle')}
          </motion.h1>

          <motion.p
            className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto text-gray-300"
            variants={slideUp}
          >
            {t('heroSubtitle')}
          </motion.p>
        </div>
      </motion.section>

      {/* MES by Numbers */}
      <section className="section-padding bg-white">
        <div className="container-max">
          <motion.h2
            className="text-3xl font-heading font-bold text-center text-deep-navy mb-12"
            initial="hidden"
            whileInView="visible"
            variants={fadeIn}
          >
            {t('mesByNumbers')}
          </motion.h2>

          <div className="grid md:grid-cols-4 gap-8">
            {stats.map((stat, index) => {
              const IconComponent = stat.icon
              return (
                <motion.div
                  key={stat.label}
                  className="bg-white border border-gray-200 rounded-xl p-6 text-center hover:border-teal-start hover:scale-105 transition-all duration-300"
                  initial="hidden"
                  whileInView="visible"
                  variants={slideUp}
                  transition={{ delay: index * 0.1 }}
                >
                  <div className={`w-16 h-16 ${stat.color} rounded-full flex items-center justify-center mx-auto mb-4`}>
                    <IconComponent className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="text-3xl font-heading font-bold text-deep-navy mb-2">{stat.value}</h3>
                  <p className="text-slate-grey font-medium">{stat.label}</p>
                </motion.div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Quick Links */}
      <section className="section-padding bg-light-grey">
        <div className="container-max">
          <motion.h2
            className="text-3xl font-heading font-bold text-center text-deep-navy mb-12"
            initial="hidden"
            whileInView="visible"
            variants={fadeIn}
          >
            {t('exploreTitle')}
          </motion.h2>

          <div className="grid md:grid-cols-3 gap-8">
            {quickLinks.map((link, index) => {
              const IconComponent = link.icon
              return (
                <motion.div
                  key={link.title}
                  initial="hidden"
                  whileInView="visible"
                  variants={slideUp}
                  transition={{ delay: index * 0.1 }}
                >
                  <Link to={link.path} className="block bg-white rounded-xl border border-gray-200 p-6 transition-all duration-300 hover:border-teal-start hover:scale-105 group">
                    <div className={`w-12 h-12 ${link.color} rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                      <IconComponent className="h-6 w-6 text-white" />
                    </div>
                    <h3 className="text-xl font-heading font-semibold text-deep-navy mb-2">{link.title}</h3>
                    <p className="text-slate-grey">{link.description}</p>
                  </Link>
                </motion.div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Latest Events Slider */}
      <section className="section-padding bg-white">
        <div className="container-max">
          <motion.h2
            className="text-3xl font-heading font-bold text-center text-deep-navy mb-12"
            initial="hidden"
            whileInView="visible"
            variants={fadeIn}
          >
            {t('latestEvents')}
          </motion.h2>

          <div className="relative">
            <div className="overflow-hidden rounded-xl">
              <div
                className="flex transition-transform duration-500 ease-in-out"
                style={{ transform: `translateX(-${currentSlide * 100}%)` }}
              >
                {events.map((event) => (
                  <div key={event.id} className="w-full flex-shrink-0">
                    <div className="bg-white rounded-xl border border-gray-200 overflow-hidden hover:border-teal-start hover:scale-105 transition-all duration-300">
                      <img
                        src={event.image}
                        alt={event.title}
                        className="w-full h-64 object-cover"
                      />
                      <div className="p-6">
                        <h3 className="text-xl font-heading font-semibold text-deep-navy mb-2">{event.title}</h3>
                        <p className="text-teal-start font-medium mb-2">{event.date}</p>
                        <p className="text-slate-grey">{event.description}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Navigation Buttons */}
            <button
              onClick={prevSlide}
              className="absolute left-4 top-1/2 -translate-y-1/2 bg-white border border-gray-200 hover:border-teal-start hover:bg-teal-start hover:text-white rounded-full p-2 transition-all duration-300"
            >
              <ChevronLeft className="h-6 w-6" />
            </button>

            <button
              onClick={nextSlide}
              className="absolute right-4 top-1/2 -translate-y-1/2 bg-white border border-gray-200 hover:border-teal-start hover:bg-teal-start hover:text-white rounded-full p-2 transition-all duration-300"
            >
              <ChevronRight className="h-6 w-6" />
            </button>

            {/* Dots Indicator */}
            <div className="flex justify-center mt-6 space-x-2">
              {events.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentSlide(index)}
                  className={`w-3 h-3 rounded-full transition-all ${
                    currentSlide === index ? 'bg-teal-start' : 'bg-gray-300'
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Home