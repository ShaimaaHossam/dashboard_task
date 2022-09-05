/** @type {import('tailwindcss').Config} */ 
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      borderWidth: {
        '1': '1px'
      },
      fontSize: {
        '2xs': '10px'
      }
    },
  },
  plugins: [],
}