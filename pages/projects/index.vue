<template>
  <div>
    <FloatingHeader
      :p_expanded_data="projectsHeaderData"
      :p_restricted="true" />

    <Projects
      :p_step_indicator="false"
      :p_featured="false" />

    <Contact :p_step_indicator="false" />

    <Foot />
  </div>
</template>

<script>
  import FloatingHeader from '@/components/FloatingHeader'
  import Projects from '@/components/Projects'
  import Contact from '@/components/Contact'
  import Foot from '@/components/Foot'
  import { revealBannerExpandedTitle } from '@@/illuminate/utils'

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
        title: `all my projects, works, stuff`,
        hints: [ `Some of them are not available online`, `Some of them still in progress`, `Scroll to bottom for more` ],
      },
    }),

    // mounted
    mounted () {
      revealBannerExpandedTitle()
    },
  }
</script>

<style lang='scss'>
</style>
