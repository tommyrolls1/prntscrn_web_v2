import AsciiDiagram from '../components/AsciiDiagram'

const Section = ({ title, children, className = '' }) => (
  <section className={`border border-black dark:border-white bg-white dark:bg-offblack p-6 ${className}`}>
    {title && <h2 className="font-sans text-xl mb-2">{title}</h2>}
    {children}
  </section>
)

const Bullet = ({ children }) => (
  <li className="flex gap-2 items-start"><span className="font-mono">→</span><span className="font-mono text-sm text-gray-700 dark:text-gray-300">{children}</span></li>
)

const AboutHow = () => (
  <div className="space-y-6">
    {/* Hero */}
    <div className="border border-black dark:border-white bg-white dark:bg-offblack p-6 lg:p-10">
      <h1 className="font-sans text-3xl lg:text-5xl leading-tight mb-4">We turn complex design workflows into modular, reproducible systems — from brief to compliant, on-brand documents.</h1>
      <p className="font-mono text-sm text-gray-600 dark:text-gray-400 max-w-3xl">PRNTSCRN builds design infrastructure for teams who publish under pressure—starting with custom document automation, evolving into a platform for modular, declarative, and secure creative workflows.</p>
    </div>

    {/* Concept diagram */}
    <div className="border border-black dark:border-white bg-white dark:bg-offblack p-0">
      <div className="aspect-[16/9]"><AsciiDiagram hideHeading /></div>
    </div>

    {/* Problem / Why we exist */}
    <Section title="Why PRNTSCRN">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <h3 className="font-sans text-lg mb-2">The problem</h3>
          <ul className="space-y-2">
            <Bullet>Last‑minute layout panic</Bullet>
            <Bullet>Brand inconsistency</Bullet>
            <Bullet>Compliance risk</Bullet>
            <Bullet>Wasted hours on repetitive formatting</Bullet>
          </ul>
        </div>
        <div>
          <h3 className="font-sans text-lg mb-2">Our insight</h3>
          <p className="font-mono text-sm text-gray-700 dark:text-gray-300">We treat design like code: reusable modules, version control, automated rendering, and constraints that guarantee brand and compliance from the start.</p>
        </div>
      </div>
    </Section>

    {/* What PRNTSCRN is */}
    <Section title="What PRNTSCRN is">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="border border-black dark:border-white p-4">
          <h3 className="font-sans text-lg mb-1">A service</h3>
          <p className="font-mono text-sm text-gray-700 dark:text-gray-300">We partner with organizations to design and implement automated, modular workflows for critical documents.</p>
        </div>
        <div className="border border-black dark:border-white p-4">
          <h3 className="font-sans text-lg mb-1">A platform in development</h3>
          <p className="font-mono text-sm text-gray-700 dark:text-gray-300">The PRNTSCRN ecosystem: tools, standards, and agents that make design reproducible, secure, and future‑proof.</p>
        </div>
      </div>
    </Section>

    {/* How it works */}
    <Section title="How it works">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="border border-black dark:border-white p-4"><h4 className="font-sans">Inputs</h4><p className="font-mono text-sm text-gray-700 dark:text-gray-300">Brief, data, assets, templates.</p></div>
        <div className="border border-black dark:border-white p-4"><h4 className="font-sans">Manifest</h4><p className="font-mono text-sm text-gray-700 dark:text-gray-300">Declarative blueprint of modules, rules, brand, constraints.</p></div>
        <div className="border border-black dark:border-white p-4"><h4 className="font-sans">Orchestrator</h4><p className="font-mono text-sm text-gray-700 dark:text-gray-300">Cloud coordination of jobs and modules at scale.</p></div>
        <div className="border border-black dark:border-white p-4"><h4 className="font-sans">Design Renderer</h4><p className="font-mono text-sm text-gray-700 dark:text-gray-300">Desktop precision layout (Adobe UXP) for output quality.</p></div>
        <div className="border border-black dark:border-white p-4"><h4 className="font-sans">Agent</h4><p className="font-mono text-sm text-gray-700 dark:text-gray-300">Local, secure, signed execution for sensitive workflows.</p></div>
        <div className="border border-black dark:border-white p-4"><h4 className="font-sans">HTML/CSS Engine</h4><p className="font-mono text-sm text-gray-700 dark:text-gray-300">Web rendering for fast previews and interactive outputs.</p></div>
      </div>
    </Section>

    {/* Differentiators */}
    <Section title="What makes PRNTSCRN different">
      <ul className="space-y-2">
        <Bullet>Systematic, not one‑off — we build infrastructure</Bullet>
        <Bullet>Declarative workflows — you describe, the system assembles</Bullet>
        <Bullet>Local‑first security — sensitive work runs on your machine</Bullet>
        <Bullet>Open spec (.ocean) — auditable, reusable, remixable</Bullet>
        <Bullet>Platform trajectory — client work informs the tools</Bullet>
      </ul>
    </Section>

    {/* Who we work with */}
    <Section title="Who we work with">
      <ul className="space-y-2">
        <Bullet>Government consultancies — compliant tender responses at speed</Bullet>
        <Bullet>Educational institutions — curriculum materials at scale</Bullet>
        <Bullet>Professional services — consistent branded proposals and reports</Bullet>
        <Bullet>Creative agencies — systems that multiply output</Bullet>
      </ul>
    </Section>

    {/* Future */}
    <Section title="The future of PRNTSCRN">
      <ul className="space-y-2">
        <Bullet>PRNTSCRN Studio — self‑service document automation</Bullet>
        <Bullet>Agent architecture — integrates with InDesign and beyond</Bullet>
        <Bullet>Modular ecosystem — reusable components across industries</Bullet>
        <Bullet>Open standards — shared language for systematic creativity</Bullet>
      </ul>
    </Section>

    {/* Why it matters */}
    <Section title="Why it matters">
      <p className="font-mono text-sm text-gray-700 dark:text-gray-300 max-w-3xl">Documents are infrastructure. In high‑stakes work, design is more than aesthetics—it's compliance, trust, and speed. PRNTSCRN brings engineering discipline to creative workflows, delivering outputs you can rely on under pressure.</p>
    </Section>

    {/* CTA */}
    <div className="border border-black dark:border-white bg-white dark:bg-offblack p-6 lg:p-8 flex flex-col sm:flex-row gap-3">
      <a href="/contact" className="px-6 py-3 border border-black dark:border-white font-mono text-sm hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black transition-colors">Book a Discovery Call</a>
    </div>
  </div>
)

export default AboutHow
