/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'christmas-red': '#C53030',
        'christmas-green': '#2F855A',
        'christmas-gold': '#D69E2E',
      },
    },
  },
  plugins: [],
}