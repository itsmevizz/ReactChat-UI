/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [   "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
        adelia: ["ADELIA", "cursive"],
        some:['Inter', "sans-serif"],
        Montserrat:['Montserrat', "sans-serif"],
        Mouse:['Mouse Memoirs', "sans-serif"],
        Roboto:['Roboto Mono', 'monospace'],
        Square: ['Square Peg', "cursive"]

      },
    },
  },
  plugins: [],
}
