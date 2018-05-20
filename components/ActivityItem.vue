<template>
  <li 
    v-if="item" 
    class="l-activity-item">
    <div class="header">
      <!-- Headings -->
      <div class="headings">
        <!-- Activity title -->
        <h5 class="title">{{ item.title }}</h5>

        <!-- Activity type -->
        <h6 class="type">{{ item.type }}</h6>
      </div>
      
      <!-- Activity timeline -->
      <div class="timing">
        <div class="timing-item">
          <span class="timing-item-date">{{ item.timing.startedAt.date }}</span>
          <span class="timing-item-month">{{ item.timing.startedAt.month }}</span>
        </div>
        <div class="timing-item">
          <span class="timing-item-date">{{ item.timing.finishedAt.date }}</span>
          <span class="timing-item-month">{{ item.timing.finishedAt.month }}</span>
        </div>
      </div>
    </div>

    <!-- Activity techs -->
    <ul 
      v-if="item.techs" 
      class="techs">
      <li 
        v-for="(_, k) in item.techs" 
        class="tech-item">
        <a :href="_.resolve" :title="_.name" target="_blank">{{ _.name }}</a>
      </li>
    </ul>
  </li>
</template>

<script>
  export default {
    name: 'ActivityItem',

    // Required components
    components: {},

    // data
    data: () => ({}),

    // Props
    props: {

      // Single item
      item: { type: Object, default: () => {}, required: true },
    },

    // methods
    methods: {},
  }
</script>

<style lang='scss' scoped>
  @import './../assets/styles/components/activityitem.scss';
</style>
