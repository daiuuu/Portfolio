import * as es from '../data/content'
import * as en from '../data/content.en'
import { useLanguage } from '../context/LanguageContext'

const dictionaries = { es, en }

export function useContent() {
  const { language } = useLanguage()
  return dictionaries[language]
}
