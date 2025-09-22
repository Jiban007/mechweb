import { createContext, useContext, useState } from 'react'

const LanguageContext = createContext()

export const useLanguage = () => {
  const context = useContext(LanguageContext)
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider')
  }
  return context
}

const translations = {
  en: {
    // Header
    home: 'Home',
    about: 'About',
    community: 'Community',
    courseHub: 'Course Hub',
    gallery: 'Gallery',
    achievements: 'Achievements',
    joinAlumni: 'Join Alumni Network',
    
    // Home Page
    heroTitle: 'Mechanical Engineering Society',
    heroSubtitle: 'Empowering future engineers at IGIT, Sarang through innovation, collaboration, and excellence',
    exploreTitle: 'Explore MES',
    latestEvents: 'Latest Events',
    mesByNumbers: 'MES by Numbers',
    diplomaStudents: 'Diploma Students',
    btechStudents: 'B.Tech Students',
    mtechStudents: 'M.Tech Students',
    phdScholars: 'PhD Scholars',
    
    // Course Hub
    courseHubTitle: 'Course Hub',
    courseHubSubtitle: 'Access study materials, syllabus, and newsletters - your one-stop destination for academic resources',
    academicResources: 'Academic Resources',
    studyNotes: 'Study Notes',
    syllabus: 'Syllabus',
    newsletters: 'Newsletters',
    accessResources: 'Access Resources',
    
    // Achievements
    achievementsTitle: 'Achievements',
    achievementsSubtitle: 'Celebrating our students success stories and placement achievements over the years',
    ourRecruiters: 'Our Recruiters',
    placementStats: 'Year-wise Placement Statistics',
    downloadCSV: 'Download CSV',
    
    // Footer
    copyright: 'Mechanical Engineering Society, IGIT Sarang. All rights reserved.',
    weather: 'Weather',
    temperature: 'Temperature'
  },
  hi: {
    // Header
    home: 'होम',
    about: 'के बारे में',
    community: 'समुदाय',
    courseHub: 'कोर्स हब',
    gallery: 'गैलरी',
    achievements: 'उपलब्धियां',
    joinAlumni: 'पूर्व छात्र नेटवर्क में शामिल हों',
    
    // Home Page
    heroTitle: 'मैकेनिकल इंजीनियरिंग सोसाइटी',
    heroSubtitle: 'नवाचार, सहयोग और उत्कृष्टता के माध्यम से IGIT, सारंग में भविष्य के इंजीनियरों को सशक्त बनाना',
    exploreTitle: 'MES का अन्वेषण करें',
    latestEvents: 'नवीनतम घटनाएं',
    mesByNumbers: 'संख्या में MES',
    diplomaStudents: 'डिप्लोमा छात्र',
    btechStudents: 'बी.टेक छात्र',
    mtechStudents: 'एम.टेक छात्र',
    phdScholars: 'पीएचडी विद्वान',
    
    // Course Hub
    courseHubTitle: 'कोर्स हब',
    courseHubSubtitle: 'अध्ययन सामग्री, पाठ्यक्रम और समाचारपत्र तक पहुंच - शैक्षणिक संसाधनों के लिए आपका वन-स्टॉप गंतव्य',
    academicResources: 'शैक्षणिक संसाधन',
    studyNotes: 'अध्ययन नोट्स',
    syllabus: 'पाठ्यक्रम',
    newsletters: 'समाचारपत्र',
    accessResources: 'संसाधन एक्सेस करें',
    
    // Achievements
    achievementsTitle: 'उपलब्धियां',
    achievementsSubtitle: 'वर्षों से हमारे छात्रों की सफलता की कहानियों और प्लेसमेंट उपलब्धियों का जश्न मनाना',
    ourRecruiters: 'हमारे भर्तीकर्ता',
    placementStats: 'वर्षवार प्लेसमेंट आंकड़े',
    downloadCSV: 'CSV डाउनलोड करें',
    
    // Footer
    copyright: 'मैकेनिकल इंजीनियरिंग सोसाइटी, IGIT सारंग। सभी अधिकार सुरक्षित।',
    weather: 'मौसम',
    temperature: 'तापमान'
  }
}

export const LanguageProvider = ({ children }) => {
  const [language, setLanguage] = useState('en')
  
  const t = (key) => translations[language][key] || key
  
  const toggleLanguage = () => {
    setLanguage(prev => prev === 'en' ? 'hi' : 'en')
  }
  
  return (
    <LanguageContext.Provider value={{ language, setLanguage, t, toggleLanguage }}>
      {children}
    </LanguageContext.Provider>
  )
}