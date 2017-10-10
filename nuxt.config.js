module.exports = {
  build: {
    publicPath: '/nuxt-blog',
    vendor: ['vue-i18n']
  },
  loading: { color: 'cyan' },
  router: {
    base: '/nuxt-blog/',
    middleware: 'i18n'
  },
  plugins: ['~/plugins/i18n.js',],
  generate: {
    routes: ['/', '/about', '/fr', '/fr/about']
  }
}
