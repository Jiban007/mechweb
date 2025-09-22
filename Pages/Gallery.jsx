import { motion } from 'framer-motion'
import { ExternalLink, Calendar, Users } from 'lucide-react'
import { fadeIn, slideUp } from '../utils/motion'

const Gallery = () => {
  const albums = [
    {
      id: 1,
      title: "Teacher's Day Celebration",
      date: 'September 5, 2024',
      photos: 45,
      thumbnail: '/api/placeholder/400/300',
      link: 'https://drive.google.com/drive/folders/teachers-day',
      description: 'Celebrating our beloved faculty members with gratitude and respect'
    },
    {
      id: 2,
      title: 'Vishwakarma Puja',
      date: 'September 17, 2024',
      photos: 62,
      thumbnail: '/api/placeholder/400/300',
      link: 'https://drive.google.com/drive/folders/vishwakarma-puja',
      description: 'Annual celebration honoring Lord Vishwakarma, the divine architect'
    },
    {
      id: 3,
      title: 'IoT Symposium 2024',
      date: 'August 15, 2024',
      photos: 38,
      thumbnail: '/api/placeholder/400/300',
      link: 'https://drive.google.com/drive/folders/iot-symposium',
      description: 'Technical symposium exploring the latest trends in Internet of Things'
    },
    {
      id: 4,
      title: 'ATAL FDP Workshop',
      date: 'July 20, 2024',
      photos: 29,
      thumbnail: '/api/placeholder/400/300',
      link: 'https://drive.google.com/drive/folders/atal-fdp',
      description: 'Faculty Development Program on emerging technologies and teaching methodologies'
    },
    {
      id: 5,
      title: 'Abhiyantrix Tech Fest',
      date: 'June 10, 2024',
      photos: 87,
      thumbnail: '/api/placeholder/400/300',
      link: 'https://drive.google.com/drive/folders/abhiyantrix',
      description: 'Annual technical festival showcasing innovation and creativity'
    },
    {
      id: 6,
      title: 'Industrial Visit',
      date: 'May 25, 2024',
      photos: 34,
      thumbnail: '/api/placeholder/400/300',
      link: 'https://drive.google.com/drive/folders/industrial-visit',
      description: 'Educational visit to manufacturing industries for practical exposure'
    }
  ]

  const handleAlbumClick = (link) => {
    window.open(link, '_blank', 'noopener,noreferrer')
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
            Gallery
          </motion.h1>
          <motion.p
            className="text-xl max-w-3xl mx-auto"
            variants={slideUp}
          >
            Explore our collection of memorable moments, events, and achievements captured through the lens
          </motion.p>
        </div>
      </motion.section>

      {/* Albums Grid */}
      <section className="section-padding">
        <div className="container-max">
          <motion.h2
            className="text-3xl font-heading font-bold text-center text-deep-navy mb-12"
            initial="hidden"
            whileInView="visible"
            variants={fadeIn}
          >
            Event Albums
          </motion.h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {albums.map((album, index) => (
              <motion.div
                key={album.id}
                className="bg-white rounded-xl border border-gray-200 p-6 transition-all duration-300 hover:border-teal-start hover:scale-105 cursor-pointer group overflow-hidden"
                initial="hidden"
                whileInView="visible"
                variants={slideUp}
                transition={{ delay: index * 0.1 }}
                onClick={() => handleAlbumClick(album.link)}
              >
                <div className="relative overflow-hidden rounded-lg mb-4">
                  <img
                    src={album.thumbnail}
                    alt={album.title}
                    className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-deep-navy/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                      <ExternalLink className="h-6 w-6 text-white" />
                  </div>
                  <div className="absolute top-3 right-3 bg-deep-navy text-white px-2 py-1 rounded-full text-xs font-medium">
                    {album.photos} photos
                  </div>
                </div>

                <div className="space-y-3">
                  <h3 className="text-xl font-heading font-semibold text-deep-navy group-hover:text-teal-start transition-colors">
                    {album.title}
                  </h3>

                  <div className="flex items-center text-sm text-slate-grey">
                    <Calendar className="h-4 w-4 mr-2 text-teal-start" />
                    <span>{album.date}</span>
                  </div>

                  <div className="flex items-center text-sm text-slate-grey">
                    <Users className="h-4 w-4 mr-2 text-teal-start" />
                    <span>{album.photos} Photos</span>
                  </div>

                  <p className="text-slate-grey text-sm leading-relaxed">{album.description}</p>

                  <div className="flex items-center text-teal-start font-medium text-sm group-hover:text-teal-end transition-colors pt-2">
                    <span>View Album</span>
                    <ExternalLink className="ml-2 h-4 w-4" />
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="section-padding bg-light-grey">
        <div className="container-max">
          <motion.div
            className="bg-white rounded-xl border border-gray-200 p-8 text-center hover:border-teal-start transition-colors duration-300"
            initial="hidden"
            whileInView="visible"
            variants={fadeIn}
          >
            <h3 className="text-2xl font-heading font-semibold text-deep-navy mb-4">
              Want to Share Your Photos?
            </h3>
            <p className="text-slate-grey mb-6 max-w-2xl mx-auto">
              If you have photos from MES events that you'd like to share with the community,
              please reach out to us. We'd love to include them in our gallery!
            </p>
            <a
              href="mailto:mes@igitsarang.ac.in"
              className="btn-primary inline-flex items-center"
            >
              Share Your Photos
            </a>
          </motion.div>
        </div>
      </section>
    </div>
  )
}

export default Gallery