/* eslint-disable @typescript-eslint/no-require-imports */
// @ts-check
/** @type {import("tailwindcss").Config } */
module.exports = {
  theme: {
    extend: {
      typography: {
        DEFAULT: {
          css: {
            maxWidth: '68ch',
            a: {
              color: 'var(--color-accent-strong)',
              textDecorationColor: 'var(--color-border)',
              textUnderlineOffset: '3px',
              fontWeight: '500',
              '&:hover': {
                textDecorationColor: 'var(--color-accent)',
              },
              code: { color: 'var(--color-text)' },
            },
            'h1,h2,h3,h4': {
              fontFamily: 'var(--font-serif)',
              fontWeight: '600',
              letterSpacing: '-0.01em',
            },
            code: {
              color: 'var(--color-text)',
              backgroundColor: 'var(--color-surface)',
              padding: '0.1em 0.3em',
              borderRadius: '2px',
              fontWeight: '400',
            },
            'code::before': { content: 'none' },
            'code::after': { content: 'none' },
          },
        },
      },
    },
  },
  plugins: [require('@tailwindcss/forms'), require('@tailwindcss/typography')],
}
