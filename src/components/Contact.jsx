import React from 'react'
import { FaGithub, FaLinkedin } from 'react-icons/fa'

export default function Contact(){
  return (
    <div className="py-20 bg-slate-950">
      <div className="max-w-3xl mx-auto px-6">
        <h3 className="text-2xl font-semibold text-neon-green">Contact</h3>
        <p className="mt-4 text-gray-300">I'd love to hear about your project or collaboration ideas. You can reach me via email or connect on GitHub / LinkedIn.</p>
        <div className="mt-6 flex gap-3">
          <a href="mailto:bushrach147hnd@gmail.com" className="px-4 py-2 bg-neon-green text-black font-medium rounded-md hover:scale-105 transform transition shadow-lg shadow-neon-green/50">Email Me</a>
          <a href="https://github.com/vu-BBA" target="_blank" rel="noreferrer" className="px-4 py-2 border border-neon-cyan rounded-md flex items-center gap-2 text-neon-cyan hover:bg-neon-cyan/10 transition"><FaGithub/> GitHub</a>
          <a href="https://www.linkedin.com/in/bushra-ch-a028b639a" target="_blank" rel="noreferrer" className="px-4 py-2 border border-neon-green rounded-md flex items-center gap-2 text-neon-green hover:bg-neon-green/10 transition"><FaLinkedin/> LinkedIn</a>
        </div>

        <form className="mt-8 grid gap-3">
          <input className="p-3 bg-slate-800 border border-neon-green/30 rounded-md text-white placeholder-gray-500 focus:border-neon-green focus:outline-none" placeholder="Your name" />
          <input className="p-3 bg-slate-800 border border-neon-green/30 rounded-md text-white placeholder-gray-500 focus:border-neon-green focus:outline-none" placeholder="Your email" />
          <textarea className="p-3 bg-slate-800 border border-neon-green/30 rounded-md text-white placeholder-gray-500 focus:border-neon-green focus:outline-none" rows="4" placeholder="Message (UI only)"></textarea>
          <button type="button" className="w-40 px-4 py-2 bg-neon-cyan text-slate-900 font-medium rounded-md hover:scale-105 transform transition shadow-lg shadow-neon-cyan/50">Send (UI)</button>
        </form>
      </div>
    </div>
  )
}
