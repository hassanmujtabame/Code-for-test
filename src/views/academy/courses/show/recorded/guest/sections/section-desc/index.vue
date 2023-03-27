<template>
  <div class="mt-3 px-5">
    <div id="course-desc">
    <h1  class="course-guest-section__title">{{ $t('description') }}</h1>
    <div  v-html="itemPage.desc">
    </div>
    </div>
    <div id="course-teaching">
    <h1  class="course-guest-section__title">{{ $t('what-will-you-learn') }}</h1>
    <div  v-html="itemPage.desc">
    </div>
    </div>
  </div>
</template>

<script>
export default {
 name:'section-desc',
 props:{
    itemPage:{}
 }
}
</script>

<style>

</style>