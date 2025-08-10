const DarkModeToggle = ({ darkMode, toggleDarkMode }) => {
  return (
    <button
      onClick={toggleDarkMode}
      className="w-12 h-6 border border-black dark:border-white bg-white dark:bg-black hover:bg-gray-100 dark:hover:bg-gray-900 transition-colors relative"
      aria-label="Toggle dark mode"
    >
      <div className={`absolute top-0.5 w-5 h-5 bg-black dark:bg-white transition-transform duration-200 ${
        darkMode ? 'translate-x-6' : 'translate-x-0.5'
      }`} />
    </button>
  )
}

export default DarkModeToggle
