import React from 'react'
import { FiArrowRight } from 'react-icons/fi'

export default function About(){
  const highlights = [
    { label: 'Full Stack Developer', icon: '💻' },
    { label: 'AI Enthusiast', icon: '🤖' },
    { label: 'Problem Solver', icon: '🧩' },
    { label: 'Education Advocate', icon: '📚' }
  ]

  return (
    <div className="py-24 bg-gradient-to-b from-slate-900 via-slate-950 to-slate-900 relative overflow-hidden">
      {/* Animated glowing top border */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-neon-green to-transparent animate-glow"></div>
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-2 h-2 rounded-full bg-neon-green blur-sm animate-pulse_slow" style={{ top: '-3px' }}></div>

      {/* Decorative blobs */}
      <div className="absolute top-0 right-1/3 w-96 h-96 bg-neon-purple/10 rounded-full blur-3xl opacity-20"></div>
      <div className="absolute bottom-1/3 left-0 w-80 h-80 bg-neon-cyan/10 rounded-full blur-3xl opacity-20"></div>

      <div className="max-w-5xl mx-auto px-6 relative z-10">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left content */}
          <div className="animate-fadeInDown">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              <span className="bg-gradient-to-r from-neon-green via-neon-cyan to-neon-purple bg-clip-text text-transparent">About Me</span>
            </h2>
            <div className="w-20 h-1 bg-gradient-to-r from-neon-green to-neon-cyan rounded-full mb-6"></div>
            
            <p className="text-gray-300 text-lg leading-relaxed mb-8">
              I'm <span className="text-neon-green font-bold">Bushra Basharat</span>, a passionate <span className="text-neon-cyan font-semibold">Full Stack JavaScript Developer</span> focused on building performant web applications and exploring <span className="text-neon-purple font-semibold">AI automation</span> to create smarter workflows.
            </p>
            
            <p className="text-gray-300 text-lg leading-relaxed mb-8">
              I have hands-on experience with React, JavaScript (ES6+), Tailwind CSS, Flask backend, and modern AI tools like n8n. I'm passionate about building <span className="text-neon-green font-semibold">educational web experiences</span> and creating solutions that make an impact.
            </p>

            <div className="flex gap-4">
              <a href="#contact" className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-neon-green to-emerald-500 text-black font-bold rounded-lg hover:scale-110 transition-transform duration-300 shadow-lg shadow-neon-green/50">
                Let's Connect <FiArrowRight className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Right side - Highlights */}
          <div className="grid grid-cols-2 gap-4 animate-fadeInUp" style={{ animationDelay: '0.2s' }}>
            {highlights.map((item, idx) => (
              <div 
                key={idx}
                className="glass-light p-6 rounded-xl hover:glass transition-all duration-300 hover-lift text-center group"
                style={{
                  animation: 'fadeInUp 0.6s ease forwards',
                  animationDelay: `${0.2 + idx * 0.1}s`,
                  opacity: 0
                }}
              >
                <div className="text-4xl mb-3 group-hover:scale-125 transition-transform duration-300">
                  {item.icon}
                </div>
                <p className="text-neon-green font-bold group-hover:text-neon-cyan transition-colors">
                  {item.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
