<template>
  <section class="row blog-row">
    <div class="row-inner">
      <div class="blog-content">

        <!-- Articles list -->
        <div class="blog-articles-list container">
          <BlogArticle 
            v-for="(_, k) in articles"
            :key="_.key"
            :item="_" />
        </div>
      </div>
    </div>
  </section>
</template>

<script>
  import BlogArticle from '@@/components/BlogArticle'
  import { mapGetters } from 'vuex'
  
  export default {
    name: 'Blog',

    // Required components
    components: { BlogArticle },

    // Props
    props: {},

    // Data
    data: () => ({

      // articles
      articles: [],
    }),

    // computed
    computed: {
      ...mapGetters({

        // All activities
        'x_activities': 'activities/items',

        // All activities merged
        'x_merged_activities': 'activities/merged',
      }),
    },

    // watch
    watch: {

      // x_activities
      x_activities (val) {
        this.getActivities()
      },
    },

    // Created
    created () {
      this.getActivities()
    },

    // Methods
    methods: {

      // Get activities
      getActivities () {
        this.articles = [ ...this.x_merged_activities() ]
      },
    },
  }
</script>

<style lang='scss' scoped>
  @import './../assets/styles/components/blog.scss';
</style>
