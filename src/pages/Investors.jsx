const Investors = () => (
  <div className="space-y-6">
    <div className="border border-black dark:border-white p-6 lg:p-8">
      <h1 className="font-sans text-2xl lg:text-3xl mb-2">Investors & Partners</h1>
      <p className="font-mono text-sm text-gray-600 dark:text-gray-400">Problem, traction model, roadmap. Request a confidential deck.</p>
    </div>
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      <div className="border border-black dark:border-white p-6">
        <h3 className="font-sans text-lg mb-2">Pitch</h3>
        <p className="font-mono text-sm text-gray-700 dark:text-gray-300">Service-led revenue engine evolving into Studio SaaS and marketplace.</p>
      </div>
      <div className="border border-black dark:border-white p-6">
        <h3 className="font-sans text-lg mb-2">Market context</h3>
        <p className="font-mono text-sm text-gray-700 dark:text-gray-300">High-stakes document automation across government, education, enterprise.</p>
      </div>
      <div className="border border-black dark:border-white p-6">
        <h3 className="font-sans text-lg mb-2">Defensibility</h3>
        <ul className="font-mono text-sm space-y-2">
          <li>Local agent + InDesign integration</li>
          <li>Vertical template library</li>
          <li>Compliance logic and .ocean manifests</li>
        </ul>
      </div>
    </div>
    <div className="border border-black dark:border-white p-6 flex flex-col sm:flex-row gap-3">
      <a href="/contact" className="px-4 py-2 border border-black dark:border-white font-mono text-xs hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black transition-colors">Request confidential deck</a>
      <a href="#" className="px-4 py-2 border border-black dark:border-white font-mono text-xs hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black transition-colors">Partner with us</a>
    </div>
  </div>
)

export default Investors
