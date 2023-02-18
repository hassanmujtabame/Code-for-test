<template>
  <div>
    <showExamInstructor />
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

<style>

</style>