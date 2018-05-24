<template>
  <section class="row projects-row" :id="path.resolve.split('#').join('')">
    <CurrentStep 
      v-if="!p_restricted" 
      :append="currentStep"></CurrentStep>

    <div class="row-inner">
      <div class="projects-list">
        <article 
          v-for="(_, k) in projects" 
          :id="_.slug()" 
          :key="_.slug()" 
          :class="_.themeClass" 
          class="project-item">
          <a 
            class="project-item-link" 
            @click.prevent.stop="loadProject(_)" 
            :href="_.link()">
            <span class="img-wrapper">
              <img :src="`/img/${_.imageURL}`" class="img-fluid project-item--image">
            </span>
            <div class="project-item-inner">
              <p class="project-item-desc">{{ _.desc }}</p>
              <div class="project-item-footer">
                <p class="project-item-techs">{{ _.techs.join(', ') }}</p>
                <header class="project-item-name dashed-text">{{ _.name }}</header>
              </div>
            </div>
          </a>
        </article>
      </div>

      <div 
        v-if="!p_restricted" 
        class="projects-more">
        <a :href="ALL_PROJECTS_PATH.resolve" class="btn">{{ getMoreProjectsText() }}</a>
      </div>
    </div>
  </section>
</template>

<script>
  import $ from 'jquery'
  import { mapGetters } from 'vuex'
  import { PATHS, PROJECT_ITEM_DOMRECT_KEY } from '@@/illuminate/config'
  import CurrentStep from '@/components/CurrentStep'
  
  export default {
    name: 'Projects',

    // Required components
    components: { CurrentStep },

    // data
    data: () => ({
      // currentStep
      currentStep: {
        text: 'Projects'
      },

      // projects
      projects: [],

      // My path
      path: PATHS.WORKS,

      // All projects path
      ALL_PROJECTS_PATH: PATHS.ALL_WORKS,
    }),

    // computed
    computed: {
      ...mapGetters({

        // Current visible section's path
        'x_projects': 'projects/items',
      }),
    },

    // created
    created () {
      this.projects = this.x_projects()
    },

    // mounted
    mounted () {
      this.revealObservables()
    },

    // props
    props: {

      // Show all projecs
      p_restricted: { type: Boolean, default: false, required: false },
    },

    // methods
    methods: {

      // loadProject
      loadProject (item) {
        const $target = $('.project-item#' + item.slug()).find('.img-wrapper')

        const clientRect = $target.get(0).getBoundingClientRect()
        let clientRectPlain = {}
        for (const key in clientRect) {
          if (key !== 'toJSON') {
            clientRectPlain[key] = clientRect[key]
          }
        }

        window.localStorage[PROJECT_ITEM_DOMRECT_KEY] = JSON.stringify(clientRectPlain)
        this.$router.push({ path: item.link() })
      },

      // revealObservables
      revealObservables () {
        // Do not continue if browser do not support this feature
        if (!window.IntersectionObserver) {
          console.error('Your browser doesn\'t support window.IntersectionObserver. Skipping this feature.')

          return false
        }

        const options = { root: null, rootMargin: '0px', threshold: 0.4 }
        const observed = (entries, observerMaster) => {
          entries.forEach(entry => {
            if (entry.isIntersecting) $(entry.target).addClass('reveal')
          })
        }
        const observer = new IntersectionObserver(observed, options)

        // Observe all project items
        document.querySelectorAll('.project-item').forEach((element, index) => {
          observer.observe(element)
        })
      },

      // getMoreProjectsText
      getMoreProjectsText () {
        return 'See all my projects'
      },
    },
  }
</script>

<style lang='scss' scoped>
  @import './../assets/styles/components/projects.scss';
</style>
