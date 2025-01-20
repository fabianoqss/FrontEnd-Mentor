/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,js}'],
  theme: {
    extend: {
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
