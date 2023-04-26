<template>
<div class=" mt-5 p-3">
            <div class="">
              <div
                class="d-flex justify-content-center align-items-center container"
              >
                <h1>
                    تعرفي على مجالات الحاضنة           
                </h1>
        
              </div>
              <DSwiper
              v-if="!loading"
            :slides-per-view="5"
            is-auto
            :space-between="10"
              :loop="true"
              :navigation="true"
              :items="items"
            >
       
            <template  v-slot:default="{item}" >
                <CardVue :title="item.name" :img="item.image_path"
                :url="getRouteLocale('incubator-program-incubator',{id:item.id})"
                
                />
                </template>
                </DSwiper>
                
            </div>
          </div>
</template>

<script>
import DSwiper from '@/components/swiper/index.vue'
import CardVue from '@/components/cards/incubator-dept-circle.vue'


export default {
    name:'section-read-dept',
    components:{
        DSwiper,
        CardVue
    },
    data:()=>({
      loading:false,
        items:[
        {name:'المجوهرات',image_path:'/assets/svg/jewelry.svg'},
            {name:'الازيــــــاء',image_path:'/assets/svg/fashion.svg'},
            {name:'التقنية',image_path:'/assets/svg/techinic.svg'},
            {name:'الزهــــور والهدايا',image_path:'/assets/svg/flowers-gifts.svg'},
        {name:'ريــــــــادة الاعمال',image_path:'/assets/svg/business.svg'},
            {name:'المحاسبة والمالية',image_path:'/assets/svg/account.svg'},
            {name:'التسويق',image_path:'/assets/svg/shopping.svg'},
            {name:'القانون',image_path:'/assets/svg/law.svg'},
            {name:'الاستراتيجية والقيادة',image_path:'/assets/svg/stratigy-leadership.svg'},
            {name:'الاستراتيجية والقيادة',image_path:'/assets/svg/stratigy-leadership.svg'},
            {name:'الاستراتيجية والقيادة',image_path:'/assets/svg/stratigy-leadership.svg'},
            {name:'الاستراتيجية والقيادة',image_path:'/assets/svg/stratigy-leadership.svg'},
            {name:'الاستراتيجية والقيادة',image_path:'/assets/svg/stratigy-leadership.svg'},
            {name:'الاستراتيجية والقيادة',image_path:'/assets/svg/stratigy-leadership.svg'},

        ]})
}
</script>

<style>

</style>