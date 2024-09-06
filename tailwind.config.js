/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    container: {
      center: true,
      padding: '20px',
    },
    fontFamily: {
      primary: ['Lexend Deca', 'sans-serif'],
    },
    extend: {
      colors: {
        primary: '#1b1d36',
        secondary: '#e1e7ec',
        tertiary: '#17182c',
        accent: {
          blue: '#99d6ea',
          pink: '#fca6d1',
        },
      },
    },
  },
  plugins: [require('tailwind-scrollbar')],
};
