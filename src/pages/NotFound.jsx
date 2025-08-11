import Typewriter from '../components/Typewriter'
import { Link } from 'react-router-dom'

const NotFound = () => (
  <div className="space-y-6">
    <div className="border border-black dark:border-white bg-white dark:bg-black p-6 lg:p-16 text-center">
      <div className="max-w-3xl mx-auto">
        <Typewriter
          lines={["404 — Lost in the grid.", "Let’s route you back with style."]}
          loop={true}
          cursor={true}
          speed={44}
          className="font-sans text-3xl sm:text-4xl md:text-5xl"
          lineHeightClass="leading-tight"
        />
        <p className="mt-6 font-mono text-sm text-gray-600 dark:text-gray-400">The page you’re looking for took a wrong turn at the baselines.</p>
        <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-3">
          <Link to="/" className="px-6 py-3 border border-black dark:border-white font-mono text-sm hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black transition-colors">Back to Home</Link>
          <Link to="/studio" className="px-6 py-3 border border-black dark:border-white bg-black text-white dark:bg-white dark:text-black font-mono text-sm hover:opacity-90 transition-opacity">Access Studio</Link>
        </div>
      </div>
    </div>

    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      <div className="border border-black dark:border-white bg-white dark:bg-black p-6">
        <h2 className="font-sans text-xl mb-2">Try these</h2>
        <ul className="font-mono text-sm space-y-2">
          <li><Link className="underline" to="/how">How it works</Link></li>
          <li><Link className="underline" to="/solutions">Solutions</Link></li>
          <li><Link className="underline" to="/products">Products</Link></li>
        </ul>
      </div>
      <div className="border border-black dark:border-white bg-white dark:bg-black p-6">
        <h2 className="font-sans text-xl mb-2">Need access?</h2>
        <p className="font-mono text-sm">Pilot accounts are manually provisioned. Contact support to request access.</p>
        <a href="mailto:hello@prntscrn.studio?subject=Studio%20Access%20Request" className="mt-3 inline-block underline">Email support</a>
      </div>
      <div className="border border-black dark:border-white bg-white dark:bg-black p-6">
        <h2 className="font-sans text-xl mb-2">Navigation</h2>
        <ul className="font-mono text-sm space-y-2">
          <li><Link className="underline" to="/about">About</Link></li>
          <li><Link className="underline" to="/resources">Resources</Link></li>
          <li><Link className="underline" to="/careers">Careers</Link></li>
          <li><Link className="underline" to="/legal">Legal</Link></li>
        </ul>
      </div>
    </div>
  </div>
)

export default NotFound
