import React from 'react'
import { createRoot } from 'react-dom/client'
import GHLWork from './components/GHLWork'
import './styles/index.css'

createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <div className="bg-slate-950 text-gray-100 min-h-screen">
      <GHLWork />
    </div>
  </React.StrictMode>
)
