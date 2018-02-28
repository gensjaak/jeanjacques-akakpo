<template>
  <header class="floating-header">
    <div class="brand-wrapper">
      <a href="/" class="brand">
        <span class="img-wrapper">
          <!-- <img src="~/static/logo-white-point.png" class="img-fluid" width="35px"> -->
          <i class="material-icons">whatshot</i>
        </span>
      </a>
    </div>

    <div class="menu-toggler-wrapper">
      <a
        href="javascript:void(0);" 
        class="menu-toggler"
        :class="{'menu-opened': menuOpened}"
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
  export default {
    name: 'FloatingHeader',

    // data
    data: () => ({
      menuOpened: false,
    }),

    // methods
    methods: {

      // toggleMenu
      toggleMenu () {
        this.menuOpened = !this.menuOpened
      },
    },
  }
</script>

<style lang='scss' scoped>
  @import './../assets/styles/components/floatingheader.scss';
</style>
