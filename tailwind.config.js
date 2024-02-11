/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./build/*.html','./build/js/*js'],
  theme: {
    extend: {
      screens: {
        'widescreen': {'raw': '(min-aspect-ratio: 3/2)'},
        'tailscreen': {'raw': '(min-aspect-ratio: 13/20)'},
      },
      keyframes: {
        'open-menu' : {
          '0%': {tansform:'scaleY(0)'},
          '80%': {tansform:'scaleY(1.2)'},
          '100%': {tansform:'scaleY(1)'},
        },
      },
      animation: {
        'open-menu': '0.5s ease-in-out forwards',
      }
    },
  },
  plugins: [],
}

