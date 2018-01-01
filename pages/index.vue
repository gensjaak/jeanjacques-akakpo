<template>
  <div>
    <floatingheader></floatingheader>

    <landing></landing>

    <aboutme></aboutme>
  </div>
</template>

<script>
  import landing from '@/components/landing'
  import floatingheader from '@/components/floatingheader'
  import aboutme from '@/components/aboutme'

  export default {
    layout: 'default',
    components: { landing, floatingheader, aboutme },
    data () {
      return {}
    },
    mounted () {}
  }
</script>

<style lang="scss">
</style>
