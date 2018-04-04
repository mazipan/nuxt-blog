module.exports = {
  head: {
    title: 'nuxt-blog',
    description: 'Personal Blog with Nuxt.js',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'Personal Blog with Nuxt.js' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },
  srcDir: 'src/',
  build: {
    vendor: ['axios'],
    postcss: {
      plugins: {
        'postcss-custom-properties': false
      }
    }
  },
  loading: { color: 'cyan' },
  router: {
    base: '/nuxt-blog/'
  },
  css: [
    'bulma',
    '@/assets/css/main.css'
  ],
  plugins: [
    { src: '~/plugins/currency.js', ssr: false }
  ],
  render: {
    bundleRenderer: {
      shouldPreload: (file, type) => {
        return ['script', 'style', 'font'].includes(type)
      }
    }
  }
}
