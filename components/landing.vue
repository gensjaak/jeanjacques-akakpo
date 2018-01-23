<template>
  <section class="row landing-row">
    <curstep :append="curStep"></curstep>

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

  import curstep from '@/components/curstep'
  
  export default {
    components: { curstep },
    data () {
      return {
        curStep: {
          text: 'Home'
        },
        showGreatings: false
      }
    },
    props: {},
    methods: {
      getLandingHeaderText () {
        return 'hello world.'
      },
      great () {
        let vm = this

        $(document).ready(() => {
          setTimeout(() => {
            vm.showGreatings = true
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
