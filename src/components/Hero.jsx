import React, {useState, useEffect} from 'react'
import { FaGithub } from 'react-icons/fa'
import { FiDownload } from 'react-icons/fi'
import profileImg from '../assets/profile.jpg'

export default function Hero(){
  const words = ['Full Stack JavaScript Developer', 'AI Automation Learner','Software Engineer','Problem Solver','Prompt Engineer']
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
    <div className="min-h-screen flex items-center justify-center relative overflow-hidden bg-gradient-to-b from-slate-950 via-slate-950 to-black pt-20">
      {/* Decorative blobs */}
      <div className="blob-1 -top-32 -left-32"></div>
      <div className="blob-2 -bottom-32 -right-32"></div>
      <div className="blob-3 top-1/2 left-1/4"></div>
      
      <div className="max-w-5xl mx-auto px-6 py-12 grid md:grid-cols-2 gap-8 items-center relative z-10">
        <div className="space-y-6 animate-fadeInDown">
          <div>
            <p className="text-neon-green text-2xl font-bold tracking-wider">Hey, welcome! 👋</p>
            <h1 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-neon-green via-neon-cyan to-neon-purple bg-clip-text text-transparent animate-pulse_slow leading-tight mt-2">
              Bushra Basharat
            </h1>
          </div>
          
          <div className="h-20">
            <h2 className="text-xl md:text-2xl text-neon-cyan font-semibold">
              <span className="inline-block min-w-fit">{text}</span>
              <span className="inline-block w-1 h-7 bg-neon-green ml-2 animate-pulse align-middle rounded-full" />
            </h2>
          </div>
          
          <p className="text-gray-300 text-lg max-w-xl leading-relaxed">
            Full Stack JavaScript Developer passionate about building interactive web interfaces and integrating <span className="text-neon-green font-semibold">AI automation</span> to streamline workflows.
          </p>
          
          <div className="flex flex-wrap gap-3 pt-4">
            <a 
              href="#contact" 
              className="px-6 py-3 bg-gradient-to-r from-neon-green to-emerald-500 text-black font-bold rounded-lg shadow-lg shadow-neon-green/50 hover:scale-110 hover:shadow-neon-green/80 transform transition duration-300 flex items-center justify-center gap-2"
            >
              Get In Touch
            </a>
            <a 
              href="https://github.com/vu-BBA" 
              target="_blank" 
              rel="noreferrer" 
              className="px-6 py-3 border-2 border-neon-cyan rounded-lg flex items-center gap-2 text-neon-cyan hover:bg-neon-cyan/10 hover:shadow-glowCyan transition duration-300 font-semibold"
            > 
              <FaGithub className="text-lg"/> GitHub
            </a>
            <a 
              href="/Bushra_Basharat_CV.pdf" 
              download 
              className="px-6 py-3 border-2 border-neon-green rounded-lg flex items-center gap-2 text-neon-green hover:bg-neon-green/10 hover:shadow-glow transition duration-300 font-semibold"
            >
              <FiDownload /> Resume
            </a>
          </div>
        </div>
        
        <div className="flex justify-center md:justify-end animate-fadeInUp" style={{ animationDelay: '0.3s' }}>
          <div className="relative">
            {/* Glowing border */}
            <div className="absolute inset-0 bg-gradient-to-r from-neon-green via-neon-cyan to-neon-purple rounded-full opacity-40 blur-2xl animate-glow"></div>
            
            <img
              src={profileImg}
              alt="profile"
             className="relative w-64 h-64 sm:w-80 sm:h-80 md:w-96 md:h-96 
                          rounded-full 
                          object-cover 
                          border-4 border-neon-green/60
                          shadow-2xl shadow-neon-green/50 
                          transition-transform hover:scale-105"
            />
          </div>
        </div>
      </div>
      
      {/* Scroll indicator */}
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2">
        <div className="animate-bounce text-neon-cyan opacity-70">
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </div>
      </div>
    </div>
  )
}
