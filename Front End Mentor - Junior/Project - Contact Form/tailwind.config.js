/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,js}'],
  theme: {
    extend: {
      maxWidth: {
        custom: '732px',
      },
      screens: {
        sm: { max: '375px' },
      },
      fontFamily: {
        Karla: ['Karla', 'sans-serif'],
      },
      fontWeight: {
        normal: '400',
        bold: '700',
      },
      colors: {
        button: {
          primary: '#0C7D69',
        },
        green: {
          primary: '#D6F3E6',
          secondary: '#0F6F52',
        },
        boxShadow: {
          bluezinho: '0 0 8px #E2FFFF',
        },
        borderError: '#996265',
        red: '#D93333',
        white: '#FFFFFF',
        bordercolor: '#939999',
        hoverborder: '#3D685E',
        grey: {
          primary: '#92A1A1',
          secondary: '#1E3737',
        },
      },
    },
  },
  plugins: [],
};
