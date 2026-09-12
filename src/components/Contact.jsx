import React, { useState, useRef } from 'react'
import { FaGithub, FaLinkedin, FaWhatsapp } from 'react-icons/fa'
import { FiMail, FiSend } from 'react-icons/fi'
import emailjs from '@emailjs/browser'

const EMAIL = 'bushrach147hnd@gmail.com'
const WHATSAPP = 'https://wa.me/923087920448'

export default function Contact(){
  const form = useRef()
  const [status, setStatus] = useState('')

  const sendEmail = (e) => {
    e.preventDefault()

    const svc = import.meta.env.VITE_EMAILJS_SERVICE_ID
    const tpl = import.meta.env.VITE_EMAILJS_TEMPLATE_ID
    const pub = import.meta.env.VITE_EMAILJS_PUBLIC_KEY

    if (svc && tpl && pub) {
      setStatus('sending')
      emailjs.sendForm(svc, tpl, form.current, pub)
        .then(() => {
          setStatus('success')
          e.target.reset()
          setTimeout(() => setStatus(''), 4000)
        }, () => {
          setStatus('error')
          setTimeout(() => setStatus(''), 4000)
        })
      return
    }

    // Guaranteed fallback: open the visitor's email app with the message pre-filled.
    const fd = new FormData(form.current)
    const name = fd.get('from_name') || ''
    const email = fd.get('from_email') || ''
    const msg = fd.get('message') || ''
    const subject = encodeURIComponent(`Portfolio inquiry from ${name}`)
    const body = encodeURIComponent(`${msg}\n\n— ${name}\n${email}`)
    window.location.href = `mailto:${EMAIL}?subject=${subject}&body=${body}`
    setStatus('mailto')
    setTimeout(() => setStatus(''), 8000)
  }

  return (
    <div className="py-24 bg-gradient-to-b from-slate-950 via-slate-950 to-slate-900 relative overflow-hidden">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-neon-green to-transparent animate-glow"></div>
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-2 h-2 rounded-full bg-neon-green blur-sm animate-pulse_slow" style={{ top: '-3px' }}></div>
      {/* Decorative blobs */}
      <div className="absolute top-1/4 right-0 w-96 h-96 bg-neon-pink/10 rounded-full blur-3xl opacity-30"></div>
      <div className="absolute bottom-0 left-1/4 w-80 h-80 bg-neon-cyan/10 rounded-full blur-3xl opacity-30"></div>

      <div className="max-w-3xl mx-auto px-6 relative z-10 animate-fadeInDown">
        <h2 className="text-4xl md:text-5xl font-bold mb-4">
          <span className="bg-gradient-to-r from-neon-green via-neon-cyan to-neon-purple bg-clip-text text-transparent">Let's Connect</span>
        </h2>
        <div className="w-20 h-1 bg-gradient-to-r from-neon-green to-neon-cyan rounded-full mb-6"></div>
        <p className="text-gray-300 text-lg mb-8">Have a project in mind? Let's build something amazing together. Reach out through your preferred channel.</p>

        {/* Social Links */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-12">
          <a href={`mailto:${EMAIL}`} className="group glass-light p-4 rounded-xl hover:glass transition-all duration-300 hover-lift text-center">
            <div className="text-3xl mb-2 group-hover:scale-125 transition-transform duration-300 flex justify-center">
              <FiMail className="text-neon-green" />
            </div>
            <p className="text-neon-green font-semibold group-hover:text-neon-cyan transition-colors">Email</p>
            <p className="text-xs text-gray-400 mt-1">{EMAIL}</p>
          </a>
          <a href={WHATSAPP} target="_blank" rel="noreferrer" className="group glass-light p-4 rounded-xl hover:glass transition-all duration-300 hover-lift text-center">
            <div className="text-3xl mb-2 group-hover:scale-125 transition-transform duration-300 flex justify-center">
              <FaWhatsapp className="text-neon-green" />
            </div>
            <p className="text-neon-green font-semibold group-hover:text-neon-cyan transition-colors">WhatsApp</p>
            <p className="text-xs text-gray-400 mt-1">Chat with me</p>
          </a>
          <a href="https://github.com/vu-BBA" target="_blank" rel="noreferrer" className="group glass-light p-4 rounded-xl hover:glass transition-all duration-300 hover-lift text-center">
            <div className="text-3xl mb-2 group-hover:scale-125 transition-transform duration-300 flex justify-center">
              <FaGithub className="text-neon-cyan" />
            </div>
            <p className="text-neon-cyan font-semibold group-hover:text-neon-green transition-colors">GitHub</p>
            <p className="text-xs text-gray-400 mt-1">vu-BBA</p>
          </a>
          <a href="https://www.linkedin.com/in/bushra-basharat-a028b639a" target="_blank" rel="noreferrer" className="group glass-light p-4 rounded-xl hover:glass transition-all duration-300 hover-lift text-center">
            <div className="text-3xl mb-2 group-hover:scale-125 transition-transform duration-300 flex justify-center">
              <FaLinkedin className="text-neon-purple" />
            </div>
            <p className="text-neon-purple font-semibold group-hover:text-neon-cyan transition-colors">LinkedIn</p>
            <p className="text-xs text-gray-400 mt-1">Bushra Basharat</p>
          </a>
        </div>

        {/* Contact Form */}
        <form ref={form} onSubmit={sendEmail} className="glass-light p-8 rounded-2xl space-y-4 hover:glass transition-all duration-300">
          <h3 className="text-2xl font-bold text-neon-green mb-6">Send me a message</h3>

          <div className="grid sm:grid-cols-2 gap-4">
            <input
              name="from_name"
              required
              className="p-4 glass rounded-lg text-white placeholder-gray-500 focus:border-neon-green focus:outline-none border border-neon-green/30 focus:border-neon-green/80 transition-colors"
              placeholder="Your name"
            />
            <input
              name="from_email"
              type="email"
              required
              className="p-4 glass rounded-lg text-white placeholder-gray-500 focus:border-neon-green focus:outline-none border border-neon-green/30 focus:border-neon-green/80 transition-colors"
              placeholder="Your email"
            />
          </div>

          <textarea
            name="message"
            required
            className="w-full p-4 glass rounded-lg text-white placeholder-gray-500 focus:border-neon-green focus:outline-none border border-neon-green/30 focus:border-neon-green/80 transition-colors"
            rows="5"
            placeholder="Tell me about your project or idea..."
          ></textarea>

          <div className="flex flex-wrap gap-4">
            <button
              type="submit"
              disabled={status === 'sending'}
              className="inline-flex items-center gap-2 px-8 py-3 bg-gradient-to-r from-neon-green to-emerald-500 text-black font-bold rounded-lg hover:scale-110 transform transition shadow-lg shadow-neon-green/50 hover:shadow-neon-green/80 disabled:opacity-50 disabled:scale-100"
            >
              <FiSend className="w-5 h-5" />
              {status === 'sending' ? 'Sending...' : 'Send Message'}
            </button>
            <a
              href={WHATSAPP}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 border-2 border-neon-green rounded-lg text-neon-green hover:bg-neon-green/10 transition duration-300 font-semibold"
            >
              <FaWhatsapp className="w-5 h-5" /> WhatsApp Me
            </a>
          </div>

          {status === 'success' && (
            <div className="p-4 bg-neon-green/20 border border-neon-green/60 rounded-lg text-neon-green font-semibold animate-pulse_slow">
              ✓ Message sent successfully! I'll get back to you soon.
            </div>
          )}
          {status === 'mailto' && (
            <div className="p-4 bg-neon-cyan/20 border border-neon-cyan/60 rounded-lg text-neon-cyan font-semibold">
              ✓ Your email app opened with the message ready — just press Send there. Or message me on WhatsApp above.
            </div>
          )}
          {status === 'error' && (
            <div className="p-4 bg-red-500/20 border border-red-500/60 rounded-lg text-red-400 font-semibold">
              ✗ Failed to send. Please email me directly at {EMAIL} or use WhatsApp.
            </div>
          )}
        </form>
      </div>
    </div>
  )
}
