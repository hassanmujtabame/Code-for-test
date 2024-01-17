<template>
  <SwiperSlide  >
    <slot ></slot>
  </SwiperSlide>
</template>

<script>
import {   SwiperSlide  } from 'swiper-vue2'
export default {
    name:'swiper-slide',
 components:{
    SwiperSlide
 },
methods:{
   test(t,b){
      //console.log('tesddt',t,b)
      /**
       *  updateClasses(swiper,el,classNames)
       */
   }
},
mounted(){
   //console.log('swiper-slider',this)
 }
}
</script>

<style>

</style>