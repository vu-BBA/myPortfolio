import React, {useState, useEffect} from 'react'
import { FaGithub } from 'react-icons/fa'

export default function Hero(){
  const words = ['Full Stack JavaScript Developer', 'AI Automation Learner']
  const [text,setText] = useState('')
  const [i,setI] = useState(0)
  const [isDeleting, setIsDeleting] = useState(false)

  useEffect(()=>{
    const timeout = setTimeout(()=>{
      const full = words[i % words.length]
      setText(prev => isDeleting ? full.substring(0, prev.length-1) : full.substring(0, prev.length+1))
      if(!isDeleting && text === full){
        setTimeout(()=> setIsDeleting(true), 900)
      }else if(isDeleting && text === ''){
        setIsDeleting(false)
        setI(prev=>prev+1)
      }
    }, isDeleting? 50: 120)
    return ()=> clearTimeout(timeout)
  },[text, isDeleting, i])

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-b from-slate-900 via-slate-950 to-black pt-20">
      <div className="max-w-5xl mx-auto px-6 py-12 grid md:grid-cols-2 gap-8 items-center">
        <div className="space-y-4">
          <p className="text-neon-green text-2xl font-bold">Hello, I am</p>
          <h1 className="text-4xl md:text-5xl font-bold text-white">Bushra Basharat</h1>
          <h2 className="text-xl text-neon-cyan h-10">
            <span>{text}</span>
            <span className="inline-block w-1 h-6 bg-neon-green ml-2 animate-pulse align-middle" />
          </h2>
          <p className="text-gray-300 max-w-xl">Full Stack JavaScript Developer passionate about building interactive web interfaces and integrating AI automation to streamline workflows.</p>
          <div className="flex gap-3">
            <a href="#contact" className="px-4 py-2 bg-neon-green text-black font-medium rounded-md shadow-lg shadow-neon-green/50 hover:scale-105 transform transition">Contact</a>
            <a href="https://github.com/vu-BBA" target="_blank" rel="noreferrer" className="px-4 py-2 border border-neon-cyan rounded-md flex items-center gap-2 text-neon-cyan hover:bg-neon-cyan/10 transition"> <FaGithub/> GitHub</a>
          </div>
        </div>
        <div className="flex justify-center md:justify-end">
          <div className="w-56 h-56 md:w-72 md:h-72 bg-gradient-to-br from-neon-green/20 to-neon-cyan/20 rounded-2xl flex items-center justify-center animate-float shadow-2xl shadow-neon-green/30 border border-neon-green/30 overflow-hidden">
            <img src="/src/assets/profile.jpg" alt="profile" className="w-full h-full object-cover" />
          </div>
        </div>
      </div>
    </div>
  )
}
