<template>
  <div class="course-show-page__preview">
    <div class="course-show-page__preview-header">
      <h1>{{itemPage.title}}</h1>
        <h6>03 <bdi>يونيو</bdi> | 09:00 ص</h6>
    </div>
    <div class="course-show-page__preview-content">
      <img :src="itemPage.image_path"  height="415"
                    class="rounded-3 w-100 "/> 
    </div>
  </div>
</template>

<script>
export default {
  props:{
    itemPage:{},
    isOwner:{
      type:Boolean,
      default:false,
    }
  }
}
</script>

<style>

</style>