<template>
  <svg width="34" height="34" viewBox="0 0 34 34" fill="none" xmlns="http://www.w3.org/2000/svg">
<g clip-path="url(#clip0_1129_64537)">
<circle cx="17" cy="17" r="17" :fill="bgColor"/>
<path :fill="playColor" d="M121.114,0H25.558c-8.017,0-14.517,6.5-14.517,14.515v303.114c0,8.017,6.5,14.517,14.517,14.517h95.556 c8.017,0,14.517-6.5,14.517-14.517V14.515C135.631,6.499,129.131,0,121.114,0z M106.6,303.113H40.072V29.031H106.6V303.113z"/> 
<path :fill="playColor" d="M306.586,0h-95.541c-8.018,0-14.518,6.5-14.518,14.515v303.114c0,8.017,6.5,14.517,14.518,14.517h95.541 c8.016,0,14.518-6.5,14.518-14.517V14.515C321.102,6.499,314.602,0,306.586,0z M292.073,303.113h-66.514V29.031h66.514V303.113z"/> 

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