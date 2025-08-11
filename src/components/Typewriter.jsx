import { useEffect, useState, useRef } from 'react'

const Typewriter = ({ lines = [], speed = 35, pause = 1200, className = '', loop = true, cursor = true, fixedHeight = false, lineHeightClass = '', predictiveWrap = false }) => {
  const [lineIdx, setLineIdx] = useState(0)
  const [text, setText] = useState('')
  const containerRef = useRef(null)
  const [height, setHeight] = useState(undefined)
  const [wrappedLines, setWrappedLines] = useState(lines)

  // Predictive wrapping: pre-insert line breaks so words don't jump during typing
  useEffect(() => {
    if (!predictiveWrap || !containerRef.current) {
      setWrappedLines(lines)
      return
    }
    const el = containerRef.current
    const width = el.getBoundingClientRect().width || 0
    if (!width) {
      setWrappedLines(lines)
      return
    }
    const measure = document.createElement('div')
    measure.style.position = 'absolute'
    measure.style.visibility = 'hidden'
    measure.style.whiteSpace = 'pre-wrap'
    measure.style.width = `${width}px`
    measure.className = `${className} ${lineHeightClass}`
    document.body.appendChild(measure)
    measure.textContent = 'A'
    const single = measure.getBoundingClientRect().height

    const result = lines.map((line) => {
      const words = line.split(' ')
      let current = ''
      const out = []
      words.forEach((w, i) => {
        const candidate = current ? current + ' ' + w : w
        measure.textContent = candidate
        const h = measure.getBoundingClientRect().height
        if (h > single) {
          if (current) out.push(current)
          current = w
        } else {
          current = candidate
        }
      })
      if (current) out.push(current)
      return out.join('\n')
    })

    document.body.removeChild(measure)
    setWrappedLines(result)
  }, [lines, className, lineHeightClass, predictiveWrap])

  // Typing effect
  useEffect(() => {
    let i = 0
    let active = true
    const line = (wrappedLines[lineIdx] || '')
    const write = () => {
      if (!active) return
      if (i <= line.length) {
        setText(line.slice(0, i))
        i += 1
        setTimeout(write, speed)
      } else if (loop && wrappedLines.length > 1) {
        setTimeout(() => {
          setText('')
          setLineIdx((lineIdx + 1) % wrappedLines.length)
        }, pause)
      }
    }
    write()
    return () => { active = false }
  }, [lineIdx, wrappedLines, speed, pause, loop])

  // Fixed height measurement uses wrapped lines (longest by height)
  useEffect(() => {
    if (!fixedHeight || !containerRef.current) return
    const el = containerRef.current
    const metrics = document.createElement('div')
    metrics.style.position = 'absolute'
    metrics.style.visibility = 'hidden'
    metrics.style.whiteSpace = 'pre-wrap'
    metrics.style.width = `${el.getBoundingClientRect().width}px`
    metrics.className = `${className} ${lineHeightClass}`
    metrics.textContent = wrappedLines.reduce((a, b) => (a.length > b.length ? a : b), '')
    document.body.appendChild(metrics)
    setHeight(metrics.getBoundingClientRect().height)
    document.body.removeChild(metrics)
  }, [wrappedLines, className, fixedHeight, lineHeightClass])

  return (
    <div ref={containerRef} style={fixedHeight && height ? { height } : undefined} className={`${lineHeightClass}`}>
      <p className={`${className} whitespace-pre-wrap`}>{text}{cursor && <span className="animate-pulse">▌</span>}</p>
    </div>
  )
}

export default Typewriter
