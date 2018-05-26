<template>
  <section class="row contact-row" :id="path.resolve.split('#').join('')" ref="contact">
    <CurrentStep 
      v-if="!p_restricted" 
      :append="currentStep" 
      class="prevent-w-100"></CurrentStep>

    <div class="row-inner">
      <div class="contact-content">
        <header data-scrollbreak="150" class="contact-header-text"><span>{{ getContactHeaderText() }}</span></header>
        <p data-scrollbreak="550" class="contact-subheader-text">
          we can talk about your amazing project around a coffee.
        </p>

        <div data-scrollbreak="350" class="contact-form-wrapper">
          <form class="contact-form">
            <div class="contact-form-group">
              <input type="text" name="name" required value="" placeholder="full name" class="contact-form-field">
            </div>
            <div class="contact-form-group">
              <input type="email" name="email" required value="" placeholder="email address" class="contact-form-field">
            </div>
            <div class="contact-form-group">
              <textarea value="" name="message" placeholder="message" rows="6" class="contact-form-field" />
            </div>
            <div class="contact-form-group contact-form-btn-wrapper">
              <button type="submit" name="send" class="btn" title="Say hello">Hello</button>

              <div class="contact-social">
                <SocialLinks />
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
  import { mapGetters } from 'vuex'
  import { PATHS } from '@@/illuminate/config'
  import { animateElements } from '@@/illuminate/utils'
  import CurrentStep from '@/components/CurrentStep'
  import SocialLinks from '@/components/SocialLinks'
  
  export default {
    name: 'Contact',

    // Required components
    components: { CurrentStep, SocialLinks },

    // Props
    props: {

      // Restricted
      p_restricted: { type: Boolean, default: false, required: false },
    },

    // Data
    data: () => ({
      // currentStep
      currentStep: {
        text: 'Contact me'
      },

      // My path
      path: PATHS.CONTACT,
    }),

    // computed
    computed: {
      ...mapGetters({

        // Current visible section's path
        'x_current_path': 'app/current_path',
      }),
    },

    // watch
    watch: {

      // x_current_path
      x_current_path (val) {
        if (val === this.path.resolve) {
          animateElements(this.$refs['contact'])
        }
      },
    },

    // Methods
    methods: {

      // getContactHeaderText
      getContactHeaderText () {
        return 'get in touch with me'
      },
    },
  }
</script>

<style lang='scss' scoped>
  @import './../assets/styles/components/contact.scss';
</style>
