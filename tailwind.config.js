/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './assets/**/*.js',
    './index.html'
  ],
  theme: {
    extend: {
      colors: {
        transparent: 'transparent',
        current: 'currentColor',
        'purple': 'rgba(20,30,70,1)',
        'darkPink': '#C70039',
        'mediumPink': 'rgba(255, 105, 105,0.65)',
        'lightPink': 'rgba(255, 245, 224,0.76)',
        'extraLightPink': 'rgba(255, 245, 224,0.37)'
      },
      fontFamily: {
        'fonttexte': ['Handlee', cursive],
        'fonttitle': ['Shrikhand', cursive],
      },
    }
  },
  plugins: [],
}

