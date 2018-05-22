<template>
  <section class="row contact-row" :id="path.resolve.split('#').join('')">
    <CurrentStep :append="currentStep" class="prevent-w-100"></CurrentStep>

    <div class="row-inner">
      <div class="contact-content">
        <header class="contact-header-text">{{ getContactHeaderText() }}</header>
        <p class="contact-subheader-text">
          we can talk about your amazing project around a coffee.
        </p>

        <div class="contact-form-wrapper">
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
            <div class="contact-form-group">
              <button type="submit" name="send" class="contact-form-btn" title="Say hello">Hello</button>

              <div class="contact-social">
                <ul class="social-icons">
                  <li 
                    v-for="_ in socials"
                    class="social-link-wrapper dashed-text">
                    <a :href="_.dataURL" class="social-link">
                      <img :src="`img/${_.mediaURL}`" :title="_.title" class="social-link-media">
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
  import { PATHS } from '@@/illuminate/config'
  import CurrentStep from '@/components/CurrentStep'
  
  export default {
    name: 'Contact',

    // Required components
    components: { CurrentStep },

    // Data
    data: () => ({
      // currentStep
      currentStep: {
        text: 'Contact me'
      },

      // socials
      socials: [
        {
          dataURL: 'facebook.com',
          mediaURL: 'logo_facebook.svg',
          title: 'Chat with me on Facebook'
        },
        {
          dataURL: 'twitter.com',
          mediaURL: 'logo_twitter.svg',
          title: 'Follow me on Twitter'
        },
        {
          dataURL: 'linkedin.com',
          mediaURL: 'logo_linkedin.svg',
          title: 'Connect with me on LinkedIn'
        },
        {
          dataURL: 'skype.com',
          mediaURL: 'logo_skype.svg',
          title: 'Call me on Skype'
        }
      ],

      // My path
      path: PATHS.CONTACT,
    }),

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
