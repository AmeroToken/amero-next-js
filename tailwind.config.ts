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
        sans: ['var(--font-inter)'],
        orbitron: ['var(--font-orbitron)'],
      },
      colors: {
        primary: '#003399',
        secondary: '#FF6600',
        accent: '#8B00FF',
      },
    },
  },
  plugins: [],
}

export default config

