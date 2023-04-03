<template>
  <div class="mt-3">
    <div id="course-notes">
    <h1  class="course-guest-section__title">{{ $t('attendance-notes') }}</h1>
    <div  v-html="itemPage.notes">
    </div>
    </div>
  </div>
</template>

<script>
export default {
 name:'section-notes',
 props:{
    itemPage:{}
 }
}
</script>

<style>

</style>