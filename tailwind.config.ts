import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          bg: '#0A0F1E',
          'bg-secondary': '#111827',
          primary: '#2563EB',
          'primary-light': '#3B82F6',
          cta: '#F59E0B',
          'text-primary': '#F9FAFB',
          'text-secondary': '#9CA3AF',
          border: '#1F2937',
        },
      },
      fontFamily: {
        sans: ['var(--font-inter)', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
export default config
