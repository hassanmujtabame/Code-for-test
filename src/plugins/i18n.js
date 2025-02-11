import Vue from 'vue'
import Cookies from 'js-cookie';
import VueI18n from 'vue-i18n'
import { localize } from 'vee-validate';
if(!Cookies.get('i18n_lang')){
  Cookies.set('i18n_lang',process.env.VUE_APP_I18N_LOCALE || 'ar')
}
let lang = Cookies.get('i18n_lang');
localize(lang)
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
const _i18n=new VueI18n({
  locale:lang,
  fallbackLocale: process.env.VUE_APP_I18N_FALLBACK_LOCALE || 'ar',
  messages: loadLocaleMessages()
})
window.i18n =_i18n
export default  _i18n
 
