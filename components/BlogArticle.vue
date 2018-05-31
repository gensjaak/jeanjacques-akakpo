<template>
  <article 
    v-if="item && item.layout" 
    :style="{ width: getWidth() }" 
    class="blog-article-item">
    <div 
      :style="{ 'background-image': `url(${item.mediaURL})` }" 
      class="blog-article--inner">
      <nuxt-link :to="item.link()">
        <h3 class="blog-article--title">{{ item.title.toLowerCase() }}</h3>
      </nuxt-link>
    </div>
  </article>
</template>

<script>
  import $ from 'jquery'

  export default {
    name: 'BlogArticle',

    // Required components
    components: {},

    // data
    data: () => ({}),

    // Props
    props: {

      // Single item
      item: { type: Object, default: () => {}, required: true },
    },

    // methods
    methods: {

      // getWidth
      getWidth () {
        return (this.item.layout.x * $(document).width() / 100) * 0.75 + 'px'
      },
    },
  }
</script>

<style lang='scss' scoped>
  @import './../assets/styles/components/blog-article.scss';
</style>
