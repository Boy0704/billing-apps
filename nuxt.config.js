export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'billing-apps',
    htmlAttrs: {
      lang: 'en',
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' },
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
    script: [
      { src: "/js/pace.min.js" },
      { src: "/js/bootstrap.bundle.min.js" },
      { src: "/js/jquery.min.js" },
      { src: "/plugins/simplebar/js/simplebar.min.js" },
      { src: "/plugins/metismenu/js/metisMenu.min.js" },
      { src: "/plugins/perfect-scrollbar/js/perfect-scrollbar.js" },
      { src: "/js/app.js" },
    ]
  },

  

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    '@/assets/plugins/simplebar/css/simplebar.css',
    '@/assets/plugins/perfect-scrollbar/css/perfect-scrollbar.css',
    '@/assets/plugins/metismenu/css/metisMenu.min.css',
    '@/assets/css/pace.min.css',
    '@/assets/css/bootstrap.min.css',
    '@/assets/css/bootstrap-extended.css',
    '@/assets/css/app.css',
    '@/assets/css/icons.css',
    '@/assets/css/dark-theme.css',
    '@/assets/css/semi-dark.css',
    '@/assets/css/header-colors.css',
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
  ],

  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {
    // Workaround to avoid enforcing hard-coded localhost:3000: https://github.com/nuxt-community/axios-module/issues/308
    baseURL: '/',
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {},
}
