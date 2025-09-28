// tailwind.config.js
module.exports = {
  theme: {
    extend: {
      animation: {
        fadeIn: 'fadeIn 0.4s ease-in-out',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0', transform: 'translateY(20px) scale(0.9)' },
          '100%': { opacity: '1', transform: 'translateY(0) scale(1)' },
        },
      },
      colors: {
        'primary-dark': '#1B3C53',
        'primary': '#234C6A',
        'secondary': '#456882',
        'accent': '#D2C1B6',
      },
    },
  },
  plugins: [],
}