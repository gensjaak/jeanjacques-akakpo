<template>
  <section 
    v-if="item" 
    class="row project-item-row">

    <!-- Banner -->
    <FloatingHeader 
      :p_expanded_data="item" 
      :p_height="'big'" 
      :p_dash_title="true" 
      :p_restricted="true">

      <!-- SES -->
      <div :style="sharedElementStyle" class="shared-element" ref="sharedElement"></div>
    </FloatingHeader>

    <!-- Metas donnees -->
    <div class="project-item-metas container">
      <ul class="metas-list">
        <ProjectMetaItem 
          v-for="(_, k) in item.metas" 
          :key="k" 
          :item="_"/>

        <li class="logo-client">
          <span class="img-wrapper">
            <img src="/img/brands/chrome.jpeg" alt="Client's logo">
          </span>
        </li>
      </ul>
    </div>

    <!-- The concept -->
    <div class="the-concept container">
      <ul class="actions">
        <li class="action-item">
          <a :href="item.projectSiteURL" class="btn btn-small">open website</a>
        </li>

        <SocialLinks :p_size="'small'" />
      </ul>

      <h4 class="title prefixed-text">{{ item.name }}, the concept</h4>
      <p class="description">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
        quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
        consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
        cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
        proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
      </p>
    </div>

    <!-- Project presentation -->
    <div class="report container">
      <!-- Title -->
      <h4 class="title prefixed-text">{{ item.report.title }}</h4>

      <!-- Description -->
      <p class="description">{{ item.report.description }}</p>

      <!-- Shoots -->
      <div 
        v-for="(_, k) in item.shoots" 
        :key="k" 
        class="shoot-item">

        <!-- Shood description -->
        <p class="shoot-description">{{ _.description }}</p>

        <!-- Shoot image -->
        <span class="img-wrapper shoot-media">
          <img :src="`/img/${_.mediaURL}`" :alt="`Project shoot no ${k}`">
        </span>
      </div>
    </div>

    <!-- Adjacents projects -->
    <AdjacentProjects :p_center="item" />

    <!-- Contact form -->
    <Contact :p_restricted="true" />

    <!-- Footer -->
    <Foot />
  </section>
</template>

<script>
  import $ from 'jquery'
  import { mapGetters } from 'vuex'
  import { PROJECT_ITEM_DOMRECT_KEY } from '@@/illuminate/config'
  import { revealBannerExpandedTitle } from '@@/illuminate/utils'
  import FloatingHeader from '@/components/FloatingHeader'
  import ProjectMetaItem from '@/components/ProjectMetaItem'
  import SocialLinks from '@/components/SocialLinks'
  import Contact from '@/components/Contact'
  import Foot from '@/components/Foot'
  import AdjacentProjects from '@/components/AdjacentProjects'

  export default {
    name: 'ProjectItem',

    // Required components
    components: { FloatingHeader, ProjectMetaItem, SocialLinks, Contact, Foot, AdjacentProjects },

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
  @import './../../../assets/styles/components/project-single-item.scss';
</style>