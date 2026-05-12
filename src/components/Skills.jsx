import React, { useState } from 'react'
// 1. Font Awesome Icons
import { FaJsSquare, FaReact, FaPython, FaDatabase, FaRobot, FaHtml5 } from 'react-icons/fa'
// 2. Simple Icons (Most of your tech stack)
import { SiTailwindcss, SiMongodb, SiExpress, SiNumpy, SiPandas, SiScikitlearn, SiDjango, SiSelenium } from 'react-icons/si'
// 3. Ant Design Icons
import { AiOutlineApi } from 'react-icons/ai'
// 4. Material Design Icons
import { MdPsychology } from 'react-icons/md'

const skills = [
  // --- Frontend ---
  {title: 'JavaScript (ES6+)', icon: <FaJsSquare/>, category: 'Frontend'},
  {title: 'React.js', icon: <FaReact/>, category: 'Frontend'},
  {title: 'HTML5 & CSS3', icon: <FaHtml5/>, category: 'Frontend'}, 
  {title: 'Tailwind CSS', icon: <SiTailwindcss/>, category: 'Frontend'}, 

  // --- Backend ---
  {title: 'Python', icon: <FaPython/>, category: 'Backend'},
  {title: 'REST APIs', icon: <AiOutlineApi/>, category: 'Backend'}, 
  {title: 'Express.js', icon: <SiExpress/>, category: 'Backend'}, 

  // --- Database ---
  {title: 'MongoDB', icon: <SiMongodb/>, category: 'Database'},

  // --- AI & Automation ---
  {title: 'AI Automation', icon: <FaRobot/>, category: 'AI'},
  {title: 'Prompt Engineering', icon: <MdPsychology/>, category: 'AI'},

  // --- Python Libraries ---
  {title: 'NumPy', icon: <SiNumpy/>, category: 'Libraries'},
  {title: 'Pandas', icon: <SiPandas/>, category: 'Libraries'},
  {title: 'Scikit-Learn', icon: <SiScikitlearn/>, category: 'Libraries'},
  {title: 'Flask / Django', icon: <SiDjango/>, category: 'Libraries'},
  {title: 'Selenium', icon: <SiSelenium/>, category: 'Libraries'}
]

export default function Skills(){
  const [showAll, setShowAll] = useState(false)
  const visible = showAll ? skills : skills.slice(0, 8)
  return (
    <div className="py-20 bg-slate-950 relative">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-neon-green to-transparent animate-glow"></div>
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-2 h-2 rounded-full bg-neon-green blur-sm animate-pulse_slow" style={{ top: '-3px' }}></div>
      <div className="max-w-5xl mx-auto px-6">
        <h3 className="text-2xl font-semibold text-neon-green">Skills</h3>
        <div className="mt-6 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
          {visible.map((s, idx) => (
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
        {skills.length > 8 && (
          <div className="mt-8 text-center">
            <button onClick={() => setShowAll(!showAll)} className="px-6 py-2 rounded-full border border-neon-cyan/50 text-neon-cyan hover:bg-neon-cyan/10 hover:border-neon-cyan transition duration-200">
              {showAll ? 'Show Less' : `See More (${skills.length - 8} more)`}
            </button>
          </div>
        )}
      </div>
    </div>
  )
}