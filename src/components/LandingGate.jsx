import { useEffect, useState } from 'react'
import { useNavigate, useLocation } from 'react-router-dom'
import Typewriter from './Typewriter'
import LogoMark from './LogoMark'
import SignInModule from './SignInModule'

const LandingGate = ({ onDismiss }) => {
  const [show, setShow] = useState(false)
  const [mode, setMode] = useState('gate') // 'gate' | 'signin'
  const navigate = useNavigate()
  const location = useLocation()

  useEffect(() => {
    const dismissed = sessionStorage.getItem('prntscrn_gate_dismissed')
    if (dismissed) {
      setShow(false)
      return
    }
    if (location.pathname === '/') {
      setShow(true)
      setMode('gate')
    } else {
      sessionStorage.setItem('prntscrn_gate_dismissed', '1')
      setShow(false)
      onDismiss && onDismiss()
    }
  }, [location.pathname, onDismiss])

  useEffect(() => {
    if (show) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }
    return () => { document.body.style.overflow = '' }
  }, [show])

  useEffect(() => {
    const onKey = (e) => {
      if (e.key === 'Escape' || e.key === 'Enter') dismiss()
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [])

  useEffect(() => {
    const onWheel = (e) => { if (show && mode === 'gate') { e.preventDefault(); dismiss() } }
    const onTouch = () => { if (show && mode === 'gate') dismiss() }
    window.addEventListener('wheel', onWheel, { passive: false })
    window.addEventListener('touchstart', onTouch, { passive: true })
    return () => {
      window.removeEventListener('wheel', onWheel)
      window.removeEventListener('touchstart', onTouch)
    }
  }, [show, mode])

  const dismiss = () => {
    sessionStorage.setItem('prntscrn_gate_dismissed', '1')
    setShow(false)
    onDismiss && onDismiss()
  }

  const openSignInInline = () => {
    // Reveal header and keep user on home; transform gate into sign-in
    sessionStorage.setItem('prntscrn_gate_dismissed', '1')
    onDismiss && onDismiss()
    setMode('signin')
    setShow(true)
  }

  const goStudioPage = () => {
    // Dedicated sign-in page, same module
    dismiss()
    navigate('/studio')
  }

  if (!show) return null

  return (
    <div className="fixed inset-0 z-50 flex flex-col">
      <div className="absolute inset-0 bg-white dark:bg-offblack transition-opacity" />

      <div className={`relative z-10 flex-1 flex flex-col items-center justify-center px-6 text-center transition-all duration-300 ${mode === 'signin' ? 'pt-24' : ''}`}>
        <div className="max-w-2xl w-full text-black dark:text-white">
          {mode === 'gate' ? (
            <>
              <div className="mx-auto max-w-md mb-6">
                <LogoMark className="w-full h-auto" />
              </div>
              <Typewriter lines={["Capturing Intelligent Design."]} loop={false} cursor={true} speed={44} className="font-mono text-base sm:text-lg mb-10" />
              <div className="flex flex-col sm:flex-row gap-3 justify-center">
                <button onClick={openSignInInline} className="px-6 py-3 border border-black dark:border-white bg-black text-white dark:bg-white dark:text-black font-mono text-sm hover:bg-white hover:text-black dark:hover:bg-offblack dark:hover:text-white transition-colors">Enter Studio</button>
                <button onClick={dismiss} className="px-6 py-3 border border-black dark:border-white font-mono text-sm hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black transition-colors">Explore PRNTSCRN</button>
              </div>
              <p className="mt-6 font-mono text-xs text-gray-500">Press Enter, scroll, or tap to continue</p>
            </>
          ) : (
            <div className="text-left">
              <SignInModule compact={true} />
              <div className="mt-4 text-center">
                <button onClick={goStudioPage} className="underline font-mono text-xs">Open full sign-in page</button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

export default LandingGate
