<template>
  <div 
    v-if="item && item.year" 
    class="articles-by-year">

    <!-- Group year -->
    <h6 class="group-year">{{ item.year }}</h6>

    <!-- Group entries -->
    <div 
      class="articles-by-month" 
      v-for="(_, k) in groupByMonth(item.entries)">
      
      <!-- Group month -->
      <h6 class="group-month">{{ getMonthName(_.month) }}</h6>

      <!-- Articles in this month -->
      <div class="group-entries">
        <BlogArticle 
          v-for="(__, kk) in _.entries.reverse()" 
          :key="kk"
          :item="__"/>
      </div>
    </div>
  </div>
</template>

<script>
  import { groupByMonth } from '@@/illuminate/utils'
  import { MONTHS } from '@@/illuminate/config'
  import BlogArticle from '@@/components/BlogArticle'

  export default {
    name: 'BlogArticleGroup',

    // Required components
    components: { BlogArticle },

    // data
    data: () => ({}),

    // Props
    props: {

      // Single item
      item: { type: Object, default: () => {}, required: true },
    },

    // methods
    methods: {

      // getMonthName
      getMonthName (key) {
        return MONTHS[key]
      },

      // groupByMonth
      groupByMonth (arr) {
        return groupByMonth(arr)
      },
    },
  }
</script>

<style lang='scss' scoped>
  @import './../assets/styles/components/blog-article-group.scss';
</style>
