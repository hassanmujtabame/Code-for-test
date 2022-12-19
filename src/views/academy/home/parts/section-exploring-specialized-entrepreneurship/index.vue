<template>
  <div class="sec-five mt-5 p-3">
            <div class="">
              <div
                class="d-flex justify-content-center align-items-center container"
              >
                <h1> أستكشف مجالات ريادة الاعمال 
                    
                <a style="color: #F2631C;" href="">متخصصة </a>
                </h1>
        
              </div>
              <d-swiper
              style="overflow-x: hidden"
            :slides-per-view="7"
            :space-between="10"
              :items="items"
            >
       
            <template  v-slot:default="{item}" >
                <CardVue :title="item.title" :img="item.img"/>
                </template>
              </d-swiper>
            </div>
          </div>
</template>

<script>
import CardVue from './card.vue'
export default {
    name:'section-exploring-specialized-entrepreneurship',
    components:{
        CardVue
    },
    data:()=>({
        items:[
            {title:'المجوهرات',img:'/assets/svg/jewelry.svg'},
            {title:'الازيــــــاء',img:'/assets/svg/fashion.svg'},
            {title:'التقنية',img:'/assets/svg/techinic.svg'},
            {title:'الزهــــور والهدايا',img:'/assets/svg/flowers-gifts.svg'},
            {title:'التجـــــــارة الالكترونية',img:'/assets/svg/ecommerce.svg'},
            {title:'السباحة',img:'/assets/svg/swimming.svg'},
            {title:'التجميل',img:'/assets/svg/beauty.svg'},
            {title:'التجميل',img:'/assets/svg/beauty.svg'},
            {title:'التجميل',img:'/assets/svg/beauty.svg'},
          
        ]
    })
}
</script>

<style>

</style>