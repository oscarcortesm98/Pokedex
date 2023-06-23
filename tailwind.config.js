/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "primary-red": "#D93F3F",
      }
    },
    screens: {
      "m": "640px",
      "l": "960px",
      "xxl": "1280px",
    },
  },
  plugins: [],
}