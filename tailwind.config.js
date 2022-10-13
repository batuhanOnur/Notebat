/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        'mainbackground': '#2D2D2D',
        'textgreen': '#2FDBBC',
        'textgrey': '#A3A3A3',
        'textorange':'#F99928',
      },
      backgroundImage: {
        'board': "url('./src/assets/boardbackground.png)"
      },
    },
  },
  plugins: [],
}
