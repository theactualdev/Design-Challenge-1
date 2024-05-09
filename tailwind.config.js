/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        textBlack: '#252525'
      },
      fontFamily: {
        'balsamiqSans': ['"Balsamiq Sans"', 'sans-serif'],
      }
    },
  },
  plugins: [],
}