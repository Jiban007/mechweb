import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { LanguageProvider } from './contexts/LanguageContext'
import Header from './components/Header'
import Footer from './components/Footer'
import Home from './Pages/Home'
import About from './Pages/About'
import Community from './Pages/Community'
import CourseHub from './Pages/CourseHub'
import Gallery from './Pages/Gallery'
import Achievements from './Pages/Achievements'

function App() {
  return (
    <Router>
      <LanguageProvider>
        <div className="min-h-screen bg-white font-body">
          <Header />
          <main className="pt-16">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/community" element={<Community />} />
              <Route path="/course-hub" element={<CourseHub />} />
              <Route path="/gallery" element={<Gallery />} />
              <Route path="/achievements" element={<Achievements />} />
            </Routes>
          </main>
          <Footer />
        </div>
      </LanguageProvider>
    </Router>
  )
}

export default App