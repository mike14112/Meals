/** @type {import('tailwindcss').Config} */

export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      'sm': { 'min': '320px', 'max': '767px' },
      'md': { 'min': '768px', 'max': '1023px' },
      'lg': { 'min': '1024px ', 'max': '1439px' },
      'xl': { 'min': '1440px' },

    },
    container: {
      center: true,
      padding: {
        'sm': '10px',
        'md': '64px',
        'lg': '32px',
        'xl': '75px'

      }
    },



  },
  plugins: [],
}

