import { useState } from 'react'

const SignInModule = ({ compact = false }) => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [submitted, setSubmitted] = useState(false)

  const onSubmit = (e) => {
    e.preventDefault()
    setSubmitted(true)
  }

  return (
    <div className={`border border-black dark:border-white bg-white dark:bg-black ${compact ? 'p-6' : 'p-8 lg:p-10'}`}>
      <h2 className="font-sans text-xl mb-2">Sign in to PRNTSCRN Studio</h2>
      <p className="font-mono text-sm text-gray-600 dark:text-gray-400 mb-4">Pilot accounts are manually provisioned. Not registered? Please contact support.</p>
      <form onSubmit={onSubmit} className="space-y-4">
        <div>
          <label className="font-mono text-xs block mb-1">Email</label>
          <input type="email" value={email} onChange={(e)=>setEmail(e.target.value)} required className="w-full border border-black dark:border-white bg-transparent px-3 py-2 font-mono text-sm" />
        </div>
        <div>
          <label className="font-mono text-xs block mb-1">Password</label>
          <input type="password" value={password} onChange={(e)=>setPassword(e.target.value)} required className="w-full border border-black dark:border-white bg-transparent px-3 py-2 font-mono text-sm" />
        </div>
        <button type="submit" className="px-5 py-2 border border-black dark:border-white bg-black text-white dark:bg-white dark:text-black font-mono text-sm">Sign in</button>
      </form>
      {submitted && (
        <div className="mt-4 font-mono text-xs text-red-600 dark:text-red-400">
          Not registered. Please contact support or start a discovery call.
        </div>
      )}
      <div className="mt-4 font-mono text-xs text-gray-600 dark:text-gray-400">
        Pilot accounts are manually provisioned. Email
        {' '}<a className="underline" href="mailto:hello@prntscrn.studio?subject=Studio%20Access%20Request">hello@prntscrn.studio</a> for access.
      </div>
    </div>
  )
}

export default SignInModule
