import { useState, useEffect } from 'react'
import { Routes, Route } from 'react-router-dom'
import ThemeToggle from './components/ThemeToggle/ThemeToggle.jsx';
import Sidebar from './components/SidebarNav/Sidebar.jsx'
import Loader from './components/Loader/Loader.jsx'
import Home from './pages/Home/Home.jsx'
import About from './pages/About/About.jsx'
import Projects from './pages/Projects/Projects.jsx'
import Contact from './pages/Contact/Contact.jsx'
import ContactButton from './components/ContactButton/ContactButton.jsx'
import Socials from './components/Socials/Socials.jsx';
import Lined from './components/Lined/Lined.jsx';

export default function App() {
  const [theme, setTheme] = useState('light')
  const [loading, setLoading] = useState(true)
  const [fadeOutLoader, setFadeOutLoader] = useState(false)
  const [showFadeIn, setShowFadeIn] = useState(false)

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme)
  }, [theme])

  useEffect(() => {
    const timer = setTimeout(() => {
      setFadeOutLoader(true)
      setTimeout(() => {
        setLoading(false)
        setTimeout(() => setShowFadeIn(true), 10)
      }, 250)
    }, 2500)

    return () => clearTimeout(timer)
  }, [])

  const toggleTheme = () => {
    setTheme(prev => (prev === 'light' ? 'dark' : 'light'))
  }

  if (loading) {
    return <Loader fadeOut={fadeOutLoader} />
  }

  return (
    <div className={`app-container ${showFadeIn ? 'fade-in' : ''}`}>
      <Lined />
      <Sidebar toggleTheme={toggleTheme} theme={theme} />
      <ThemeToggle toggleTheme={toggleTheme} theme={theme} />
      <ContactButton />
      <main className="main-content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
        <Socials />
      </main>
    </div>
  )
}
