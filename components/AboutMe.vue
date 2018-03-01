<template>
  <section class="row aboutme-row">
    <CurrentStep :append="currentStep"></CurrentStep>

    <div class="row-inner">
      <div class="speech-container">
        <div class="speech-title-wrapper">
          <h1 class="speech-title reveal-animation wow slideInUp" data-wow-offset="75" data-wow-duration=".3s" data-wow-delay="0s">{{ getSpeechTitle() }}</h1>
        </div>
        <br>
        <div class="speech-text-wrapper">
          <h6 class="speech-text reveal-animation wow fadeIn" data-wow-offset="100" data-wow-duration=".25s" data-wow-delay=".35s">{{ getSpeechText() }}</h6>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
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
    }),

    mounted () {
      window.ScrollReveal.reveal('.reveal-animation')
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
