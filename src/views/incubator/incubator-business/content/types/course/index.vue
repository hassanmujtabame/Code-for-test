<template>
  <div>course</div>
</template>

<script>
export default {
name:'section-type-course',
props:{
  phase:{},
  itemPage:{}
},
mounted(){
  console.mylog('mounted type',this.phase,this.itemPage)
}
}
</script>

<style>

</style>