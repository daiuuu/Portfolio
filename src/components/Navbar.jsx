import { useEffect, useState } from 'react'
import { Menu, X } from 'lucide-react'
import { useContent } from '../hooks/useContent'
import { useLanguage } from '../context/LanguageContext'
import Logo from './ui/Logo'
import ThemeToggle from './ThemeToggle'

export default function Navbar() {
  const { nav } = useContent()
  const { language, toggleLanguage } = useLanguage()
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [open])

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-colors duration-300 ${
        scrolled ? 'glass' : 'border-b border-transparent'
      }`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-[5vw] py-4">
        <a href="#inicio">
          <Logo />
        </a>

        <nav className="hidden items-center gap-8 md:flex">
          {nav.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="font-body text-sm text-on-surface-variant transition-colors hover:text-primary"
            >
              {item.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <button
            type="button"
            onClick={toggleLanguage}
            aria-label="Cambiar idioma"
            className="glass h-10 rounded-full px-3 font-mono text-label-code uppercase text-on-surface transition-colors hover:text-primary"
          >
            {language === 'es' ? 'EN' : 'ES'}
          </button>
          <ThemeToggle />
          <button
            type="button"
            className="glass flex h-10 w-10 items-center justify-center rounded-full text-on-surface md:hidden"
            onClick={() => setOpen(true)}
            aria-label="Abrir menú"
          >
            <Menu size={18} />
          </button>
        </div>
      </div>

      {/* Overlay */}
      <div
        onClick={() => setOpen(false)}
        className={`fixed inset-0 z-40 bg-surface-container-lowest/60 backdrop-blur-sm transition-opacity duration-300 md:hidden ${
          open ? 'opacity-100' : 'pointer-events-none opacity-0'
        }`}
      />

      {/* Right-side drawer */}
      <nav
        className={`glass fixed inset-y-0 right-0 z-50 flex w-72 max-w-[80vw] flex-col gap-1 px-6 py-6 transition-transform duration-300 ease-out md:hidden ${
          open ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className="mb-6 flex items-center justify-between">
          <Logo />
          <button
            type="button"
            onClick={() => setOpen(false)}
            aria-label="Cerrar menú"
            className="glass flex h-9 w-9 items-center justify-center rounded-full text-on-surface"
          >
            <X size={16} />
          </button>
        </div>

        {nav.map((item) => (
          <a
            key={item.href}
            href={item.href}
            onClick={() => setOpen(false)}
            className="rounded-md px-3 py-3 font-body text-on-surface-variant transition-colors hover:bg-surface-container-high hover:text-primary"
          >
            {item.label}
          </a>
        ))}
      </nav>
    </header>
  )
}
