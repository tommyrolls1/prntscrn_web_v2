import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import LogoMark from './LogoMark'
import Typewriter from './Typewriter'
import CodeSnippet from './CodeSnippet'

const Tab = ({ active, children, onClick }) => (
  <button
    onClick={onClick}
    className={`px-3 py-1 font-mono text-xs border transition-colors ${
      active ? 'bg-black text-white dark:bg-white dark:text-black' : 'bg-transparent hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black'
    }`}
  >
    {children}
  </button>
)

const BrandGateModule = () => {
  const [mode, setMode] = useState('explore') // 'explore' | 'studio'

  useEffect(() => {
    const saved = sessionStorage.getItem('prntscrn_mode')
    if (saved) setMode(saved)
  }, [])

  useEffect(() => {
    sessionStorage.setItem('prntscrn_mode', mode)
  }, [mode])

  return (
    <div className="border border-black dark:border-white bg-white dark:bg-black p-6 lg:p-8 flex flex-col gap-6">
      <div className="flex items-start justify-between gap-4">
        <div className="text-black dark:text-white w-full max-w-md">
          <LogoMark className="w-full h-auto" />
        </div>
        <div className="flex-shrink-0 flex items-center gap-1">
          <span className="sr-only">Mode</span>
          <div className="inline-flex">
            <Tab active={mode === 'explore'} onClick={() => setMode('explore')}>Explore</Tab>
            <Tab active={mode === 'studio'} onClick={() => setMode('studio')}>Studio</Tab>
          </div>
        </div>
      </div>

      <Typewriter
        lines={["Capturing Intelligent Design."]}
        loop={false}
        speed={22}
        className="font-mono text-sm text-gray-700 dark:text-gray-300"
      />

      {mode === 'explore' ? (
        <div className="flex flex-col gap-4">
          <h1 className="font-mono text-2xl sm:text-3xl lg:text-4xl leading-tight">What if we treated design like code?</h1>
          <p className="font-mono text-sm text-gray-700 dark:text-gray-300">PRNTSCRN reimagines “print screen” as the beginning of intelligent creativity: not a flat image, but a system.</p>
          <CodeSnippet />
          <div className="mt-2 flex flex-col sm:flex-row gap-3">
            <Link to="/contact" className="px-6 py-3 bg-black text-white dark:bg-white dark:text-black border border-black dark:border-white font-mono text-sm text-center hover:bg-white hover:text-black dark:hover:bg-black dark:hover:text-white transition-colors">Start a Discovery Call →</Link>
            <Link to="/demo" className="px-6 py-3 border border-black dark:border-white font-mono text-sm hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black transition-colors text-center">Try a Demo PDF</Link>
          </div>
        </div>
      ) : (
        <div className="flex flex-col gap-4">
          <h2 className="font-sans text-2xl lg:text-3xl">PRNTSCRN Studio</h2>
          <p className="font-mono text-sm text-gray-700 dark:text-gray-300">Secure sign-in for pilots. Local agent precision, brand-perfect outputs. We provision access during pilots.</p>
          <div className="mt-2 flex flex-col sm:flex-row gap-3">
            <Link to="/studio" className="px-6 py-3 bg-black text-white dark:bg-white dark:text-black border border-black dark:border-white font-mono text-sm text-center hover:bg-white hover:text-black dark:hover:bg-black dark:hover:text-white transition-colors">Login to Studio</Link>
            <a href="mailto:hello@prntscrn.studio?subject=Studio%20Access%20Request" className="px-6 py-3 border border-black dark:border-white font-mono text-sm text-center hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black transition-colors">Request Access</a>
          </div>
        </div>
      )}
    </div>
  )
}

export default BrandGateModule
