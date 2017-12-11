<template>
  <div class="post">
    <div class="container">
      
      <div class="columns is-centered is-multiline">
        <div class="column" v-for="pst in post" :key="pst.id">

          <div class="home__title">
            <div class="media">
              <div class="media-left">
                <figure class="image is-48x48">
                  <img src="https://mazipan.github.io/images/irfan-maulana.jpg"
                  class="media__img"
                  alt="Irfan Maulana">
                </figure>
              </div>
              <div class="media-content">
                <p class="title is-4">{{ pst.title.rendered }}</p>
                <div class="subtitle is-6">
                  <a href="https://twitter.com/Maz_Ipan" target="_blank" class="twitter">
                    <svg viewBox="0 0 512 512" class="twitter-logo">
                      <path d="M492,109.5c-17.4,7.7-36,12.9-55.6,15.3c20-12,35.4-31,42.6-53.6c-18.7,11.1-39.4,19.2-61.5,23.5  C399.8,75.8,374.6,64,346.8,64c-53.5,0-96.8,43.4-96.8,96.9c0,7.6,0.8,15,2.5,22.1c-80.5-4-151.9-42.6-199.6-101.3  c-8.3,14.3-13.1,31-13.1,48.7c0,33.6,17.2,63.3,43.2,80.7C67,210.7,52,206.3,39,199c0,0.4,0,0.8,0,1.2c0,47,33.4,86.1,77.7,95  c-8.1,2.2-16.7,3.4-25.5,3.4c-6.2,0-12.3-0.6-18.2-1.8c12.3,38.5,48.1,66.5,90.5,67.3c-33.1,26-74.9,41.5-120.3,41.5  c-7.8,0-15.5-0.5-23.1-1.4C62.8,432,113.7,448,168.3,448C346.6,448,444,300.3,444,172.2c0-4.2-0.1-8.4-0.3-12.5  C462.6,146,479,129,492,109.5z"/>
                    </svg>
                    @mazipan
                  </a>
                  <div class="published__date">
                    Published at <time>{{ subStringDate(pst.date) }}</time>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <article class="article">
            <div class="card">
              <div class="card-image">
                <figure class="image is-4by3 feature__img" 
                  :alt="pst.title.rendered"  
                  v-bind:style="getFeatureImage(pst.content.rendered)">
                </figure>
              </div>
              <div class="card-content">
                <div class="is-content">
                  <div v-html="pst.title.rendered" class="title"></div>
                  <div v-html="removeFooterContent(pst.content.rendered)" class="subtitle"></div>
                </div>
              </div>
            </div>
          </article>

        </div>
      </div>

    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
import PostMixin from '@/mixins/post-mixin.js'

export default {
  data() {
    return {}
  },
  mixins: [PostMixin],
  computed: {
    ...mapGetters(['blogTitle', 'blogDesc', 'post'])
  },
  methods: {
    removeFooterContent: function (str) {
        let matchStr = str.match(/sharedaddy(.*)sd-link-color'><\/a>/g)[0]
        return str.replace(matchStr, '')
    }
  },
  mounted() {
    this.$store.dispatch('getPostByParam', { slug: this.$route.params.slug })
  }
}
</script>

<style lang="scss">
.feature__img {
  width: 100%;
  background-position-x: center;
}
.media__img {
  border-radius: 50%;
}
.twitter {
  color: #00aced;
}
.twitter-logo {
  height: 14px;
  vertical-align: middle;
  color: #00aced;
  fill: currentColor;
}

.home__title {
  margin: 1em 0 2em;
}

.post {
  margin: 1em 0 2em;
}
.published__date{
  padding: .3em 0;
}
</style>