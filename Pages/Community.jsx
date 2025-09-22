import { useState } from 'react'
import { motion } from 'framer-motion'
import { ChevronDown, ChevronUp, Mail, Phone, Award, BookOpen } from 'lucide-react'
import { fadeIn, slideUp } from '../utils/motion'
import { facultyData, officeBearers } from '../Data/Mockdata'

const Community = () => {
  const [expandedYear, setExpandedYear] = useState('Final Year')

  const toggleYear = (year) => {
    setExpandedYear(expandedYear === year ? '' : year)
  }

  return (
    <div className="min-h-screen">
      {/* Header Section */}
      <motion.section
        className="bg-deep-navy text-white section-padding"
        initial="hidden"
        animate="visible"
        variants={fadeIn}
      >
        <div className="container-max text-center">
          <motion.h1
            className="text-4xl md:text-5xl font-heading font-bold mb-6"
            variants={slideUp}
          >
            Our Community
          </motion.h1>
          <motion.p
            className="text-xl max-w-3xl mx-auto"
            variants={slideUp}
          >
            Meet our dedicated faculty members and student representatives who drive MES forward
          </motion.p>
        </div>
      </motion.section>

      {/* Faculty Section */}
      <section className="section-padding">
        <div className="container-max">
          <motion.h2
            className="text-3xl font-heading font-bold text-center text-deep-navy mb-12"
            initial="hidden"
            whileInView="visible"
            variants={fadeIn}
          >
            Faculty Members
          </motion.h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {facultyData.map((faculty, index) => (
              <motion.div
                key={faculty.id}
                className="card group"
                initial="hidden"
                whileInView="visible"
                variants={slideUp}
                transition={{ delay: index * 0.1 }}
              >
                <div className="text-center mb-6">
                  <img
                    src={faculty.image}
                    alt={faculty.name}
                    className="w-24 h-24 rounded-full mx-auto object-cover border-4 border-teal-start mb-4"
                  />
                  <h3 className="text-xl font-heading font-semibold text-deep-navy mb-1">{faculty.name}</h3>
                  <p className="text-teal-start font-medium mb-2">{faculty.designation}</p>
                </div>

                <div className="space-y-3">
                  <div className="flex items-center text-sm text-slate-grey">
                    <BookOpen className="h-4 w-4 mr-2 text-teal-start" />
                    <span>{faculty.qualification}</span>
                  </div>

                  <div className="flex items-center text-sm text-slate-grey">
                    <Award className="h-4 w-4 mr-2 text-teal-start" />
                    <span>{faculty.expertise}</span>
                  </div>

                  <div className="flex items-center text-sm text-slate-grey">
                    <Mail className="h-4 w-4 mr-2 text-teal-start" />
                    <a href={`mailto:${faculty.email}`} className="hover:text-teal-start transition-colors">
                      {faculty.email}
                    </a>
                  </div>

                  {faculty.phone && (
                    <div className="flex items-center text-sm text-slate-grey">
                      <Phone className="h-4 w-4 mr-2 text-teal-start" />
                      <span>{faculty.phone}</span>
                    </div>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Office Bearers Section */}
      <section className="section-padding bg-light-grey">
        <div className="container-max">
          <motion.h2
            className="text-3xl font-heading font-bold text-center text-deep-navy mb-12"
            initial="hidden"
            whileInView="visible"
            variants={fadeIn}
          >
            Office Bearers
          </motion.h2>

          <div className="space-y-6">
            {Object.entries(officeBearers).map(([year, students], yearIndex) => (
              <motion.div
                key={year}
                className="bg-white rounded-xl border border-gray-200 overflow-hidden hover:border-teal-start transition-colors duration-300"
                initial="hidden"
                whileInView="visible"
                variants={slideUp}
                transition={{ delay: yearIndex * 0.1 }}
              >
                <button
                  onClick={() => toggleYear(year)}
                  className="w-full px-6 py-4 bg-deep-navy text-white flex items-center justify-between hover:bg-opacity-90 transition-colors"
                >
                  <h3 className="text-xl font-heading font-semibold">{year}</h3>
                  {expandedYear === year ?
                    <ChevronUp className="h-5 w-5" /> :
                    <ChevronDown className="h-5 w-5" />
                  }
                </button>

                {expandedYear === year && (
                  <div className="p-6">
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                      {students.map((student, index) => (
                        <motion.div
                          key={student.id}
                          className="bg-light-grey rounded-lg p-4 border border-gray-200 hover:border-teal-start hover:scale-105 transition-all duration-300"
                          initial={{ opacity: 0, y: 20 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ delay: index * 0.05 }}
                        >
                          <div className="text-center">
                            <img
                              src={student.image}
                              alt={student.name}
                              className="w-16 h-16 rounded-full mx-auto object-cover border-2 border-teal-start mb-3"
                            />
                            <h4 className="font-heading font-semibold text-deep-navy mb-1">{student.name}</h4>
                            <p className="text-teal-start font-medium text-sm mb-1">{student.role}</p>
                            <p className="text-slate-grey text-xs">{student.year}</p>
                          </div>
                        </motion.div>
                      ))}
                    </div>
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}

export default Community