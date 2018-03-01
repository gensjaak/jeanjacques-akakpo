<template>
  <section 
    :class="{'menu-opened': x_menu_opened}"
    class="menu-wrapper">
  </section>
</template>

<script>
  import { mapGetters } from 'vuex'

  export default {
    name: 'Menu',

    // data
    data: () => ({}),

    // props
    props: {},

    // computed
    computed: {
      ...mapGetters({
        'x_menu_opened': 'app/menu_opened',
      }),
    },

    // methods
    methods: {},
  }
</script>

<style lang='scss' scoped>
  @import './../assets/styles/components/menu.scss';
</style>
