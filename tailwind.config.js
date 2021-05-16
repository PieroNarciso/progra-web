const { minWidth, minHeight } = require('tailwindcss/defaultTheme')

module.exports = {
  purge: ['./index.html', './src/**/*.{js,html}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      screens: {
        'gs5': { "raw": "(width: 640px) and (height:360px)" },
        'ipad': { "raw": "(width:768px) and (height:1024px)" },
        'ipadland': { "raw": "(width: 1024px) and (height:768px)" },
        'desk2': { "raw": "(min-width:1025px) and (max-width:1280px)" }
      },
      colors: {
        primary: {
          DEFAULT: '#dc2626',
          lighter: '#f87171',
          darker: '#991b1b',
        }
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [require('@tailwindcss/forms')],
}
