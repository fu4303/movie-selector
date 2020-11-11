const colors = require('./colors')

module.exports = {
  theme: {
    extend: {
      spacing: {
        60: '15rem',
        90: '22.5rem',
      },
      width: {
        'half-w-margin': 'calc(50% - 1rem)',
      },
    },
    colors,
    screens: {
      xs: '480px',
      sm: '640px',
      md: '768px',
      lg: '1024px',
      xl: '1280px',
    },
  },
}
