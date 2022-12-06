<template>
    <div class="sec-five mt-5 p-3">
        <div>
          <div
            class="d-flex justify-content-between align-items-center container"
          >
            <h1>نقدم دورتنا بكل شغف</h1>
            <div>
              <button class="more">المزيد</button>
            </div>
          </div>
          <p class="container">
            تقدم رياديات دورات تعليمية وتثقفية على اعلى مستوى
          </p>
          <div class="container" style="overflow:hidden">
          <swiper
    :slides-per-view="5"
    :space-between="10"
      :loop="true"
      :pagination="true"
      :navigation="true"
  >
              <SwiperSlide v-for="(course,i) in courses"  :key="i" >
                <div class="rounded-5">
                  <div class="img-courses">
                    <img
                      :src="course.img"
                      alt=""
                      class="img-fluid"
                    />
                  </div>
                  <div class="bg-white p-3">
                    <div>
                      <p>{{course.title}}</p>
                    </div>
                    <div class="text-end mx-1">
                      <p class="m-c">{{course.price}} {{course.currency}}</p>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
             

           
          </swiper>
        </div>
            <div class="swiper-button-next"></div>
            <div class="swiper-button-prev"></div>
          </div>
        </div>
      
</template>

<script>
 import { Navigation, Pagination } from 'swiper'

import { SwiperCore, Swiper, SwiperSlide } from 'swiper-vue2'

// Import Swiper styles
import 'swiper/swiper-bundle.css'

SwiperCore.use([Navigation, Pagination])
export default {
  components:{
    Swiper, SwiperSlide
  },
 data:()=>({
    courses:[
    {img:'/assets/img/Rectangle 1775.png',title:'تصميم واجهات المواقع والتطبيقات',price:2000,currency:'ريال'},
    {img:'/assets/img/Rectangle 1775.png',title:'تصميم واجهات المواقع والتطبيقات',price:1000,currency:'ريال'},
    {img:'/assets/img/Rectangle 1775.png',title:'تصميم واجهات المواقع والتطبيقات',price:1000,currency:'ريال'},
    {img:'/assets/img/Rectangle 1775.png',title:'تصميم واجهات المواقع والتطبيقات',price:1000,currency:'ريال'},
    {img:'/assets/img/Rectangle 1775.png',title:'تصميم واجهات المواقع والتطبيقات',price:1000,currency:'ريال'},
    {img:'/assets/img/Rectangle 1775.png',title:'تصميم واجهات المواقع والتطبيقات',price:1000,currency:'ريال'},
   {img:'/assets/img/Rectangle 1775.png',title:'تصميم واجهات المواقع والتطبيقات',price:1000,currency:'ريال'},
    ]
 })
}
</script>

<style  scoped>
.img-fluid {
  max-width: 100%;
  height: auto;
}
.w-100 {
  width: 100%;
}
.ml-auto, .mx-auto {
  margin-left: auto;
}
.mr-auto, .mx-auto {
  margin-right: auto;
}
</style>