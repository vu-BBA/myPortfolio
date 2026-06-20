import React, { useState } from 'react';

const projects = [
  {
    title: '🤖 AI Appointment Booking Agent',
    description: 'Autonomous AI agent that books appointments, sends Gmail confirmations, schedules Google Calendar events, and triggers BullMQ reminders — built with Anthropic Claude SDK + Node.js + PostgreSQL.',
    link: 'https://github.com/vu-BBA',
    tags: ['AI Agent', 'Anthropic SDK', 'Node.js', 'Google Calendar', 'BullMQ', 'PostgreSQL'],
    badge: 'AI Project'
  },
  {
    title: '📰 News Article Classifier (NLP)',
    description: 'ML model that classifies news articles into categories using Natural Language Processing. Built during AI/ML Engineering Internship at DevelopersHub Corporation.',
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
    link: 'https://github.com/vu-BBA',
  },
  {
    title: "Newton's Cradle Simulation",
    description:
      'Physics-based animation demonstrating momentum and energy conservation using advanced JavaScript and CSS keyframes.',
    link: 'https://vu-bba.github.io/dynamic-newton-cradle/',
  },
  {
    title: 'Professional Portfolio',
    description:
      'Responsive developer portfolio built with React, TypeScript, and Tailwind CSS to showcase my technical journey.',
    link: 'https://github.com/vu-BBA/myPortfolio',
  },
];

export default function Projects() {
  const [showAll, setShowAll] = useState(false)
  const visible = showAll ? projects : projects.slice(0, 4)
  return (
    <div className="py-20 bg-slate-900 relative">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-neon-green to-transparent animate-glow"></div>
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-2 h-2 rounded-full bg-neon-green blur-sm animate-pulse_slow" style={{ top: '-3px' }}></div>
      <div className="max-w-5xl mx-auto px-6">
        <h3 className="text-2xl font-semibold text-neon-green">Featured Projects</h3>
        <div className="mt-6 grid sm:grid-cols-2 gap-6">
          {visible.map((p, idx) => (
            <a 
              key={idx} 
              href={p.link || "#"} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="group block p-6 bg-slate-800 rounded-xl border border-neon-cyan/30 hover:border-neon-cyan/60 hover:shadow-lg hover:shadow-neon-cyan/20 transform hover:-translate-y-1 transition-all duration-300"
            >
              <h4 className="font-medium text-lg text-neon-cyan group-hover:text-neon-green transition-colors">
                {p.title}
              </h4>
              <p className="mt-2 text-gray-400 text-sm leading-relaxed">
                {p.description}
              </p>
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
