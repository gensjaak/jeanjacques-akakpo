<template>
  <section class="row landing-row" :id="path.resolve.split('#').join('')">
    <CurrentStep :append="currentStep"></CurrentStep>

    <div class="row-inner">
      <div class="landing-header-text-wrapper">
        <div id="js--masked-text" class="d-inline-flex masked-text dashed-text">
          <h1 class="landing-header-text landing-header-text--1">{{ getLandingHeaderText().split(' ')[0] }}</h1>
          <h1 class="landing-header-text landing-header-text--2">{{ getLandingHeaderText().split(' ')[1] }}</h1>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
  import $ from 'jquery'
  import { PATHS } from '@@/illuminate/config'
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

      // My path
      path: PATHS.LANDING,
    }),

    // mounted
    mounted () {
      this.animateItems()
    },

    // methods
    methods: {

      // animateItems
      animateItems () {
        window.ScrollReveal.reveal('.landing-header-text--1')
        setTimeout(() => {
          window.ScrollReveal.reveal('.landing-header-text--2')
        }, 100)

        $(document).ready(() => {
          // Animate the Masked text background on scroll
          this.animateBackgroundOnScroll()
          $(document).on('scroll', this.animateBackgroundOnScroll)
        })
      },

      // getLandingHeaderText
      getLandingHeaderText () {
        return 'hello world!'
      },

      // onScroll
      animateBackgroundOnScroll (e) {
        const st = e ? $(e.delegateTarget).scrollTop() : 0

        // If scrolltop greater than 450 do nothing
        if (st >= 450) return false

        let $maskedText = $('#js--masked-text')

        // If the masked text is not found throw error
        if (!$maskedText) throw new Error('Invalid jQuery element in scroll event handler.')

        $maskedText.find('.landing-header-text').css({ backgroundPosition: `50% ${st}%` })
      },
    },
  }
</script>

<style lang='scss' scoped>
  @import './../assets/styles/components/landing.scss';
</style>
