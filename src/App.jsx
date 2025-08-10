import { useState, useEffect } from 'react'
import Header from './components/Header'
import DrawerModule from './components/DrawerModule'
import Footer from './components/Footer'
import BackgroundPattern from './components/BackgroundPattern'

function App() {
  const [openModule, setOpenModule] = useState(null)
  const [darkMode, setDarkMode] = useState(false)

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark')
    } else {
      document.documentElement.classList.remove('dark')
    }
  }, [darkMode])

  const toggleDarkMode = () => {
    setDarkMode(!darkMode)
  }

  const handleModuleClick = (moduleId) => {
    setOpenModule(openModule === moduleId ? null : moduleId)
  }

  const modules = [
    {
      id: 'hero',
      title: 'What if we treated design like code?',
      subtitle: 'High-stakes documents, designed to scale.',
      animatedQuestions: [
        'What if your tender documents assembled themselves—beautifully?',
        'What if workflows were modular, reusable, and version-controlled?', 
        'What if design wasn\'t manual, but systematic?',
        'What if you could scale brand consistency across every document?'
      ],
      content: (
        <div className="space-y-6">
          <p className="font-mono text-base leading-relaxed text-gray-700 dark:text-gray-300">
            Modular design infrastructure for teams who publish under pressure.
          </p>
          <button className="px-8 py-3 bg-black text-white dark:bg-white dark:text-black border border-black dark:border-white font-mono text-sm hover:bg-white hover:text-black dark:hover:bg-black dark:hover:text-white transition-colors">
            Start a Discovery Call →
          </button>
        </div>
      )
    },
    {
      id: 'what-we-build',
      title: 'What We Build',
      subtitle: 'From bespoke documents to scalable systems',
      content: (
        <div className="space-y-6">
          <div className="space-y-4">
            <div className="border-b border-gray-200 dark:border-gray-700 pb-3">
              <h4 className="font-medium mb-1">Document Automation</h4>
              <p className="text-sm text-gray-600 dark:text-gray-400">Tenders, proposals, and curricula generated from structured inputs</p>
            </div>
            <div className="border-b border-gray-200 dark:border-gray-700 pb-3">
              <h4 className="font-medium mb-1">Reusable Design Systems</h4>
              <p className="text-sm text-gray-600 dark:text-gray-400">Templates that work like code: update once, publish everywhere</p>
            </div>
            <div className="border-b border-gray-200 dark:border-gray-700 pb-3">
              <h4 className="font-medium mb-1">Workflow Modernization</h4>
              <p className="text-sm text-gray-600 dark:text-gray-400">Replace brittle manual steps with programmable pipelines</p>
            </div>
            <div>
              <h4 className="font-medium mb-1">Compliance-Ready Templates</h4>
              <p className="text-sm text-gray-600 dark:text-gray-400">Built-in rules for government, education, and enterprise documents</p>
            </div>
          </div>
          <div className="space-y-2 font-mono text-sm">
            <p>→ "We build systems your team can trust under pressure."</p>
            <p>→ "Design once, publish forever."</p>
          </div>
        </div>
      )
    },
    {
      id: 'how-we-work',
      title: 'How We Work',
      subtitle: 'Strategic implementation, not just delivery',
      content: (
        <div className="space-y-6">
          <div className="space-y-4">
            <div className="border-b border-gray-200 dark:border-gray-700 pb-3">
              <h4 className="font-medium mb-1">Discovery</h4>
              <p className="text-sm text-gray-600 dark:text-gray-400">Map your current tools and manual pain points</p>
            </div>
            <div className="border-b border-gray-200 dark:border-gray-700 pb-3">
              <h4 className="font-medium mb-1">Design Architecture</h4>
              <p className="text-sm text-gray-600 dark:text-gray-400">Define modular components and reusable logic</p>
            </div>
            <div className="border-b border-gray-200 dark:border-gray-700 pb-3">
              <h4 className="font-medium mb-1">Implementation</h4>
              <p className="text-sm text-gray-600 dark:text-gray-400">Build working solutions on modern document engines</p>
            </div>
            <div>
              <h4 className="font-medium mb-1">Evolution</h4>
              <p className="text-sm text-gray-600 dark:text-gray-400">Update and grow as your needs change</p>
            </div>
          </div>
          <div className="space-y-2 font-mono text-sm">
            <p>→ "We solve your current workflow—and future-proof it."</p>
            <p>→ "Each custom build becomes part of the platform roadmap."</p>
          </div>
        </div>
      )
    },
    {
      id: 'who-we-serve',
      title: 'Who We Serve',
      subtitle: 'Teams who publish under pressure',
      content: (
        <div className="space-y-6">
          <div className="space-y-4">
            <div className="border-b border-gray-200 dark:border-gray-700 pb-3">
              <h4 className="font-medium mb-1">Government & Infrastructure</h4>
              <p className="text-sm text-gray-600 dark:text-gray-400">Respond to complex tenders with speed and confidence</p>
            </div>
            <div className="border-b border-gray-200 dark:border-gray-700 pb-3">
              <h4 className="font-medium mb-1">Education & Nonprofits</h4>
              <p className="text-sm text-gray-600 dark:text-gray-400">Automate curriculum packs, zines, and reports without losing soul</p>
            </div>
            <div className="border-b border-gray-200 dark:border-gray-700 pb-3">
              <h4 className="font-medium mb-1">Professional Services</h4>
              <p className="text-sm text-gray-600 dark:text-gray-400">Branded proposals at scale, without layout stress</p>
            </div>
            <div>
              <h4 className="font-medium mb-1">Creative Studios & Agencies</h4>
              <p className="text-sm text-gray-600 dark:text-gray-400">Design systems your clients can actually use</p>
            </div>
          </div>
          <div className="space-y-2 font-mono text-sm">
            <p>→ "We work where design meets compliance."</p>
            <p>→ "Systematic creativity for teams with serious deadlines."</p>
          </div>
        </div>
      )
    },
    {
      id: 'future-platform',
      title: 'Future Platform',
      subtitle: 'A new creative infrastructure is coming',
      content: (
        <div className="space-y-6">
          <div className="space-y-4">
            <div className="border-b border-gray-200 dark:border-gray-700 pb-3">
              <h4 className="font-medium mb-1">PRNTSCRN Studio <span className="text-sm text-gray-500">(in development)</span></h4>
              <p className="text-sm text-gray-600 dark:text-gray-400">Self-serve generation of documents from structured logic</p>
            </div>
            <div className="border-b border-gray-200 dark:border-gray-700 pb-3">
              <h4 className="font-medium mb-1">Agent Architecture</h4>
              <p className="text-sm text-gray-600 dark:text-gray-400">Modular plugins for automation, privacy, and AI assistance</p>
            </div>
            <div className="border-b border-gray-200 dark:border-gray-700 pb-3">
              <h4 className="font-medium mb-1">Modular Ecosystem</h4>
              <p className="text-sm text-gray-600 dark:text-gray-400">Component reuse across documents, teams, and verticals</p>
            </div>
            <div>
              <h4 className="font-medium mb-1">Open Standards: .ocean</h4>
              <p className="text-sm text-gray-600 dark:text-gray-400">Declarative language for document logic, layout, and compliance</p>
            </div>
          </div>
          <div className="space-y-2 font-mono text-sm">
            <p>→ "From one-off workarounds to scalable systems."</p>
            <p>→ "We're building what Figma never touched: document logic."</p>
          </div>
        </div>
      )
    },
    {
      id: 'contact',
      title: 'Let\'s systematize your workflow.',
      subtitle: 'We work with teams publishing high-stakes documents—tenders, curricula, compliance packs.',
      content: (
        <div className="space-y-6">
          <p className="leading-relaxed text-sm">
            PRNTSCRN combines strategic thinking with technical execution to future-proof your publishing stack.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <a 
              href="mailto:hello@prntscrn.studio" 
              className="px-6 py-3 bg-black text-white dark:bg-white dark:text-black border border-black dark:border-white font-mono text-sm hover:bg-white hover:text-black dark:hover:bg-black dark:hover:text-white transition-colors text-center"
            >
              Start a Discovery Call →
            </a>
            <button className="px-6 py-3 border border-black dark:border-white font-mono text-sm hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black transition-colors">
              See Case Studies
            </button>
            <button className="px-6 py-3 border border-black dark:border-white font-mono text-sm hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black transition-colors">
              Download Workflow Assessment
            </button>
          </div>
        </div>
      )
    }
  ]

  return (
    <div className="min-h-screen bg-white dark:bg-black text-black dark:text-white transition-colors">
      <BackgroundPattern />
      
      <div className="relative z-10">
        <Header darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
        
        <main className="container mx-auto px-4 py-8">
          {/* Swiss Design Grid Table */}
          <div className="border border-black dark:border-white">
            {modules.map((module, index) => (
              <DrawerModule
                key={module.id}
                title={module.title}
                subtitle={module.subtitle}
                animatedQuestions={module.animatedQuestions}
                content={module.content}
                isOpen={openModule === module.id}
                onClick={() => handleModuleClick(module.id)}
                isHero={module.id === 'hero'}
                isLast={index === modules.length - 1}
              />
            ))}
          </div>
        </main>
        
        <Footer />
      </div>
    </div>
  )
}

export default App
