/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        brand: {
          50: '#f8fafc',
          900: '#1e293b', // slate-800
          800: '#334155', // slate-700
          700: '#475569', // slate-600
          600: '#64748b', // slate-500
          500: '#94a3b8', // slate-400
        },
        accent: {
          50: '#f0f9ff',
          500: '#0ea5e9', // cyan-500
          600: '#0284c7', // sky-600
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        mono: ['JetBrains Mono', 'monospace'],
      },
      animation: {
        'fade-up': 'fadeUp 0.6s ease forwards',
      },
      keyframes: {
        fadeUp: {
          from: { opacity: '0', transform: 'translateY(24px)' },
          to: { opacity: '1', transform: 'translateY(0)' },
        },
      },
    },
  },
  plugins: [],
}
