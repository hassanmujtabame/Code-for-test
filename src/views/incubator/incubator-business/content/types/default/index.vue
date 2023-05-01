<template>
 <div>
    <h1 class="incubator-business-content__title">{{ phase.title }}</h1>
    <p class="incubator-business-content__desc">{{ phase.description }}</p>
  </div>
</template>

<script>
export default {
name:'section-type-default',
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