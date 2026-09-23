/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Caramel-Honey Palette — "Warm Reading Nook"
        cream: {
          50:  '#fdfaf4',
          100: '#faf3e0',
          200: '#f5e6c4',
          300: '#edd9a3',
          400: '#e2c77e',
          500: '#d4a853',
          DEFAULT: '#faf3e0',
        },
        honey: {
          light:   '#f5c842',
          DEFAULT: '#e8a020',
          dark:    '#c4790f',
        },
        caramel: {
          light:  '#c9895a',
          DEFAULT:'#a0522d',
          dark:   '#7a3b1e',
        },
        mocha: {
          light:  '#8b6858',
          DEFAULT:'#5c3d2e',
          dark:   '#3b2214',
        },
        warm: {
          white: '#fefdf8',
          sand:  '#f0e8d6',
          linen: '#e8dcc8',
          bark:  '#6b4c3b',
        },
        ink: {
          DEFAULT: '#2c1a0e',
          soft:    '#4a3728',
          muted:   '#7a6358',
        },
      },
      fontFamily: {
        serif:  ['"Playfair Display"', 'Georgia', 'serif'],
        body:   ['"Lora"', 'Georgia', 'serif'],
        sans:   ['"DM Sans"', 'system-ui', 'sans-serif'],
        mono:   ['"JetBrains Mono"', 'monospace'],
      },
      backgroundImage: {
        'paper-texture': "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='400' height='400'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3CfeColorMatrix type='saturate' values='0'/%3E%3C/filter%3E%3Crect width='400' height='400' filter='url(%23noise)' opacity='0.04'/%3E%3C/svg%3E\")",
        'warm-gradient': 'linear-gradient(135deg, #fdfaf4 0%, #faf3e0 40%, #f5e6c4 100%)',
        'hero-gradient': 'radial-gradient(ellipse at 70% 40%, #f5c84230 0%, transparent 60%), linear-gradient(160deg, #fdfaf4 0%, #faf3e0 50%, #edd9a3 100%)',
      },
      boxShadow: {
        'warm-sm':  '0 2px 8px rgba(160, 82, 45, 0.08)',
        'warm':     '0 4px 20px rgba(160, 82, 45, 0.12)',
        'warm-lg':  '0 8px 40px rgba(160, 82, 45, 0.18)',
        'warm-xl':  '0 20px 60px rgba(160, 82, 45, 0.22)',
        'honey':    '0 4px 20px rgba(232, 160, 32, 0.25)',
        'inset-warm': 'inset 0 2px 8px rgba(160, 82, 45, 0.08)',
      },
      borderRadius: {
        'cozy': '16px',
        'cozy-lg': '24px',
      },
      animation: {
        'float':        'float 6s ease-in-out infinite',
        'float-slow':   'float 9s ease-in-out infinite',
        'glow-pulse':   'glowPulse 3s ease-in-out infinite',
        'shimmer':      'shimmer 2.5s linear infinite',
        'fade-up':      'fadeUp 0.7s ease forwards',
        'steam':        'steam 3s ease-in-out infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%':      { transform: 'translateY(-12px)' },
        },
        glowPulse: {
          '0%, 100%': { boxShadow: '0 0 20px rgba(232,160,32,0.2)' },
          '50%':      { boxShadow: '0 0 40px rgba(232,160,32,0.45)' },
        },
        shimmer: {
          '0%':   { backgroundPosition: '-200% center' },
          '100%': { backgroundPosition: '200% center' },
        },
        fadeUp: {
          '0%':   { opacity: '0', transform: 'translateY(24px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        steam: {
          '0%, 100%': { opacity: '0.3', transform: 'translateY(0) scaleX(1)' },
          '50%':      { opacity: '0.7', transform: 'translateY(-10px) scaleX(1.15)' },
        },
      },
      transitionTimingFunction: {
        'cozy': 'cubic-bezier(0.34, 1.56, 0.64, 1)',
        'warm': 'cubic-bezier(0.25, 0.46, 0.45, 0.94)',
      },
      transitionDuration: {
        '400': '400ms',
      },
      opacity: {
        '8':  '0.08',
        '15': '0.15',
      },
    },
  },
  plugins: [],
}
