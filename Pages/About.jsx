import { motion } from 'framer-motion'
import { Target, Eye, User } from 'lucide-react'
import { fadeIn, slideUp } from '../utils/motion'

const About = () => {
  const messages = [
    {
      title: 'HOD Message',
      name: 'Dr. Rajesh Kumar',
      designation: 'Head of Department',
      image: '/api/placeholder/150/150',
      message: 'The Mechanical Engineering Department at IGIT has been at the forefront of engineering education and research. Our commitment to excellence in teaching and innovation continues to shape the future engineers of tomorrow. The MES plays a vital role in fostering a collaborative learning environment.'
    },
    {
      title: 'President Message',
      name: 'Amit Sharma',
      designation: 'MES President',
      image: '/api/placeholder/150/150',
      message: 'As the President of MES, I am proud to lead a society that brings together passionate individuals dedicated to mechanical engineering excellence. Our society serves as a bridge between academic learning and practical application, creating opportunities for growth and innovation.'
    },
    {
      title: 'Treasurer Message',
      name: 'Priya Patel',
      designation: 'MES Treasurer',
      image: '/api/placeholder/150/150',
      message: 'Managing the financial aspects of MES has given me insights into the importance of resource management in engineering projects. Our society ensures transparent financial operations while maximizing the impact of every rupee spent on student development and activities.'
    }
  ]

  const visionMission = [
    {
      title: 'Our Mission',
      icon: Target,
      content: 'To foster excellence in mechanical engineering education by providing a platform for students and faculty to engage in innovative research, practical learning, and professional development. We aim to bridge the gap between theoretical knowledge and industry requirements.',
      color: 'bg-blue-500'
    },
    {
      title: 'Our Vision',
      icon: Eye,
      content: 'To be recognized as a leading mechanical engineering society that produces globally competent engineers who contribute significantly to technological advancement and societal development. We envision creating leaders who drive innovation in the mechanical engineering field.',
      color: 'bg-green-500'
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
            About MES
          </motion.h1>
          <motion.p
            className="text-xl max-w-3xl mx-auto"
            variants={slideUp}
          >
            Learn about our leadership, mission, and vision for mechanical engineering excellence
          </motion.p>
        </div>
      </motion.section>

      {/* Messages Section */}
      <section className="section-padding">
        <div className="container-max">
          <motion.h2
            className="text-3xl font-heading font-bold text-center text-deep-navy mb-12"
            initial="hidden"
            whileInView="visible"
            variants={fadeIn}
          >
            Leadership Messages
          </motion.h2>

          <div className="grid lg:grid-cols-3 gap-8">
            {messages.map((msg, index) => (
              <motion.div
                key={msg.title}
                className="card"
                initial="hidden"
                whileInView="visible"
                variants={slideUp}
                transition={{ delay: index * 0.1 }}
              >
                <div className="text-center mb-6">
                  <div className="relative inline-block mb-4">
                    <img
                      src={msg.image}
                      alt={msg.name}
                      className="w-24 h-24 rounded-full mx-auto object-cover border-4 border-teal-start"
                    />
                    <div className="absolute -bottom-2 -right-2 bg-teal-gradient p-2 rounded-full">
                      <User className="h-4 w-4 text-white" />
                    </div>
                  </div>
                  <h3 className="text-xl font-heading font-semibold text-deep-navy mb-1">{msg.name}</h3>
                  <p className="text-teal-start font-medium mb-2">{msg.designation}</p>
                  <h4 className="text-lg font-heading font-semibold text-slate-grey mb-4">{msg.title}</h4>
                </div>

                <p className="text-slate-grey leading-relaxed text-sm">{msg.message}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Mission & Vision Section */}
      <section className="section-padding bg-light-grey">
        <div className="container-max">
          <motion.h2
            className="text-3xl font-heading font-bold text-center text-deep-navy mb-12"
            initial="hidden"
            whileInView="visible"
            variants={fadeIn}
          >
            Mission & Vision
          </motion.h2>

          <div className="grid md:grid-cols-2 gap-8">
            {visionMission.map((item, index) => {
              const IconComponent = item.icon
              return (
                <motion.div
                  key={item.title}
                  className="card"
                  initial="hidden"
                  whileInView="visible"
                  variants={slideUp}
                  transition={{ delay: index * 0.2 }}
                >
                  <div className="flex items-center mb-6">
                    <div className={`w-12 h-12 ${item.color} rounded-lg flex items-center justify-center mr-4`}>
                      <IconComponent className="h-6 w-6 text-white" />
                    </div>
                    <h3 className="text-2xl font-heading font-semibold text-deep-navy">{item.title}</h3>
                  </div>

                  <p className="text-slate-grey leading-relaxed">{item.content}</p>
                </motion.div>
              )
            })}
          </div>
        </div>
      </section>
    </div>
  )
}

export default About