<template>
   <div class="position-relative">
  <swiper
      :scrollbar="scrollbar"
      :navigation="navigation"
      :pagination="pagination"
      :slides-per-view="isAuto?'auto':slidesPerView"
      :space-between="spaceBetween"
      :breakpoints="breakpoints"
             v-bind="$attrs"
             v-on="$listeners"
            >
            <SwiperSlide v-for="(item,i) in items"  :key="i"
            >
             
               <slot :item="item" >
               </slot>

                </SwiperSlide>
            
                </swiper>
               </div>
</template>

<script>
 import { Navigation, Pagination,Thumbs,Controller  } from 'swiper'

import { SwiperCore, Swiper,SwiperSlide } from 'swiper-vue2'
// Import Swiper styles
import 'swiper/swiper-bundle.css'
SwiperCore.use([Navigation, Pagination,Thumbs,Controller ])

export default {
 name:'d-swiper',
 props:{
   pagination:{
      type:[Boolean,Object],
      default:false,
   },
   navigation:{
      type:[Boolean,Object],
      default:true,
   },
   scrollbar:{
      type:[Boolean,Object],
      default:false,
   },
   isAuto:{
      type:[Boolean],
      default:false,
   },
   slidesPerView:{
      type:[Number,String],
      default:3,
   },
   spaceBetween:{
      type:[Number],
      default:3,
   },
    items:{
        type:Array,
        require:true
    }
 },
 components:{
    Swiper, SwiperSlide
 },
 data:(vm)=>{
   let responsive = {
      640: {
        slidesPerView: 1,
        
      },
      768: {
        slidesPerView: vm.slidesPerView-1,
      },
      1024: {
        slidesPerView: vm.slidesPerView,
      },
    }
   return {
      breakpoints:vm.isAuto?responsive:{} ,
   }
 }
}
</script>
