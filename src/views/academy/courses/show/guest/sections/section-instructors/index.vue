<template>
  <div class="mt-4">
    <div id="course-instructors">
    <h1  class="course-guest-section__title">{{ $t('course-instructors') }}</h1>
    <div class="mt-4 d-flex gap-2" >
      <instructorCard v-if="itemPage.user_info" :item="itemPage.user_info" />
      <instructorCard v-for="(item,i) in itemPage.instructors" :item="item" :key="i" />
    </div>
    </div>
   
  </div>
</template>

<script>

import instructorCard from './card-item.vue'
export default {
 name:'section-instructors',
 props:{
    itemPage:{}
 },
 components:{
  instructorCard
 }
}
</script>

<style>

</style>