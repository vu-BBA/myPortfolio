import React from 'react'
import { FaGithub, FaLinkedin } from 'react-icons/fa'

export default function Footer(){
  const currentYear = new Date().getFullYear()
  
  return (
    <footer className="bg-gradient-to-t from-slate-950 via-slate-950 to-slate-900 border-t border-neon-green/20 mt-16 relative overflow-hidden">
      {/* Decorative line */}
      <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-96 h-1 bg-gradient-to-r from-transparent via-neon-green to-transparent blur-sm"></div>

      <div className="max-w-6xl mx-auto px-6 py-12">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {/* Brand */}
          <div className="text-center md:text-left">
            <h3 className="text-2xl font-bold bg-gradient-to-r from-neon-green to-neon-cyan bg-clip-text text-transparent mb-2">
              BBA.dev
            </h3>
            <p className="text-gray-400 text-sm">Full Stack Developer & AI Enthusiast</p>
          </div>

          {/* Quick Links */}
          <div className="text-center">
            <p className="text-neon-green font-semibold mb-3 text-sm">Quick Links</p>
            <div className="flex justify-center gap-6 text-sm">
              <a href="#about" className="text-gray-400 hover:text-neon-green transition-colors">About</a>
              <a href="#projects" className="text-gray-400 hover:text-neon-green transition-colors">Projects</a>
              <a href="#contact" className="text-gray-400 hover:text-neon-green transition-colors">Contact</a>
            </div>
          </div>

          {/* Social Links */}
          <div className="text-center md:text-right">
            <p className="text-neon-green font-semibold mb-3 text-sm">Connect</p>
            <div className="flex justify-center md:justify-end gap-4">
              <a href="https://github.com/vu-BBA" target="_blank" rel="noreferrer" className="text-gray-400 hover:text-neon-cyan hover:scale-125 transition-all duration-300">
                <FaGithub className="w-5 h-5" />
              </a>
              <a href="https://www.linkedin.com/in/bushra-basharat-a028b639a" target="_blank" rel="noreferrer" className="text-gray-400 hover:text-neon-purple hover:scale-125 transition-all duration-300">
                <FaLinkedin className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-neon-green/20 my-8"></div>

        {/* Copyright */}
        <div className="text-center">
          <p className="text-gray-400 text-sm mb-2">
            © {currentYear} <span className="text-neon-green font-semibold">Bushra Basharat</span>. All rights reserved.
          </p>
          <p className="text-gray-500 text-xs">
            Designed & Built with <span className="text-neon-pink animate-pulse">❤</span> using React, Tailwind CSS & Vite
          </p>
        </div>
      </div>
    </footer>
  )
}
