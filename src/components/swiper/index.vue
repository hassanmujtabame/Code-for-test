<template>
  <swiper
             v-bind="$attrs"
            >
       
            <SwiperSlide v-for="(item,i) in items"  :key="i" >
               <slot :item="item">
               </slot>
                </SwiperSlide>
            
                </swiper>
</template>

<script>
 import { Navigation, Pagination } from 'swiper'

import { SwiperCore, Swiper, SwiperSlide } from 'swiper-vue2'
// Import Swiper styles
import 'swiper/swiper-bundle.css'
SwiperCore.use([Navigation, Pagination])
export default {
 name:'d-swiper',
 props:{
    items:{
        type:Array,
        require:true
    }
 },
 components:{
    Swiper, SwiperSlide
 }
}
</script>

<style>

</style>