/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        nunito: ["Nunito", "sans-serif"],
        quicksand: ["Quicksand", "sans-serif"], 
      },
      colors: {
        pdark: '#182433',
        base: '#F6F8FB',
      }
    },
  },
  plugins: [],
}
