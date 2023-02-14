<template>
  <div class="course-show-page__preview">
    <div class="course-show-page__preview-header">
        <h1>{{itemPage.title}}</h1>
        <h6>03 <bdi>يونيو</bdi> | 09:00 ص</h6>
    </div>
    <div class="course-show-page__preview-content">
      <img v-if="lectureSelected===null" :src="itemPage.image_path"  height="415"
                    class="rounded-3 w-100 "/> 
        <iframe 
        v-else
                    height="415"
                    class="rounded-3 w-100 "
                    src="https://www.youtube.com/embed/dGG9pWXS3ZQ" 
                    title="مقطع تعريفي عن شركة رياديات" 
                    frameborder="0" 
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                    allowfullscreen></iframe> 
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
  },
  data:()=>{
    return {
      lectureSelected:null,
    }
  }
}
</script>

<style>

</style>