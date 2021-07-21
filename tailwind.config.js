module.exports = {
  experimental: {
    darkModeVariant: true,
    applyComplexClasses: true
  },
  future: {
    removeDeprecatedGapUtilities: true
  },
  purge: {
    content: ['./src/**/*.js', './src/**/**/*.js', './public/index.html']
  },
  darkMode: 'class',
  theme: {
    fill: (theme) => ({
      red: theme('colors.red.primary'),
      black: theme('colors.black.light'),
      white: theme('colors.white')
    }),
    colors: {
      white: '#ffffff',
      blue: {
        medium: '#005c98',
        light: '#3B82F6',
        logo: '#0E76A9'
      },
      black: {
        light: '#262626',
        faded: '#00000059'
      },
      gray: {
        base: '#616161',
        background: '#fafafa',
        primary: '#dbdbdb',
        darkest: '#171717',
        cooldark: '#111827',
        middark: '#191c24',
        text: '#6c7293',
        logodark: '#334155'
      },
      red: {
        primary: '#ed4956',
        background: '#ed4956'
      },
      pink: {
        right: '#d41459',
        left: '#911a6c'
      }
    },
    extend: {
      fontFamily: {
        'zen-dots': ['Zen Dots', 'cursive'],
        'cinzel-decorative': ['Cinzel Decorative', 'cursive'],
        allura: ['Allura', 'cursive'],
        'mr-dafoe': ['Mr Dafoe', 'cursive']
      },
      colors: {
        background: {
          // primary: 'red',
          // secondary: 'black'
          primary: 'var(--bg-background-primary)',
          secondary: 'var(--bg-background-secondary)'
        }
      }
    }
  },
  variants: {
    extend: {
      display: ['group-hover']
    }
  }
};
