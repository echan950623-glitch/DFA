/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        // Brand core colors — matching DFA logo (cyan → blue gradient)
        'dfa-cyan': '#22D4EC',
        'dfa-blue': '#1A75F5',
        'dfa-dark': '#0A2A6E',   // deep blue for dark sections
        'dfa-navy': '#0C2057',
        'dfa-light': '#E8F8FF',
        // UI utility tokens
        'dfa-surface': '#F8FAFC',
        'dfa-border': '#E2E8F0',
        'dfa-text': '#0F172A',
        'dfa-muted': '#64748B',
      },
      backgroundImage: {
        // Hero gradient — cyan (left) → deep blue (right), matching DFA brand
        'dfa-gradient': 'linear-gradient(to right, #2DD8EE 0%, #1A9AE6 40%, #1040CC 100%)',
        'dfa-gradient-r': 'linear-gradient(to right, #1040CC 0%, #2DD8EE 100%)',
        'dfa-gradient-dark': 'linear-gradient(to right, #0A2A6E 0%, #0C3A9A 100%)',
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
