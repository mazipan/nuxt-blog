<template>
  <div class="home">
    <div class="container">

      <div class="home__title">
        <h1 class="title">{{ blogTitle }}</h1>
        <h2 class="subtitle">{{ blogDesc }}</h2>
      </div>
      
      <div class="columns is-centered is-multiline">
        <card-post class="column is-one-third" v-for="post in posts" :key="post.id"
          :postDate="post.date"
          :postTitle="post.title.rendered" 
          :postSlug="post.slug" 
          :postExcerpt="post.excerpt.rendered"
          :postContent="post.content.rendered">
        </card-post>
      </div>
      
      <pagination></pagination>

    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
import CardPost from "@/components/card-post.vue";
import Pagination from "@/components/pagination.vue";

export default {
  components: {
    CardPost,
    Pagination
  },
  data() {
    return {};
  },
  mounted() {
    //this.$root.$loading.start;
    this.getPosts;
  },
  computed: {
    ...mapGetters(["blogTitle", "blogDesc", "posts"]),
    ...mapActions(["getPosts"])
  }
};
</script>

<style>
.home__title{
  margin: 1em 0 2em;
}
</style>