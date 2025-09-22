/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./**/*.{js,jsx}"
  ],
  theme: {
    extend: {
      colors: {
        'deep-navy': '#0B1426',
        'teal-start': '#20B2AA',
      },
      fontFamily: {
        'body': ['Roboto', 'sans-serif'],
        'heading': ['Montserrat', 'sans-serif']
      },
      backgroundImage: {
        'teal-gradient': 'linear-gradient(135deg, #20B2AA 0%, #008B8B 100%)',
      }
    },
  },
  plugins: [],
}