<template>
  <div>
    <FloatingHeader></FloatingHeader>

    <Landing></Landing>

    <AboutMe></AboutMe>

    <Projects></Projects>

    <Skills></Skills>

    <Misc></Misc>

    <Contact></Contact>

    <Foot></Foot>
  </div>
</template>

<script>
  import Landing from '@/components/Landing'
  import FloatingHeader from '@/components/FloatingHeader'
  import AboutMe from '@/components/AboutMe'
  import Projects from '@/components/Projects'
  import Skills from '@/components/Skills'
  import Misc from '@/components/Misc'
  import Contact from '@/components/Contact'
  import Foot from '@/components/Foot'

  export default {
    name: 'Homepage',

    // Mount view in default layout
    layout: 'default',

    // Required components
    components: { Landing, FloatingHeader, AboutMe, Projects, Skills, Misc, Contact, Foot },

    // Data
    data: () => ({}),
  }
</script>

<style lang='scss'>
</style>
