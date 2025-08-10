import DarkModeToggle from './DarkModeToggle'

const Header = ({ darkMode, toggleDarkMode }) => {
  return (
    <header className="relative z-20 border-b border-black dark:border-white bg-white dark:bg-black">
      <div className="container mx-auto px-4 py-6 flex justify-between items-center">
        <div className="font-mono text-lg font-medium tracking-tight">
          PRNTSCRN
        </div>
        <div className="flex items-center gap-6">
          <div className="hidden md:flex items-center gap-6 font-mono text-sm">
            <span className="text-gray-600 dark:text-gray-400">Service-first, platform-future</span>
          </div>
          <DarkModeToggle darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
        </div>
      </div>
    </header>
  )
}

export default Header
