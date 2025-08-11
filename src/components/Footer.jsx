const Footer = () => {
  return (
    <footer className="relative z-20 border-t border-black dark:border-white bg-white dark:bg-offblack">
      <div className="container mx-auto px-4 py-4">
        <div className="border border-black dark:border-white p-3">
          <div className="flex flex-col md:flex-row justify-between items-start gap-4 font-mono text-xs">
            <div className="space-y-1">
              <p>© 2025 PRNTSCRN PTY LTD</p>
              <p>
                <a href="mailto:hello@prntscrn.studio" className="underline hover:no-underline">
                  hello@prntscrn.studio
                </a>
              </p>
              <p className="text-gray-600 dark:text-gray-400">ABN 34 688 382 523</p>
            </div>
            <nav className="md:text-right space-y-1">
              <a href="/contact" className="underline hover:no-underline">Contact</a><br/>
              <a href="/resources" className="underline hover:no-underline">Resources</a><br/>
              <a href="/careers" className="underline hover:no-underline">Careers</a><br/>
              <a href="/legal" className="underline hover:no-underline">Legal</a>
            </nav>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
