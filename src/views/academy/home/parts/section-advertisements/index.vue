<template>
  <div class=" mt-5 p-3">
            <div class="container advertisements">
              <d-swiper
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
<!-- <img :src="`${publicPath}assets/img/advertisements.png`" class="rounded-3"/> -->
            <img :src="item.image" >

              </div>
               
              
                <!-- </template> -->
              </d-swiper>
            </div>
          </div>
</template>

<script>
  import adsAPI from '@/services/api/ads'

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

     async getBanners(){
          try {
              let {data} =  await adsAPI.getAll({position:'academy'})
              console.log(data)
              if(data.success){
                  this.items =data.data
                  console.log('this.items' ,this.items);
              }
          } catch (error) {
               console.log('error',error)
          }
      }
    },
    mounted(){
      this.getBanners()
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