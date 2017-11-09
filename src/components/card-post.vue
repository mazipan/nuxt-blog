<template>
  <article class="article">
    <div class="card">
      <div class="card-image">
        <figure class="image is-4by3">
          <img src="https://bulma.io/images/placeholders/96x96.png" 
              :alt="postTitle">
        </figure>
      </div>
      <div class="card-content">
        
        <div class="media">
          <div class="media-left">
            <figure class="image is-48x48">
              <img src="https://mazipan.github.io/images/irfan-maulana.jpg"
              alt="Irfan Maulana">
            </figure>
          </div>
          <div class="media-content">
            <p class="title is-4">Irfan Maulana</p>
            <p class="subtitle is-6">@mazipan</p>
          </div>
        </div>

        <div class="is-content">
          <div v-html="postTitle" class="subtitle"></div>
          <time>{{ postDate }}</time>
        </div>
      </div>
    </div>
  </article>
</template>

<script>
export default {
  name: "card-post",
  props: ["postDate", "postTitle", "postSlug", "postExcerpt"]
};
</script>

<style scoped>

</style>