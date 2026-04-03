import { useState, useEffect, useCallback } from 'react'
import en from '../locales/en.json'
import pl from '../locales/pl.json'

const locales = { en, pl }

function detectLocale() {
  const saved = localStorage.getItem('am-locale')
  if (saved && locales[saved]) return saved

  const browserLang = navigator.language || navigator.languages?.[0] || ''
  if (browserLang.startsWith('pl')) return 'pl'

  return 'en'
}

export function useLocale() {
  const [locale, setLocaleState] = useState(() => detectLocale())

  useEffect(() => {
    // Try geo-detection via timezone as a fallback
    try {
      const tz = Intl.DateTimeFormat().resolvedOptions().timeZone
      if (tz && tz.includes('Warsaw') && !localStorage.getItem('am-locale')) {
        setLocaleState('pl')
      }
    } catch {
      // ignore
    }
  }, [])

  const setLocale = useCallback((loc) => {
    localStorage.setItem('am-locale', loc)
    setLocaleState(loc)
  }, [])

  const t = locales[locale] || locales.en

  return { locale, setLocale, t }
}
