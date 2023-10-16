/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        montserrat: ['Montserrat'],
        lato: ['Lato'],
        garamond: ['Garamond'],
      },
    },
    colors: {
      primary: '#FFCC00',
      secondary: '#231900',
      white: '#FFFFFF',
      gray: '#f2f2f2',
    },
  },
  plugins: [],
};
