/** @type {import('tailwindcss').Config} */

const withMT = require("@material-tailwind/react/utils/withMT");

module.exports = withMT({
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
      ["sans"]: ['Lato', 'Helvetica', 'Arial', 'sans-serif'],
    },
    extend: {
      colors: {
        azure: '#05A0F6',
        ["dove-gray"]: '#707070',
        concrete: '#f2f2f2',
        mystic: '#dae1ea',
      }
    },
  },
  plugins: []
})
