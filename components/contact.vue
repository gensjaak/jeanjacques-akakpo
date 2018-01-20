<template>
  <section class="row contact-row">
    <curstep :append="curStep"></curstep>

    <div class="row-inner">
    </div>
  </section>
</template>

<script>
  import curstep from '@/components/curstep'
  
  export default {
    components: { curstep },
    data () {
      return {
        curStep: {
          text: 'Contact me'
        }
      }
    },
    props: {},
    methods: {},
    mounted () {}
  }
</script>

<style lang="scss" scoped>
  @import "./../assets/styles/components/contact.scss";
</style>
