export default {
  // Global page headers (https://go.nuxtjs.dev/config-head)
  head: {
    title: 'Solution Créance',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },

  // Global CSS (https://go.nuxtjs.dev/config-css)
  css: [
    { src: '~/assets/styles/custom.scss'}
  ],

  // Plugins to run before rendering page (https://go.nuxtjs.dev/config-plugins)
  plugins: [
    { src: '~/plugins/vuex-persist', ssr: false }
  ],

  // Auto import components (https://go.nuxtjs.dev/config-components)
  components: true,

  // Modules for dev and build (recommended) (https://go.nuxtjs.dev/config-modules)
  buildModules: [
  ],

  // Modules (https://go.nuxtjs.dev/config-modules)
  modules: ['@nuxtjs/axios'],

  axios: {
  },
  server: {
    port: process.env.PORT || 3000, // par défaut : 3000
    host: '0.0.0.0' // par défaut : localhost
  },
  // Build Configuration (https://go.nuxtjs.dev/config-build)
  build: {
  }
}


  // autres configurations
