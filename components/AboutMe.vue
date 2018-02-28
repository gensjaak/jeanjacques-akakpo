<template>
  <section class="row aboutme-row">
    <CurrentStep :append="currentStep"></CurrentStep>

    <div class="row-inner">
      <div class="speech-container">
        <span class="speech-title">{{ getSpeechTitle() }}</span>
        <br>
        <span class="speech-text">{{ getSpeechText() }}</span>
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
