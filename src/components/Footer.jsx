import React from 'react'

export default function Footer(){
  return (
    <footer className="py-6 bg-slate-900 border-t border-neon-green/20 mt-12">
      <div className="max-w-5xl mx-auto px-6 text-center text-sm text-gray-400">© {new Date().getFullYear()} Bushra Basharat — Built with React & Tailwind</div>
    </footer>
  )
}
