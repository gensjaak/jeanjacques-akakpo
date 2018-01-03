<template>
  <section class="row skills-row">
    <curstep :append="curStep"></curstep>

    <div class="row-inner">
      <header class="skills-header-text">{{ getSkillsHeaderText() }}</header>
      
      <div class="skills-grid">
        <ul>
          <li 
            v-for="_ in skills"
            class="skill-item">
            <a 
              href="#" 
              class="skill-inner" 
              >
              <div 
                class="skill-overlay"
                :style="{ 'background-color': `#${_.bgColor}` }"
                ></div>
              <div class="skills-content">
                <span class="skill-name">{{ _.name }}</span>

                <ul class="skills-subskills" v-if="_.subSkills">
                  <li>
                    <span class="subskill-name">{{ _.subSkills.join(', ') }}</span>
                  </li>
                </ul>
              </div>
            </a>
          </li>
        </ul>
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
          text: 'Skills'
        },
        skills: [
          {
            bgColor: 'F16529',
            name: 'HTML',
            subSkills: [ 'PUG', 'JADE' ],
            mediaURL: ''
          },
          {
            bgColor: '1F9FDB',
            name: 'CSS',
            subSkills: [ 'SASS', 'BOOTSTRAP' ],
            mediaURL: ''
          },
          {
            bgColor: 'F7E03A',
            name: 'JS',
            subSkills: [ 'ES5', 'ES6' ],
            mediaURL: ''
          },
          {
            bgColor: '787CB5',
            name: 'PHP',
            subSkills: [ 'LARAVEL', 'WORDPRESS' ],
            mediaURL: ''
          },
          {
            bgColor: '00589C',
            name: 'C++',
            subSkills: [ 'Qt', 'Unity' ],
            mediaURL: ''
          },
          {
            bgColor: '67A05C',
            name: 'NODEJS',
            subSkills: [ 'AdonisJS' ],
            mediaURL: ''
          },
          {
            bgColor: '34C5F0',
            name: 'PHOTOSHOP',
            mediaURL: ''
          },
          {
            bgColor: '50B883',
            name: 'VUEJS',
            subSkills: [ 'NUXTJS', 'VUETIFYJS' ],
            mediaURL: ''
          },
          {
            bgColor: '67B445',
            name: 'ANDROID',
            mediaURL: ''
          }
        ]
      }
    },
    props: {},
    methods: {
      getSkillsHeaderText () {
        return 'I use to work with'
      }
    },
    mounted () {}
  }
</script>

<style lang="scss" scoped>
  @import "./../assets/styles/components/skills.scss";
</style>
