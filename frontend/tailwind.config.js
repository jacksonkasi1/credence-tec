/** @type {import('tailwindcss').Config} */
const withMT = require("@material-tailwind/react/utils/withMT");

export default withMT({
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    fontFamily: {
      oracle: ['Oracle Sans'],
      Georgia: ['Georgia'],
      poppins: ['Poppins, sans-serif'],
      pj: ['Plus Jakarta Sans, sans-serif']
    },
    screens: {
      xs: '400px',
      ms: '550px',
      sm: '640px',
      md: '768px',
      lg: '1024px',
      xl: '1280px',
      '2xl': '1536px'
    },

    extend: {
      colors: {
        primary: {
          100: '#d3e1fd',
          200: '#bdd3fc',
          300: '#a7c4fc',
          400: '#91b6fb',
          500: '#7ba7fa',
          600: '#6598fa',
          700: '#4e8af9',
          800: '#387bf8',
          900: '#236DF8',
        },
        white_: 'white',
        black_: '#2E2E2E',
        light_gray_: '#C9C9C9',
        secondary_: '#606060',
        snowfall_: '#F2F8FD'
      },
      boxShadow: {
        'custom': '0px 0px 12px 0px rgba(65, 131, 255, 0.5)',
      }
    },
  },
  plugins: [],
  darkMode: 'class',
})
