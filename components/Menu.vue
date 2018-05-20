<template>
  <section 
    :class="{'menu-opened': x_menu_opened}"
    class="menu-wrapper">

    <div class="menu-content">
      <div class="stuff">
        <LatestActivities />
      </div>

      <div class="menu-items">
        <ul class="navbar">
          <li 
            v-for="(_, k) in NAVBAR_PATHS"
            class="nav-item">
            <nuxt-link 
              :to="_.resolve">
              {{ _.title.toLowerCase() }}
            </nuxt-link>
          </li>
        </ul>
      </div>
    </div>
  </section>
</template>

<script>
  import { mapGetters } from 'vuex'
  import { PATHS } from '@@/illuminate/config'
  import LatestActivities from '@@/components/LatestActivities'

  export default {
    name: 'Menu',

    // Components
    components: { LatestActivities },

    // data
    data: () => ({

      // NAVBAR_PATHS
      NAVBAR_PATHS: PATHS.filter(item => item.inNavBar),
    }),

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
