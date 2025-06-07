/* eslint-disable @typescript-eslint/no-require-imports */
// @ts-check
/** @type {import("tailwindcss").Config } */
module.exports = {
  theme: {
    extend: {
      typography: {
        DEFAULT: {
          css: {
            a: {
              color: 'var(--color-primary-500)',
              '&:hover': {
                color: 'var(--color-primary-600)',
              },
              code: { color: 'var(--color-primary-400)' },
            },
            'h1,h2': {
              fontWeight: '700',
              letterSpacing: 'var(--tracking-tight)',
            },
            h3: {
              fontWeight: '600',
            },
            code: {
              color: 'var(--color-indigo-500)',
            },
          },
        },
      },
      keyframes: {
        pulse: {
          '0%': { transform: 'scale(0.9)', opacity: '0.7' },
          '70%': { transform: 'scale(1.4)', opacity: '0' },
          '100%': { transform: 'scale(0.9)', opacity: '0' },
        },
      },
      animation: {
        'pulse-marker': 'pulse 2s infinite',
      },
    },
  },
  plugins: [require('@tailwindcss/forms'), require('@tailwindcss/typography')],
}
