<template>
  <section class="row contact-row">
    <curstep :append="curStep"></curstep>

    <div class="row-inner">
      <div class="contact-content">
        <header class="contact-header-text">{{ getContactHeaderText() }}</header>
        <p class="contact-subheader-text">
          we can talk about your amazing project around a coffee
        </p>

        <div class="contact-form-wrapper">
          <form class="contact-form">
            <div class="contact-form-group">
              <input type="text" name="name" required value="" placeholder="full name" class="contact-form-field" autofocus="">
            </div>
            <div class="contact-form-group">
              <input type="email" name="email" required value="" placeholder="email address" class="contact-form-field">
            </div>
            <div class="contact-form-group">
              <textarea value="" name="message" placeholder="message" rows="6" class="contact-form-field" />
            </div>
            <div class="contact-form-group">
              <input type="submit" name="send" value="Hello" class="contact-form-btn">

              <div class="contact-social">
                <ul class="social-icons">
                  <li class="social-link">
                    <a href="">
                    </a>
                  </li>
                  <li class="social-link">
                    <a href="">
                    </a>
                  </li>
                  <li class="social-link">
                    <a href="">
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
  import curstep from '@/components/curstep'
  
  export default {
    components: { curstep },
    data () {
      return {
        curStep: {
          text: 'Contact me'
        }
      }
    },
    props: {},
    methods: {
      getContactHeaderText () {
        return 'get in touch with me'
      }
    },
    mounted () {}
  }
</script>

<style lang="scss" scoped>
  @import "./../assets/styles/components/contact.scss";
</style>
