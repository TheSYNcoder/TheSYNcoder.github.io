module.exports = {
  content:  ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: 'class', // or 'media' or 'class'
  theme: {
    typography: ( theme ) => ({}),
    minHeight : {
      '0' : '0', 
      '1/4': '25%',
      '1/2': '50%',
      '3/4': '75%'
    },
    minWidth : {
      '0' : '0', 
      '1/4': '25%',
      '1/2': '50%',
      '3/4': '75%'
    },
    extend: {},
  },
  variants: {
    extend: {
      display: ["group-hover"],
    },
  },
  plugins: [require('@tailwindcss/typography')],
}
