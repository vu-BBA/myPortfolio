import React, {useState, useEffect} from 'react'
import { AiOutlineHome, AiOutlineUser, AiOutlineTool, AiOutlineProject, AiOutlineMail, AiOutlineApi } from 'react-icons/ai'
import { FiDownload } from 'react-icons/fi'

const links = [
  {id:'home', label:'Home', icon:<AiOutlineHome/>},
  {id:'about', label:'About', icon:<AiOutlineUser/>},
  {id:'skills', label:'Skills', icon:<AiOutlineTool/>},
  {id:'workflows', label:'Workflows', icon:<AiOutlineApi/>},
  {id:'projects', label:'Projects', icon:<AiOutlineProject/>},
  {id:'contact', label:'Contact', icon:<AiOutlineMail/>}
]

export default function Navbar(){
  const [active, setActive] = useState('home')
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(()=>{
    const onScroll = () =>{
      const sections = links.map(l=>document.getElementById(l.id))
      const scrollPos = window.scrollY + 120
      for(const s of sections){
        if(!s) continue
        const top = s.offsetTop
        const height = s.offsetHeight
        if(scrollPos >= top && scrollPos < top + height){
          setActive(s.id)
        }
      }
    }
    window.addEventListener('scroll', onScroll)
    return ()=> window.removeEventListener('scroll', onScroll)
  },[])

  return (
    <nav className="fixed w-full z-30 glass backdrop-blur-xl border-b border-neon-green/30 shadow-lg shadow-neon-green/20">
      <div className="max-w-6xl mx-auto px-4 py-4 flex items-center justify-between">
        <div className="font-bold text-2xl bg-gradient-to-r from-neon-green to-neon-cyan bg-clip-text text-transparent hover:scale-110 transition-transform">BBA.dev</div>

        {/* Desktop nav */}
        <ul className="hidden md:flex gap-1 items-center">
          {links.map(l=> (
            <li key={l.id}>
              <a href={`#${l.id}`} className={`flex items-center gap-2 px-4 py-2 rounded-lg transition-all duration-300 font-semibold ${
                active===l.id
                  ? 'bg-gradient-to-r from-neon-green/30 to-neon-cyan/30 text-neon-green border border-neon-green/60 shadow-lg shadow-neon-green/30'
                  : 'text-gray-400 hover:text-neon-cyan hover:bg-neon-green/10 hover:border hover:border-neon-green/30'
              }`}>
                <span className="text-lg">{l.icon}</span>
                <span className="text-sm">{l.label}</span>
              </a>
            </li>
          ))}
          <li>
            <a href="/Bushra_Basharat_CV.pdf" download className="flex items-center gap-2 px-4 py-2 rounded-lg bg-gradient-to-r from-neon-green to-emerald-500 text-black font-bold hover:scale-105 transition-transform duration-300 shadow-lg shadow-neon-green/50">
              <FiDownload /> <span className="text-sm">Resume</span>
            </a>
          </li>
        </ul>

        {/* Hamburger */}
        <button onClick={()=> setMenuOpen(!menuOpen)} className="md:hidden text-neon-cyan text-3xl focus:outline-none">
          {menuOpen ? '✕' : '☰'}
        </button>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="md:hidden glass border-t border-neon-green/20">
          <ul className="flex flex-col gap-1 p-4">
            {links.map(l=> (
              <li key={l.id}>
                <a href={`#${l.id}`} onClick={()=> setMenuOpen(false)} className={`flex items-center gap-3 px-4 py-3 rounded-lg transition-all duration-300 font-semibold ${
                  active===l.id
                    ? 'bg-gradient-to-r from-neon-green/30 to-neon-cyan/30 text-neon-green border border-neon-green/60'
                    : 'text-gray-400 hover:text-neon-cyan hover:bg-neon-green/10'
                }`}>
                  <span className="text-xl">{l.icon}</span>
                  <span>{l.label}</span>
                </a>
              </li>
            ))}
            <li>
              <a href="/Bushra_Basharat_CV.pdf" download onClick={()=> setMenuOpen(false)} className="flex items-center gap-3 px-4 py-3 rounded-lg bg-gradient-to-r from-neon-green to-emerald-500 text-black font-bold mt-2">
                <FiDownload className="text-xl" /> <span>Download Resume</span>
              </a>
            </li>
          </ul>
        </div>
      )}
    </nav>
  )
}
