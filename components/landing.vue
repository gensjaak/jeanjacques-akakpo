<template>
  <section class="row landing-row">
    <curstep :append="curStep"></curstep>

    <div class="row-inner">
      <div class="landing-header-text-wrapper">
        <h1
          :class="{'animated': animateGreatings()}"
          class="landing-header-text"
          >{{ getLandingHeaderText() }}</h1>
      </div>
    </div>

    <nextstep :append="nextStep"></nextstep>
  </section>
</template>

<script>
  import $ from 'jquery'

  import nextstep from '@/components/nextstep'
  import curstep from '@/components/curstep'
  
  export default {
    components: { nextstep, curstep },
    data () {
      return {
        nextStep: {
          text: 'hello',
          show: false
        },
        curStep: {
          text: 'Home'
        },
        showGreatings: false
      }
    },
    props: {},
    methods: {
      getLandingHeaderText () {
        return 'hey.'
      },
      great () {
        let vm = this

        $(document).ready(() => {
          setTimeout(() => {
            vm.showGreatings = vm.nextStep.show = true
          }, 2000)
        })
      },
      animateGreatings () {
        return this.showGreatings
      }
    },
    mounted () {
      this.great()
    }
  }
</script>

<style lang="scss" scoped>
  @import "./../assets/styles/components/landing.scss";
</style>
