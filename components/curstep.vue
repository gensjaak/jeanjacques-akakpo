<template>
  <div class="curstep-wrapper">
    <div class="curstep-inner">
      <h5 class="curstep-text">{{ getText() }}</h5>
    </div>
  </div>
</template>

<script>
  export default {
    data () {
      return {}
    },
    methods: {
      getText () {
        return this.append.text
      }
    },
    props: {
      append: {
        type: Object,
        default: null
      }
    }
  }
</script>

<style lang="scss" scoped>
  @import "./../assets/styles/components/curstep.scss";
</style>
