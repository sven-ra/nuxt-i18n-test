require('dotenv').config()

export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  target: 'static',
  head: {
    title: 'nuxt-18n-test',
    htmlAttrs: {
      lang: 'en',
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
  },
  env: {
    baseUrl: process.env.BASE_URL || 'http://localhost:3000',
  },
  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/eslint
    '@nuxtjs/eslint-module',
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    [
      'nuxt-i18n',
      {
        detectBrowserLanguage: {
          useCookie: true,
          alwaysRedirect: true,
        },
        locales: [
          { code: 'et', iso: 'est', name: 'ET', full_name: 'Eesti keeles' },
          {
            code: 'evk',
            iso: 'est',
            name: 'EVK',
            full_name: 'Eesti viipekeel',
          },
          { code: 'ru', iso: 'rus', name: 'RU', full_name: 'По Pусски' },
          { code: 'en', iso: 'eng', name: 'EN', full_name: 'In English' },
        ],
        defaultLocale: 'et',
        vueI18n: {
          fallbackLocale: 'et',
        },
      },
    ],
  ],

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {},
}
