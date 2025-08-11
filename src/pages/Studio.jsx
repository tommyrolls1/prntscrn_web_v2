import SignInModule from '../components/SignInModule'

const Studio = () => (
  <div className="space-y-6">
    <div className="border border-black dark:border-white bg-white dark:bg-offblack p-6 lg:p-8">
      <h1 className="font-sans text-2xl lg:text-3xl mb-2">Access Studio</h1>
      <p className="font-mono text-sm text-gray-600 dark:text-gray-400">Single Sign-On coming soon. Use your provisioned email to request access.</p>
    </div>
    <div className="bg-white dark:bg-offblack">
      <SignInModule compact={false} />
    </div>
  </div>
)

export default Studio
