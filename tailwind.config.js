/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        background: '#1C1A1C',
        primary: '#F0EFF0',
        accent: '#C4C3C4' 
      }
    },
  },
  plugins: [],
}

