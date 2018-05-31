<template>
  <section class="row blog-row">
    <div class="row-inner">
      <div class="blog-content">

        <!-- Articles list -->
        <div class="blog-articles-list container">
          <BlogArticleGroup 
            v-for="(_, k) in articlesGroups"
            :key="_.key"
            :item="_" />
        </div>
        <!-- <br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br> -->
      </div>
    </div>
  </section>
</template>

<script>
  import BlogArticleGroup from '@@/components/BlogArticleGroup'
  import { mapGetters } from 'vuex'
  import { groupByYear } from '@@/illuminate/utils'
  
  export default {
    name: 'Blog',

    // Required components
    components: { BlogArticleGroup },

    // Props
    props: {},

    // Data
    data: () => ({

      // articlesGroups
      articlesGroups: [],
    }),

    // computed
    computed: {
      ...mapGetters({

        // All activities
        'x_activities': 'activities/items',

        // All activities
        'x_all_activities': 'activities/all',
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
        this.articlesGroups = [ ...groupByYear([ ...this.x_all_activities() ]), {
          year: 'the end',
          entries: [],
        } ]
      },
    },
  }
</script>

<style lang='scss' scoped>
  @import './../assets/styles/components/blog.scss';
</style>
