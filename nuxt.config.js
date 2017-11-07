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
    publicPath: '/nuxt-blog'
  },
  loading: { color: 'cyan' },
  router: {
    base: '/nuxt-blog/'
  },
  generate: {
    routes: [
      '/', 
      '/about'
    ]
  },
  css: [
    'bulma/css/bulma.css',
    '@/assets/css/main.css',
    'https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css'
  ],
  render: {
    bundleRenderer: {
      shouldPreload: (file, type) => {
        return ['script', 'style', 'font'].includes(type)
      }
    }
  }
}
