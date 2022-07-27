module.exports = {
  mode: 'jit',
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
   // These paths are just examples, customize them to match your project structure

   purge: [

    './public/**/*.html',

    './src/**/*.{js,jsx,ts,tsx,vue}',

  ],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
