import { useState, useRef, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { MoreVertical, Users, Award, Image } from 'lucide-react'

const QuickMenu = () => {
  const [isOpen, setIsOpen] = useState(false)
  const menuRef = useRef(null)

  const quickLinks = [
    {
      name: 'Faculties',
      path: '/community',
      icon: Users,
      description: 'View faculty members'
    },
    {
      name: 'Office Bearers',
      path: '/community',
      icon: Award,
      description: 'Student representatives'
    },
    {
      name: 'Gallery',
      path: '/gallery',
      icon: Image,
      description: 'Event photos & albums'
    }
  ]

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setIsOpen(false)
      }
    }

    document.addEventListener('mousedown', handleClickOutside)
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [])

  return (
    <div className="relative" ref={menuRef}>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="p-2 rounded-full hover:bg-light-grey transition-colors duration-200 text-deep-navy hover:text-teal-start"
        aria-label="Quick menu"
      >
        <MoreVertical size={20} />
      </button>

      {isOpen && (
        <div className="absolute right-0 mt-2 w-64 bg-white rounded-lg shadow-xl border border-gray-200 py-2 z-50 animate-fade-in">
          <div className="px-4 py-2 border-b border-gray-100">
            <h3 className="font-heading font-semibold text-deep-navy text-sm">Quick Access</h3>
          </div>
          
          {quickLinks.map((link) => {
            const IconComponent = link.icon
            return (
              <Link
                key={link.name}
                to={link.path}
                onClick={() => setIsOpen(false)}
                className="flex items-center px-4 py-3 hover:bg-light-grey transition-colors duration-200 group"
              >
                <div className="p-2 rounded-lg bg-teal-gradient/10 group-hover:bg-teal-gradient/20 transition-colors mr-3">
                  <IconComponent size={16} className="text-teal-start" />
                </div>
                <div>
                  <p className="font-medium text-deep-navy text-sm">{link.name}</p>
                  <p className="text-xs text-slate-grey">{link.description}</p>
                </div>
              </Link>
            )
          })}
        </div>
      )}
    </div>
  )
}

export default QuickMenu