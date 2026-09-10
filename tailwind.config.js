/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        /* Core Orange × Black brand palette */
        primary:   '#3b82f6',   /* Tailwind orange-500 */
        'primary-h': '#60a5fa', /* hover */
        'primary-d': '#2563eb', /* pressed */
        secondary: '#1d4ed8',   /* deep orange */
        accent:    '#fbbf24',   /* amber highlight */

        /* Black surface scale */
        dark:       '#080808',
        'dark-100': '#0f0f0f',
        'dark-200': '#1a1a1a',
        'dark-300': '#242424',
        'dark-400': '#2e2e2e',

        glass: 'rgba(59,130,246,0.04)',
      },
      fontFamily: {
        sans:    ['DM Sans', 'system-ui', 'sans-serif'],
        heading: ['DM Sans', 'sans-serif'],
        display: ['DM Sans', 'sans-serif'],
        mono:    ['DM Sans', 'sans-serif'],
      },
      animation: {
        float:       'float 6s ease-in-out infinite',
        'float-slow':'float 9s ease-in-out infinite',
        'glow-pulse':'glowPulse 2.5s ease-in-out infinite',
        'spin-slow': 'spin 20s linear infinite',
        aurora:      'aurora 10s ease-in-out infinite',
        shimmer:     'shimmer 3.5s linear infinite',
        'count-up':  'countUp 2s ease-out forwards',
        'text-reveal':'textReveal 0.8s ease forwards',
        'border-glow':'borderGlow 4s ease-in-out infinite',
        particle:    'particle 10s ease-in-out infinite',
        'pulse-ring': 'pulseRing 2.5s ease-in-out infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px) rotateX(0deg)' },
          '50%':       { transform: 'translateY(-18px) rotateX(3deg)' },
        },
        glowPulse: {
          '0%, 100%': { boxShadow: '0 0 25px rgba(59,130,246,0.4)' },
          '50%':      { boxShadow: '0 0 60px rgba(59,130,246,0.8), 0 0 100px rgba(59,130,246,0.4)' },
        },
        aurora: {
          '0%, 100%': { transform: 'translate(0, 0) scale(1)',        opacity: '0.12' },
          '33%':      { transform: 'translate(3%, -4%) scale(1.08)',   opacity: '0.16' },
          '66%':      { transform: 'translate(-3%, 3%) scale(0.96)',   opacity: '0.10' },
        },
        shimmer: {
          '0%':   { backgroundPosition: '-300% center' },
          '100%': { backgroundPosition: '300% center' },
        },
        textReveal: {
          '0%':   { clipPath: 'inset(0 100% 0 0)', opacity: '0' },
          '100%': { clipPath: 'inset(0 0% 0 0)',   opacity: '1' },
        },
        borderGlow: {
          '0%, 100%': { borderColor: '#3b82f6', boxShadow: '0 0 10px rgba(59,130,246,0.4)' },
          '50%':      { borderColor: '#60a5fa', boxShadow: '0 0 25px rgba(59,130,246,0.7)' },
        },
        particle: {
          '0%, 100%': { transform: 'translate(0, 0)',           opacity: '0.6' },
          '25%':      { transform: 'translate(80px, -60px)',    opacity: '1'   },
          '50%':      { transform: 'translate(-40px, -120px)',  opacity: '0.4' },
          '75%':      { transform: 'translate(-60px, -40px)',   opacity: '0.8' },
        },
        pulseRing: {
          '0%, 100%': { boxShadow: '0 0 0 0 rgba(59,130,246,0.5)' },
          '50%':      { boxShadow: '0 0 0 18px rgba(59,130,246,0)' },
        },
        countUp: {
          '0%':   { opacity: '0', transform: 'translateY(10px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'blue-glow': 'radial-gradient(circle, rgba(59,130,246,0.2) 0%, transparent 70%)',
        'grid-pattern': "url(\"data:image/svg+xml,%3Csvg width='56' height='56' viewBox='0 0 56 56' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23f97316' fill-opacity='0.04'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E\")",
      },
      backdropBlur: { xs: '2px' },
      boxShadow: {
        '3d-card':  '0 4px 0 rgba(0,0,0,0.6), 0 8px 30px rgba(0,0,0,0.5)',
        '3d-hover': '0 8px 0 rgba(0,0,0,0.5), 0 16px 50px rgba(0,0,0,0.6), 0 0 40px rgba(59,130,246,0.4)',
        'orange':   '0 0 30px rgba(59,130,246,0.45), 0 0 60px rgba(59,130,246,0.2)',
        'orange-lg':'0 0 50px rgba(59,130,246,0.6), 0 0 100px rgba(59,130,246,0.3)',
      },
    },
  },
  plugins: [],
}
