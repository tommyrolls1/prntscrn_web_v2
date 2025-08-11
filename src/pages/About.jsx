const About = () => (
  <div className="space-y-6">
    <div className="border border-black dark:border-white p-6 lg:p-8">
      <h1 className="font-sans text-2xl lg:text-3xl mb-2">About</h1>
      <p className="font-mono text-sm text-gray-600 dark:text-gray-400">Mission & manifesto. Team and advisors.</p>
    </div>
    <div className="border border-black dark:border-white p-6">
      <h2 className="font-sans text-lg mb-2">Mission</h2>
      <p className="font-mono text-sm text-gray-700 dark:text-gray-300">Make high-stakes publishing reproducible without losing craft.</p>
    </div>
    <div className="border border-black dark:border-white p-6">
      <h2 className="font-sans text-lg mb-2">Team</h2>
      <p className="font-mono text-sm text-gray-700 dark:text-gray-300">Founders, engineers, and designers with deep document and systems backgrounds.</p>
    </div>
    <div className="border border-black dark:border-white p-6">
      <h2 className="font-sans text-lg mb-2">Advisors</h2>
      <p className="font-mono text-sm text-gray-700 dark:text-gray-300">Industry and public sector advisors.</p>
    </div>
    <div className="border border-black dark:border-white p-6">
      <h2 className="font-sans text-lg mb-2">Hiring</h2>
      <a href="/careers" className="underline font-mono text-sm">See open roles</a>
    </div>
  </div>
)

export default About
