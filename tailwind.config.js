module.exports = {
  future: {
    removeDeprecatedGapUtilities: true
  },
  purge: {
    content: ['./src/**/*.js', './src/**/**/*.js']
  },
  theme: {
    fill: (theme) => ({
      red: theme('colors.red.primary')
    }),
    colors: {
      white: '#ffffff',
      blue: {
        medium: '#005c98'
      },
      black: {
        light: '#262626',
        faded: '#00000059'
      },
      gray: {
        base: '#616161',
        background: '#fafafa',
        primary: '#dbdbdb'
      },
      red: {
        primary: '#ed4956'
      }
    },
    extend: {
      fontFamily: {
        'zen-dots': ['Zen Dots', 'cursive'],
        'cinzel-decorative': ['Cinzel Decorative', 'cursive'],
        'mr-dafoe': ['Mr Dafoe', 'cursive']
      }
    }
  },
  variants: {
    extend: {
      display: ['group-hover']
    }
  }
};
