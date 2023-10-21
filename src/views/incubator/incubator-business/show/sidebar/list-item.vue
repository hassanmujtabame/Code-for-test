<template>
   <d-stepper-head vertical>
          <d-stepper-head-item v-for="(item,i) in items" :key="i" status="done">
            {{ item.title }}
          </d-stepper-head-item>
</d-stepper-head>
</template>

<script>
import incubatorAPI from '@/services/api/incubator'
export default {
props:{
    itemId:{}
},
data:()=>({

  items:[]
}),
methods:{
  async initializing(){
    try{
      let { data } = await incubatorAPI.getStageItem(this.itemId);
      if(data.success){
        this.items = data.data
      }
    }catch(error){
      //
    }
  }
},
mounted(){
this.initializing()
}
}
</script>

<style>

</style>