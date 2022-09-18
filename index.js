/** @type {import('tailwindcss').Config} */
const theme = require('./src/theme')
const typography = require('./src/typography')

module.exports = {
  darkMode: 'class',
  theme: {
    ...theme,
    typography,
  },
  plugins: [require('@tailwindcss/typography')],
}
