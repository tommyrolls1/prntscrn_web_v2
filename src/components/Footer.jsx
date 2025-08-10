const Footer = () => {
  return (
    <footer className="relative z-20 border-t border-black dark:border-white bg-white dark:bg-black mt-16">
      <div className="container mx-auto px-4 py-8">
        <div className="border border-black dark:border-white p-6">
          <div className="font-mono text-sm space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <p className="mb-2">
                  © 2025 PRNTSCRN PTY LTD
                </p>
                <p>
                  <a href="mailto:hello@prntscrn.studio" className="underline hover:no-underline">
                    hello@prntscrn.studio
                  </a>
                </p>
                <p className="text-gray-600 dark:text-gray-400">
                  ABN 34 688 382 523
                </p>
              </div>
              <div className="flex flex-col gap-2 md:items-end">
                <a href="#" className="underline hover:no-underline">GitHub</a>
                <a href="#" className="underline hover:no-underline">Legal</a>
                <span className="text-gray-500">Docs (coming soon)</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
