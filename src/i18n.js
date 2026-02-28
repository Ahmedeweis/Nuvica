import { createI18n } from 'vue-i18n'
import ar from '../public/locales/ar.json'
import en from '../public/locales/en.json'

const i18n = createI18n({
    legacy: false, // Usage with Composition API
    locale: 'ar', // set locale
    fallbackLocale: 'en', // set fallback locale
    messages: {
        ar,
        en
    }
})

export default i18n
