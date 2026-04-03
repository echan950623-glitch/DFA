/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        // Brand core colors
        'dfa-cyan': '#4DD9EC',
        'dfa-blue': '#0066CC',
        'dfa-dark': '#003366',
        'dfa-light': '#F0FAFF',
        // UI utility tokens
        'dfa-navy': '#003366',
        'dfa-surface': '#F8FAFC',
        'dfa-border': '#E2E8F0',
        'dfa-text': '#0F172A',
        'dfa-muted': '#64748B',
      },
      backgroundImage: {
        // Brand gradient — only for large section backgrounds, NOT buttons
        'dfa-gradient': 'linear-gradient(135deg, #4DD9EC 0%, #0066CC 100%)',
        'dfa-gradient-r': 'linear-gradient(135deg, #0066CC 0%, #4DD9EC 100%)',
        'dfa-gradient-dark': 'linear-gradient(135deg, #003366 0%, #0055AA 100%)',
      },
      fontFamily: {
        sans: ['"Noto Sans TC"', '"Inter"', 'system-ui', 'sans-serif'],
      },
      animation: {
        'marquee': 'marquee 30s linear infinite',
        'count-up': 'countUp 1.5s ease-out forwards',
      },
      keyframes: {
        marquee: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' },
        },
      },
    },
  },
  plugins: [],
}
