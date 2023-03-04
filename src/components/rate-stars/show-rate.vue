<template>
  <span v-bind="$attrs">
    <i v-for="(it,i) in starsList" :key="i" @click="click_(it)"  class="fa-solid fa-star" :class="{active:it<=value_,clickable:!readonly}"></i>                          
</span>
</template>

<script>
export default {
 name:'index-start-font',
  props:{
    value:{
        type:Number,
        default:0
    },
    readonly:{
        type:Boolean,
        default:false
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
 watch:{
    value(){}
 },
 data:(vm)=>{
    return {
        value_:vm.value
    }
 },
 methods:{
    click_(v){
        if(this.readonly) return;
        this.value_ = v
        this.$emit('input',this.value_)
    }
 }
}
</script>

<style>

</style>