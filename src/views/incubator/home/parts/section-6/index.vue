<template>
   <div class="sec-five mt-5 p-3 bg-transparent">
            <div class="">
              <div
                class="d-flex justify-content-center align-items-center container"
              >
                <h1 class="home-section-title">
                    تعرفي على مجالات الحاضنة           
                </h1>
        
              </div>
              <DSwiper
            :slides-per-view="7"
            :space-between="10"
              :loop="true"
              :pagination="true"
              :navigation="true"
              :items="items"
            >
       
            <template  v-slot:default="{item}" >
                <CardVue :title="item.title" :img="item.img"/>
                </template>
                </DSwiper>
                
            </div>
          </div>
</template>

<script>
import DSwiper from '@/components/swiper/index.vue'
import CardVue from './card.vue'

export default {
    name:'section-6',
    components:{
        DSwiper,
        CardVue
    },
    data:()=>({
        items:[
        {title:'المجوهرات',img:'/assets/svg/jewelry.svg'},
            {title:'الازيــــــاء',img:'/assets/svg/fashion.svg'},
            {title:'التقنية',img:'/assets/svg/techinic.svg'},
            {title:'الزهــــور والهدايا',img:'/assets/svg/flowers-gifts.svg'},
        {title:'ريــــــــادة الاعمال',img:'/assets/svg/business.svg'},
            {title:'المحاسبة والمالية',img:'/assets/svg/account.svg'},
            {title:'التسويق',img:'/assets/svg/shopping.svg'},
            {title:'القانون',img:'/assets/svg/law.svg'},
            {title:'الاستراتيجية والقيادة',img:'/assets/svg/stratigy-leadership.svg'},
            {title:'الاستراتيجية والقيادة',img:'/assets/svg/stratigy-leadership.svg'},
            {title:'الاستراتيجية والقيادة',img:'/assets/svg/stratigy-leadership.svg'},
            {title:'الاستراتيجية والقيادة',img:'/assets/svg/stratigy-leadership.svg'},
            {title:'الاستراتيجية والقيادة',img:'/assets/svg/stratigy-leadership.svg'},
            {title:'الاستراتيجية والقيادة',img:'/assets/svg/stratigy-leadership.svg'},

        ]})
}
</script>

<style>

</style>