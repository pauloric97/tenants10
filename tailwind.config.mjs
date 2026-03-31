/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        primary: '#0042A5',
        'primary-dark': '#00318A',
        secondary: '#194261',
        accent: '#2563EB',
        'text-dark': '#0A1628',
        'text-muted': '#718096',
        'bg-light': '#EEF4FF',
        'bg-card': '#E8F0FE',
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
