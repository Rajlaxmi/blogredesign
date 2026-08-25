/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        bg: 'rgb(var(--bg) / <alpha-value>)',
        surface: 'rgb(var(--surface) / <alpha-value>)',
        fg: 'rgb(var(--fg) / <alpha-value>)',
        muted: 'rgb(var(--muted) / <alpha-value>)',
        faint: 'rgb(var(--faint) / <alpha-value>)',
        rule: 'rgb(var(--rule) / <alpha-value>)',
      },
      fontFamily: {
        sans: [
          'InterVariable',
          'Inter',
          '-apple-system',
          'BlinkMacSystemFont',
          '"Segoe UI"',
          'sans-serif',
        ],
        serif: [
          '"Iowan Old Style"',
          'Palatino',
          '"Palatino Linotype"',
          '"Book Antiqua"',
          'Georgia',
          'Cambria',
          'serif',
        ],
      },
      fontSize: {
        // Fixed 2.75rem, matching daivikpatel.me's name/page-title treatment exactly.
        display: ['2.75rem', { lineHeight: '1.05', letterSpacing: '-0.01em' }],
        label: ['0.7rem', { lineHeight: '1', letterSpacing: '0.14em' }],
      },
      maxWidth: {
        measure: '38rem',
        page: '72rem',
      },
      transitionTimingFunction: {
        editorial: 'cubic-bezier(0.22, 1, 0.36, 1)',
      },
    },
  },
  plugins: [],
};
