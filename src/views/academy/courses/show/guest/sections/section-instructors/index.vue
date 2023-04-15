<template>
  <div class="mt-4">
    <div id="course-instructors">
    <h1  class="course-guest-section__title">{{ $t('course-instructors') }}</h1>
    <div class="mt-4" >
      <instructorCard v-if="itemPage.user_info" :item="itemPage.user_info" />
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