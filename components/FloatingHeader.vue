<template>
  <header 
    :class="{ 'expanded': p_restricted }" 
    class="floating-header">

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
    <div 
      v-if="!p_restricted" 
      class="menu-toggler-wrapper">
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

    <!-- Go home -->
    <div 
      v-if="p_restricted" 
      class="go-home-wrapper">
      <a :href="HOMEPAGE.resolve">Go home</a>
    </div>

    <!-- Content when expanded -->
    <div 
      v-if="p_restricted" 
      class="expanded-content">
      <div class="expanded-content-inner">
        <h1 class="content-header-title">{{ p_expanded_data.title }}</h1>
        <h6 class="content-header-hints">
          <span 
            v-for="(_, k) in p_expanded_data.hints"
            :key="k">{{ _ }}</span>
        </h6>
      </div>
    </div>
  </header>
</template>

<script>
  import { mapGetters } from 'vuex'
  import { PATHS } from '@@/illuminate/config'

  export default {
    name: 'FloatingMenu',

    // data
    data: () => ({

      // HOMEPAGE
      HOMEPAGE: PATHS.HOMEPAGE,
    }),

    // Props
    props: {

      // p_restricted
      p_restricted: { type: Boolean, default: false, required: false },

      // When expanded
      p_expanded_data: { type: Object, default: () => {}, required: false },
    },

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
