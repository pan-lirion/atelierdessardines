import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        sand: {
          50:  '#fdf9f4',
          100: '#f8f0e4',
          200: '#f0dfc4',
          300: '#e5c99a',
          400: '#d9ad6e',
          500: '#c9944a',
          600: '#b57d3c',
          700: '#966433',
          800: '#7a502d',
          900: '#634227',
        },
        sea: {
          50:  '#eef7fb',
          100: '#d5ecf5',
          200: '#b0daec',
          300: '#78bfdd',
          400: '#3e9dc8',
          500: '#2281ae',
          600: '#1d6892',
          700: '#1c5577',
          800: '#1c4863',
          900: '#1a3d54',
        },
        cream: '#FAFAF7',
      },
      fontFamily: {
        display: ['var(--font-playfair)', 'Georgia', 'serif'],
        body: ['var(--font-inter)', 'system-ui', 'sans-serif'],
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
      },
    },
  },
  plugins: [],
};

export default config;