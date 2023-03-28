<template>
  <div class="mt-4">
    <div id="course-teaching">
    <h1  class="course-guest-section__title">{{ $t('what-will-you-learn') }}</h1>
    <div  v-html="itemPage.desc">
    </div>
    </div>
  </div>
</template>

<script>
export default {
 name:'section-teaching',
 props:{
    itemPage:{}
 }
}
</script>

<style>

</style>