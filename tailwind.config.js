/** @type {import('tailwindcss').Config} */

const plugin = require('tailwindcss/plugin');

module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    '/public/css/**/*.css',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',

        'dark-gradient': 'var(--dark-gradient)',
        'light-gradient': 'var(--light-gradient)',
        'body-gradient': 'var(--body-gradient)',
        'underline-gradient': 'var(--underline-gradient)',
        'not-found-gradient': 'var(--not-found-gradient)',
      },
      colors: {
        primary: 'var(--primary)',
        secondary: 'var(--secondary)',
        accent: 'var(--accent)',
        placeholder: 'var(--placeholder)',
        warning: 'var(--warning)',
        navigation: 'var(--navigation)',
        subtitle: 'var(--light-gradient-end)',
        phoneScreenBtn: 'var(--dark-gradient-end)',
        footer: 'var(--dark-gradient-start)',
      },
      fontFamily: {
        heading: 'var(--font-ibm-plex-sans), sans-serif',
        body: 'var(--font-nunito), sans-serif',
      },
      clipPath: {
        trapeze:
          'polygon(0 60%,10% 0,90% 0,100% 60%,100% 100%,90% 100%,10% 100%,0% 100%,0% 100%)',
        trapezoid: 'polygon(0 0, 70% 0, 100% 100%, 0% 100%)',
      },
      boxShadow: {
        hover: 'var(--hover-shadow)',
        card: 'var(--card-shadow)',
      },
    },
  },
  plugins: [
    require('tailwind-clip-path'),
    plugin(function ({ addBase, addComponents, addUtilities, theme }) {
      addComponents({
        '.primary__button': {
          color: theme('colors.secondary'),
          borderRadius: '0.75rem',
          backgroundImage: theme('backgroundImage.light-gradient'),
          borderColor: 'transparent',
          transition: 'box-shadow 0.2s',
        },
      });
      addBase({
        '.secondary__button': {
          position: 'relative',
          borderRadius: '0.75rem',
          color: theme('colors.primary'),
          margin: '1px',
          backgroundImage: theme('backgroundImage.dark-gradient'),
          transition: 'box-shadow 0.2s',
        },
        '.secondary__button::after': {
          content: '""',
          position: 'absolute',
          inset: 0,
          zIndex: '-1',
          margin: '-1px',
          borderRadius: '0.75rem',
          backgroundImage: theme('backgroundImage.light-gradient'),
        },
        '.primary__button:hover, .primary__button:focus, .secondary__button:hover, .secondary__button:focus':
          {
            boxShadow: ' 0px 0px 30px 0px rgba(213,186,117,0.41)',
          },
        '.scrollbar': {
          overflowY: 'auto',
        },
        '.scrollbar::-webkit-scrollbar': {
          display: 'none',
        },
      });
    }),
  ],
};
