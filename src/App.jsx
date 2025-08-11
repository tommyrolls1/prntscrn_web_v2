import { useState, useEffect } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { motion } from 'framer-motion'
import Header from './components/Header'
import Footer from './components/Footer'
import BackgroundPattern from './components/BackgroundPattern'
import LandingGate from './components/LandingGate'
// Pages
import Home from './pages/Home'
import Solutions from './pages/Solutions'
import Products from './pages/Products'
import CaseStudies from './pages/CaseStudies'
import Pricing from './pages/Pricing'
import Resources from './pages/Resources'
import Investors from './pages/Investors'
import Careers from './pages/Careers'
import Contact from './pages/Contact'
import Demo from './pages/Demo'
import Studio from './pages/Studio'
import Legal from './pages/Legal'
import NotFound from './pages/NotFound'
import AboutHow from './pages/AboutHow'

function App() {
  const [darkMode, setDarkMode] = useState(() => {
    const saved = localStorage.getItem('prntscrn_dark_mode')
    if (saved !== null) return saved === 'true'
    // fallback to system preference
    return window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches
  })
  const [gateDismissed, setGateDismissed] = useState(() => Boolean(sessionStorage.getItem('prntscrn_gate_dismissed')))

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark')
    } else {
      document.documentElement.classList.remove('dark')
    }
    localStorage.setItem('prntscrn_dark_mode', String(darkMode))
  }, [darkMode])

  const toggleDarkMode = () => setDarkMode((v) => !v)

  useEffect(() => {
    const handler = (e) => {
      const next = e.matches
      const saved = localStorage.getItem('prntscrn_dark_mode')
      if (saved === null) {
        setDarkMode(next)
      }
    }
    const mq = window.matchMedia('(prefers-color-scheme: dark)')
    mq.addEventListener?.('change', handler)
    return () => mq.removeEventListener?.('change', handler)
  }, [])

  return (
    <BrowserRouter>
      <div className="min-h-screen flex flex-col bg-white dark:bg-offblack text-black dark:text-white transition-colors">
        <BackgroundPattern />
        {gateDismissed && <Header darkMode={darkMode} toggleDarkMode={toggleDarkMode} />}
        <motion.div
          className="relative z-10 flex-1 flex flex-col"
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: gateDismissed ? 1 : 0, y: gateDismissed ? 0 : 8 }}
          transition={{ duration: 0.5, ease: 'easeOut' }}
        >
          {/* top padding to account for fixed header height if shown */}
          <main className={`container mx-auto px-4 py-8 ${gateDismissed ? 'pt-24' : 'pt-8'} w-full`}>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/solutions" element={<Solutions />} />
              <Route path="/solutions/:id" element={<Solutions />} />
              <Route path="/products" element={<Products />} />
              <Route path="/case-studies" element={<CaseStudies />} />
              <Route path="/pricing" element={<Pricing />} />
              <Route path="/resources" element={<Resources />} />
              <Route path="/investors" element={<Investors />} />
              <Route path="/about" element={<AboutHow />} />
              <Route path="/how" element={<AboutHow />} />
              <Route path="/careers" element={<Careers />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/demo" element={<Demo />} />
              <Route path="/studio" element={<Studio />} />
              <Route path="/legal" element={<Legal />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </main>
        </motion.div>
        <Footer />
        <LandingGate onDismiss={() => setGateDismissed(true)} />
      </div>
    </BrowserRouter>
  )
}

export default App
