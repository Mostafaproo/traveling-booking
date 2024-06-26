import locales from './locales'
export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'travel-app',
    htmlAttrs: {
      lang: 'ar',
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' },
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      {
        rel: 'stylesheet',
        href: 'https://fonts.googleapis.com/css2?family=Cairo:wght@200..1000&display=swap',
      },
    ],
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: ['./assets/main.scss'],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/eslint
    '@nuxtjs/eslint-module',
  ],
  i18n: {
    seo: true,
    strategy: 'prefix',
    defaultLocale: 'ar',
    vueI18n: {
      fallbackLocale: 'ar',
    },
    lazy: true,
    langDir: 'locales/langs/',
    locales,
  },
  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/bootstrap
    'bootstrap-vue/nuxt',
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
    '@nuxtjs/i18n',
  ],

  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  env: {
    CORE_URL: process.env.CORE_URL,
  },
  axios: {
    baseURL: process.env.CORE_URL,
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {},
}
