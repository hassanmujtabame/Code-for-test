<template>
    <div>
      <div class="box">
          <!--mySwiper2-->
                              <d-swiper 
                              v-if="controlledSwiper"
                              :controller="{ control: controlledSwiper }"
                              :items="items" 
                              :spaceBetween="10"
                              :slidesPerView="1"
                              :loop="true"
                              :navigation='{
                              nextEl: ".swiper-button-next",
                              prevEl: ".swiper-button-prev",}'
                              style="--swiper-navigation-color: #fff; --swiper-pagination-color: #fff"
                                  >
                                  <template v-slot="{item}">
                                          <img style="height:300px"  :src="item.image_path" />
                                      </template>
                              </d-swiper>
  
                          </div>
                          <!--mySwiper service-provider-->
                          <d-swiper
  
                          class="mySwiper service-provider" 
                          :items="items"
                          :loop="true"
                          :spaceBetween=10
                              :slidesPerView=4
                            :freeMode="true"
                              @swiper="setThumbsSwiper"
                              watch-slides-progress
                          >
                              <template v-slot="{item}">
                                          <img style="height:115px" :src="item.image_path" />
                                      </template>
                              </d-swiper>
                     
    </div>
  </template>
  
  <script>
  let itemsTest=[
          {id:1,image_path:'/assets/img/serv-1.png'},
          {id:2,image_path:'/assets/img/serv-2.png'},
          {id:3,image_path:'/assets/img/serv-3.png'},
      ]
  export default {
   name:'section-gallary',
   props:{
      item:{
          type:[Object,Array],
          require:true
      }
   },
   data:(vm)=>({
      thumbsSwiper: null,
      controlledSwiper:null,
      //items:itemsTest
      items:vm.item.medias??itemsTest
   }),
      methods: {
       
        setThumbsSwiper(swiper) {
          console.log('swiper')
          this.controlledSwiper = swiper;
         //this.thumbsSwiper = swiper;
        },
      },
      mounted(){
      }
  }
  </script>
  
  <style scoped>
  @media (max-width: 496px) {
      .img-cons img {
          width: 100% !important;
          left: 0 !important;
      }
  
      .img-cons {
          background-color: white;
          border-radius: 50%;
          width: 100%;
      }
  }
  .box{
      height: 300px;
  }
  
  </style>