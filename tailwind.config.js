/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./public/index.html"
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        background: '#0E0E10',
        surface: '#1A1A1C',
        primary: '#A66CFF',
        primaryHover: '#C084FC',
        heading: '#F5F5F5',
        text: '#B0B0B0',
        border: '#2E2E2E',
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      },
      boxShadow: {
        card: '0 4px 24px rgba(166, 108, 255, 0.1)',
      },
    },
  },
  plugins: [],
} 