<template>
  <div class="mt-3">
    <div id="course-desc">
    <h1  class="course-guest-section__title">{{ $t('attachments') }}</h1>
    <div class="mt-2">
      <AttachmentsCourse hideHeader :itemPage="itemPage" />
    </div>
    </div>
  </div>
</template>

<script>
 import AttachmentsCourse from '../../../common/attachments-course'
export default {
 name:'section-desc',
 props:{
    itemPage:{}
 },
 components:{
  AttachmentsCourse
 }
}
</script>

<style>

</style>