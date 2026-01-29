import React, {useState, useEffect} from 'react'
import { AiOutlineHome, AiOutlineUser, AiOutlineTool, AiOutlineProject, AiOutlineMail } from 'react-icons/ai'

const links = [
  {id:'home', label:'Home', icon:<AiOutlineHome/>},
  {id:'about', label:'About', icon:<AiOutlineUser/>},
  {id:'skills', label:'Skills', icon:<AiOutlineTool/>},
  {id:'projects', label:'Projects', icon:<AiOutlineProject/>},
  {id:'contact', label:'Contact', icon:<AiOutlineMail/>}
]

export default function Navbar(){
  const [active, setActive] = useState('home')

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
    <nav className="fixed w-full z-30 bg-slate-900/80 backdrop-blur-md border-b border-neon-green/20">
      <div className="max-w-5xl mx-auto px-4 py-3 flex items-center justify-between">
        <div className="font-semibold text-xl text-neon-green ">BBA.dev</div>
        <ul className="flex gap-2 items-center">
          {links.map(l=> (
            <li key={l.id}>
              <a href={`#${l.id}`} className={`flex items-center gap-2 px-3 py-2 rounded-md transition-all ${active===l.id? 'bg-neon-green/20 text-neon-green border border-neon-green shadow-lg shadow-neon-green/20': 'text-gray-400 hover:text-neon-green hover:bg-neon-green/5'}`}>
                <span className="text-xl">{l.icon}</span>
                <span className="hidden md:inline">{l.label}</span>
              </a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  )
}
