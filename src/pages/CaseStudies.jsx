const cases = [
  { id: 'gov-bid', title: 'Infrastructure bid — draft in hours, not days', sector: 'Government', size: 'National', outcome: 'Faster iterations; fewer errors', anon: true },
  { id: 'uni-pack', title: 'University curriculum packs — consistent across cohorts', sector: 'Education', size: 'Multi-campus', outcome: 'Consistent branding; reproducible outputs' },
]

const CaseCard = ({ c }) => (
  <div className="border border-black dark:border-white p-6">
    <h3 className="font-sans text-lg mb-1">{c.title}</h3>
    <p className="font-mono text-xs text-gray-500">{c.sector} · {c.size}</p>
    <div className="font-mono text-sm mt-3">
      <div><span className="text-gray-500">Outcome:</span> {c.outcome}</div>
      <div className="mt-2 text-xs text-gray-500">{c.anon ? 'Anonymised — sensitive sector' : ''}</div>
    </div>
    <div className="mt-4 flex gap-2">
      <a href="#" className="px-3 py-2 border border-black dark:border-white font-mono text-xs hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black transition-colors">View sample (redacted)</a>
      <a href="/contact" className="px-3 py-2 border border-black dark:border-white font-mono text-xs hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black transition-colors">Book a pilot</a>
    </div>
  </div>
)

const CaseStudies = () => (
  <div className="space-y-6">
    <div className="border border-black dark:border-white p-6 lg:p-8">
      <h1 className="font-sans text-2xl lg:text-3xl mb-2">Case Studies</h1>
      <p className="font-mono text-sm text-gray-600 dark:text-gray-400">Conservative phrasing, practical results. More coming with client approvals.</p>
    </div>
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      {cases.map(c => <CaseCard key={c.id} c={c} />)}
    </div>
  </div>
)

export default CaseStudies
