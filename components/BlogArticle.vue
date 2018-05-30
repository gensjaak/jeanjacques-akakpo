<template>
  <article 
    v-if="item && item.layout" 
    :style="{ 'height': getHeight(), 'width': getWidth(),  }" 
    class="blog-article-item"></article>
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

      // getHeight
      getHeight () {
        const pxMin = 75

        return this.item.layout.y * pxMin + 'px'
      },

      // getWidth
      getWidth () {
        const fit = $(document).width()
        const pxMin = 150

        return (this.item.layout.y * pxMin) * (100 / fit) + '%'
      },
    },
  }
</script>

<style lang='scss' scoped>
  @import './../assets/styles/components/blog-article.scss';
</style>
