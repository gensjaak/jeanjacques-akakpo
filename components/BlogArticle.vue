<template>
  <article 
    :style="{ width: getWidth() }" 
    :ref="item.slug()" 
    class="blog-article-item">
    <div 
      :style="{ 'background-image': `url(${item.mediaURL})` }" 
      class="blog-article--inner">
      <a 
        @click.prevent.stop="loadItem" 
        :href="item.link()">
        <h3 class="blog-article--title">{{ item.title.toLowerCase() }}</h3>
      </a>
    </div>
  </article>
</template>

<script>
  import $ from 'jquery'
  import { persistDomRect } from '@@/illuminate/utils'

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

      // loadItem
      loadItem () {
        if (this.item.activityType === 'PROJECT') {
          this.loadProject()
        } else if (this.item.activityType === 'BLOG') {
          this.loadArticle()
        }
      },

      // loadProject
      loadProject () {
        persistDomRect($(this.$refs[this.item.slug()]), () => {
          this.$router.push({ path: this.item.link() })
        })
      },

      // loadArticle
      loadArticle () {
        alert('Load article')
      },

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
