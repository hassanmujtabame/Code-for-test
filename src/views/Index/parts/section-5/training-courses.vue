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
          <d-swiper
            :slides-per-view="5"
            :space-between="10"
             
              :items="courses"
            >
              <template v-slot="{item}" >
               <TrainingCourseCard 
               :img="item.img"
               :title="item.title"
               :price="item.price"
               :currency="item.currency"
               />
              </template>        
          </d-swiper>
        </div>
            
          </div>
        </div>
      
</template>

<script>

import TrainingCourseCard from '@/components/cards/training-course.vue'
export default {
  components:{
  TrainingCourseCard
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