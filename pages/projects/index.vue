<template>
  <div>
    <FloatingHeader 
      :p_expanded_data="projectsHeaderData" 
      :p_restricted="true">
    </FloatingHeader>

    <Projects :p_restricted="true"></Projects>

    <Contact :p_restricted="true"></Contact>

    <Foot></Foot>
  </div>
</template>

<script>
  import FloatingHeader from '@/components/FloatingHeader'
  import Projects from '@/components/Projects'
  import Contact from '@/components/Contact'
  import Foot from '@/components/Foot'

  export default {
    name: 'AllProjects',

    // View layout
    layout: 'default',

    // Required components
    components: { FloatingHeader, Projects, Contact, Foot },

    // Data
    data: () => ({

      // projectsHeaderData
      projectsHeaderData: {
        title: `> all my projects / works / stuff`,
        hints: [ `Some of them are not available online`, `Some of them still in progress`, `Scroll to bottom for more` ],
      },
    }),
  }
</script>

<style lang='scss'>
</style>
