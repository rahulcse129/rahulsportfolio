/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        patrick: ['"Patrick Hand"', 'cursive'],
        gloria: ['"Gloria Hallelujah"', 'cursive'],
      },
      colors: {
        cream: '#FFFAEE',
        paper: '#FFFDF7',
        ink: {
          light: '#9CA3AF',
          DEFAULT: '#374151',
          dark: '#1F2937',
        },
        pencil: {
          light: '#D1D5DB',
          DEFAULT: '#9CA3AF',
          dark: '#6B7280',
        },
        highlight: {
          yellow: '#FEF08A',
          blue: '#BFDBFE',
          red: '#FECACA',
          green: '#BBF7D0',
          purple: '#E9D5FF',
        },
      },
      boxShadow: {
        doodle: '4px 4px 0px rgba(0, 0, 0, 0.1)',
        polaroid: '0 1px 2px rgba(0, 0, 0, 0.1), 0 12px 24px -12px rgba(0, 0, 0, 0.5)',
      },
      backgroundImage: {
        'paper-texture': "url('../assets/textures/paper.png')",
      },
      borderWidth: {
        '3': '3px',
      },
    },
  },
  plugins: [],
};