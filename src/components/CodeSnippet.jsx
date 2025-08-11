import { motion } from 'framer-motion'

const lines = [
  'workflow: tender-pack',
  'inputs: brief.yaml',
  'modules: [summary, method, cv, compliance]',
  'render: idml -> pdf',
]

const CodeSnippet = () => (
  <div className="mt-4 font-mono text-xs bg-transparent">
    {lines.map((l, i) => (
      <motion.div
        key={l}
        initial={{ opacity: 0, y: 4 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: i * 0.25, duration: 0.4 }}
        className="text-gray-600 dark:text-gray-400"
      >
        {l}
      </motion.div>
    ))}
  </div>
)

export default CodeSnippet
