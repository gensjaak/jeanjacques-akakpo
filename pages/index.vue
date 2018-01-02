<template>
  <div>
    <floatingheader></floatingheader>

    <landing></landing>

    <aboutme></aboutme>

    <projects></projects>
  </div>
</template>

<script>
  import landing from '@/components/landing'
  import floatingheader from '@/components/floatingheader'
  import aboutme from '@/components/aboutme'
  import projects from '@/components/projects'

  export default {
    layout: 'default',
    components: { landing, floatingheader, aboutme, projects },
    data () {
      return {}
    },
    mounted () {}
  }
</script>

<style lang="scss">
</style>
