import { motion } from 'framer-motion'
import { Download, TrendingUp, Users, Building } from 'lucide-react'
import { fadeIn, slideUp } from '../utils/motion'
import { useLanguage } from '../contexts/LanguageContext'

const Achievements = () => {
  const { t } = useLanguage()
  
  const recruiters = [
    { name: 'Adani', logo: '/Pages/Image/Adani_2012_logo.png' },
    { name: 'L&T', logo: '/Pages/Image/L&T.png' },
    { name: 'JSW', logo: '/Pages/Image/JSW_Group_logo.svg.png' },
    { name: 'Tech Mahindra', logo: '/Pages/Image/Tech_Mahindra-Logo.wine.png' },
    { name: 'Bajel', logo: '/Pages/Image/BajelProjectsLtd_49283474_76479.png' },
    { name: 'IAVL', logo: '/Pages/Image/iavl.jpeg' },
    { name: 'PPL', logo: '/Pages/Image/PPL.png' },
    { name: 'Tcs', logo: '/Pages/Image/TCS.png' },
    { name: 'amns', logo: '/Pages/Image/Arcelormittal-logo.png' }
    
  ]

  const placementData = [
    {
      year: '2023-24',
      studentsPlaced: 45,
      totalStudents: 60,
      percentage: 75,
      majorCompanies: ['TCS', 'Infosys', 'L&T', 'Mahindra', 'BHEL', 'Wipro']
    },
    {
      year: '2022-23',
      studentsPlaced: 42,
      totalStudents: 58,
      percentage: 72,
      majorCompanies: ['Accenture', 'HCL', 'Tech Mahindra', 'Tata Motors', 'SAIL', 'IBM']
    },
    {
      year: '2021-22',
      studentsPlaced: 38,
      totalStudents: 55,
      percentage: 69,
      majorCompanies: ['Cognizant', 'Capgemini', 'Maruti Suzuki', 'Hero MotoCorp', 'ONGC']
    },
    {
      year: '2020-21',
      studentsPlaced: 35,
      totalStudents: 52,
      percentage: 67,
      majorCompanies: ['Deloitte', 'EY', 'Bajaj Auto', 'Ashok Leyland', 'NTPC', 'IOCL']
    },
    {
      year: '2019-20',
      studentsPlaced: 33,
      totalStudents: 50,
      percentage: 66,
      majorCompanies: ['Mindtree', 'Mphasis', 'Godrej', 'Eicher Motors', 'GAIL', 'BPCL']
    }
  ]

  const downloadCSV = () => {
    const headers = ['Year', 'Students Placed', 'Total Students', 'Placement %', 'Major Companies']
    const csvContent = [
      headers.join(','),
      ...placementData.map(row => [
        row.year,
        row.studentsPlaced,
        row.totalStudents,
        `${row.percentage}%`,
        `"${row.majorCompanies.join(', ')}"`
      ].join(','))
    ].join('\n')

    const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8;' })
    const link = document.createElement('a')
    const url = URL.createObjectURL(blob)
    link.setAttribute('href', url)
    link.setAttribute('download', 'mes_placement_statistics.csv')
    link.style.visibility = 'hidden'
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)
  }

  const stats = [
    {
      icon: TrendingUp,
      value: '72%',
      label: 'Average Placement Rate',
      color: 'bg-green-500'
    },
    {
      icon: Users,
      value: '193',
      label: 'Total Students Placed',
      color: 'bg-blue-500'
    },
    {
      icon: Building,
      value: '25+',
      label: 'Partner Companies',
      color: 'bg-purple-500'
    }
  ]

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
            {t('achievementsTitle')}
          </motion.h1>
          <motion.p
            className="text-xl max-w-3xl mx-auto text-gray-300"
            variants={slideUp}
          >
            {t('achievementsSubtitle')}
          </motion.p>
        </div>
      </motion.section>

      {/* Our Recruiters Section */}
      <section className="section-padding bg-white">
        <div className="container-max">
          <motion.h2
            className="text-3xl font-heading font-bold text-center text-deep-navy mb-12"
            initial="hidden"
            whileInView="visible"
            variants={fadeIn}
          >
            {t('ourRecruiters')}
          </motion.h2>

          <motion.div
            className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-8 items-center"
            initial="hidden"
            whileInView="visible"
            variants={fadeIn}
          >
            {recruiters.map((recruiter, index) => (
              <motion.div
                key={recruiter.name}
                className="bg-white border border-gray-200 rounded-lg p-4 hover:border-teal-start hover:scale-105 transition-all duration-300 flex items-center justify-center"
                variants={slideUp}
                transition={{ delay: index * 0.1 }}
              >
                <img
                  src={recruiter.logo}
                  alt={`${recruiter.name} logo`}
                  className="max-h-12 max-w-full object-contain filter grayscale hover:grayscale-0 transition-all duration-300"
                />
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Statistics Cards */}
      <section className="section-padding bg-light-grey">
        <div className="container-max">
          <div className="grid md:grid-cols-3 gap-8 mb-12">
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

      {/* Placement Table */}
      <section className="section-padding bg-white">
        <div className="container-max">
          <motion.div
            className="bg-white rounded-xl border border-gray-200 overflow-hidden hover:border-teal-start transition-colors duration-300"
            initial="hidden"
            whileInView="visible"
            variants={fadeIn}
          >
            <div className="p-6 border-b border-gray-200">
              <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
                <div>
                  <h2 className="text-2xl font-heading font-bold text-deep-navy mb-2">
                    {t('placementStats')}
                  </h2>
                  <p className="text-slate-grey">Comprehensive placement data for the last 5 years</p>
                </div>
                <button
                  onClick={downloadCSV}
                  className="bg-teal-start text-white px-6 py-3 rounded-lg font-medium hover:bg-deep-navy hover:scale-105 transition-all duration-200 flex items-center"
                >
                  <Download className="h-4 w-4 mr-2" />
                  {t('downloadCSV')}
                </button>
              </div>
            </div>

            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-deep-navy text-white">
                  <tr>
                    <th className="px-6 py-4 text-left font-heading font-semibold">Year</th>
                    <th className="px-6 py-4 text-left font-heading font-semibold">Students Placed</th>
                    <th className="px-6 py-4 text-left font-heading font-semibold">Total Students</th>
                    <th className="px-6 py-4 text-left font-heading font-semibold">Placement %</th>
                    <th className="px-6 py-4 text-left font-heading font-semibold">Major Companies</th>
                  </tr>
                </thead>
                <tbody>
                  {placementData.map((row, index) => (
                    <motion.tr
                      key={row.year}
                      className="border-b border-gray-200 hover:bg-light-grey transition-colors duration-200"
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.1 }}
                    >
                      <td className="px-6 py-4 font-heading font-semibold text-deep-navy">{row.year}</td>
                      <td className="px-6 py-4 text-slate-grey">{row.studentsPlaced}</td>
                      <td className="px-6 py-4 text-slate-grey">{row.totalStudents}</td>
                      <td className="px-6 py-4">
                        <div className="flex items-center">
                          <div className="w-12 h-2 bg-gray-200 rounded-full mr-3">
                            <div
                              className="h-2 bg-gradient-to-r from-teal-start to-teal-end rounded-full transition-all duration-500"
                              style={{ width: `${row.percentage}%` }}
                            ></div>
                          </div>
                          <span className="font-medium text-teal-start">{row.percentage}%</span>
                        </div>
                      </td>
                      <td className="px-6 py-4">
                        <div className="flex flex-wrap gap-1">
                          {row.majorCompanies.slice(0, 3).map((company, idx) => (
                            <span
                              key={idx}
                              className="px-2 py-1 bg-teal-start/10 text-teal-start text-xs rounded-full font-medium"
                            >
                              {company}
                            </span>
                          ))}
                          {row.majorCompanies.length > 3 && (
                            <span className="px-2 py-1 bg-gray-100 text-slate-grey text-xs rounded-full font-medium">
                              +{row.majorCompanies.length - 3} more
                            </span>
                          )}
                        </div>
                      </td>
                    </motion.tr>
                  ))}
                </tbody>
              </table>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Additional Info */}
      <section className="section-padding bg-light-grey">
        <div className="container-max">
          <motion.div
            className="bg-white rounded-xl border border-gray-200 p-8 text-center hover:border-teal-start transition-colors duration-300"
            initial="hidden"
            whileInView="visible"
            variants={fadeIn}
          >
            <h3 className="text-2xl font-heading font-semibold text-deep-navy mb-4">
              Placement Support & Career Guidance
            </h3>
            <p className="text-slate-grey mb-6 max-w-3xl mx-auto">
              Our dedicated placement cell works tirelessly to connect students with leading companies.
              We provide comprehensive career guidance, interview preparation, and skill development programs
              to ensure our students are industry-ready.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="/community" 
                className="bg-teal-start text-white px-6 py-3 rounded-lg font-medium hover:bg-deep-navy hover:scale-105 transition-all duration-200"
              >
                Meet Our Faculty
              </a>
              <a 
                href="https://www.igitcdc.ac.in/" 
                className="bg-white text-teal-start border border-teal-start px-6 py-3 rounded-lg font-medium hover:bg-teal-start hover:text-white transition-all duration-200"
              >
                Contact Placement Cell
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}

export default Achievements