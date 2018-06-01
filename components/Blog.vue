<template>
  <section class="row blog-row">
    <div class="row-inner">
      <div class="blog-content" id="js--blog-content">

        <!-- Blog header -->
        <div class="blog-header" id="js--blog-header">
          <div class="blog-header-inner container">

            <!-- Selectors -->
            <div class="blog-search-selectors">
              <i class="material-icons blog-search-icon">event</i>

              <!-- Current year -->
              <div class="blog-search-year">
                <h5 class="blog-search-content">{{ blogSearch.year.toString().toLowerCase() }}</h5>
                <label class="blog-search-label">year</label>
              </div>

              <!-- Current month -->
              <div class="blog-search-month">
                <h5 class="blog-search-content">{{ getMonthFullName(blogSearch.month).toString().toLowerCase() }}</h5>
                <label class="blog-search-label">month</label>
              </div>
            </div>

            <!-- Searchbar -->
            <div class="blog-search-searchbar">
              <div class="searchbar">
                <input 
                  class="searchbar-input" 
                  type="text" 
                  name="q" 
                  placeholder="Search for..." 
                  v-model="blogSearch.query">

                <i class="material-icons searchbar-icon">search</i>
              </div>
            </div>
          </div>
        </div>

        <!-- Articles list -->
        <div class="blog-articles-list container">
          <BlogArticleGroup 
            v-for="(_, k) in articlesGroups" 
            :ref="`article-group-${_.year}`" 
            :key="`key-${_.year}`" 
            :item="_" />
        </div>
        <!-- <br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br> -->
      </div>
    </div>
  </section>
</template>

<script>
  import $ from 'jquery'
  import BlogArticleGroup from '@@/components/BlogArticleGroup'
  import { mapGetters } from 'vuex'
  import { groupByYear } from '@@/illuminate/utils'
  import { MONTHS_FULLNAME } from '@@/illuminate/config'
  
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

      // Blog search
      blogSearch: {
        year: 2018,
        month: 2,
        query: '',
      },
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

    // Mounted
    mounted () {
      this.fixHeaderOnScroll()
      this.setBlogSearchOnScroll()
    },

    // Methods
    methods: {

      // Set blog search on scroll
      setBlogSearchOnScroll () {
        let breakpoints = []

        const getTop = el => {
          let response = ($(el).position() && $(el).position().top)

          if ([ undefined, null, NaN ].includes(response)) {
            response = Infinity
          }

          return response
        }
        const onScrollFn = () => {
          const top = $(document).scrollTop()
          const docHeight = $(window).height()
          const target = (docHeight * 0.55) + top
          const designated = breakpoints
            .filter(item => target >= getTop(item.el))
            .reverse()
            .slice(0, 1)[0]
        }

        $(document).ready($ => {
          breakpoints = this.articlesGroups.map(group => $(this.$refs[`article-group-${group.year}`]))

          $(document).on('scroll', onScrollFn)
          onScrollFn()
        })
      },

      // Fix blog header on scroll
      fixHeaderOnScroll () {
        $(document).ready($ => {
          const $target = $('#js--blog-header')
          const $parent = $('#js--blog-content')

          const targetTop = $target.offset().top
          const className = 'fix-blog-header'

          const fixHeader = () => {
            if (!$parent.hasClass(className)) {
              $parent.addClass(className)
            }
          }
          const unfixHeader = () => {
            if ($parent.hasClass(className)) {
              $parent.removeClass(className)
            }
          }
          const processScroll = () => {
            if ($(document).scrollTop() >= targetTop) {
              fixHeader()
            } else {
              unfixHeader()
            }
          }

          $(document).on('scroll', processScroll)
          processScroll()
        })
      },

      // getMonthFullName
      getMonthFullName (key) {
        return MONTHS_FULLNAME[key]
      },

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
