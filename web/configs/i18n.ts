import { Options } from "@nuxtjs/i18n"
import en from "../locales/en-US"

const config: Options = {
    locales: [
        {
            code: 'en',
            file: 'en-US'
        },
        {
            code: 'ru',
            file: 'ru-RU'
        }
    ],
    defaultLocale: "en",
    lazy: true,
    langDir: "./locales/",
    strategy: "no_prefix",
    detectBrowserLanguage: {
        useCookie: true,
        cookieKey: "locale",
    },
    vueI18n: {
        fallbackLocale: "ru",
        messages: {
            en
        }
    },
}

export default config