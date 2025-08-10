import { motion, AnimatePresence } from 'framer-motion'
import AnimatedQuestions from './AnimatedQuestions'

const DrawerModule = ({ 
  title, 
  subtitle, 
  animatedQuestions,
  content, 
  isOpen, 
  onClick, 
  isHero = false,
  isLast = false
}) => {
  return (
    <motion.div
      layout
      className={`
        bg-white dark:bg-black border-black dark:border-white 
        cursor-pointer transition-all duration-200
        ${!isLast ? 'border-b' : ''}
        hover:bg-gray-50 dark:hover:bg-gray-900
      `}
      onClick={onClick}
    >
      <div className="p-6 lg:p-8">
        <div className="flex justify-between items-start">
          <div className="flex-1 pr-4">
            <h2 className={`font-sans font-medium leading-tight mb-2 ${
              isHero ? 'text-2xl lg:text-3xl' : 'text-lg lg:text-xl'
            }`}>
              {title}
            </h2>
            
            {subtitle && !animatedQuestions && (
              <p className="font-mono text-sm text-gray-600 dark:text-gray-400 leading-relaxed">
                {subtitle}
              </p>
            )}
            
            {animatedQuestions && (
              <div className="space-y-2">
                <AnimatedQuestions questions={animatedQuestions} />
                {subtitle && (
                  <p className="font-mono text-sm font-medium text-black dark:text-white">
                    {subtitle}
                  </p>
                )}
              </div>
            )}
            
            {!animatedQuestions && subtitle && (
              <p className="font-mono text-sm text-gray-600 dark:text-gray-400 mt-1">
                {subtitle}
              </p>
            )}
          </div>
          
          <motion.div
            animate={{ rotate: isOpen ? 45 : 0 }}
            transition={{ duration: 0.2, ease: 'easeInOut' }}
            className="text-xl font-mono flex-shrink-0 w-6 h-6 flex items-center justify-center"
          >
            +
          </motion.div>
        </div>
        
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: 'auto', opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.3, ease: 'easeInOut' }}
              className="overflow-hidden"
            >
              <div className="pt-6 mt-6 border-t border-gray-200 dark:border-gray-700">
                {content}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.div>
  )
}

export default DrawerModule
