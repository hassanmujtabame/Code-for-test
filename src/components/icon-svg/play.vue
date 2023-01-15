<template>
  <svg width="34" height="34" viewBox="0 0 34 34" fill="none" xmlns="http://www.w3.org/2000/svg">
<g clip-path="url(#clip0_1129_64537)">
<circle cx="17" cy="17" r="17" :fill="bgColor"/>
<path d="M25 17L13 24V10L25 17Z" :fill="playColor"/>
</g>
<defs>
<clipPath id="clip0_1129_64537">
<rect width="34" height="34" :fill="playColor"/>
</clipPath>
</defs>
</svg>
</template>

<script>
export default {
 name:'play-icon',
 props:{
  size:{
    type:Number,
    default:34
  },  
  bgColor:{
    type:String,
    default:'#FFFFFF'
  },
  playColor:{
    type:String,
    default:'var(--m-color)'
  }
 }
}
</script>

<style>

</style>