import React from 'react'

const projects = [
  {
    title: 'Joke app',
    description:
      'A RESTful API serving Urdu jokes with random and category-based endpoints, deployed for public use.',
    link: 'https://bbajokes.vercel.app',
  },
  {
    title: 'Accedemy website with Ai chatbot',
    description:
      'Educational platform with AI chatbot for personalized learning, built with css & javascript.',
    link: 'https://vu-bba.github.io/Brilliant-Future-Academy/',   
  },

  {
    title: 'Online Maze Game for Learning (OMGL)',
    description:
      'Educational maze game with programming challenges, dynamic maze generation, timer, keys and gates. JavaScript frontend with Flask backend.',
    link: 'https://maze-learn-game.vercel.app/',
  },
  {
    title: 'AI Automation Projects',
    description:
      'n8n workflows, AI-powered chatbots, and prompt-driven automation experiments integrating APIs and webhooks.',
    link: 'https://github.com/vu-BBA',
  },
  {
    title: 'Dynamic Newton’s Cradle Simulation',
    description:
      'Physics-based Newton’s Cradle animation demonstrating momentum and energy conservation using JavaScript and CSS animations.',
    link: 'https://vu-bba.github.io/dynamic-newton-cradle/',
  },
  {
    title: 'Urdu Jokes API',
    description:
      'RESTful API serving Urdu jokes with random and category-based endpoints, deployed for public use.',
    link: 'https://github.com/vu-BBA',
  },
  {
    title: 'Personal Portfolio Website',
    description:
      'Responsive portfolio built with React, TypeScript and Tailwind CSS to showcase projects, skills and experience.',
    link: 'https://github.com/vu-BBA/Portfolio',
  },
  {
    title: 'AI Prompt Engineering Experiments',
    description:
      'Collection of prompt engineering experiments focused on LLM behavior, response optimization and automation use cases.',
    link: 'https://github.com/vu-BBA',
  },
];



export default function Projects(){
  return (
    <div className="py-20 bg-slate-900">
      <div className="max-w-5xl mx-auto px-6">
        <h3 className="text-2xl font-semibold text-neon-green">Projects</h3>
        <div className="mt-6 grid sm:grid-cols-2 gap-6">
          {projects.map((p, idx) => (
            <a key={idx} href={p.link} target="_blank" rel="noreferrer" className="block p-6 bg-slate-800 rounded-xl border border-neon-cyan/30 hover:border-neon-cyan/60 hover:shadow-lg hover:shadow-neon-cyan/20 transform hover:-translate-y-1 transition">
              <h4 className="font-medium text-lg text-neon-cyan">{p.title}</h4>
              <p className="mt-2 text-gray-300">{p.description}</p>
              <div className="mt-4 text-neon-green font-medium">View on GitHub →</div>
            </a>
          ))}
        </div>
      </div>
    </div>
  )
}
