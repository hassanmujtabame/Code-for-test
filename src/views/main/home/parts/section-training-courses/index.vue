<template>
    <div class="sec-five mt-5 p-3">
        <div>
          <div
            class="d-flex justify-content-between align-items-center container"
          >
            <h1>{{ $t('home-section-courses-title') }}</h1>
            <div>
              <router-link :to="getRouteLocale('academy-courses')" class="more">{{$t('more')}}</router-link>
            </div>
          </div>
          <p class="container">
            {{ $t('home-section-courses-text') }}
          </p>
          <div class="container" style="overflow:hidden">
          <d-swiper
          v-if="!loading"
            :slides-per-view="5"
            is-auto
            :space-between="10"
             
              :items="items"
            >
              <template v-slot="{item}" >
                <router-link class="router-link" :to="getRouteLocale('academy-course-show',{id:item.id})">
               <TrainingCourseCard 
               :img="item.image_path"
               :title="item.title"
               :price="item.price"
               :currency="item.currency"
               />
              </router-link>
              </template>        
          </d-swiper>
        </div>
            
          </div>
        </div>
      
</template>

<script>
import commmonAPI from '@/services/api/common.js'
import TrainingCourseCard from '@/components/cards/training-course.vue'
export default {
  name:'training-courses',
  components:{
  TrainingCourseCard
  },
 data:(vm)=>{
  return{
    courses:[
    {image_path:`${vm.publicPath}assets/img/Rectangle 1775.png`,title:'تصميم واجهات المواقع والتطبيقات',price:2000,currency:'ريال'},
    {image_path:`${vm.publicPath}assets/img/Rectangle 1775.png`,title:'تصميم واجهات المواقع والتطبيقات',price:1000,currency:'ريال'},
    {image_path:`${vm.publicPath}assets/img/Rectangle 1775.png`,title:'تصميم واجهات المواقع والتطبيقات',price:1000,currency:'ريال'},
    {image_path:`${vm.publicPath}assets/img/Rectangle 1775.png`,title:'تصميم واجهات المواقع والتطبيقات',price:1000,currency:'ريال'},
    {image_path:`${vm.publicPath}assets/img/Rectangle 1775.png`,title:'تصميم واجهات المواقع والتطبيقات',price:1000,currency:'ريال'},
    {image_path:`${vm.publicPath}assets/img/Rectangle 1775.png`,title:'تصميم واجهات المواقع والتطبيقات',price:1000,currency:'ريال'},
   {image_path:`${vm.publicPath}assets/img/Rectangle 1775.png`,title:'تصميم واجهات المواقع والتطبيقات',price:1000,currency:'ريال'},
    ],
    loading:true,
  total:0,
  itemExample:{
    id: 6,
            title: "تصميم الازياء",
            image_path: "https://test1.riadiat.sa/storage/117/courses-1768.png",
            description: "تصميم الازياء",
            "price": 1500
          },
    items:[]
 }
},
 methods:{
    async initlizing(){
      this.loading = true;
        try {
          let { data } =  await commmonAPI.getCoursesHome();
          if(data.success){
            this.items = data.data
          }
        } catch (error) {
          console.log('error',error)
        }
      this.loading = false;
    }
  },
  mounted(){
    this.initlizing()
 }
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