/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/App.js',
    './src/components/Header.js',
    './pages//*.{js,jsx,ts,tsx,html}',
    './components//*.{js,jsx,ts,tsx,html}'
  ],

  plugins: [
    require('tailwindcss'),
    require('autoprefixer'),
  ],

  theme: {
    extend: {
      fontFamily: {
        'poppins': ['Poppins', 'sans-serif'],
        'montserrat': ['Montserrat', 'sans-serif'],
      },
      colors : {
        primary_blue: '#192a57',
        secondary_blue: '#4675de'
      },
    },
  },
  variants: {},
}

