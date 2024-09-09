/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class', // or 'media' or 'class'
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        // nunito: ["Nunito", "sans-serif"],
        // quicksand: ["Quicksand", "sans-serif"], 
        dmsans: ["DM Sans", "sans-serif"],
      },
      colors: {
        pdark: '#182433',
        pblue: '#002B6A',
        base: '#F6F8FB',
      }
    },
  },
  plugins: [],
}
