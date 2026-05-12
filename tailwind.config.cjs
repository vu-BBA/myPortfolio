module.exports = {
  content: ["./index.html", "./src/**/*.{js,jsx}"] ,
  theme: {
    extend: {
      colors: {
        'neon-green': '#00ff00',
        'neon-cyan': '#00ffff',
        'neon-purple': '#ff00ff',
        'neon-pink': '#ff0080',
        'neon-blue': '#0080ff',
        'dark-bg': '#0a0e27',
        'card-bg': '#1a1f3a'
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
        'gradient-mesh': 'linear-gradient(135deg, #0a0e27 0%, #1a1f3a 50%, #0a0e27 100%)',
        'gradient-dark': 'linear-gradient(180deg, rgba(15,23,42,0.8) 0%, rgba(30,41,59,0.6) 100%)'
      },
      backdropBlur: {
        xs: '2px'
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0) rotate(0deg)' },
          '50%': { transform: 'translateY(-12px) rotate(2deg)' }
        },
        floatReverse: {
          '0%, 100%': { transform: 'translateY(0) rotate(0deg)' },
          '50%': { transform: 'translateY(12px) rotate(-2deg)' }
        },
        typing: {
          '0%': { width: '0ch' },
          '100%': { width: '100%' }
        },
        fadeInUp: {
          '0%': { opacity: 0, transform: 'translateY(20px)' },
          '100%': { opacity: 1, transform: 'translateY(0)' }
        },
        fadeInDown: {
          '0%': { opacity: 0, transform: 'translateY(-20px)' },
          '100%': { opacity: 1, transform: 'translateY(0)' }
        },
        glow: {
          '0%, 100%': { boxShadow: '0 0 5px rgba(0,255,0,0.5)' },
          '50%': { boxShadow: '0 0 25px rgba(0,255,0,0.9)' }
        },
        glowPurple: {
          '0%, 100%': { boxShadow: '0 0 5px rgba(255,0,255,0.5)' },
          '50%': { boxShadow: '0 0 25px rgba(255,0,255,0.8)' }
        },
        'pulse-slow': {
          '0%, 100%': { opacity: 1 },
          '50%': { opacity: 0.5 }
        },
        shimmer: {
          '0%': { backgroundPosition: '-1000px 0' },
          '100%': { backgroundPosition: '1000px 0' }
        },
        slideIn: {
          '0%': { transform: 'translateX(-100%)', opacity: 0 },
          '100%': { transform: 'translateX(0)', opacity: 1 }
        },
        slideInRight: {
          '0%': { transform: 'translateX(100%)', opacity: 0 },
          '100%': { transform: 'translateX(0)', opacity: 1 }
        },
        blob: {
          '0%, 100%': { transform: 'translate(0, 0) scale(1)' },
          '33%': { transform: 'translate(30px, -50px) scale(1.1)' },
          '66%': { transform: 'translate(-20px, 20px) scale(0.9)' }
        },
        'bounce-slow': {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-20px)' }
        }
      },
      animation: {
        float: 'float 5s ease-in-out infinite',
        floatReverse: 'floatReverse 6s ease-in-out infinite',
        typing: 'typing 2.2s steps(22, end)',
        fadeInUp: 'fadeInUp 0.8s ease forwards',
        fadeInDown: 'fadeInDown 0.8s ease forwards',
        glow: 'glow 3s ease-in-out infinite',
        glowPurple: 'glowPurple 3s ease-in-out infinite',
        pulse_slow: 'pulse-slow 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        shimmer: 'shimmer 2s infinite',
        slideIn: 'slideIn 0.6s ease forwards',
        slideInRight: 'slideInRight 0.6s ease forwards',
        blob: 'blob 7s infinite',
        bounceSlow: 'bounce-slow 4s ease-in-out infinite'
      },
      boxShadow: {
        glow: '0 0 20px rgba(0, 255, 0, 0.4)',
        glowPurple: '0 0 20px rgba(255, 0, 255, 0.4)',
        glowCyan: '0 0 20px rgba(0, 255, 255, 0.4)',
        'glow-lg': '0 0 40px rgba(0, 255, 0, 0.6)',
        'inner-glow': 'inset 0 0 20px rgba(0, 255, 0, 0.1)',
        glass: '0 8px 32px 0 rgba(31, 38, 135, 0.37)'
      }
    }
  },
  plugins: [],
}
