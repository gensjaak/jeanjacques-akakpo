<template>
  <ul 
    :class="`size-${p_size}`" 
    class="social-links">
    <li 
      v-for="_ in items"
      class="social-link-wrapper dashed-text no-rotate-dash">
      <a :href="_.dataURL" class="social-link">
        <img :src="`/img/${_.mediaURL}`" :title="_.title" class="social-link-media">
      </a>
    </li>
  </ul>
</template>

<script>
  export default {
    name: 'SocialLinks',

    // Components
    components: {},

    // data
    data: () => ({

      // items
      items: [
        {
          dataURL: 'facebook.com',
          mediaURL: 'logo_facebook.svg',
          title: 'Chat with me on Facebook'
        },
        {
          dataURL: 'twitter.com',
          mediaURL: 'logo_twitter.svg',
          title: 'Follow me on Twitter'
        },
        {
          dataURL: 'linkedin.com',
          mediaURL: 'logo_linkedin.svg',
          title: 'Connect with me on LinkedIn'
        },
        {
          dataURL: 'skype.com',
          mediaURL: 'logo_skype.svg',
          title: 'Call me on Skype'
        }
      ],
    }),

    // props
    props: {

      // p_size
      p_size: { type: String, default: 'big', required: false },
    },

    // watch
    watch: {},

    // computed
    computed: {},

    // methods
    methods: {},
  }
</script>

<style lang='scss' scoped>
  @import './../assets/styles/components/social-links.scss';
</style>
