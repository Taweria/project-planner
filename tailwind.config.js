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
        'purple': '#141E46',
        'darkPink': '#C70039',
        'mediumPink': '#FF6969',
        'lightPink': '#FFF5E0',
      },
    }
  },
  plugins: [],
}

