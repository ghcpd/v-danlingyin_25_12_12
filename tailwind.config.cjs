/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{ts,tsx,js,jsx}'],
  theme: {
    extend: {
      colors: {
        christmas: {
          red: '#C53030',
          green: '#2F855A',
          gold: '#D69E2E',
        },
      },
      keyframes: {
        snow: {
          '0%': { transform: 'translateY(-10vh)' },
          '100%': { transform: 'translateY(110vh)' },
        },
      },
      animation: {
        'snow-fall': 'snow 10s linear infinite',
      },
    },
  },
  plugins: [],
}
