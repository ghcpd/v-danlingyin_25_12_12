/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{ts,tsx}"] ,
  theme: {
    extend: {
      colors: {
        christmas: {
          red: '#C53030',
          green: '#2F855A',
          gold: '#D69E2E'
        }
      },
      boxShadow: {
        'glow-red': '0 8px 30px rgba(197,48,48,0.18)',
        'glow-gold': '0 8px 30px rgba(214,158,46,0.18)'
      }
    }
  },
  plugins: []
};