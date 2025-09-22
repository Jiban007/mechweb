# Mechanical Engineering Society Website - IGIT Sarang

## Project Overview
This is a React-based website for the Mechanical Engineering Society at IGIT Sarang. The website features a modern, responsive design with multilingual support (English and Hindi), showcasing the department's activities, achievements, and community.

## Current State
- ✅ Project successfully imported and configured for Replit environment
- ✅ Development server running on port 5000
- ✅ Deployment configured for production
- ✅ All dependencies installed and working

## Project Architecture
- **Frontend Framework**: React 18 with Vite build tool
- **Styling**: Tailwind CSS with custom color scheme
- **Animations**: Framer Motion for smooth transitions
- **Icons**: Lucide React for consistent iconography
- **Routing**: React Router DOM for multi-page navigation
- **Languages**: Supports English and Hindi with context-based translation system

## Key Features
- Responsive design with mobile-first approach
- Bilingual support (English/Hindi)
- Dynamic event showcase
- Faculty and student community profiles
- Course hub for academic resources
- Achievement and placement statistics
- Gallery for event photos
- Dark navy and teal color scheme

## Project Structure
```
├── components/           # Reusable React components
│   ├── header.jsx       # Main navigation header
│   ├── footer.jsx       # Site footer
│   └── Quickmenu.jsx    # Quick navigation menu
├── Pages/               # Page components
│   ├── Home.jsx         # Landing page
│   ├── About.jsx        # About section
│   ├── Community.jsx    # Faculty and students
│   ├── CourseHub.jsx    # Academic resources
│   ├── Gallery.jsx      # Photo gallery
│   └── Achievements.jsx # Placement records
├── contexts/            # React context providers
│   └── LanguageContext.jsx # Multilingual support
├── utils/               # Utility functions
│   └── motion.js        # Framer Motion animations
├── Data/                # Static data
│   └── Mockdata.js      # Sample data for components
└── assets/              # Static assets
    └── react.svg        # React logo
```

## Recent Changes (September 22, 2025)
- Created missing configuration files (package.json, vite.config.js, tailwind.config.js)
- Fixed import path issues (renamed contests → contexts, utilis → utils)
- Fixed file naming inconsistencies (CourceHub → CourseHub)
- Fixed component import case sensitivity issues
- Configured development server for Replit environment with proper host settings
- Set up deployment configuration for production use

## Development Setup
- Node.js 20 with Vite development server
- Development server: `npm run dev` (runs on port 5000)
- Build command: `npm run build`
- Preview: `npm run preview`

## Deployment
- Target: Autoscale (suitable for static website)
- Build: npm run build
- Run: npm run preview
- Production ready and configured

## User Preferences
- Prefer existing project structure and conventions
- Maintain bilingual functionality
- Keep the existing color scheme and branding
- Focus on responsive design and smooth animations