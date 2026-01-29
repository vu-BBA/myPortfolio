import React from 'react'
import { FaJsSquare, FaReact, FaPython, FaDatabase } from 'react-icons/fa'

const skills = [
  {title:'JavaScript (ES6+)', icon:<FaJsSquare/>, category:'Frontend'},
  {title:'React.js', icon:<FaReact/>, category:'Frontend'},
  {title:'HTML5 & CSS3', icon:<FaReact/>, category:'Frontend'},
  {title:'Tailwind CSS', icon:<FaReact/>, category:'Frontend'},
  {title:'Python (Flask)', icon:<FaPython/>, category:'Backend'},
  {title:'REST APIs', icon:<FaDatabase/>, category:'Backend'},
  {title:'AI Automation', icon:<FaPython/>, category:'AI'},
  {title:'Prompt Engineering', icon:<FaPython/>, category:'AI'}
]

export default function Skills(){
  return (
    <div className="py-20 bg-slate-950">
      <div className="max-w-5xl mx-auto px-6">
        <h3 className="text-2xl font-semibold text-neon-green">Skills</h3>
        <div className="mt-6 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
          {skills.map((s, idx) => (
            <div key={idx} className="p-4 bg-slate-800 rounded-xl border border-neon-green/30 shadow-lg shadow-neon-green/10 hover:scale-105 hover:border-neon-green/60 hover:shadow-neon-green/30 transform transition duration-200">
              <div className="flex items-center gap-3">
                <div className="text-2xl text-neon-cyan">{s.icon}</div>
                <div>
                  <div className="font-medium text-neon-green">{s.title}</div>
                  <div className="text-sm text-gray-400">{s.category}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
