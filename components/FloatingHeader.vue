<template>
  <header class="floating-header">
    <!-- Brand wrapper -->
    <div class="brand-wrapper">
      <a href="/" class="brand">
        <span class="img-wrapper">
          <!-- <img src="~/static/logo-white-point.png" class="img-fluid" width="35px"> -->
          <i class="material-icons">whatshot</i>
        </span>
      </a>
    </div>

    <!-- Menu toggler -->
    <div class="menu-toggler-wrapper">
      <a
        href="javascript:void(0);" 
        class="menu-toggler"
        :class="{'menu-opened': x_menu_opened}"
        @click="toggleMenu"
        >
        <span></span>
        <span></span>
        <span></span>
      </a>
    </div>
  </header>
</template>

<script>
  import { mapGetters } from 'vuex'

  export default {
    name: 'FloatingMenu',

    // data
    data: () => ({}),

    // computed
    computed: {
      ...mapGetters({
        'x_menu_opened': 'app/menu_opened',
      }),
    },

    // Created
    created () {
    },

    // methods
    methods: {

      // toggleMenu
      toggleMenu () {
        this.$store.commit('app/TOGGLE_MENU', null)
      },
    },
  }
</script>

<style lang='scss' scoped>
  @import './../assets/styles/components/floatingheader.scss';
</style>
