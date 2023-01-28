<template>
  <div class="mt-5 shadow rounded-2">
    <h2 class="p-3">
      وظائف مقدمة لك
    </h2>
    <div v-for="(item,i) in items" :key="i">
      <CardInfo :item-id="item.id" />
      <hr/>
    </div>
   
  </div>
</template>

<script>
import CardInfo from './card.vue'
export default {
  name: 'section-jobs-for-you',
  components:{
    CardInfo
  },
  data:()=>{
    return {
      items:[
        {},
        {},
      ]
    }
  }
}
</script>

<style>

</style>