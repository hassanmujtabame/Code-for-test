<template>
  <div>model</div>
</template>

<script>
export default {
name:'section-type-models',
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