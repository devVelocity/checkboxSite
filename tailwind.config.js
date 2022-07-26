// tailwind.config.js
const { emerald } = require('tailwindcss/colors')
const colors = require('tailwindcss/colors')

module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors:{
        amber: colors.amber,
        emerald: colors.emerald,
        neutral: colors.neutral,
        slate: colors.slate,
        zinc: colors.zinc,
        stone: colors.stone,
        orange: colors.orange,
        lime: colors.lime,
        teal: colors.teal,
        cyan: colors.cyan,
        sky: colors.sky,
        blue: colors.blue,
        violet: colors.violet,
        purple: colors.purple,
        fuschsia: colors.fuschsia,
        pink: colors.pink,
        rose: colors.rose
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
