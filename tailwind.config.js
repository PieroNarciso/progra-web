const { minWidth, minHeight } = require('tailwindcss/defaultTheme')

module.exports = {
  purge: ['./index.html', './src/**/*.{js,html}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      screens:{
        'gs5':{"raw": "(min-width: 640px) and (height:360px)"},
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
