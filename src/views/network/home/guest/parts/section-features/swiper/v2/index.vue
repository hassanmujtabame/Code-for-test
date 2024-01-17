<template>
   <div v-if="!loaded"></div>
  <swiper
  v-else
      :scrollbar="scrollbar"
      :navigation="navigation"
      :pagination="pagination"
      :watch-slides-visibility="watchSlidesVisibility"
      :watch-slides-progress="watchSlidesProgress"
      :slides-per-view="slidesPerView"
      :space-between="spaceBetween"
             v-bind="$attrs"
             v-on="$listeners"
            >
               <slot></slot>

                </swiper>
</template>

<script>
import { Navigation, Pagination ,  Thumbs } from 'swiper'
import {  SwiperCore,Swiper  } from 'swiper-vue2'
// Import Swiper styles
import 'swiper/swiper-bundle.css'
SwiperCore.use([Navigation, Pagination,Thumbs])
export default {
 name:'d-swiper',
 props:{
   pagination:{
      type:[Boolean,Object],
      default:false,
   },
   watchSlidesVisibility:{
      type:[Boolean,Object],
      default:false,
   },
   watchSlidesProgress:{
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
    Swiper
 },
 data:()=>{
   return {
   loaded:false,
   modules: [],
 }
},
 mounted(){
   /*if(this.pagination)
   this.modules.push(Pagination)
   if(this.navigation)
   this.modules.push(Navigation)
   if(Object.hasOwnProperty.call(this.$attrs,'thumbs')){
      console.log('has thumb')
      this.modules.push(Thumbs)
   }*/
   this.loaded = true;
 }
}
</script>

<style scoped>
.swiper-container-thumbs .swiper-slide.swiper-slide-visible{
   opacity: 1;
}

</style>