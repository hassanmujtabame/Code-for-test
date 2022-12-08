<template>
  <div class="sec-five mt-5 p-3">
            <div class="">
              <div
                class="d-flex justify-content-between align-items-center container"
              >
                <h1>أعضاء مميزات    </h1>
                <div>
                  <button class="more">المزيد</button>
                </div>
              </div>
              
              <swiper
              style="overflow-x: hidden"
            :slides-per-view="5"
            :space-between="10"
              :loop="true"
              :pagination="true"
              :navigation="true"
            >
         <SwiperSlide v-for="(member,i) in members"  :key="i" >
                <CardMember :name="member.name"
                :img="member.img"
                :description="member.description"
                />
         </SwiperSlide>

              </swiper>
            </div>
          </div>
</template>

<script>
 import { Navigation, Pagination } from 'swiper'

import { SwiperCore, Swiper, SwiperSlide } from 'swiper-vue2'
import CardMember from './card.vue'
// Import Swiper styles
import 'swiper/swiper-bundle.css'
SwiperCore.use([Navigation, Pagination])
export default {
 name:'section-5',
 components:{
    Swiper, SwiperSlide,
    CardMember
  },
  data:()=>({
    members:[
        {name:'العنقود محمد',img:'/assets/img/Rectangle 1775qa.png',description:'التصوير'},
        {name:'العنقود محمد',img:'/assets/img/Rectangle 1775qa.png',description:'التصوير'},
        {name:'العنقود محمد',img:'/assets/img/Rectangle 1775qa.png',description:'التصوير'},
        {name:'العنقود محمد',img:'/assets/img/Rectangle 1775qa.png',description:'التصوير'},
        {name:'العنقود محمد',img:'/assets/img/Rectangle 1775qa.png',description:'التصوير'},
        {name:'العنقود محمد',img:'/assets/img/Rectangle 1775qa.png',description:'التصوير'},
        {name:'العنقود محمد',img:'/assets/img/Rectangle 1775qa.png',description:'التصوير'},
        {name:'العنقود محمد',img:'/assets/img/Rectangle 1775qa.png',description:'التصوير'},

    ]
  })
}
</script>

<style>

</style>