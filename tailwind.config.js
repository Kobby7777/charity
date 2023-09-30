/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
		"./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {colors: {
      'primary':' #00725E',
      'secondary': '#219D80'
    },},
  },
  plugins: [],
}

