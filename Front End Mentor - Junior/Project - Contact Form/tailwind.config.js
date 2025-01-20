/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,js}'],
  theme: {
    extend: {
      fontFamily: {
        Karla: ['Karla', 'sans-serif'],
      },
      fontWeight: {
        normal: '400',
        bold: '700',
      },
      colors: {
        green: {
          primary: '#D6F3E6',
          secondary: '#0F6F52',
        },
        red: '#D93333',
        white: '#FFFFFF',
        grey: {
          primary: '#92A1A1',
          secondary: '#1E3737',
        },
      },
    },
  },
  plugins: [],
};
