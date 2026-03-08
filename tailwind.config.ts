import type { Config } from 'tailwindcss';

export default {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        brand: {
          500: '#7c3aed',
          600: '#6d28d9'
        }
      },
      boxShadow: {
        card: '0 10px 30px -15px rgba(124, 58, 237, 0.4)'
      }
    }
  },
  plugins: []
} satisfies Config;
