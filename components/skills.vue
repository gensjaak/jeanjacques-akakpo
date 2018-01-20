<template>
  <section class="row skills-row">
    <curstep :append="curStep"></curstep>

    <div class="row-inner">
      <vplayer :append="curMediaURL"></vplayer>

      <div class="skills-content">
        <header class="skills-header-text">{{ getSkillsHeaderText() }}</header>

        <p class="skills-speech">
          Pour une application Web complète, je sépare le front-end [visuel] du back-end [logique applicative]. Le front-end, étant principalement en <a href="#">HTML</a> - <a href="#">CSS [SASS]</a> - <a href="#">JS [VueJS]</a> avec un petit coup de <a href="#">Bootstrap</a> ou carrément <a href="#">VuetifyJS</a> pour le matérial design, communique avec le back-end [<a href="#" class="skill-php" data-mediaurl="video/php.mp4">PHP</a> ou <a href="#">NodeJS</a>] par <a href="#">AJAX</a>. Je la préfère native donc je pars sur du <a href="#">Java Android</a>, avec <a href="#">Android Studio</a>, pour mes applications mobiles Android.
        </p>
      </div>
    </div>
  </section>
</template>

<script>
  import $ from 'jquery'

  import curstep from '@/components/curstep'
  import vplayer from '@/components/vplayer'
  
  export default {
    components: { curstep, vplayer },
    data () {
      return {
        curStep: {
          text: 'Skills'
        },
        curMediaURL: {
          show: false,
          URL: ''
        }
      }
    },
    props: {},
    methods: {
      getSkillsHeaderText () {
        return 'How I use to work ?'
      },
      getSkillsSpeech () {
        return `
          Pour une application Web complète, je sépare le front-end (visuel) du back-end (logique applicative). Le front-end, étant principalement en <a href="#">HTML</a> - <a href="#">CSS (SASS)</a> - <a href="#">JS (VueJS)</a> avec un petit coup de <a href="#">Bootstrap</a> ou carrément <a href="#">VuetifyJS</a> pour le matérial design, communique avec le back-end <a href="#">(PHP ou NodeJS)</a> par <a href="#">AJAX</a>.
          Je la préfère native donc je pars sur du <a href="#">Java Android</a>, avec <a href="#">Android Studio</a>, pour mes applications mobiles Android.
        `
      },
      initSkillsHover () {
        const skills = [ 'skill-php' ]

        skills.forEach(skill => {
          let $skill = $(`.${skill}`)

          $skill.on('mouseover', e => {
            this.curMediaURL.URL = $skill.data('mediaurl')
            this.curMediaURL.show = true
          })
          $skill.on('mouseout', e => {
            this.curMediaURL.URL = ''
            this.curMediaURL.show = false
          })
        })
      }
    },
    mounted () {
      this.initSkillsHover()
    }
  }
</script>

<style lang="scss" scoped>
  @import "./../assets/styles/components/skills.scss";
</style>
