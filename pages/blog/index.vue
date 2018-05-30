<template>
  <div>
    <FloatingHeader 
      :p_expanded_data="blogHeaderData" 
      :p_color_scheme="'light'" 
      :p_restricted="true" />

    <Blog />

    <Contact :p_step_indicator="false" />

    <Foot />
  </div>
</template>

<script>
  import FloatingHeader from '@/components/FloatingHeader'
  import Contact from '@/components/Contact'
  import Blog from '@/components/Blog'
  import Foot from '@/components/Foot'
  import { revealBannerExpandedTitle } from '@@/illuminate/utils'

  export default {
    name: 'TheBlog',

    // View layout
    layout: 'default',

    // Required components
    components: { FloatingHeader, Blog, Contact, Foot },

    // Data
    data: () => ({

      // blogHeaderData
      blogHeaderData: {
        title: `I have a --dream blog`,
        bg: `/img/blog_bg.jpg`,
        hints: [ `Something like a blog rather`, `Just a list of my stuff`, `Even my hobbies ^^` ],
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
