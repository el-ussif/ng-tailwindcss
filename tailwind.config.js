const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  purge: {
    content: [
      './src/**/*.{html,ts}',
    ]
  },
  darkMode: 'class', // or 'media' or 'class'
  theme: {
    // Some useful comment
    fontFamily: {
      'taviraj': ['"Taviraj"', 'serif'],
      'nunito': ['"Nunito"', 'serif'],
    },
    screens: {
      'xs': '475px',
      ...defaultTheme.screens,
    },
    extend: {
      fontFamily: ['Nunito', 'Taviraj', ],
      padding: {
        '42': '10.5rem'
      },

      screens: {
        'xs': '475px',
        ...defaultTheme.screens,
      },
      lineHeight: {
        'extra-loose': '2.5',
        '11': '3rem',
        '12': '4rem',
      },
      listStyleType: {
        none: 'none',
        square: 'square',
        roman: 'upper-roman',
      },
    },
    backgroundColor: theme => ({
      ...theme('colors'),
      "custom-bg": "#F1DDC9",
      "tomato": "#DA5E42",
      "danger": "#D84727",
    }),
  },
  variants: {
    extend: {
    }
  },
  plugins: [require('@tailwindcss/forms'),require('@tailwindcss/typography')],
}
