/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/App.js',
    './src/components/Header.js',
    './src/components/Main.js',
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
        secondary_blue: '#4675de',
        tirth_blue: '#0084ff'
      },
      boxShadow: {
        tirth_blue: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06), 0 -1px 20px 3px tirth_blue',
      },
    },
  },
  variants: {},
}

