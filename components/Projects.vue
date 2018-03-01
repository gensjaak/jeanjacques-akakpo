<template>
  <section class="row projects-row">
    <CurrentStep :append="currentStep"></CurrentStep>

    <div class="row-inner">
      <div class="projects-list">
        <article 
          v-for="(_, k) in projects" 
          :class="_.themeClass"
          class="project-item"
          >
          <a :href="_.link">
            <span class="img-wrapper">
              <img :src="`img/${_.imageURL}`" class="img-fluid project-item--image">
            </span>
            <div class="project-item-inner">
              <p class="project-item-desc">{{ _.desc }}</p>
              <div class="project-item-footer">
                <p class="project-item-techs">{{ _.techs.join(', ') }}</p>
                <header class="project-item-name">{{ _.name }}</header>
              </div>
            </div>
          </a>
        </article>
      </div>

      <!-- <div class="projects-more">
        <a href="#" class="btn">{{ getMoreProjectsText() }}</a>
      </div> -->
    </div>
  </section>
</template>

<script>
  import $ from 'jquery'
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
      projects: [
        {
          link: '#',
          // imageURL: 'fast-foud.jpg',
          imageURL: 'gaming_2.jpg',
          desc: `
            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
          `,
          techs: ['Java Android', 'XML', 'Firebase', 'Photoshop'],
          name: 'Fast Foud'
        },
        {
          link: '#',
          // imageURL: 'ush.jpg',
          imageURL: 'gaming_3.jpg',
          desc: `
            Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
          `,
          techs: ['Wordpress', 'CSS', 'Javascript', 'PHP'],
          name: 'Ushuaïa Beauté'
        },
        {
          link: '#',
          // imageURL: 'carrere.jpg',
          imageURL: 'gaming_2.jpg',
          desc: `
            Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo
          `,
          techs: ['Intégration', 'Bootstrap', 'Javascript'],
          name: 'Groupe Carrere'
        },
        {
          link: '#',
          // imageURL: 'akces.jpg',
          imageURL: 'movies_2.jpg',
          desc: `
            Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur:
          `,
          techs: ['Intégration', 'Bootstrap', 'Javascript'],
          name: 'Ackes'
        },
        {
          link: '#',
          // imageURL: 'yokosushi.jpg',
          imageURL: 'music_2.jpg',
          desc: `
            Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur
          `,
          techs: ['Intégration', 'VueJS'],
          name: 'Yokosushi'
        },
        {
          link: '#',
          // imageURL: 'nkeleo.jpg',
          imageURL: 'movies_2.jpg',
          desc: `
            Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
          `,
          techs: ['Java Android', 'XML', 'Firebase', 'VueJS', 'PHP', 'Photoshop'],
          name: 'Nkeleo'
        }
      ]
    }),

    mounted () {
      this.revealObservables()
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
        return 'All projects'
      },
    },
  }
</script>

<style lang='scss' scoped>
  @import './../assets/styles/components/projects.scss';
</style>
