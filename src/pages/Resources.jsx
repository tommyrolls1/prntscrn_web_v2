const Resources = () => (
  <div className="space-y-6">
    <div className="border border-black dark:border-white bg-white dark:bg-offblack p-6 lg:p-8">
      <h1 className="font-sans text-2xl lg:text-3xl mb-2">Resources</h1>
      <p className="font-mono text-sm text-gray-600 dark:text-gray-400">Thought leadership, updates, and materials.</p>
    </div>
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      <div className="border border-black dark:border-white bg-white dark:bg-offblack p-6">
        <h2 className="font-sans text-lg mb-2">Blog</h2>
        <p className="font-mono text-sm text-gray-700 dark:text-gray-300">Philosophy, product updates, and how-tos.</p>
      </div>
      <div className="border border-black dark:border-white bg-white dark:bg-offblack p-6">
        <h2 className="font-sans text-lg mb-2">Whitepapers</h2>
        <p className="font-mono text-sm text-gray-700 dark:text-gray-300">Design as Infrastructure: a primer (gated).</p>
      </div>
      <div className="border border-black dark:border-white bg-white dark:bg-offblack p-6">
        <h2 className="font-sans text-lg mb-2">Assessment</h2>
        <p className="font-mono text-sm text-gray-700 dark:text-gray-300">Workflow Assessment PDF (lead capture).</p>
      </div>
      <div className="border border-black dark:border-white bg-white dark:bg-offblack p-6">
        <h2 className="font-sans text-lg mb-2">Videos</h2>
        <p className="font-mono text-sm text-gray-700 dark:text-gray-300">Demos and walkthroughs.</p>
      </div>
      <div className="border border-black dark:border-white bg-white dark:bg-offblack p-6">
        <h2 className="font-sans text-lg mb-2">API docs</h2>
        <p className="font-mono text-sm text-gray-700 dark:text-gray-300">Protected; requires signup.</p>
      </div>
      <div className="border border-black dark:border-white bg-white dark:bg-offblack p-6">
        <h2 className="font-sans text-lg mb-2">Press kit</h2>
        <p className="font-mono text-sm text-gray-700 dark:text-gray-300">Logos and brand assets.</p>
      </div>
    </div>
  </div>
)

export default Resources
