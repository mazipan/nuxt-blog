<template>
  <div>
      <header-section 
        :blog-title="blogTitle"
        :blog-desc="blogDesc">
      </header-section>
      <!-- NUXT CONTENT [start]-->
      <nuxt/>
      <!-- NUXT CONTENT [end]-->
      <footer-section></footer-section>
  </div>
</template>

<script>

require('../assets/js/main.js')

import {mapGetters, mapActions} from 'vuex'
import HeaderSection from '@/components/header-section.vue'
import FooterSection from '@/components/footer-section.vue'

export default {
  components : { 
    HeaderSection,
    FooterSection
  }, 
  mounted() {
    console.log('this', this)
    this.getBlogData
  },
  computed: {
    ...mapGetters([
      'blogTitle',
      'blogDesc'
    ]),
    ...mapActions([
      'getBlogData'
    ])
  }
}
</script>

<style scoped>
</style>
