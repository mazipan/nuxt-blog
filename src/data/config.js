export default {
  api: {
    base: 'https://mazipanneh.com/blog/wp-json',
    posts: '/wp/v2/posts'
  },
  getApiPath: function (keyApi) {
    return this.api.base + this.api[keyApi]
  },
}
