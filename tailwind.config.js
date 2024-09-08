/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    container: {
      center: true,
      padding: '20px',
    },
    extend: {
      fontFamily: {
        lexend: ['Lexend Deca', 'monospace'],
      },
      colors: {
        primary: '#17182c',
        secondary: '#e1e7ec',
        tertiary: '#1b1d36',
        accent: {
          blue: '#99d6ea',
          pink: '#fca6d1',
        },
      },
    },
  },
  plugins: [require('tailwind-scrollbar')],
};
