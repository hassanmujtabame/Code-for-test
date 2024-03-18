<template>
  <div class="course-show-page__preview">
    <div class="course-show-page__preview-header">
      <h1>{{itemPage.title}}</h1>
        <h6>03 <bdi>يونيو</bdi> | 09:00 ص</h6>
    </div>
    <div class="ratio ratio-16x9">
      <img :src="itemPage.image_path"  
                    class="rounded-3 "/> 
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