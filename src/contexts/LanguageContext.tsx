import { createContext, useContext, useState } from 'react'
import type { ReactNode } from 'react'
import { translations, type Lang } from '../i18n/translations'

type Translations = typeof translations['en']

type LanguageContextType = {
  lang: Lang
  setLang: (l: Lang) => void
  t: Translations
}

const LanguageContext = createContext<LanguageContextType | null>(null)

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [lang, setLangState] = useState<Lang>(() => {
    const saved = localStorage.getItem('nexshield_lang')
    return saved === 'fr' ? 'fr' : 'en'
  })

  function setLang(l: Lang) {
    setLangState(l)
    localStorage.setItem('nexshield_lang', l)
  }

  return (
    <LanguageContext.Provider value={{ lang, setLang, t: translations[lang] }}>
      {children}
    </LanguageContext.Provider>
  )
}

export function useLanguage() {
  const ctx = useContext(LanguageContext)
  if (!ctx) throw new Error('useLanguage must be used inside LanguageProvider')
  return ctx
}

