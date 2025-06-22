// src/i18n.ts
import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'

// public/locales/*/*.json 을 직접 import
import koCommon from '../public/locales/ko/common.json'
import enCommon from '../public/locales/en/common.json'

i18n
    .use(initReactI18next)
    .init({
            fallbackLng: 'ko',
            supportedLngs: ['ko','en'],
            ns: ['common'],
            defaultNS: 'common',
            resources: {
                    ko: { common: koCommon },
                    en: { common: enCommon },
            },
            interpolation: { escapeValue: false },
    })

export default i18n
