import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['var(--font-sans)', 'sans-serif'],
        heading: ['var(--font-heading)', 'sans-serif'],
        serif: ['var(--font-serif)', 'serif'],
      },
      colors: {
        cream: '#F3F4F6', // Cool Platinum (Gray-100 equivalent)
        dark: '#1A1A1A',
        charcoal: '#2D2D2D',
        'cream-dark': '#E5E7EB', // Cool Grey (Gray-200 equivalent)
        forest: '#064E3B',
      },
    },
  },
  plugins: [],
}

export default config
