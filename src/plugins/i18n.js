import Vue from 'vue'
import Cookies from 'js-cookie';
import VueI18n from 'vue-i18n'
let lang = Cookies.get('i18n_lang') || process.env.VUE_APP_I18N_LOCALE || 'ar';
Vue.use(VueI18n)

function loadLocaleMessages () {
  const locales = require.context('@/locales', true, /[A-Za-z0-9-_,\s]+\.json$/i)
  const messages = {}
  locales.keys().forEach(key => {
    const matched = key.match(/([A-Za-z0-9-_]+)\./i)
    if (matched && matched.length > 1) {
      const locale = matched[1]
      messages[locale] = locales(key)
    }
  })
  return messages
}

export default new VueI18n({
  locale:lang,
  fallbackLocale: process.env.VUE_APP_I18N_FALLBACK_LOCALE || 'ar',
  messages: loadLocaleMessages()
})
