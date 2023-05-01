<template>
  <div>meeeting</div>
</template>

<script>
export default {
name:'section-type-meeting',
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