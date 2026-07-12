/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#092763', // main brand navy
          dark: '#05173D',
          light: '#123A8C',
        },
        accent: {
          DEFAULT: '#F4B942', // medal gold
          dark: '#D99A2B',
        },
        // Used sparingly — only for hover-glow accents in premium dark sections
        // (Sponsors "Alliance" grid, Legacy gallery), never as base brand colors.
        neon: {
          cyan: '#22D3EE',
          violet: '#8B5CF6',
        },
        surface: '#F7F8FA',
        ink: '#10131A',
        success: '#2FBF71', // "Accepted" verdict green
      },
      fontFamily: {
        display: ['"Space Grotesk"', 'sans-serif'],
        body: ['"Inter"', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'monospace'],
      },
      backgroundImage: {
        // For dark sections (Sponsors, Legacy) — faint white grid lines
        'grid-pattern':
          'linear-gradient(rgba(255,255,255,0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.05) 1px, transparent 1px)',
        // For light sections (Hero) — faint navy grid lines
        'grid-pattern-navy':
          'linear-gradient(rgba(9,39,99,0.06) 1px, transparent 1px), linear-gradient(90deg, rgba(9,39,99,0.06) 1px, transparent 1px)',
      },
      backgroundSize: {
        'grid-sm': '32px 32px',
      },
      keyframes: {
        blink: { '0%, 100%': { opacity: 1 }, '50%': { opacity: 0 } },
        fadeInUp: {
          '0%': { opacity: 0, transform: 'translateY(16px)' },
          '100%': { opacity: 1, transform: 'translateY(0)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px) rotate(0deg)' },
          '50%': { transform: 'translateY(-14px) rotate(2deg)' },
        },
        pulseGlow: {
          '0%, 100%': { opacity: 0.15, transform: 'scale(1)' },
          '50%': { opacity: 0.3, transform: 'scale(1.08)' },
        },
      },
      animation: {
        blink: 'blink 1s step-end infinite',
        'fade-in-up': 'fadeInUp 0.6s ease-out both',
        float: 'float 7s ease-in-out infinite',
        'pulse-glow': 'pulseGlow 5s ease-in-out infinite',
      },
    },
  },
  plugins: [],
}