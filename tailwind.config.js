/** @type {import('tailwindcss').Config} */

const plugin = require('tailwindcss/plugin');

module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',

        'dark-gradient': 'var(--dark-gradient)',
        'light-gradient': 'var(--light-gradient)',
      },
      colors: {
        primary: 'var(--primary)',
        secondary: 'var(--secondary)',
        accent: 'var(--accent)',
        placeholder: 'var(--placeholder)',
        warning: 'var(--warning)',
      },
      fontFamily: {
        heading: 'var(--font-ibm-plex-sans), sans-serif',
        body: 'var(--font-nunito), sans-serif',
      },
    },
  },
  plugins: [
    plugin(function ({ addBase, addComponents, addUtilities, theme }) {
      addComponents({
        '.primary__button': {
          color: theme('colors.secondary'),
          borderRadius: '0.75rem',
          backgroundImage: theme('backgroundImage.light-gradient'),
          borderColor: 'transparent',
        },
      });
      addBase({
        '.secondary__button': {
          position: 'relative',
          borderRadius: '0.75rem',
          color: theme('colors.primary'),
          margin: '1px',
          backgroundImage: theme('backgroundImage.dark-gradient'),
        },
        '.secondary__button::after': {
          content: '""',
          position: 'absolute',
          top: 0,
          right: 0,
          left: 0,
          bottom: 0,
          zIndex: '-1',
          margin: '-1px',
          borderRadius: '0.75rem',
          backgroundImage: theme('backgroundImage.light-gradient'),
        },
      });
    }),
  ],
};
