import { createContext, useContext, useEffect, useState } from 'react'

const LanguageContext = createContext(null)

export function LanguageProvider({ children }) {
  const [language, setLanguage] = useState(() => {
    if (typeof window === 'undefined') return 'es'
    return localStorage.getItem('language') ?? 'es'
  })

  useEffect(() => {
    document.documentElement.setAttribute('lang', language)
    localStorage.setItem('language', language)
  }, [language])

  const toggleLanguage = () => setLanguage((l) => (l === 'es' ? 'en' : 'es'))

  return (
    <LanguageContext.Provider value={{ language, toggleLanguage }}>
      {children}
    </LanguageContext.Provider>
  )
}

export function useLanguage() {
  const ctx = useContext(LanguageContext)
  if (!ctx) throw new Error('useLanguage debe usarse dentro de LanguageProvider')
  return ctx
}
