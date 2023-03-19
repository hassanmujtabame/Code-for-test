<template>
  <svg :width="size" :height="size" 
  @click="click_"
  viewBox="0 0 70 66" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M35 0L46.6381 19.9815L69.238 24.8754L53.8309 42.1185L56.1603 65.1246L35 55.8L13.8397 65.1246L16.1691 42.1185L0.761966 24.8754L23.3619 19.9815L35 0Z" 
:fill="isSelected?selectedColor:unselectedColor"
/>
</svg>
</template>

<script>
export default {
 name:'rate-item',
 props:{
    itemId:{
        type:[String,Number],
        require:true,
    },
    nullable:{
        type:Boolean,
        default:false
    },
    size:{
        type:[String,Number],
        default:24,
    },
    isSelected:{
        type:Boolean,
        default:false,
    },
    selectedColor:{
        type:String,
        default:'orange'
    },
    unselectedColor:{
        type:String,
        default:'#CDD7D8'
    }
 },
 data:(vm)=>{
    return {
        selected_:vm.isSelected
    }
 },
 watch:{
    isSelected(){}
 },
 methods:{
    click_(){
        this.$emit('input',this.itemId)
    }
 }
}
</script>

<style scoped>
svg{
    cursor: pointer;
}

</style>