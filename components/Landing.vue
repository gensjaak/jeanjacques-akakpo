<template>
  <section class="row landing-row">
    <CurrentStep :append="currentStep"></CurrentStep>

    <div class="row-inner">
      <div class="landing-header-text-wrapper">
        <h1
          :class="{'animated': animateGreatings()}"
          class="landing-header-text masked-text"
          >
            <span v-for="_ in getLandingHeaderText()">{{ _ }}</span>
          </h1>
      </div>
    </div>
  </section>
</template>

<script>
  import $ from 'jquery'
  import CurrentStep from '@/components/CurrentStep'
  
  export default {
    name: 'Landing',

    // Required components
    components: { CurrentStep },

    // data
    data: () => ({
      // currentStep
      currentStep: {
        text: 'Home'
      },

      // showGreatings
      showGreatings: false,
    }),

    // methods
    methods: {

      // getLandingHeaderText
      getLandingHeaderText () {
        return 'hello world.'
      },

      // great
      great () {
        let vm = this

        $(document).ready(() => {
          setTimeout(() => {
            vm.showGreatings = true
          }, 2000)
        })
      },

      // animateGreatings
      animateGreatings () {
        return this.showGreatings
      },
    },

    // mounted
    mounted () {
      this.great()
    },
  }
</script>

<style lang='scss' scoped>
  @import './../assets/styles/components/landing.scss';
</style>
