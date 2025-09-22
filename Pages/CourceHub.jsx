import { useState } from 'react'
import { motion } from 'framer-motion'
import { BookOpen, FileText, Newspaper, ExternalLink, ChevronDown, ChevronRight } from 'lucide-react'
import { fadeIn, slideUp } from '../utils/motion'
import { useLanguage } from '../contexts/LanguageContext'

const CourseHub = () => {
  const { t } = useLanguage()
  const [expandedSemester, setExpandedSemester] = useState(null)
  const [expandedYear, setExpandedYear] = useState(null)

  const semesterNotes = [
    {
      semester: 'Semester 1',
      subjects: [
        { name: 'Engineering Mathematics I', link: 'https://drive.google.com/drive/folders/math1' },
        { name: 'Engineering Physics', link: 'https://drive.google.com/drive/folders/physics' },
        { name: 'Engineering Chemistry', link: 'https://drive.google.com/drive/folders/chemistry' },
        { name: 'Engineering Graphics', link: 'https://drive.google.com/drive/folders/graphics' }
      ]
    },
    {
      semester: 'Semester 2',
      subjects: [
        { name: 'Engineering Mathematics II', link: 'https://drive.google.com/drive/folders/math2' },
        { name: 'Basic Electrical Engineering', link: 'https://drive.google.com/drive/folders/electrical' },
        { name: 'Programming in C', link: 'https://drive.google.com/drive/folders/programming' },
        { name: 'Workshop Technology', link: 'https://drive.google.com/drive/folders/workshop' }
      ]
    },
    {
      semester: 'Semester 3',
      subjects: [
        { name: 'Strength of Materials', link: 'https://drive.google.com/drive/folders/som' },
        { name: 'Thermodynamics', link: 'https://drive.google.com/drive/folders/thermo' },
        { name: 'Fluid Mechanics', link: 'https://drive.google.com/drive/folders/fluid' },
        { name: 'Manufacturing Processes', link: 'https://drive.google.com/drive/folders/manufacturing' }
      ]
    },
    {
      semester: 'Semester 4',
      subjects: [
        { name: 'Machine Design', link: 'https://drive.google.com/drive/folders/design' },
        { name: 'Heat Transfer', link: 'https://drive.google.com/drive/folders/heat' },
        { name: 'Theory of Machines', link: 'https://drive.google.com/drive/folders/tom' },
        { name: 'Material Science', link: 'https://drive.google.com/drive/folders/materials' }
      ]
    }
  ]

  const syllabusByYear = [
    {
      year: 'First Year',
      syllabi: [
        { name: 'B.Tech First Year Syllabus', link: 'https://drive.google.com/drive/folders/btech-1st' },
        { name: 'Diploma First Year Syllabus', link: 'https://drive.google.com/drive/folders/diploma-1st' }
      ]
    },
    {
      year: 'Second Year',
      syllabi: [
        { name: 'B.Tech Second Year Syllabus', link: 'https://drive.google.com/drive/folders/btech-2nd' },
        { name: 'Diploma Second Year Syllabus', link: 'https://drive.google.com/drive/folders/diploma-2nd' }
      ]
    },
    {
      year: 'Third Year',
      syllabi: [
        { name: 'B.Tech Third Year Syllabus', link: 'https://drive.google.com/drive/folders/btech-3rd' },
        { name: 'Diploma Third Year Syllabus', link: 'https://drive.google.com/drive/folders/diploma-3rd' }
      ]
    },
    {
      year: 'Fourth Year',
      syllabi: [
        { name: 'B.Tech Fourth Year Syllabus', link: 'https://drive.google.com/drive/folders/btech-4th' }
      ]
    }
  ]

  const toggleSemester = (index) => {
    setExpandedSemester(expandedSemester === index ? null : index)
  }

  const toggleYear = (index) => {
    setExpandedYear(expandedYear === index ? null : index)
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
            {t('courseHubTitle')}
          </motion.h1>
          <motion.p
            className="text-xl max-w-3xl mx-auto text-gray-300"
            variants={slideUp}
          >
            {t('courseHubSubtitle')}
          </motion.p>
        </div>
      </motion.section>

      {/* Academic Resources Section */}
      <section className="section-padding bg-white">
        <div className="container-max">
          <motion.h2
            className="text-3xl font-heading font-bold text-center text-deep-navy mb-12"
            initial="hidden"
            whileInView="visible"
            variants={fadeIn}
          >
            {t('academicResources')}
          </motion.h2>

          <div className="grid lg:grid-cols-3 gap-8">
            {/* Study Notes */}
            <motion.div
              className="bg-white border border-gray-200 rounded-xl p-6 hover:border-teal-start transition-all duration-300"
              initial="hidden"
              whileInView="visible"
              variants={slideUp}
            >
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-blue-500 rounded-lg flex items-center justify-center mr-4">
                  <BookOpen className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-2xl font-heading font-semibold text-deep-navy">{t('studyNotes')}</h3>
              </div>
              
              <p className="text-slate-grey mb-6">Comprehensive notes organized by semester and subject</p>
              
              <div className="space-y-3">
                {semesterNotes.map((semester, index) => (
                  <div key={index} className="border border-gray-200 rounded-lg">
                    <button
                      onClick={() => toggleSemester(index)}
                      className="w-full flex items-center justify-between p-4 text-left hover:bg-gray-50 transition-colors"
                    >
                      <span className="font-medium text-deep-navy">{semester.semester}</span>
                      {expandedSemester === index ? 
                        <ChevronDown className="h-4 w-4 text-teal-start" /> : 
                        <ChevronRight className="h-4 w-4 text-slate-grey" />
                      }
                    </button>
                    
                    {expandedSemester === index && (
                      <div className="px-4 pb-4 space-y-2">
                        {semester.subjects.map((subject, subIndex) => (
                          <a
                            key={subIndex}
                            href={subject.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center justify-between p-2 text-sm text-slate-grey hover:text-teal-start hover:bg-gray-50 rounded transition-colors"
                          >
                            <span>{subject.name}</span>
                            <ExternalLink className="h-3 w-3" />
                          </a>
                        ))}
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Syllabus */}
            <motion.div
              className="bg-white border border-gray-200 rounded-xl p-6 hover:border-teal-start transition-all duration-300"
              initial="hidden"
              whileInView="visible"
              variants={slideUp}
              transition={{ delay: 0.1 }}
            >
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-green-500 rounded-lg flex items-center justify-center mr-4">
                  <FileText className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-2xl font-heading font-semibold text-deep-navy">{t('syllabus')}</h3>
              </div>
              
              <p className="text-slate-grey mb-6">Complete syllabus documents organized by year</p>
              
              <div className="space-y-3">
                {syllabusByYear.map((year, index) => (
                  <div key={index} className="border border-gray-200 rounded-lg">
                    <button
                      onClick={() => toggleYear(index)}
                      className="w-full flex items-center justify-between p-4 text-left hover:bg-gray-50 transition-colors"
                    >
                      <span className="font-medium text-deep-navy">{year.year}</span>
                      {expandedYear === index ? 
                        <ChevronDown className="h-4 w-4 text-teal-start" /> : 
                        <ChevronRight className="h-4 w-4 text-slate-grey" />
                      }
                    </button>
                    
                    {expandedYear === index && (
                      <div className="px-4 pb-4 space-y-2">
                        {year.syllabi.map((syllabus, sylIndex) => (
                          <a
                            key={sylIndex}
                            href={syllabus.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center justify-between p-2 text-sm text-slate-grey hover:text-teal-start hover:bg-gray-50 rounded transition-colors"
                          >
                            <span>{syllabus.name}</span>
                            <ExternalLink className="h-3 w-3" />
                          </a>
                        ))}
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Newsletters */}
            <motion.div
              className="bg-white border border-gray-200 rounded-xl p-6 hover:border-teal-start hover:scale-105 transition-all duration-300 cursor-pointer group"
              initial="hidden"
              whileInView="visible"
              variants={slideUp}
              transition={{ delay: 0.2 }}
              onClick={() => window.open('https://drive.google.com/drive/folders/newsletters', '_blank')}
            >
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-purple-500 rounded-lg flex items-center justify-center mr-4 group-hover:scale-110 transition-transform">
                  <Newspaper className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-2xl font-heading font-semibold text-deep-navy">{t('newsletters')}</h3>
              </div>
              
              <p className="text-slate-grey mb-6">Monthly newsletters featuring department updates and achievements</p>
              
              <div className="space-y-3 mb-6">
                <div className="flex items-center text-sm text-slate-grey">
                  <div className="w-2 h-2 bg-teal-start rounded-full mr-3"></div>
                  <span>Monthly publications</span>
                </div>
                <div className="flex items-center text-sm text-slate-grey">
                  <div className="w-2 h-2 bg-teal-start rounded-full mr-3"></div>
                  <span>Department news</span>
                </div>
                <div className="flex items-center text-sm text-slate-grey">
                  <div className="w-2 h-2 bg-teal-start rounded-full mr-3"></div>
                  <span>Student achievements</span>
                </div>
                <div className="flex items-center text-sm text-slate-grey">
                  <div className="w-2 h-2 bg-teal-start rounded-full mr-3"></div>
                  <span>Event highlights</span>
                </div>
              </div>

              <div className="flex items-center justify-center text-teal-start font-medium group-hover:text-deep-navy transition-colors">
                <span>{t('accessResources')}</span>
                <ExternalLink className="ml-2 h-4 w-4" />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Additional Info Section */}
      <section className="section-padding bg-light-grey">
        <div className="container-max">
          <motion.div
            className="bg-white rounded-xl border border-gray-200 p-8 text-center hover:border-teal-start transition-colors duration-300"
            initial="hidden"
            whileInView="visible"
            variants={fadeIn}
          >
            <h3 className="text-2xl font-heading font-semibold text-deep-navy mb-4">
              Need Help Accessing Resources?
            </h3>
            <p className="text-slate-grey mb-6 max-w-2xl mx-auto">
              If you're having trouble accessing any of the resources or need additional materials,
              please don't hesitate to contact our academic coordinators or faculty members.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="mailto:mes@igitsarang.ac.in"
                className="bg-teal-start text-white px-6 py-3 rounded-lg font-medium hover:bg-deep-navy hover:scale-105 transition-all duration-200 inline-flex items-center justify-center"
              >
                Contact Support
              </a>
              <a
                href="/community"
                className="bg-white text-teal-start border border-teal-start px-6 py-3 rounded-lg font-medium hover:bg-teal-start hover:text-white transition-all duration-200 inline-flex items-center justify-center"
              >
                View Faculty
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}

export default CourseHub