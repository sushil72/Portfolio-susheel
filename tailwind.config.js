/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      maxHeight: {
        '0': '0',
        'full': '100%',
      },
      opacity: {
        '0': '0',
        '100': '1',
      },
    variants: {
    extend: {
      maxHeight: ['hover'],
      opacity: ['hover'],
    }
    },
      keyframes: {
        'zoom-in-out': {
          '0%, 100%': { transform: 'scale(1)' },
          '50%': { transform: 'scale(1.1)' },
        },
        'rotate-slow': {
          '0%': { transform: 'rotate(0deg)' },
          '100%': { transform: 'rotate(360deg)' },
        },
        'wind': {
          '0%, 100%': { transform: 'translateX(0)' },
          '50%': { transform: 'translateX(10px)' },
        },
        'shake-slow': {
          '0%, 100%': { transform: 'translateX(0)' },
          '25%': { transform: 'translateX(-5px)' },
          '75%': { transform: 'translateX(5px)' },
        },
        'bob-slow': {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        },
      },
      

      animation: {
        'zoom-in-out': 'zoom-in-out 4s ease-in-out infinite',
        'rotate-slow': 'rotate-slow 10s linear infinite',
        'wind': 'wind 5s ease-in-out infinite',
        'shake-slow': 'shake-slow 3s ease-in-out infinite',
        'bob-slow': 'bob-slow 6s ease-in-out infinite',
      },
    },
  },
  plugins: [],
};

