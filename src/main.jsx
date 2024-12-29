import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import './../node_modules/bootstrap/dist/css/bootstrap.min.css'
import Home from './assets/components/Home.jsx'
import About from './assets/components/About.jsx'
import Skills from './assets/components/Skills.jsx'
import Achievements from './assets/components/Achievements.jsx'
import Navbar1 from './assets/components/Navbar1.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
      <Navbar1/>
      <Home/>
      <About/>
      <Skills/>
      <Achievements />
  </StrictMode>,
)
