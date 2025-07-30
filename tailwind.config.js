/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
    './app/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      boxShadow: {
        card: '0 4px 14px rgba(0, 0, 0, 0.1)', // soft shadow
      },
      borderRadius: {
        '2xl': '1.5rem', // extra smooth corners
      },
      colors: {
        cardglass: 'rgba(255,255,255,0.05)',
      },
      animation: {
        slowBounce: 'bounce 3s infinite',
      },
      
    },
  },
  plugins: [],
}
