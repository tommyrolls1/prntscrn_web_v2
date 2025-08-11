import { useEffect, useMemo, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { Document, Settings, Checkmark, Launch, ArrowRight } from '@carbon/icons-react'

const tiles = [
  { id: 'tenders', title: 'Tenders', blurb: 'Respond faster with compliant, brand-perfect packs.' },
  { id: 'education', title: 'Curriculum & Education', blurb: 'Curricula, packs, and zines at scale without losing craft.' },
  { id: 'compliance', title: 'Compliance & Reports', blurb: 'Audit-friendly documents with embedded rules and checks.' },
  { id: 'agency', title: 'Agency Scaling', blurb: 'Reusable design systems to scale proposals and deliverables.' },
  { id: 'enterprise', title: 'Custom Enterprise Workflows', blurb: 'Map → Module → Automate — tailored to your stack.' },
]

const content = {
  tenders: {
    title: 'Tenders',
    strap: 'Pain → Approach → Value — engineered for bid teams.',
    pain: [
      'Complex briefs, compliance tables, and tight deadlines',
      'Brand and legal risk across versions',
    ],
    deliver: [
      'Tender manifests + reusable modules',
      'Compliance-aware templates with audit trail',
      'Automated IDML/PDF assembly via local agent',
    ],
  },
  education: {
    title: 'Curriculum & Education',
    strap: 'Update once, propagate everywhere — without losing craft.',
    pain: [
      'Frequent updates with many variants',
      'Time-poor teams needing consistent typography',
    ],
    deliver: [
      'Module library for units and assessments',
      'Automated packs and zines with consistent styles',
    ],
  },
  compliance: {
    title: 'Compliance & Reports',
    strap: 'Validation-first documents with reproducible outputs.',
    pain: [
      'Policy-heavy layouts with strict formatting',
      'High audit burden and traceability needs',
    ],
    deliver: [
      'Embedded validation rules and checks',
      'Reproducible outputs with version control',
    ],
  },
  agency: {
    title: 'Agency Scaling',
    strap: 'Guardrailed systems to scale proposals and delivery.',
    pain: [
      'Volume scaling pains and fragmented systems',
    ],
    deliver: [
      'Template kits with guardrails',
      'Faster proposals with consistent quality',
    ],
  },
  enterprise: {
    title: 'Custom Enterprise Workflows',
    strap: 'Local-first and secure by design — tailored to your stack.',
    pain: [
      'Heterogeneous stacks, SharePoint/SSO, security constraints',
    ],
    deliver: [
      'Local agent; signed bundles; on‑prem options',
      'Integrations to CRM/Drive/SharePoint',
    ],
  },
}

const Bullet = ({ children }) => (
  <li className="flex gap-2 items-start"><span className="font-mono">→</span><span className="text-sm text-gray-700 dark:text-gray-300">{children}</span></li>
)

const Flow = () => (
  <div className="w-full">
    <div className="flex flex-col sm:flex-row items-center justify-between gap-3 sm:gap-4">
      <div className="flex items-center gap-2">
        <Document size={24} aria-label="Brief" />
        <span className="font-mono text-xs sm:text-sm">Brief</span>
      </div>
      <ArrowRight aria-hidden="true" />
      <div className="flex items-center gap-2">
        <Settings size={24} aria-label="Modules" />
        <span className="font-mono text-xs sm:text-sm">Modules</span>
      </div>
      <ArrowRight aria-hidden="true" />
      <div className="flex items-center gap-2">
        <Checkmark size={24} aria-label="Checks" />
        <span className="font-mono text-xs sm:text-sm">Checks</span>
      </div>
      <ArrowRight aria-hidden="true" />
      <div className="flex items-center gap-2">
        <Launch size={24} aria-label="Output" />
        <span className="font-mono text-xs sm:text-sm">Output</span>
      </div>
    </div>
  </div>
)

const SolutionsIndex = ({ initialId }) => {
  const navigate = useNavigate()
  // Do not preselect; only select if the URL provided an id
  const [selected, setSelected] = useState(initialId && content[initialId] ? initialId : undefined)

  // Keep URL in sync only after a user makes a selection (or when navigating directly with an id)
  useEffect(() => {
    if (selected) {
      navigate(`/solutions/${selected}`, { replace: false })
    }
  }, [selected, navigate])

  const data = useMemo(() => (selected ? content[selected] : null), [selected])

  return (
    <div className="space-y-6">
      {/* Page intro */}
      <div className="border border-black dark:border-white bg-white dark:bg-black p-6 lg:p-8">
        <h1 className="font-sans text-2xl lg:text-3xl mb-2">Solutions</h1>
        <p className="font-mono text-sm text-gray-600 dark:text-gray-400">Choose a workflow. Details render on the right.</p>
      </div>

      {/* Split layout */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Left: list of verticals */}
        <nav className="md:col-span-1 border border-black dark:border-white bg-white dark:bg-black divide-y divide-black/20 dark:divide-white/20" aria-label="Solution verticals">
          {tiles.map(t => (
            <button
              key={t.id}
              onClick={() => setSelected(t.id)}
              className={`w-full text-left p-4 transition-colors ${selected === t.id ? 'bg-black text-white dark:bg-white dark:text-black' : 'hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black'}`}
            >
              <h2 className="font-sans text-lg mb-1">{t.title}</h2>
              <p className="font-mono text-xs text-current/80">{t.blurb}</p>
            </button>
          ))}
        </nav>

        {/* Right: detail pane */}
        <section className="md:col-span-2 space-y-6">
          {!data ? (
            <>
              <div className="border border-black dark:border-white bg-white dark:bg-black p-6 lg:p-8">
                <h2 className="font-sans text-2xl mb-1">Select a workflow</h2>
                <p className="font-mono text-sm text-gray-600 dark:text-gray-400">Pick a vertical on the left to see pain points, delivery, and a simple flow.</p>
              </div>
              <div className="border border-black dark:border-white bg-white dark:bg-black p-6">
                <Flow />
              </div>
            </>
          ) : (
            <>
              <div className="border border-black dark:border-white bg-white dark:bg-black p-6 lg:p-8">
                <h2 className="font-sans text-2xl mb-1">{data.title}</h2>
                <p className="font-mono text-sm text-gray-600 dark:text-gray-400">{data.strap}</p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="border border-black dark:border-white bg-white dark:bg-black p-6">
                  <h3 className="font-sans text-xl mb-2">Pain</h3>
                  <ul className="space-y-2">{data.pain.map((p,i)=> <Bullet key={i}>{p}</Bullet>)}</ul>
                </div>
                <div className="border border-black dark:border-white bg-white dark:bg-black p-6">
                  <h3 className="font-sans text-xl mb-2">What we deliver</h3>
                  <ul className="space-y-2">{data.deliver.map((d,i)=> <Bullet key={i}>{d}</Bullet>)}</ul>
                </div>
              </div>

              {/* Succinct flow diagram */}
              <div className="border border-black dark:border-white bg-white dark:bg-black p-6">
                <Flow />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="border border-black dark:border-white bg-white dark:bg-black p-6">
                  <h3 className="font-sans text-lg mb-2">Recommended package</h3>
                  <ul className="font-mono text-sm space-y-2">
                    <li>Fixed‑fee discovery</li>
                    <li>Implementation sprint</li>
                    <li>Studio transition plan</li>
                  </ul>
                </div>
                <div className="border border-black dark:border-white bg-white dark:bg-black p-6">
                  <h3 className="font-sans text-lg mb-2">Onboarding timeline</h3>
                  <ol className="font-mono text-sm space-y-2 list-decimal pl-5">
                    <li>Scoping & data checklist</li>
                    <li>Pilot build & review</li>
                    <li>Rollout & training</li>
                  </ol>
                </div>
              </div>

              <div className="border border-black dark:border-white bg-white dark:bg-black p-6 lg:p-8 flex flex-col sm:flex-row gap-3">
                <a href="/contact" className="px-6 py-3 border border-black dark:border-white font-mono text-sm hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black transition-colors">Request an industry demo</a>
                <a href="#" className="px-6 py-3 border border-black dark:border-white font-mono text-sm hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black transition-colors">Download workflow assessment</a>
              </div>
            </>
          )}
        </section>
      </div>
    </div>
  )
}

export default SolutionsIndex
