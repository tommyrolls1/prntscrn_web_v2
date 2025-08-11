import { useEffect, useState, useRef } from 'react'
import { Document, Portfolio, Cloud, Security, Edit, Code, ChevronRight } from '@carbon/icons-react'

const Heading = () => (
  <header className="px-3 sm:px-4 pt-3 sm:pt-4 pb-2 border-b border-black/10 dark:border-white/10">
    <h2 className="font-sans uppercase tracking-[0.12em] text-xs sm:text-sm text-black dark:text-white">What is PRNTSCRN?</h2>
    <p className="font-mono text-[11px] sm:text-xs text-gray-700 dark:text-gray-300 mt-1">We turn complex design workflows into modular, reproducible systems — from brief to compliant, on-brand documents.</p>
  </header>
)

// Node: static UI with optional appear animation
const Node = ({ title, caption, icon, innerRef, compact = false, onClick, animateIn = false, delay = 0 }) => {
  const base = compact
    ? 'border border-black dark:border-white bg-white dark:bg-offblack p-2 flex flex-col items-center gap-1 min-h-[60px] group transition-all duration-300 hover:shadow-lg hover:border-2 hover:-translate-y-1 w-full'
    : 'border border-black dark:border-white bg-white dark:bg-offblack p-3 sm:p-4 lg:p-5 flex flex-col items-start gap-1 sm:gap-2 min-h-[70px] sm:min-h-[80px] lg:min-h-[110px] group transition-all duration-300 hover:shadow-lg hover:border-2 hover:-translate-y-1 w-full'
  const style = animateIn
    ? { animation: 'fadeInUp 700ms cubic-bezier(0.2,0.8,0.2,1) forwards', animationDelay: `${delay}ms`, opacity: 0, transform: 'translateY(12px)' }
    : undefined
  return (
    <div ref={innerRef} onClick={onClick} className={base} style={style}>
      <div className="flex items-center gap-1 sm:gap-2 text-black dark:text-white w-full">
        <div className="transition-transform duration-300 group-hover:scale-110 flex-shrink-0">{icon}</div>
        <h3 className="font-sans text-[10px] sm:text-sm lg:text-base uppercase tracking-wide leading-tight">{title}</h3>
      </div>
      {!compact && caption && <p className="font-mono text-[9px] sm:text-[10px] lg:text-xs text-gray-700 dark:text-gray-300 leading-tight">{caption}</p>}
    </div>
  )
}

const Badge = ({ children, delay = 0 }) => (
  <span 
    className="inline-flex items-center gap-1 px-2 py-1 border border-black/40 dark:border-white/40 font-mono text-[9px] sm:text-[10px] lg:text-[11px] text-gray-800 dark:text-gray-200 transition-all duration-300 hover:bg-black/5 dark:hover:bg-white/5 text-center leading-tight"
    style={{
      animationDelay: `${delay}ms`,
      animation: 'fadeInUp 600ms ease-out forwards',
      opacity: 0,
      transform: 'translateY(10px)'
    }}
  >
    {children}
  </span>
)

// Arrow: static chevron with optional subtle pulse
const Arrow = ({ direction = 'right', size = 'md', pulse = false }) => {
  const sizeClasses = { sm: 'w-4 h-4', md: 'w-6 h-6', lg: 'w-8 h-8' }
  const rotationClasses = { right: 'rotate-0', down: 'rotate-90', left: 'rotate-180', up: 'rotate-270' }
  const style = pulse ? { animation: 'arrowPulse 2400ms ease-in-out infinite' } : undefined
  return (
    <div className={`flex items-center justify-center text-black/60 dark:text-white/60 ${sizeClasses[size]}`} style={style}>
      <ChevronRight className={`${rotationClasses[direction]}`} />
    </div>
  )
}

const InfoDrawer = ({ isOpen, onClose, title, caption }) => (
  <div className={`transition-all duration-300 ease-out overflow-hidden bg-white dark:bg-offblack border-t border-black dark:border-white ${isOpen ? 'max-h-24 opacity-100' : 'max-h-0 opacity-0'}`}>
    <div className="p-3">
      <div className="flex justify-between items-start mb-1">
        <h3 className="font-sans text-xs uppercase tracking-wide text-black dark:text-white">{title}</h3>
        {/* close removed by request */}
      </div>
      <p className="font-mono text-[10px] text-gray-700 dark:text-gray-300 leading-tight">{caption}</p>
    </div>
  </div>
)

const AsciiDiagram = ({ hideHeading = false, interactive = true }) => {
  const [selectedNode, setSelectedNode] = useState(null)
  const [isDrawerOpen, setIsDrawerOpen] = useState(false)
  const [reduceMotion, setReduceMotion] = useState(false)
  const [inView, setInView] = useState(false)
  const containerRef = useRef(null)

  const nodeData = {
    inputs: { title: 'Inputs', caption: 'Brief • Data • Assets • Templates' },
    manifest: { title: 'Manifest', caption: 'Modules • Rules • Brand • Constraints' },
    orchestrator: { title: 'Orchestrator', caption: 'Cloud coordination & jobs' },
    design: { title: 'Design Renderer', caption: 'Desktop precision (UXP)' },
    agent: { title: 'Agent', caption: 'Local, secure, signed' },
    web: { title: 'HTML/CSS Engine', caption: 'Cloud render agent' }
  }

  const handleNodeClick = (nodeKey) => {
    if (!interactive) return
    setSelectedNode(nodeData[nodeKey])
    setIsDrawerOpen(true)
  }

  const closeDrawer = () => {
    setIsDrawerOpen(false)
    setTimeout(() => setSelectedNode(null), 300)
  }

  useEffect(() => {
    // keyframes + reduced motion
    const style = document.createElement('style')
    style.textContent = `
      @keyframes fadeInUp { from { opacity: 0; transform: translateY(12px);} to { opacity: 1; transform: translateY(0);} }
      @keyframes arrowPulse { 0%,100% { transform: translateY(0) scale(1); opacity: .6 } 50% { transform: translateY(-2px) scale(1.06); opacity: 1 } }
      @media (prefers-reduced-motion: reduce) { * { animation: none !important; transition: none !important; } }
    `
    document.head.appendChild(style)
    const mq = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)')
    const setRM = () => setReduceMotion(!!(mq && mq.matches))
    setRM()
    mq && mq.addEventListener && mq.addEventListener('change', setRM)

    // observe in-view
    const el = containerRef.current
    let observer
    if (el) {
      observer = new IntersectionObserver((entries) => {
        entries.forEach((e) => { if (e.isIntersecting) setInView(true) })
      }, { threshold: 0.35 })
      observer.observe(el)
    }

    return () => {
      document.head.removeChild(style)
      mq && mq.removeEventListener && mq.removeEventListener('change', setRM)
      observer && observer.disconnect()
    }
  }, [])

  return (
    <div className="w-full h-full flex flex-col" ref={containerRef}>
      {!hideHeading && <Heading />}
      <div className="w-full flex-1 relative text-black dark:text-white overflow-hidden flex flex-col">
        {/* Technical drawing grid overlay (behind content) */}
        <div className="absolute inset-0 z-0 pointer-events-none opacity-60 dark:opacity-60">
          <div className="w-full h-full block dark:hidden" style={{ backgroundImage: `repeating-linear-gradient(0deg, rgba(0,0,0,0.06) 0, rgba(0,0,0,0.06) 1px, transparent 1px, transparent 20px), repeating-linear-gradient(90deg, rgba(0,0,0,0.06) 0, rgba(0,0,0,0.06) 1px, transparent 1px, transparent 20px)` }} />
          <div className="w-full h-full hidden dark:block" style={{ backgroundImage: `repeating-linear-gradient(0deg, rgba(255,255,255,0.08) 0, rgba(255,255,255,0.08) 1px, transparent 1px, transparent 20px), repeating-linear-gradient(90deg, rgba(255,255,255,0.08) 0, rgba(255,255,255,0.08) 1px, transparent 1px, transparent 20px)` }} />
        </div>

        {/* Main diagram container - centered */}
        <div className={`relative z-10 flex-1 flex flex-col justify-center`}>
          {/* Mobile - 2 rows */}
          <div className="block sm:hidden px-2">
            <div className="flex flex-col justify-center gap-2">
              {/* Row 1 */}
              <div className="flex items-center justify-between gap-1">
                <div className="flex-1"><Node title="Inputs" icon={<Document />} compact={true} onClick={() => handleNodeClick('inputs')} animateIn={inView && !reduceMotion} delay={50} /></div>
                <Arrow direction="right" size="sm" pulse={inView && !reduceMotion} />
                <div className="flex-1"><Node title="Manifest" icon={<Portfolio />} compact={true} onClick={() => handleNodeClick('manifest')} animateIn={inView && !reduceMotion} delay={100} /></div>
                <Arrow direction="right" size="sm" pulse={inView && !reduceMotion} />
                <div className="flex-1"><Node title="Orchestrator" icon={<Cloud />} compact={true} onClick={() => handleNodeClick('orchestrator')} animateIn={inView && !reduceMotion} delay={150} /></div>
              </div>
              {/* Down */}
              <div className="flex justify-center py-1"><Arrow direction="down" size="sm" pulse={inView && !reduceMotion} /></div>
              {/* Row 2 */}
              <div className="flex items-center justify-between gap-1">
                <div className="flex-1"><Node title="Design Renderer" icon={<Edit />} compact={true} onClick={() => handleNodeClick('design')} animateIn={inView && !reduceMotion} delay={200} /></div>
                <Arrow direction="left" size="sm" pulse={inView && !reduceMotion} />
                <div className="flex-1"><Node title="Agent" icon={<Security />} compact={true} onClick={() => handleNodeClick('agent')} animateIn={inView && !reduceMotion} delay={250} /></div>
                <Arrow direction="right" size="sm" pulse={inView && !reduceMotion} />
                <div className="flex-1"><Node title="HTML/CSS Engine" icon={<Code />} compact={true} onClick={() => handleNodeClick('web')} animateIn={inView && !reduceMotion} delay={300} /></div>
              </div>
            </div>
          </div>

          {/* Desktop - 2 rows */}
          <div className="hidden sm:block px-3 lg:px-6">
            <div className="max-w-5xl xl:max-w-6xl mx-auto flex flex-col justify-center gap-6 md:gap-8 xl:gap-10">
              {/* Row 1 */}
              <div className="flex items-center justify-center gap-3 md:gap-6 xl:gap-8">
                <div className="flex-1 max-w-[220px] md:max-w-[260px]"><Node title="Inputs" caption="Brief • Data • Assets • Templates" icon={<Document />} onClick={() => handleNodeClick('inputs')} animateIn={inView && !reduceMotion} delay={50} /></div>
                <Arrow direction="right" size="sm" pulse={inView && !reduceMotion} />
                <div className="flex-1 max-w-[220px] md:max-w-[260px]"><Node title="Manifest" caption="Modules • Rules • Brand • Constraints" icon={<Portfolio />} onClick={() => handleNodeClick('manifest')} animateIn={inView && !reduceMotion} delay={100} /></div>
                <Arrow direction="right" size="sm" pulse={inView && !reduceMotion} />
                <div className="flex-1 max-w-[220px] md:max-w-[260px]"><Node title="Orchestrator" caption="Cloud coordination & jobs" icon={<Cloud />} onClick={() => handleNodeClick('orchestrator')} animateIn={inView && !reduceMotion} delay={150} /></div>
              </div>
              {/* Down */}
              <div className="flex justify-center"><Arrow direction="down" size="md" pulse={inView && !reduceMotion} /></div>
              {/* Row 2 */}
              <div className="flex items-center justify-center gap-3 md:gap-6 xl:gap-8">
                <div className="flex-1 max-w-[220px] md:max-w-[260px]"><Node title="Design Renderer" caption="Desktop precision (UXP)" icon={<Edit />} onClick={() => handleNodeClick('design')} animateIn={inView && !reduceMotion} delay={200} /></div>
                <Arrow direction="left" size="sm" pulse={inView && !reduceMotion} />
                <div className="flex-1 max-w-[220px] md:max-w-[260px]"><Node title="Agent" caption="Local, secure, signed" icon={<Security />} onClick={() => handleNodeClick('agent')} animateIn={inView && !reduceMotion} delay={250} /></div>
                <Arrow direction="right" size="sm" pulse={inView && !reduceMotion} />
                <div className="flex-1 max-w-[220px] md:max-w-[260px]"><Node title="HTML/CSS Engine" caption="Cloud render agent" icon={<Code />} onClick={() => handleNodeClick('web')} animateIn={inView && !reduceMotion} delay={300} /></div>
              </div>
            </div>
          </div>
        </div>

        {interactive && (
          <InfoDrawer isOpen={isDrawerOpen} onClose={closeDrawer} title={selectedNode?.title} caption={selectedNode?.caption} />
        )}
      </div>
    </div>
  )
}

export default AsciiDiagram
