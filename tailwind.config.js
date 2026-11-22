/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        brand: {
          50: '#F0F6FF',
          100: '#E0EDFE',
          200: '#BAE6FD',
          500: '#1D72FE',
          600: '#1260E8',
          700: '#0F4FC2',
          800: '#0C3D96',
          900: '#0A2B6A',
        },
        navy: {
          800: '#132238',
          900: '#0B1526',
          950: '#070D18',
        }
      },
      fontFamily: {
        sans: ['Plus Jakarta Sans', 'Inter', 'system-ui', 'sans-serif'],
      },
      boxShadow: {
        'soft': '0 4px 20px -2px rgba(18, 96, 232, 0.08), 0 2px 6px -1px rgba(0, 0, 0, 0.04)',
        'card': '0 10px 30px -4px rgba(15, 23, 42, 0.06), 0 4px 8px -2px rgba(15, 23, 42, 0.03)',
        'blue': '0 10px 25px -3px rgba(29, 114, 254, 0.35)',
      }
    },
  },
  plugins: [],
}
