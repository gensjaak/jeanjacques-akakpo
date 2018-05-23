<template>
  <nuxt/>
</template>

<script>
  import ScrollBreak from '@@/illuminate/scroll-break'
  
  export default {

    // Mounted
    mounted () {
      ScrollBreak
        .init()
        .watch(resolve => {
          this.$store.commit('app/CURRENT_SECTION', { resolve: resolve })
        })
    },
  }
</script>

<style></style>
