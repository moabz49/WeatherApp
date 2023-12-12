/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        'lger': '1140px', // Define your custom breakpoint at 1200px
        'mder': '860px', 
        'xs': '480px',
      },
      fontFamily: {
          'DM sans': ['DM Sans', 'sans-serif'],
          'Inter' : ['Inter', 'sans-serif'],
          'InterTight': ['Inter Tight', 'sans-serif'],
          'Montserrat': ['Montserrat', 'sans-serif'],
          'OpenSans': ['Open Sans', 'sans-serif'],
          'Poppins': ['Poppins', 'sans-serif'],
          'Roboto': ['Roboto', 'sans-serif'],
      },
    },
  },
  plugins: [],
}