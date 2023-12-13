/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  darkMode:'class',
  theme: {
    extend: {
      fontFamily:{
        Poppins: ['Poppins', 'sans-serif'],
     },
    },
  },
  plugins: [
    require('tailwind-scrollbar')
    ({ nocompatible: true })
  ],
}

