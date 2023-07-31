<template>
  <div class=" mt-5 p-3">
            <div class="container advertisements">
              <d-swiper
              v-if="!loading"
              :slides-per-view="slidesperview"
              :space-between="10"
              is-auto
               :pagination="{
      clickable: true,
    }"
              :items="items"
              style="height:320px"
            >
       
            <!-- <template  v-slot:default="{item}" > -->
              <div class="rounded-3">
<img :src="`${publicPath}assets/img/advertisements.png`" class="rounded-3"/>

              </div>
               
              
                <!-- </template> -->
              </d-swiper>
            </div>
          </div>
</template>

<script>
import coursesApI from '@/services/api/academy/courses.js'
export default {
    name:'section-recent-courses',
    components:{
    },
    data:()=>({
        items:[],
        loading:true,
        slidesperview:1
    }),
    methods:{
     async loadList(){
      this.loading =  true;
        try {
          let {data} = await coursesApI.getRecentCourses({paginate:6})
          if(data.success){
            this.items = data.data
            if(this.items.length<=4) this.slidesperview=3
          }
        } catch (error) {
          console.log('error',error)
        }
        this.loading =  false;
      }
    },
    mounted(){
      this.loadList()
    }
}
</script>

<style>
.swiper-pagination-bullet{
  background: white !important;
  margin-bottom: 10px !important;
}
.swiper-pagination-bullet-active{
  background: #FFBC00 !important;
}
.advertisements .swiper-slide{
  width: 100% !important;
  justify-content:unset !important
}
</style>