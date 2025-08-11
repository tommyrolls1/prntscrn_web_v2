const products = [
  { id: 'studio', name: 'PRNTSCRN Studio', desc: 'Self-serve document generation from reusable modules and logic.', cta: 'Join Beta' },
  { id: 'agent', name: 'PRNTSCRN Agent', desc: 'Local runtime for privacy, compliance checks, and high fidelity render orchestration.', cta: 'Request Pilot' },
  { id: 'ocean', name: 'AmbitiousOcean', desc: 'A declarative language for document logic and layout.', cta: 'Coming Soon' },
  { id: 'zine', name: 'ZinePlayground', desc: 'Your personal companion for experimental, automated publishing.', cta: 'Explore' },
]

const Products = () => (
  <div className="space-y-6">
    <div className="border border-black dark:border-white bg-white dark:bg-offblack p-6 lg:p-8">
      <h1 className="font-sans text-2xl lg:text-3xl mb-2">Products</h1>
      <p className="font-mono text-sm text-gray-600 dark:text-gray-400">We're building a platform by solving real problems; creatively.</p>
    </div>
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      {products.map(p => (
        <div key={p.id} className="border border-black dark:border-white bg-white dark:bg-offblack p-6 flex flex-col gap-3">
          <h2 className="font-sans text-xl">{p.name}</h2>
          <p className="font-mono text-sm text-gray-700 dark:text-gray-300">{p.desc}</p>
          <div>
            <button className="px-4 py-2 border border-black dark:border-white font-mono text-xs hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black transition-colors">{p.cta}</button>
          </div>
        </div>
      ))}
    </div>
  </div>
)

export default Products
