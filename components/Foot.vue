<template>
  <section class="foot-row">
    <div class="row-inner">
      <button 
        @click="scrollToTop" 
        class="goto-top"><i class="material-icons">keyboard_arrow_up</i></button>

      <div>
        <h6>&copy; 2018 Jean-jacques AKAKPO. Tous droits réservés.</h6>
        <h6>Designed by love and code</h6>
      </div>

      <div>
        <h6><a href="mailto:akakpo.jeanjacques@gmail.com?subject=Greetings">akakpo.jeanjacques@gmail.com</a></h6>
        <h6><a href="tel:0022892874987" title="Me contacter au 0022892874987">(+228) 92874987</a> - <a href="tel:0022899091629" title="Me contacter au 0022899091629">(+228) 99091629</a></h6>
      </div>
    </div>
  </section>
</template>

<script>
  import $ from 'jquery'

  export default {
    name: 'Footer',

    // Dependencies
    components: {},

    // methods
    methods: {

      // scrollToTop
      scrollToTop () {
        $('html, body').animate({
          scrollTop: 0
        }, 'slow', 'easeOutCubic')
      },
    },
  }
</script>

<style lang='scss' scoped>
  @import './../assets/styles/components/foot.scss';
</style>
