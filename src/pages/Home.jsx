import DrawerModule from '../components/DrawerModule'
import { Link } from 'react-router-dom'
import { useState } from 'react'
import Typewriter from '../components/Typewriter'
import AsciiDiagram from '../components/AsciiDiagram'

const Home = () => {
  const [openId, setOpenId] = useState(null)
  const toggle = (id) => setOpenId(prev => (prev === id ? null : id))

  const modules = [
    {
      id: 'philosophy',
      title: 'Philosophy',
      subtitle: 'Design like code. Systems over documents.',
      content: (
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <h4 className="font-medium mb-1">We operate at the intersection of logic and creativity</h4>
            <ul className="font-mono text-sm space-y-1 text-gray-700 dark:text-gray-300">
              <li>→ Modular, precise, elegantly minimal</li>
              <li>→ Visual consistency at scale</li>
              <li>→ Built for speed and brand fidelity</li>
            </ul>
          </div>
          <div>
            <h4 className="font-medium mb-1">Our principles</h4>
            <ul className="font-mono text-sm space-y-1 text-gray-700 dark:text-gray-300">
              <li>→ Modular: composable, reusable parts</li>
              <li>→ Declarative: describe outcomes, let the system build</li>
              <li>→ Agent-based: local-first with desktop precision</li>
            </ul>
          </div>
        </div>
      )
    },
    {
      id: 'what-we-build',
      title: 'What We Build',
      subtitle: 'A design OS for teams who publish under pressure.',
      content: (
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 font-mono text-sm text-gray-700 dark:text-gray-300">
          <div>
            <div>→ High-stakes document automation (tenders, curriculum, compliance)</div>
            <div>→ Client-side integrations with Adobe & modern web stacks</div>
          </div>
          <div>
            <div>→ Custom creative infrastructure for schools & institutions</div>
            <div>→ Brand-perfect outputs with built-in compliance</div>
          </div>
        </div>
      )
    },
    {
      id: 'workflows',
      title: 'Workflows',
      subtitle: 'Tenders, Education, Compliance, Agency.',
      content: (
        <div className="font-mono text-sm text-gray-700 dark:text-gray-300 grid grid-cols-2 gap-4">
          <Link to="/solutions/tenders" className="underline">Tenders</Link>
          <Link to="/solutions/education" className="underline">Education</Link>
          <Link to="/solutions/compliance" className="underline">Compliance</Link>
          <Link to="/solutions/agency" className="underline">Agency</Link>
        </div>
      )
    },
    {
      id: 'future',
      title: 'Future Platform',
      subtitle: 'Studio, Local Agent, .ocean, Marketplace.',
      content: (
        <div className="font-mono text-sm text-gray-700 dark:text-gray-300 grid grid-cols-2 gap-4">
          <div>→ Studio (self-serve)</div>
          <div>→ Local Agent (privacy & precision)</div>
          <div>→ .ocean manifests (declarative workflows)</div>
          <div>→ Cloud render agent for HTML/CSS to PDF/Word</div>
        </div>
      )
    },
  ]

  return (
    <div>
      {/* Section A: Hero left, blank right */}
      <section className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
        <div className="border border-black dark:border-white bg-white dark:bg-offblack p-6 lg:p-8 flex flex-col min-h-[360px] sm:min-h-[420px] lg:min-h-[520px]">
          {/* Animated questions occupy the central flex area only */}
          <div className="flex-1 flex flex-col justify-center">
            <Typewriter
              className="font-sans font-extrabold uppercase text-3xl sm:text-4xl lg:text-5xl"
              lineHeightClass="leading-[1.15] sm:leading-[1.2]"
              lines={[
                'What if we treated design like code?',
                'What if we scaled great design with craft-respecting automation?',
                'What if we built a new creative infrastructure?'
              ]}
              speed={44}
              pause={1000}
              fixedHeight
              predictiveWrap
            />
          </div>
          {/* Subtext pinned above CTA */}
          <p className="font-mono text-sm text-gray-700 dark:text-gray-300 mt-2 max-w-prose">Turn complex creative workflows into modular systems: faster, compliant, brand-perfect.</p>
          <div className="mt-4 flex flex-col sm:flex-row gap-3">
            <a href="/contact" className="px-6 py-3 bg-black text-white dark:bg-white dark:text-black border border-black dark:border-white font-mono text-sm text-center hover:bg-white hover:text-black dark:hover:bg-offblack dark:hover:text-white transition-colors">Start a Discovery Call →</a>
            <Link to="/demo" className="px-6 py-3 border border-black dark:border-white font-mono text-sm hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black transition-colors text-center">Try a Demo PDF</Link>
          </div>
        </div>
        <div className="hidden lg:block" />
      </section>

      {/* Section B: Blank left, modules right (diagonal placement) */}
      <section className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
        <div className="hidden lg:block" />
        <div className="flex flex-col gap-6">
          {modules.map((m, idx) => (
            <div key={m.id} className="border border-black dark:border-white bg-white dark:bg-offblack">
              <DrawerModule
                title={m.title}
                subtitle={m.subtitle}
                content={m.content}
                isOpen={openId === m.id}
                onClick={() => toggle(m.id)}
                isHero={false}
                isLast={idx === modules.length - 1}
              />
            </div>
          ))}
        </div>
      </section>

      {/* System overview + Outcomes (merged) */}
      <div className="border border-black dark:border-white bg-white dark:bg-offblack mb-8">
        <DrawerModule
          title="Design that moves at the speed of systems"
          subtitle="PRNTSCRN turns briefs, data, and brand rules into precise, repeatable documents. We orchestrate modular components and constraints across desktop‑grade renderers and modern web engines, so teams ship faster with confidence. Local agents protect sensitive work; declarative manifests keep outputs auditable and on‑brand. Designers retain craft; systems handle repetition, layout edge cases, and compliance by default. From tenders to curriculum and regulated content, we make design reproducible without losing quality. Build once, remix safely, and regenerate any variation on demand, with the same fidelity every time. Engineering discipline meets editorial polish, giving you speed, control, and trust in every deliverable under pressure."
          content={(
            <div className="space-y-5 sm:space-y-6">
              {/* Diagram; fluid height on small screens */}
              <div className="w-full">
                <div className="sm:aspect-[16/9]">
                  <AsciiDiagram hideHeading={true} interactive={false} />
                </div>
              </div>
              {/* Outcomes – centered, Swiss minimal */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6 text-center">
                {[
                  { t: 'Speed', d: 'From days to hours.' },
                  { t: 'Brand & Compliance', d: 'Consistency by default; rules embedded.' },
                  { t: 'Reproducibility', d: 'Versioned outputs. Audit‑friendly.' },
                ].map((o) => (
                  <div key={o.t} className="py-5 sm:py-7 border-t sm:border-t-0 sm:border-l border-black/10 dark:border-white/10 first:border-0 sm:first:border-l-0">
                    <div className="font-sans uppercase tracking-[0.16em] text-sm sm:text-base mb-2">{o.t}</div>
                    <div className="font-mono text-[11px] sm:text-sm text-gray-700 dark:text-gray-300">{o.d}</div>
                  </div>
                ))}
              </div>
            </div>
          )}
          isOpen={true}
          onClick={() => {}}
          isHero={false}
          isLast={false}
        />
      </div>

      {/* Footer CTA */}
      <section className="border border-black dark:border-white bg-white dark:bg-offblack p-6 mb-4 flex items-center justify-between">
        <div className="font-sans text-lg">Want to talk?</div>
        <a href="/contact" className="px-6 py-3 border border-black dark:border-white font-mono text-sm hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black transition-colors">Book time</a>
      </section>
    </div>
  )
}

export default Home
