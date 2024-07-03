/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/**/*.{html,js}"],
  theme: {
    extend: {
      colors:{
        'custom-blue': '#4C5FD5',
        'custom-purple' : '#dadbf1',
        'custom-gray': '#191A1B' 
      }
    },
  },
  plugins: [],
}

