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
          useCookie: false,
          alwaysRedirect: true,
        },
        locales: [
          { code: 'et', iso: 'est', name: 'ET', full_name: 'Eesti keeles' },
          { code: 'ru', iso: 'rus', name: 'RU', full_name: 'По Pусски' },
          { code: 'en', iso: 'eng', name: 'EN', full_name: 'In English' },
        ],
        defaultLocale: 'et',
        vueI18n: {
          fallbackLocale: 'et',
        },
      },
    ],
    '@nuxtjs/axios',
    '~/modules/nuxt-generate-helper',
  ],

  serverMiddleware: ['~/api/index.js'],

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {},
}
