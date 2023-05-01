<template>
  <div>consultation</div>
</template>

<script>
export default {
name:'section-type-consultation',
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