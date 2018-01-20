<template>
  <div>
    <floatingheader></floatingheader>

    <landing></landing>

    <aboutme></aboutme>

    <projects></projects>

    <skills></skills>

    <misc></misc>

    <contact></contact>
  </div>
</template>

<script>
  import landing from '@/components/landing'
  import floatingheader from '@/components/floatingheader'
  import aboutme from '@/components/aboutme'
  import projects from '@/components/projects'
  import skills from '@/components/skills'
  import misc from '@/components/misc'
  import contact from '@/components/contact'

  export default {
    layout: 'default',
    components: { landing, floatingheader, aboutme, projects, skills, misc, contact },
    data () {
      return {}
    },
    mounted () {}
  }
</script>

<style lang="scss">
</style>
