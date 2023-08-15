/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./*.html'],
  theme: {
    extend: {
      container: {
        padding: '15px',
        center: true,
      },
      colors: {
        default: '#05000B',
        orange: '#FF5A05',
        orangeHover: 'rgba(255,90,5,0.8)',
        orange01: 'rgba(255, 90, 5, 0.1)',
        blue: '#1F37FF',
        blue2: '#4252CF',
        blackBlue: '#000848',
        blue3: '#EBEDFF',
        gold: '#FFF9F5',
        gold2: '#FDEEE7',
      },
      screens: {
        sm: '480px',
        md_min: '768px',
        md: '980px',
        lg: '1180px',
        xl: '1345px',
      }
    },
  },
  plugins: [
    require('@khoohaoyit/tailwind-grid-center'),
    function ({ addComponents }) {
      addComponents({
        '.container': {
          maxWidth: '100%',
          '@screen sm': {
            maxWidth: '1165px',
          },
          '@screen md': {
            maxWidth: '1165px',
          },
          '@screen lg': {
            maxWidth: '1165px',
          },
          '@screen xl': {
            maxWidth: '1165px',
          },
        }
      })
    }
  ],
}

