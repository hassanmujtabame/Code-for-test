<template>
  <div>
    <h1 class="incubator-business-content__title">{{ phase.title }}</h1>
    <p class="incubator-business-content__desc">{{ phase.description }}</p>
    <button :disabled="!phase.enabled" class="btn btn-custmer">ملء النموذج</button>
  </div>
</template>

<script>
export default {
name:'section-type-models',
props:{
  phase:{},
  itemPage:{}
},
data:()=>({
  description:'مطلوب منك ملء النموذج التالي في مجال فكرتك، سيتم مراجعة النموذج من قبل المرشدين الخاصين بك. مطلوب منك ملء النموذج التالي في مجال فكرتك، سيتم مراجعة النموذج من قبل المرشدين الخاصين بك.'
}),
mounted(){
  console.mylog('mounted type',this.phase,this.itemPage)
}
}
</script>

<style scoped>
.btn-custmer{
  color: #2CB7B3;
  border-color: #2CB7B3;
  background:white;
}
</style>