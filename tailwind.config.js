/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      content: {
        blink: "|", 
      },
      animation: {
        blink: "pulse 1s step-end infinite",
      },
      keyframes: {
        blink: {
          "50%": { opacity: 0 },
        }
      }
    },
  },
  plugins: [],
}

