/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#00CFFF',
        secondary: '#7C3AED',
        dark: '#0A0A0A',
        'dark-100': '#111111',
        'dark-200': '#1A1A1A',
        'glass': 'rgba(255,255,255,0.05)',
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        mono: ['JetBrains Mono', 'monospace'],
      },
      animation: {
        float: 'float 6s ease-in-out infinite',
        'float-slow': 'float 8s ease-in-out infinite',
        'glow-pulse': 'glowPulse 2s ease-in-out infinite',
        'spin-slow': 'spin 20s linear infinite',
        'aurora': 'aurora 8s ease-in-out infinite',
        'shimmer': 'shimmer 2s linear infinite',
        'count-up': 'countUp 2s ease-out forwards',
        'text-reveal': 'textReveal 0.8s ease forwards',
        'border-glow': 'borderGlow 3s ease-in-out infinite',
        'particle': 'particle 10s ease-in-out infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        glowPulse: {
          '0%, 100%': { boxShadow: '0 0 20px rgba(0, 207, 255, 0.3)' },
          '50%': { boxShadow: '0 0 40px rgba(0, 207, 255, 0.8), 0 0 80px rgba(124, 58, 237, 0.4)' },
        },
        aurora: {
          '0%, 100%': { transform: 'translate(-50%, -50%) scale(1)', opacity: '0.3' },
          '33%': { transform: 'translate(-30%, -60%) scale(1.2)', opacity: '0.5' },
          '66%': { transform: 'translate(-70%, -40%) scale(0.8)', opacity: '0.4' },
        },
        shimmer: {
          '0%': { backgroundPosition: '-200% center' },
          '100%': { backgroundPosition: '200% center' },
        },
        textReveal: {
          '0%': { clipPath: 'inset(0 100% 0 0)', opacity: '0' },
          '100%': { clipPath: 'inset(0 0% 0 0)', opacity: '1' },
        },
        borderGlow: {
          '0%, 100%': { borderColor: '#00CFFF' },
          '50%': { borderColor: '#7C3AED' },
        },
        particle: {
          '0%, 100%': { transform: 'translate(0, 0)', opacity: '0.6' },
          '25%': { transform: 'translate(100px, -80px)', opacity: '1' },
          '50%': { transform: 'translate(-50px, -150px)', opacity: '0.4' },
          '75%': { transform: 'translate(-80px, -50px)', opacity: '0.8' },
        },
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'grid-pattern': "url(\"data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%2300CFFF' fill-opacity='0.03'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E\")",
      },
      backdropBlur: {
        xs: '2px',
      },
    },
  },
  plugins: [],
}
