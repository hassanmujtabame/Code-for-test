import { createI18n } from 'vue-i18n'
// User defined lang
import enLocale from './en'
import arLocale from './ar'

const messages = {
  en: {
    ...enLocale
  },
  ar: {
    ...arLocale
  }
}

const getLocale = () => {

  const cookieLanguage = sessionStorage.getItem('language')

  if (cookieLanguage) {
    return cookieLanguage
  }
  const language = navigator.language.toLowerCase()

  const locales = Object.keys(messages)
  for (const locale of locales) {

    if (language.indexOf(locale) > -1) {
      return locale
    }
  }

  return 'ar'
}

const i18n = createI18n({
  locale: getLocale(),
  messages
})

// export default i18n
export default (app) => {
  app.use(i18n)
}
