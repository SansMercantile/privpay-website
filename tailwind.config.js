/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        // Sans Mercantile brand tokens (same palette as sansmercantile-nexus)
        'nexus-dark': '#0a0e27',
        'nexus-light': '#f8f9fa',
        'nexus-gold': '#d4af37',
        'nexus-accent': '#00d4ff',
        'nexus-gray': {
          100: '#f1f5f9',
          200: '#e2e8f0',
          300: '#94a3b8',
          400: '#64748b',
          500: '#475569',
          600: '#334155',
          700: '#1e293b',
        },
      },
    },
  },
  plugins: [],
};
