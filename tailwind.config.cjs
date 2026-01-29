module.exports = {
  content: ["./index.html", "./src/**/*.{js,jsx}"] ,
  theme: {
    extend: {
      colors: {
        'neon-green': '#00ff00',
        'neon-cyan': '#00ffff',
        'neon-purple': '#ff00ff'
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-8px)' }
        },
        typing: {
          '0%': { width: '0ch' },
          '100%': { width: '100%' }
        },
        fadeInUp: {
          '0%': { opacity: 0, transform: 'translateY(12px)' },
          '100%': { opacity: 1, transform: 'translateY(0)' }
        },
        glow: {
          '0%, 100%': { boxShadow: '0 0 5px rgba(0,255,0,0.5)' },
          '50%': { boxShadow: '0 0 20px rgba(0,255,0,0.8)' }
        }
      },
      animation: {
        float: 'float 4s ease-in-out infinite',
        typing: 'typing 2.2s steps(22, end)',
        fadeInUp: 'fadeInUp 0.7s ease forwards',
        glow: 'glow 3s ease-in-out infinite'
      }
    }
  },
  plugins: [],
}
