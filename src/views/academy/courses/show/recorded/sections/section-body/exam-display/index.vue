<template>
  <div class="course-exam-content">
    <showExamInstructor  :exam="exam"/>
  </div>
</template>

<script>
import showExamInstructor from './instructor/index'
export default {
 name:'exam-show',
 props:{
  exam:{}
 },
 components:{
  showExamInstructor
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