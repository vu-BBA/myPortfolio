import React from 'react'
import { FaFunnelDollar } from 'react-icons/fa'
import { FiArrowRight } from 'react-icons/fi'

const previews = [
  { img: '/ghl/workflow-pi-lead-followup.jpg', label: 'Workflows' },
  { img: '/ghl/pipeline-legal-case-intake.jpg', label: 'Pipelines' },
  { img: '/ghl/funnel-fifth-avenue-pizza.png', label: 'Funnels' },
]

export default function GHLTeaser() {
  return (
    <div className="py-20 bg-slate-950 relative overflow-hidden">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-neon-green to-transparent animate-glow"></div>
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-2 h-2 rounded-full bg-neon-green blur-sm animate-pulse_slow" style={{ top: '-3px' }}></div>
      <div className="absolute top-10 right-0 w-96 h-96 bg-neon-green/10 rounded-full blur-3xl opacity-20"></div>
      <div className="absolute bottom-10 left-0 w-96 h-96 bg-neon-purple/10 rounded-full blur-3xl opacity-20"></div>

      <div className="max-w-5xl mx-auto px-6 relative z-10">
        <div className="rounded-2xl border border-neon-green/40 bg-gradient-to-r from-slate-900 via-slate-800/80 to-slate-900 p-8 md:p-12 shadow-lg shadow-neon-green/10">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <span className="text-4xl text-neon-green"><FaFunnelDollar /></span>
                <h3 className="text-2xl md:text-3xl font-bold text-neon-green">
                  GoHighLevel <span className="text-neon-cyan">(GHL)</span> Expert
                </h3>
              </div>
              <p className="text-gray-300 leading-relaxed mb-6">
                I build complete GHL systems — funnels, pipelines, calendars, workflow automations,
                snapshots, CSV contact imports, email templates and AI Employee.
                See the real screenshots from live subaccounts on a dedicated page.
              </p>
              <a
                href="/ghl.html"
                className="inline-flex items-center gap-2 px-7 py-3.5 bg-gradient-to-r from-neon-green to-emerald-500 text-black font-bold rounded-lg shadow-lg shadow-neon-green/50 hover:scale-105 hover:shadow-neon-green/80 transition-all duration-300"
              >
                Check My GHL Work <FiArrowRight className="w-5 h-5" />
              </a>
            </div>

            <div className="grid grid-cols-3 gap-3">
              {previews.map((p, idx) => (
                <a key={idx} href="/ghl.html" className="group block">
                  <div className="rounded-lg overflow-hidden border border-neon-green/30 group-hover:border-neon-green/70 transition-all duration-300">
                    <img src={p.img} alt={p.label} loading="lazy" className="w-full h-24 object-cover object-top transition-transform duration-500 group-hover:scale-110" />
                  </div>
                  <p className="text-center text-[11px] text-neon-cyan mt-1.5 font-semibold">{p.label}</p>
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
