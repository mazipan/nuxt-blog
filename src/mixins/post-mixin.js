export const PostMixin = {
  methods: {
    subStringDate: function(dateStr) {
      return dateStr.substring(10, 0)
    },
    getFeatureImage: function(contentStr) {
      let styleImg = {
        backgroundImage: 'url(https://bulma.io/images/placeholders/96x96.png)'
      }
      let validExt = ['.jpg', '.JPG', '.jpeg', '.JPEG', '.png', '.PNG']

      try {
        let allSrc = contentStr.match(/src=(.*)/g)[0].split(' ')
        let img = allSrc[0].replace('src="', '').replace('"', '')

        let isValidExt = validExt.some(str => img.includes(str))
        if (isValidExt) {
          styleImg = {
            backgroundImage: 'url(' + img + ')'
          }
        }
      } catch (error) {
        console.log('error get feature image ', error)
      }

      return styleImg
    }
  }
}
