/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      /* ── Brand Colors ── */
      colors: {
        'dfa-cyan': '#22D4EC',
        'dfa-blue': '#1A75F5',
        'dfa-dark': '#0A2A6E',
        'dfa-navy': '#0C2057',
        'dfa-light': '#E8F8FF',
        'dfa-surface': '#F8FAFC',
        'dfa-border': '#E2E8F0',
        'dfa-text': '#0F172A',
        'dfa-muted': '#64748B',
        // Design system text hierarchy
        'txt-primary': '#1a1a1a',
        'txt-secondary': '#525252',
        'txt-muted': '#9ca3af',
        'txt-faint': '#d1d5db',
        'bg-tint': '#EEF3FA',
      },

      /* ── Typography Scale (from Crimson analysis) ── */
      fontSize: {
        'display': ['3.5rem', { lineHeight: '1.1', fontWeight: '900' }],
        'h1':      ['3rem',   { lineHeight: '1.15', fontWeight: '900' }],
        'h2':      ['2.5rem', { lineHeight: '1.2', fontWeight: '900' }],
        'h3':      ['1.5rem', { lineHeight: '1.3', fontWeight: '700' }],
        'body-lg': ['1.125rem', { lineHeight: '1.7', fontWeight: '400' }],
        'body':    ['1.0625rem', { lineHeight: '1.7', fontWeight: '400' }],
        'caption': ['0.875rem', { lineHeight: '1.5', fontWeight: '500' }],
        'eyebrow': ['0.75rem', { lineHeight: '1', fontWeight: '600', letterSpacing: '0.15em' }],
      },

      /* ── Gradients ── */
      backgroundImage: {
        'dfa-gradient': 'linear-gradient(to right, #2DD8EE 0%, #1A9AE6 40%, #1040CC 100%)',
        'dfa-gradient-r': 'linear-gradient(to right, #1040CC 0%, #2DD8EE 100%)',
        'dfa-gradient-dark': 'linear-gradient(to right, #0A2A6E 0%, #0C3A9A 100%)',
      },

      /* ── Fonts ── */
      fontFamily: {
        sans: ['"Noto Sans TC"', '"Inter"', 'system-ui', 'sans-serif'],
      },

      /* ── Spacing (section rhythm) ── */
      spacing: {
        'section': '5rem',       // 80px desktop section padding
        'section-sm': '3rem',    // 48px mobile section padding
        'heading-gap': '2.5rem', // 40px heading to content
      },

      /* ── Animations ── */
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
