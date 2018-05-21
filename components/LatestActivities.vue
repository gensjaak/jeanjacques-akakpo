<template>
  <section class="latest-activities-wrapper">
    <h6 class="latest-activities-wrapper--title">> My recents activities</h6>
    <a 
      @click="closeLatestActivities" 
      class="latest-activities-wrapper--title latest-activities-wrapper--close" 
      href="javascript:void(0);">
      &lt; goto menu
    </a>

    <ul class="latest-activities">
      <li 
        v-for="(_, k) in activitiesGroup" 
        :key="k" 
        class="l-activity-group">

        <!-- Activity group year -->
        <header class="l-activity-group--header">{{ _.year }}</header>

        <!-- Activity group entries -->
        <ul class="l-activity-group--entries">

          <!-- Activity item -->
          <ActivityItem 
            v-for="(__, kk) in _.entries" 
            :key="kk" 
            :item="__" />
        </ul>
      </li>
    </ul>
  </section>
</template>

<script>
  import $ from 'jquery'
  import ActivityItem from '@@/components/ActivityItem'

  export default {
    name: 'LatestActivities',

    // Required components
    components: { ActivityItem },

    // data
    data: () => ({

      // activitiesGroup
      activitiesGroup: [
        {
          year: 2018,
          entries: [
            {
              resolve: `/`,
              title: `Touki Saint Louis`,
              type: `Web mobile application`,
              techs: [
                {
                  resolve: `https://google.com`,
                  name: `NuxtJS`,
                },
                {
                  resolve: `https://google.com`,
                  name: `Firebase`,
                },
                {
                  resolve: `https://google.com`,
                  name: `Vuex`,
                },
              ],
              timing: {
                startedAt: {
                  date: 11,
                  month: 'jan',
                },
                finishedAt: {
                  date: 25,
                  month: 'mar',
                },
              },
            },
            {
              resolve: `/`,
              title: `1to1 MultiServices`,
              type: `Logo`,
              techs: [
                {
                  resolve: `https://google.com`,
                  name: `Photoshop`,
                },
              ],
              timing: {
                startedAt: {
                  date: 23,
                  month: 'fev',
                },
                finishedAt: {
                  date: 23,
                  month: 'may',
                },
              },
            },
            {
              resolve: `/`,
              title: `Onero prototype`,
              type: `Web application`,
              techs: [
                {
                  resolve: `https://google.com`,
                  name: `NuxtJS`,
                },
                {
                  resolve: `https://google.com`,
                  name: `MySQL`,
                },
                {
                  resolve: `https://google.com`,
                  name: `Vuex`,
                },
                {
                  resolve: `https://google.com`,
                  name: `NodeJS`,
                },
              ],
              timing: {
                startedAt: {
                  date: 23,
                  month: 'fev',
                },
                finishedAt: {
                  date: 23,
                  month: 'may',
                },
              },
            },
          ],
        },
        {
          year: 2017,
          entries: [
            {
              resolve: `/`,
              title: `Yokosushi`,
              type: `Web application`,
              techs: [
                {
                  resolve: `https://google.com`,
                  name: `VueJS`,
                },
                {
                  resolve: `https://google.com`,
                  name: `Laravel`,
                },
                {
                  resolve: `https://google.com`,
                  name: `MySQL`,
                },
              ],
              timing: {
                startedAt: {
                  date: 11,
                  month: 'jan',
                },
                finishedAt: {
                  date: 25,
                  month: 'mar',
                },
              },
            },
            {
              resolve: `/`,
              title: `Groupe Carrere`,
              type: `Web integration`,
              techs: [
                {
                  resolve: `https://google.com`,
                  name: `HTML`,
                },
                {
                  resolve: `https://google.com`,
                  name: `CSS`,
                },
                {
                  resolve: `https://google.com`,
                  name: `Javascript`,
                },
              ],
              timing: {
                startedAt: {
                  date: 23,
                  month: 'fev',
                },
                finishedAt: {
                  date: 23,
                  month: 'may',
                },
              },
            },
            {
              resolve: `/`,
              title: `Akces`,
              type: `Web integration`,
              techs: [
                {
                  resolve: `https://google.com`,
                  name: `HTML`,
                },
                {
                  resolve: `https://google.com`,
                  name: `CSS`,
                },
                {
                  resolve: `https://google.com`,
                  name: `Javascript`,
                },
                {
                  resolve: `https://google.com`,
                  name: `NodeJS`,
                },
              ],
              timing: {
                startedAt: {
                  date: 23,
                  month: 'fev',
                },
                finishedAt: {
                  date: 23,
                  month: 'may',
                },
              },
            },
            {
              resolve: `/`,
              title: `Liebherr`,
              type: `Web application`,
              techs: [
                {
                  resolve: `https://google.com`,
                  name: `jquery`,
                },
              ],
              timing: {
                startedAt: {
                  date: 23,
                  month: 'fev',
                },
                finishedAt: {
                  date: 23,
                  month: 'may',
                },
              },
            },
          ],
        },
      ],
    }),

    // mounted
    mounted () {},

    // methods
    methods: {

      // closeLatestActivities
      closeLatestActivities () {
        $('#js--menuContent').removeClass('open-latest-activities')
      },
    },
  }
</script>

<style lang='scss' scoped>
  @import './../assets/styles/components/latestactivities.scss';
</style>
