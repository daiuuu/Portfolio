import { Moon, Sun } from 'lucide-react'
import { useTheme } from '../context/ThemeContext'

export default function ThemeToggle() {
  const { theme, toggleTheme } = useTheme()
  const isDark = theme === 'dark'

  return (
    <button
      type="button"
      onClick={toggleTheme}
      aria-label={isDark ? 'Cambiar a modo claro' : 'Cambiar a modo oscuro'}
      className="glass flex h-10 w-10 items-center justify-center rounded-full text-on-surface transition-colors hover:text-primary"
    >
      {isDark ? <Sun size={17} /> : <Moon size={17} />}
    </button>
  )
}
