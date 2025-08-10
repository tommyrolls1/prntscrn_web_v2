import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const AnimatedQuestions = ({ questions }) => {
  const [currentIndex, setCurrentIndex] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % questions.length)
    }, 3000)

    return () => clearInterval(interval)
  }, [questions.length])

  return (
    <div className="h-8 overflow-hidden">
      <AnimatePresence mode="wait">
        <motion.p
          key={currentIndex}
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: -20, opacity: 0 }}
          transition={{ duration: 0.5, ease: 'easeInOut' }}
          className="font-mono text-sm text-gray-600 dark:text-gray-400"
        >
          {questions[currentIndex]}
        </motion.p>
      </AnimatePresence>
    </div>
  )
}

export default AnimatedQuestions
