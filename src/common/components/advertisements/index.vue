<template>
          <div class="container">
              <div  :id="carouselId" class="ads-carousel owl-carousel owl-theme">
              <ItemSlide
                v-for="(item,i) in sliders"
                :key="i"
                :item="item"
              />
              </div>
          </div>
  </template>
  
  <script>
  import commonAPI from '@/services/api/common'
  import ItemSlide from './card-item'
  export default {
   name:'section-ads',
   props:{
    department:{
        type:String,
    }
   },
   components:{
      ItemSlide
   },
   data:(vm)=>{
      return {
      carouselId:`carousel-ads-${vm.generateRandomString(8)}`,
      loading:true,
      items:[]
   }},
   computed:{
    sliders(){
        return this.items.length>0?this.items:[
            {type:"html",content:'<div class="w-100 h-100" style="background:green"></div>'}
        ]
    }
   },
   methods:{
      async initializing(){
          this.loading = true;
          try {
              let {data} =  await commonAPI.getAds({department_name:this.department})
              console.log(data)
              if(data.success){
                  this.items =data.data
              }
          } catch (error) {
               console.log('error',error)
          }
          this.loading = false;
      }
   },
   async mounted(){
      await this.initializing()
      window.$(`#${this.carouselId}`).owlCarousel({
      loop:true,
      margin:10,
      nav:true,
      rtl:true,
      responsive:{
          0:{
              items:1
          },
          600:{
              items:1
          },
          1000:{
              items:1
          }
      }
  })
   }
  }
  </script>
  
  <style>
  
  </style>