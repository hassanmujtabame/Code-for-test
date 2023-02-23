<template>
  <div class="course-exam-content">
    <showExamInstructor v-if="userAcademyRole=='instructor'"  :exam="exam"/>
    <showExamStudent v-else :exam="exam"/>
  </div>
</template>

<script>
import showExamInstructor from './instructor/index'
import showExamStudent from './student-show.vue'
export default {
 name:'exam-show',
 props:{
  exam:{}
 },
 components:{
  showExamInstructor,
  showExamStudent
 },
 watch:{
  exam:{
    deep:true,
    immediate:true,
    handler(){}
  }
 }
}
</script>

<style scoped>
.course-exam-content{
  height:100%;
  width:100%;
  overflow: auto;
}
</style>