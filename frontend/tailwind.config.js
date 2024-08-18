/** @type {import('tailwindcss').Config} */
export default {
  content: [ 
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    colors: {
      'baby-powder': '#F9F7F2',
      'saffron': '#FCCA6F',
      'bittersweet': '#FD5D5B',
      'raspberry': '#DD2255',
      'chocolate-cosmos': '#44000A',

      'off-white': '#F9F7F2',
      'yellow-orange': '#FCCA6F',
      'salmon': '#FD5D5B', 
      'hot-pink': '#DD2255', 
      'maroon': '#44000A',
    },
    extend: {
      fontFamily: {
        'lilita': ['"Lilita One"', 'sans-serif'],
        'delius': ['"Delius"', 'cursive'],
      }
    }
  },
  plugins: [],
}

