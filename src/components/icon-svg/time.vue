<template>
  <svg  fill="none" stroke-linecap="round" 
              stroke-linejoin="round" 
              stroke-width="2" 
              :width="size"
              :height="size"
              viewBox="0 0 24 24" 
              stroke="currentColor" 
              >
                <path  d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path>
              </svg>
</template>

<script>
export default {
 name:"time-icon",
  props:{
    size:{
      type:[String,Number],
      default:24
    },
    color:{
      type:String,
      default:'#979797'
    }
  }
}
</script>

<style>

</style>