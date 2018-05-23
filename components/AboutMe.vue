<template>
  <section class="row aboutme-row" :id="path.resolve.split('#').join('')" ref="aboutme">
    <CurrentStep :append="currentStep"></CurrentStep>

    <div class="row-inner">
      <div class="speech-container">
        <div class="speech-title-wrapper">
          <h1 data-scrollbreak="0" class="speech-title">{{ getSpeechTitle() }}</h1>
        </div>
        <br>
        <div class="speech-text-wrapper">
          <h6 data-scrollbreak="50" class="speech-text">{{ getSpeechText() }}</h6>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
  import { mapGetters } from 'vuex'
  import { PATHS } from '@@/illuminate/config'
  import { animateElements } from '@@/illuminate/utils'
  import CurrentStep from '@/components/CurrentStep'
  
  export default {
    name: 'AboutMe',

    // Required components
    components: { CurrentStep },

    // Data
    data: () => ({
      // currentStep
      currentStep: {
        text: 'About',
      },

      // My path
      path: PATHS.ABOUTME,
    }),

    // mounted
    mounted () {},

    // watch
    watch: {

      // x_current_path
      x_current_path (val) {
        if (val === this.path.resolve) {
          animateElements(this.$refs['aboutme'])
        }
      },
    },

    // computed
    computed: {
      ...mapGetters({

        // Current visible section's path
        'x_current_path': 'app/current_path',
      }),
    },

    // Methods
    methods: {

      // getSpeechTitle
      getSpeechTitle () {
        return 'I am Jean-Jacques AKAKPO,'
      },

      // getSpeechText
      getSpeechText () {
        return `
          a creative web and android front-end developer. I love working on innovative projects, full of challenges. I am collaborative, perfectionist and I use to listen to alternative rock.
        `
        // return `
        //   Jean-Jacques AKAKPO, développeur front-end, web et android, créatif. J'adore travailler sur des projets innovants, pleins de défis. Je suis collaboratif, perfectionniste et j'écoute du rock alternatif.
        // `
      },
    },
  }
</script>

<style lang='scss' scoped>
  @import './../assets/styles/components/aboutme.scss';
</style>
