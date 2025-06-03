// tailwind.config.js
/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
      './app/**/*.{js,ts,jsx,tsx}',
      './pages/**/*.{js,ts,jsx,tsx}',
      './components/**/*.{js,ts,jsx,tsx}',
    ],
    theme: {
      extend: {
        colors: {
          background: 'rgb(255 255 255)', // Or define via CSS variables if using dark mode
        },
      },
    },
    plugins: [require('@tailwindcss/typography')],
  }