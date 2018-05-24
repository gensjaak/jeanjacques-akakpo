<template>
  <section 
    v-if="item" 
    class="row project-item-row">

    <FloatingHeader 
      :p_expanded_data="item" 
      :p_height="'big'" 
      :p_dash_title="true" 
      :p_restricted="true">

      <!-- SES -->
      <div :style="sharedElementStyle" class="shared-element" ref="sharedElement"></div>
    </FloatingHeader>
  </section>
</template>

<script>
  import $ from 'jquery'
  import { mapGetters } from 'vuex'
  import { PROJECT_ITEM_DOMRECT_KEY } from '@@/illuminate/config'
  import { revealBannerExpandedTitle } from '@@/illuminate/utils'
  import FloatingHeader from '@/components/FloatingHeader'

  export default {
    name: 'ProjectItem',

    // Required components
    components: { FloatingHeader },

    // data
    data: () => ({

      // Item
      item: null,

      // Shared element
      sharedElementStyle: {},
    }),

    // computed
    computed: {
      ...mapGetters({

        // Current visible section's path
        'x_project': 'projects/item',
      }),
    },

    // created
    created () {
      // Fetch this slug project representation
      this.item = this.x_project(this.getRouterSlug())
    },

    // mounted
    mounted () {
      // Init sharing elements
      this.shareElements()
    },

    // props
    props: {},

    // methods
    methods: {

      // shareElements
      shareElements () {
        this.sharedElementStyle = this.buildSharedElementStyle(this.getDomRect())
        this.animateSharedElements()
        revealBannerExpandedTitle()
      },

      // animateSharedElements
      animateSharedElements () {
        const fn = () => {
          const $sharedElement = $(this.$refs['sharedElement'])

          $sharedElement.animate({
            'left': '0',
            'top': '0',
            'right': '0',
            'bottom': '0',
            'width': '100%',
            'height': '100%',
          }, 450, 'easeOutQuint')
        }

        setTimeout(fn, 350)
      },

      // buildSharedElementStyle
      buildSharedElementStyle (domRect) {
        return {
          'position': `absolute`,
          'z-index': `1`,
          'display': `inline-flex`,
          'justify-content': `center`,
          'align-items': `center`,
          'background-color': `transparent`,
          'background-image': `url(/img/${this.item.imageURL})`,
          'background-size': `cover`,
          'background-position': `center`,
          'overflow': `hidden`,
          'top': `${domRect.top}px`,
          'left': `${domRect.left}px`,
          'width': `${domRect.width}px`,
          'height': `${domRect.height}px`,
        }
      },

      // Get this docRect
      getDomRect () {
        return JSON.parse(window.localStorage[PROJECT_ITEM_DOMRECT_KEY])
      },

      // Get this slug
      getRouterSlug () {
        return this.$router.history.current.params['slug']
      },
    },
  }
</script>

<style lang='scss' scoped>
</style>
