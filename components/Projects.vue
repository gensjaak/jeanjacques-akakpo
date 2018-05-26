<template>
  <section class="row projects-row" :id="path.resolve.split('#').join('')">
    <CurrentStep 
      v-if="!p_restricted" 
      :append="currentStep"></CurrentStep>

    <div class="row-inner">
      <div class="projects-list">
        <ProjectItem 
          v-for="(_, k) in projects" 
          :key="_.key" 
          :p_item="_"/>
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
  import { PATHS } from '@@/illuminate/config'
  import CurrentStep from '@/components/CurrentStep'
  import ProjectItem from '@/components/ProjectItem'
  
  export default {
    name: 'Projects',

    // Required components
    components: { CurrentStep, ProjectItem },

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
