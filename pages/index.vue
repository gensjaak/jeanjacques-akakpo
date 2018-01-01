<template>
  <div>
    <floatingheader></floatingheader>
    <landing></landing>
  </div>
</template>

<script>
  import landing from '@/components/landing'
  import floatingheader from '@/components/floatingheader'

  export default {
    layout: 'default',
    components: { landing, floatingheader },
    data () {
      return {}
    },
    mounted () {}
  }
</script>

<style lang="scss">
</style>
