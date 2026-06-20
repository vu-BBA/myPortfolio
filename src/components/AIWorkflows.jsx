import React from 'react'
import { FaRobot, FaYoutube, FaCalendarAlt } from 'react-icons/fa'
import { SiGmail, SiSupabase, SiNotion, SiDiscord, SiSlack, SiWhatsapp, SiTelegram, SiOpenai } from 'react-icons/si'
import { AiOutlineApi } from 'react-icons/ai'

const images = [
  '/workflows iamges/IMG_20260105_185344_956.webp',
  '/workflows iamges/Screenshot 2026-06-01 121452.png',
  '/workflows iamges/Screenshot 2026-06-03 151156.png',
  '/workflows iamges/Screenshot 2026-06-05 174244.png',
  '/workflows iamges/Screenshot 2026-06-09 101152.png',
  '/workflows iamges/Screenshot 2026-06-11 101144.png',
  '/workflows iamges/Screenshot 2026-06-13 182305.png',
]

const tools = [
  { label: 'n8n', icon: <AiOutlineApi /> },
  { label: 'Groq AI', icon: <FaRobot /> },
  { label: 'OpenAI', icon: <SiOpenai /> },
  { label: 'Gmail', icon: <SiGmail /> },
  { label: 'Google Calendar', icon: <FaCalendarAlt /> },
  { label: 'Supabase', icon: <SiSupabase /> },
  { label: 'Notion', icon: <SiNotion /> },
  { label: 'Discord', icon: <SiDiscord /> },
  { label: 'Slack', icon: <SiSlack /> },
  { label: 'WhatsApp', icon: <SiWhatsapp /> },
  { label: 'Telegram', icon: <SiTelegram /> },
  { label: 'Webhook', icon: <AiOutlineApi /> },
  { label: 'YouTube', icon: <FaYoutube /> },
]

export default function AIWorkflows() {
  return (
    <div className="py-20 bg-slate-900 relative overflow-hidden">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-neon-green to-transparent animate-glow"></div>
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-2 h-2 rounded-full bg-neon-green blur-sm animate-pulse_slow" style={{ top: '-3px' }}></div>
      <div className="max-w-5xl mx-auto px-6">
        <h3 className="text-2xl font-semibold text-neon-green text-center">AI Automation Workflows</h3>
        <div className="w-20 h-1 bg-gradient-to-r from-neon-green to-neon-cyan rounded-full mt-2 mb-8 mx-auto"></div>
          <style>{`
            @keyframes scrollLeft {
              0% { transform: translateX(0); }
              100% { transform: translateX(-50%); }
            }
            @keyframes scrollRight {
              0% { transform: translateX(-50%); }
              100% { transform: translateX(0); }
            }
            .scroll-left { animation: scrollLeft 40s linear infinite; }
            .scroll-right { animation: scrollRight 40s linear infinite; }
            .scroll-left:hover, .scroll-right:hover { animation-play-state: paused; }
          `}</style>

          <div className="flex overflow-hidden mb-6">
            <div className="flex gap-4 scroll-left">
              {[...images, ...images].map((src, idx) => (
                <div key={idx} className="flex-shrink-0 w-72 rounded-xl overflow-hidden border border-neon-green/30 hover:border-neon-green/60 hover:shadow-lg hover:shadow-neon-green/20 transition-all duration-300">
                  <img src={src} alt={`Workflow ${(idx % images.length) + 1}`} className="w-full h-48 object-cover transition-transform duration-500 hover:scale-110" />
                </div>
              ))}
            </div>
          </div>

          <div className="flex overflow-hidden">
            <div className="flex gap-4 scroll-right items-center">
              {[...tools, ...tools].map((tool, idx) => (
                <div key={idx} className="flex-shrink-0 flex items-center gap-2 px-5 py-3 rounded-xl border border-neon-cyan/30 bg-slate-800/80 hover:border-neon-cyan/60 hover:shadow-lg hover:shadow-neon-cyan/20 transition-all duration-300">
                  <span className="text-2xl text-neon-cyan">{tool.icon}</span>
                  <span className="text-sm font-semibold text-neon-green whitespace-nowrap">{tool.label}</span>
                </div>
              ))}
            </div>
          </div>
      </div>
    </div>
  )
}
