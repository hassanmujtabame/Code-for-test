<template>
  <div class="course-show-page__body">
    <div class="row">
      
       <!--display-->
       <div class="col-12 col-md-8">
        <previewLecture />
       </div>
       <!--lectures-->
       <div class="col-12 col-md-4">
        <LecturesList />
       </div>
    </div>
  </div>
</template>

<script>
import LecturesList from './sidebar-lectures.vue'
import previewLecture from './display-lecture.vue'
export default {
 name:'section-header',
 components:{
  LecturesList,
  previewLecture
 }
}
</script>

<style>

</style>