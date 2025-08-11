import { useMemo, useState } from 'react'

const Contact = () => {
  const [form, setForm] = useState({
    type: 'enterprise',
    name: '',
    email: '',
    company: '',
    message: '',
    nda: false,
    website: '', // honeypot
  })
  const [status, setStatus] = useState({ state: 'idle', message: '' })

  const canSubmit = useMemo(() => {
    return form.name && /.+@.+\..+/.test(form.email) && form.message
  }, [form])

  const onChange = (e) => {
    const { name, value, type, checked } = e.target
    setForm((f) => ({ ...f, [name]: type === 'checkbox' ? checked : value }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setStatus({ state: 'submitting', message: '' })
    try {
      const resp = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      })
      const data = await resp.json().catch(() => ({}))
      if (!resp.ok || !data?.ok) {
        throw new Error(data?.error || 'Failed to send')
      }
      setStatus({ state: 'success', message: 'Thanks — we\'ll be in touch soon.' })
      setForm({ type: 'enterprise', name: '', email: '', company: '', message: '', nda: false, website: '' })
    } catch (err) {
      setStatus({ state: 'error', message: 'Could not send. Please email hello@prntscrn.studio.' })
    }
  }

  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
      <div className="lg:col-span-2 border border-black dark:border-white bg-white dark:bg-offblack p-6 lg:p-8">
        <h1 className="font-sans text-2xl lg:text-3xl mb-2">Start a discovery</h1>
        <p className="font-mono text-sm text-gray-600 dark:text-gray-400 mb-6">Tell us about your documents and constraints. We’ll reply within 1–2 business days.</p>
        <form onSubmit={handleSubmit} className="space-y-4" noValidate>
          {/* Honeypot */}
          <div className="hidden">
            <label>Website</label>
            <input name="website" value={form.website} onChange={onChange} autoComplete="off" tabIndex={-1} />
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block font-mono text-xs mb-1">I am a</label>
              <select name="type" value={form.type} onChange={onChange} className="w-full border border-black dark:border-white bg-transparent p-2 text-sm">
                <option value="enterprise">Enterprise</option>
                <option value="agency">Agency</option>
                <option value="education">Education</option>
                <option value="investor">Investor</option>
                <option value="other">Other</option>
              </select>
            </div>
            <div>
              <label className="block font-mono text-xs mb-1">Company</label>
              <input name="company" value={form.company} onChange={onChange} className="w-full border border-black dark:border-white bg-transparent p-2 text-sm" />
            </div>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block font-mono text-xs mb-1">Name</label>
              <input name="name" value={form.name} onChange={onChange} required className="w-full border border-black dark:border-white bg-transparent p-2 text-sm" />
            </div>
            <div>
              <label className="block font-mono text-xs mb-1">Email</label>
              <input type="email" name="email" value={form.email} onChange={onChange} required className="w-full border border-black dark:border-white bg-transparent p-2 text-sm" />
            </div>
          </div>
          <div>
            <label className="block font-mono text-xs mb-1">Message</label>
            <textarea name="message" value={form.message} onChange={onChange} required rows={6} className="w-full border border-black dark:border-white bg-transparent p-2 text-sm" placeholder="What do you publish? Volumes, constraints, timelines, workflows. What would help? What should change?" />
          </div>
          <label className="inline-flex items-center gap-2">
            <input type="checkbox" name="nda" checked={form.nda} onChange={onChange} />
            <span className="font-mono text-xs">Request NDA</span>
          </label>
          {status.state !== 'idle' && (
            <div className={`font-mono text-xs ${status.state === 'success' ? 'text-green-600 dark:text-green-400' : status.state === 'error' ? 'text-red-600 dark:text-red-400' : 'text-gray-600 dark:text-gray-400'}`}>
              {status.message || 'Sending…'}
            </div>
          )}
          <div className="flex flex-col sm:flex-row gap-3 pt-2">
            <button disabled={!canSubmit || status.state === 'submitting'} className={`px-6 py-3 border border-black dark:border-white font-mono text-sm transition-colors ${canSubmit && status.state !== 'submitting' ? 'hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black' : 'opacity-50 cursor-not-allowed'}`}>Send inquiry →</button>
            <a href="mailto:hello@prntscrn.studio?subject=Discovery%20call" className="px-6 py-3 border border-black dark:border-white font-mono text-sm hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black transition-colors">Book a discovery call</a>
          </div>
        </form>
      </div>
      <div className="border border-black dark:border-white bg-white dark:bg-offblack p-6 lg:p-8">
        <h2 className="font-sans text-xl mb-2">What happens next</h2>
        <ul className="list-disc pl-5 font-mono text-sm space-y-2 text-gray-700 dark:text-gray-300">
          <li>15–30 min scoping call</li>
          <li>Pilot fit assessment and data checklist</li>
          <li>Fixed-fee discovery proposal</li>
        </ul>
        <div className="mt-6">
          <h3 className="font-sans text-lg mb-2">Addresses</h3>
          <p className="font-mono text-xs text-gray-600 dark:text-gray-400">Sydney / Melbourne — Remote first</p>
          <a href="/legal" className="underline font-mono text-xs mt-3 inline-block">Legal & Privacy</a>
        </div>
      </div>
    </div>
  )
}

export default Contact
