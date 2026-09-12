import React, { useState } from 'react';

const projects = [
  {
    title: '🚀 GoHighLevel Funnel & Automation System',
    description:
      'Complete GoHighLevel build: lead-capture funnel, CRM pipeline, appointment calendars and multi-step email/SMS follow-up workflows that move a lead from ad click to booked appointment on autopilot.',
    link: 'https://affiliates.gohighlevel.com/?fp_ref=cofix33&funnel_share=6aa39317ed7cc4adc4a30b2b',
    tags: ['GoHighLevel', 'Funnels', 'Pipelines', 'Calendars', 'Workflows', 'Twilio', 'Mailgun'],
    badge: 'GHL Project'
  },
  {
    title: '🤖 GHL AI Employee + Speed-to-Lead',
    description:
      'Trained Conversation AI / AI Employee inside GHL that qualifies leads, answers FAQs and books appointments 24/7 — paired with missed-call text back and instant speed-to-lead follow-up.',
    link: 'https://affiliates.gohighlevel.com/?fp_ref=cofix33&share=kUBntZgL0p2c7HjhlMP6',
    tags: ['GoHighLevel', 'Conversation AI', 'Voice AI', 'Missed-Call Text Back', 'Lead Nurturing'],
    badge: 'GHL Project'
  },
  {
    title: '🤖 AI Appointment Booking Agent',
    description: 'Autonomous AI agent that books appointments, sends Gmail confirmations, schedules Google Calendar events, and triggers BullMQ reminders — built with Anthropic Claude SDK + Node.js + PostgreSQL.',
    link: 'https://github.com/vu-BBA',
    tags: ['AI Agent', 'Anthropic SDK', 'Node.js', 'Google Calendar', 'BullMQ', 'PostgreSQL'],
    badge: 'AI Project'
  },
  {
    title: '💻 Professional Portfolio (This Site)',
    description:
      'The portfolio you are looking at right now — a responsive single-page app built with React, Vite and Tailwind CSS, deployed on Vercel with automated GitHub Pages publishing.',
    link: 'https://github.com/vu-BBA/myPortfolio',
    tags: ['React', 'Vite', 'Tailwind CSS', 'Vercel', 'GitHub Actions'],
    badge: 'Open Source'
  },
  {
    title: '📰 News Article Classifier (NLP)',
    description: 'ML model that classifies news articles into categories using Natural Language Processing. Built as part of my AI/ML engineering work with Python and the Scikit-learn stack.',
    link: 'https://github.com/vu-BBA',
    tags: ['Python', 'Scikit-learn', 'NLP', 'Pandas', 'NumPy', 'Matplotlib'],
    badge: 'ML Project'
  },
  {
    title: 'DayFlow — AI Task Manager',
    description:
      'An intelligent productivity suite that uses AI to transform raw notes into structured daily schedules with smart prioritization.',
    link: 'https://dayflow-ai.vercel.app',
  },
  {
    title: 'BBA Resume Builder',
    description:
      'A full-stack MERN solution for professionals to generate clean, modern CVs in seconds with a focus on UX efficiency.',
    link: 'https://resume-builders-phi.vercel.app',
  },
  {
    title: 'Online Maze Learning (OMGL)',
    description:
      'Educational web game where players solve programming challenges (C++, Python, JS) to navigate dynamic mazes. Features progress tracking and an admin panel.',
    link: 'https://maze-learn-game.vercel.app',
  },
  {
    title: 'Urdu Jokes REST API',
    description:
      'A RESTful API serving Urdu jokes via random and category-based endpoints. Built for public integration and high performance.',
    link: 'https://bbajokes.vercel.app',
  },
  {
    title: 'Brilliant Future Academy',
    description:
      'Educational platform featuring an integrated AI chatbot for personalized student learning and support.',
    link: 'https://vu-bba.github.io/Brilliant-Future-Academy/',
  },
  {
    title: 'AI Automation Hub',
    description:
      'A growing collection of n8n automation workflows integrating AI APIs, webhooks, Gmail, Google Calendar, and data pipelines — real-world automation for real clients.',
    link: 'https://github.com/vu-BBA/automations-of-n8n',
  },
  {
    title: "Newton's Cradle Simulation",
    description:
      'Physics-based animation demonstrating momentum and energy conservation using advanced JavaScript and CSS keyframes.',
    link: 'https://vu-bba.github.io/dynamic-newton-cradle/',
  },
];

const badgeColor = {
  'GHL Project': 'border-neon-green/60 text-neon-green bg-neon-green/10',
  'AI Project': 'border-neon-cyan/60 text-neon-cyan bg-neon-cyan/10',
  'ML Project': 'border-neon-purple/60 text-neon-purple bg-neon-purple/10',
  'Open Source': 'border-neon-pink/60 text-neon-pink bg-neon-pink/10',
};

export default function Projects() {
  const [showAll, setShowAll] = useState(false)
  const visible = showAll ? projects : projects.slice(0, 4)
  return (
    <div className="py-20 bg-slate-900 relative">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-neon-green to-transparent animate-glow"></div>
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-2 h-2 rounded-full bg-neon-green blur-sm animate-pulse_slow" style={{ top: '-3px' }}></div>
      <div className="max-w-5xl mx-auto px-6">
        <h3 className="text-2xl font-semibold text-neon-green">Featured Projects</h3>
        <div className="w-20 h-1 bg-gradient-to-r from-neon-green to-neon-cyan rounded-full mt-2 mb-6"></div>
        <div className="mt-6 grid sm:grid-cols-2 gap-6">
          {visible.map((p, idx) => (
            <a
              key={idx}
              href={p.link || "#"}
              target="_blank"
              rel="noopener noreferrer"
              className="group block p-6 bg-slate-800 rounded-xl border border-neon-cyan/30 hover:border-neon-cyan/60 hover:shadow-lg hover:shadow-neon-cyan/20 transform hover:-translate-y-1 transition-all duration-300"
            >
              {p.badge && (
                <span className={`inline-block mb-3 text-[10px] uppercase tracking-wider font-bold px-2.5 py-1 rounded-full border ${badgeColor[p.badge] || 'border-neon-green/60 text-neon-green bg-neon-green/10'}`}>
                  {p.badge}
                </span>
              )}
              <h4 className="font-medium text-lg text-neon-cyan group-hover:text-neon-green transition-colors">
                {p.title}
              </h4>
              <p className="mt-2 text-gray-400 text-sm leading-relaxed">
                {p.description}
              </p>
              {p.tags && p.tags.length > 0 && (
                <div className="mt-3 flex flex-wrap gap-1.5">
                  {p.tags.map((t, i) => (
                    <span key={i} className="text-[11px] px-2 py-0.5 rounded-full border border-neon-green/30 text-gray-300 bg-slate-900/60">
                      {t}
                    </span>
                  ))}
                </div>
              )}
              <div className="mt-4 text-neon-green font-medium text-sm">
                Live Demo / Code →
              </div>
            </a>
          ))}
        </div>
        {projects.length > 4 && (
          <div className="mt-8 text-center">
            <button onClick={() => setShowAll(!showAll)} className="px-6 py-2 rounded-full border border-neon-cyan/50 text-neon-cyan hover:bg-neon-cyan/10 hover:border-neon-cyan transition duration-200">
              {showAll ? 'Show Less' : `See More (${projects.length - 4} more)`}
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
