import { Link, NavLink } from 'react-router-dom'
import { useState } from 'react'

const Header = ({ darkMode, toggleDarkMode }) => {
  const [menuOpen, setMenuOpen] = useState(false)
  const linkClass = ({ isActive }) => `block px-1 py-2 uppercase tracking-[0.14em] font-sans text-[12px] ${isActive ? 'underline' : 'hover:underline'}`

  return (
    <header className="fixed top-0 left-0 right-0 z-[70] border-b border-black dark:border-white bg-white/95 dark:bg-offblack/95 backdrop-blur">
      <div className="container mx-auto px-4 py-3 flex items-center">
        {/* Brand */}
        <div className="font-mono text-lg font-medium tracking-tight">
          <Link to="/">PRNTSCRN</Link>
        </div>

        {/* Mobile hamburger button (left of contrast) */}
        <button
          className="md:hidden inline-flex items-center justify-center h-[34px] w-[34px] border border-black dark:border-white ml-auto mr-2"
          aria-label="Toggle menu"
          onClick={() => setMenuOpen((v) => !v)}
        >
          <span className={`block w-5 h-0.5 bg-current transition-transform duration-200 ${menuOpen ? 'translate-y-1.5 rotate-45' : ''}`} />
          <span className={`block w-5 h-0.5 bg-current my-1 transition-opacity duration-200 ${menuOpen ? 'opacity-0' : 'opacity-100'}`} />
          <span className={`block w-5 h-0.5 bg-current transition-transform duration-200 ${menuOpen ? '-translate-y-1.5 -rotate-45' : ''}`} />
        </button>

        {/* Desktop nav (right-justified) */}
        <nav className="hidden md:flex items-center gap-5 font-mono text-sm ml-auto">
          <NavLink to="/about" className={linkClass}>About</NavLink>
          <NavLink to="/solutions" className={linkClass}>Solutions</NavLink>
          <NavLink to="/products" className={linkClass}>Products</NavLink>
        </nav>

        {/* Contrast toggle between hamburger and CTAs on mobile, between nav and CTAs on desktop */}
        {toggleDarkMode && (
          <button
            onClick={toggleDarkMode}
            aria-label="Toggle contrast"
            title="Toggle contrast"
            className="ml-2 md:ml-3 relative inline-flex items-center justify-center h-[34px] w-[34px] border border-black dark:border-white"
          >
            <span
              className={`block w-6 h-6 rounded-full border border-black dark:border-white transition-transform duration-300 ${darkMode ? 'rotate-180' : 'rotate-0'}`}
              style={{ background: 'conic-gradient(#000 0 50%, #fff 50% 100%)' }}
            />
          </button>
        )}

        {/* CTAs */}
        <Link to="/contact" className="hidden sm:inline-block ml-3 px-3 py-2 border border-black dark:border-white font-mono text-xs hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black transition-colors">Start</Link>
        <Link to="/studio" className="inline-block ml-3 px-3 py-2 font-mono text-xs border border-black dark:border-white bg-black text-white dark:bg-white dark:text-black transition-colors">Access STUDIO</Link>
      </div>

      {/* Mobile menu panel */}
      <div className={`md:hidden border-t border-black dark:border-white bg-white/95 dark:bg-offblack/95 overflow-hidden transition-[max-height] duration-300 ${menuOpen ? 'max-h-96' : 'max-h-0'}`}>
        <nav className="container mx-auto px-4 py-2 flex flex-col gap-1">
          <NavLink to="/contact" className={linkClass} onClick={() => setMenuOpen(false)}>Start</NavLink>
          <NavLink to="/about" className={linkClass} onClick={() => setMenuOpen(false)}>About</NavLink>
          <NavLink to="/solutions" className={linkClass} onClick={() => setMenuOpen(false)}>Solutions</NavLink>
          <NavLink to="/products" className={linkClass} onClick={() => setMenuOpen(false)}>Products</NavLink>
        </nav>
      </div>
    </header>
  )
}

export default Header
