<template>
  <div @mouseover="hover = true"
  
    @mouseleave="hover = false">
    <slot :hover="hover"  v-bind="$attrs"></slot>
    </div>
</template>

<script>
export default {
 name:'d-hover',
 props:{
  tooltip:{
    type:Boolean,
    default:false,
  }
 },
 data:()=>({
    hover:false,
 }),
 mounted(){
  if(this.tooltip)
  window.$('[data-toggle="tooltip"]').tooltip()
 }

}
</script>

<style>

</style>