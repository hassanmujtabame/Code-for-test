<template>
  <div class="d-star-rate">
        <startItem v-for="id in starsList" :key="id" 
        :itemId="id" :isSelected="value_>=id"
       v-model="value_" 
        :size="size"
        />
      </div>
</template>

<script>
import startItem from './star-item.vue'
export default {
 name:'d-star-rate',
 components:{
    startItem
 },
 props:{
    value:{
        type:Number,
        default:0
    },
    size:{
        type:[String,Number],
        default:32
    },
    stars:{
        type:[String,Number],
        default:5
    }
 },
 computed:{
        starsList(){
            let  list = []
            for(let i=this.stars;i>0;i--){
                list.push(i)
            }
            return list
        }
 },
 data:(vm)=>{
    return {
        value_:vm.value
    }
 }
}
</script>

<style>

</style>