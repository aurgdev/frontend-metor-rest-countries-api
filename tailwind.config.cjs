/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    colors: {
      // dm: dark mode
      // lm: light mode
      "dark-blue-dm": "#2b3945",
      "very-dark-blue-dm": "#202c37",
      "very-dark-blue-lm": "#111517",
      "dark-gray-lm": "#858585",
      "very-light-gray-lm": "#fafafa",
      "white-dm": "	#ffffff",
    },
    extend: {},
  },
  plugins: [],
};
