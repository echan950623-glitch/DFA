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

      /* ── Typography Scale — bold & confident ── */
      fontSize: {
        'display': ['4.5rem', { lineHeight: '1.05', fontWeight: '900' }],   // 72px — hero stats
        'h1':      ['3.75rem', { lineHeight: '1.1', fontWeight: '900' }],   // 60px — page title
        'h2':      ['3rem',    { lineHeight: '1.15', fontWeight: '900' }],  // 48px — section title
        'h3':      ['1.75rem', { lineHeight: '1.25', fontWeight: '700' }],  // 28px — card title
        'body-lg': ['1.25rem', { lineHeight: '1.7', fontWeight: '400' }],   // 20px — emphasis body
        'body':    ['1.125rem', { lineHeight: '1.7', fontWeight: '400' }],  // 18px — regular body
        'caption': ['0.9375rem', { lineHeight: '1.5', fontWeight: '500' }], // 15px — labels
        'eyebrow': ['0.8125rem', { lineHeight: '1', fontWeight: '600', letterSpacing: '0.15em' }], // 13px
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
