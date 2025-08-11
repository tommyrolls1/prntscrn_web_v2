const Pillar = ({ title, desc }) => (
  <div className="border border-black dark:border-white bg-white dark:bg-offblack p-6">
    <h3 className="font-sans text-lg mb-1">{title}</h3>
    <p className="font-mono text-sm text-gray-700 dark:text-gray-300">{desc}</p>
  </div>
)

import AsciiDiagram from '../components/AsciiDiagram'

const How = () => (
  <div className="space-y-6">
    <div className="border border-black dark:border-white bg-white dark:bg-offblack p-6 lg:p-8">
      <h1 className="font-sans text-2xl lg:text-3xl mb-2">Design as reproducible infrastructure</h1>
      <p className="font-mono text-sm text-gray-600 dark:text-gray-400">Human-friendly architecture. Agent-first execution. Compliance without drama.</p>
    </div>

    <div className="border border-black dark:border-white bg-white dark:bg-offblack p-0">
      <div className="border-b border-black dark:border-white px-6 py-4">
        <h2 className="font-sans text-xl">Concept diagram</h2>
      </div>
      <div className="aspect-[16/9]">
        <AsciiDiagram />
      </div>
    </div>

    <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
      <Pillar title="Modular templates" desc="Design components versioned and reused across docs." />
      <Pillar title="Declarative manifests" desc="Describe logic and layout; keep code out of view." />
      <Pillar title="Agent-first" desc="Local execution for privacy and speed; signed bundles." />
      <Pillar title="Compliance checks" desc="Rules validated pre-render; audit trail ready." />
    </div>

    <div className="border border-black dark:border-white bg-white dark:bg-offblack p-6">
      <h2 className="font-sans text-xl mb-2">Workflow example: Tender</h2>
      <ol className="list-decimal pl-5 font-mono text-sm space-y-2">
        <li>Import brief and data (CRM/SharePoint)</li>
        <li>Select modules and constraints</li>
        <li>Validate rules; generate IDML/PDF draft</li>
        <li>Review and iterate; reproducible outputs</li>
      </ol>
    </div>

    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      <div className="border border-black dark:border-white bg-white dark:bg-offblack p-6">
        <h2 className="font-sans text-xl mb-2">Security & compliance</h2>
        <ul className="font-mono text-sm space-y-2">
          <li>Local-first agent; no sensitive data leaves your network</li>
          <li>Signed bundles; artifact integrity</li>
          <li>Enterprise tenancy; SSO & role-based access</li>
          <li>Audit trail and reproducible outputs</li>
        </ul>
      </div>
      <div className="border border-black dark:border-white bg-white dark:bg-offblack p-6">
        <h2 className="font-sans text-xl mb-2">Integrations</h2>
        <p className="font-mono text-sm text-gray-700 dark:text-gray-300">CRM, SharePoint, Google Drive, Adobe ID, SSO.</p>
      </div>
    </div>

    <div className="border border-black dark:border-white bg-white dark:bg-offblack p-6 lg:p-8 flex flex-col sm:flex-row gap-3">
      <a href="/resources" className="px-4 py-2 border border-black dark:border-white font-mono text-xs hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black transition-colors">Download architecture brief</a>
      <a href="/contact" className="px-4 py-2 border border-black dark:border-white font-mono text-xs hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black transition-colors">Request technical workshop</a>
    </div>
  </div>
)

export default How
