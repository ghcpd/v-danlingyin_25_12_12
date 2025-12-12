/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        christmas: {
          red: '#C53030',
          green: '#2F855A',
          gold: '#D69E2E',
        }
      },
      animation: {
        'snowfall': 'snowfall 10s linear infinite',
      },
      keyframes: {
        snowfall: {
          '0%': {
            transform: 'translateY(-10vh) translateX(0)',
            opacity: '1',
          },
          '90%': {
            opacity: '1',
          },
          '100%': {
            transform: 'translateY(100vh) translateX(100px)',
            opacity: '0',
          },
        }
      }
    },
  },
  plugins: [],
}
