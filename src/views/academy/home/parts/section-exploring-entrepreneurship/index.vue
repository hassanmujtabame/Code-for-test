<template>
  <div class="sec-five mt-5 p-3">
            <div class="">
              <div
                class="d-flex justify-content-center align-items-center container"
              >
                <h1> أستكشف مجالات ريادة الاعمال 
                    
                <a style="color: #2C98B3;" href="">
                    العامة
                </a>
                </h1>
        
              </div>
              <d-swiper
              style="overflow-x: hidden"
            :slides-per-view="7"
            is-auto
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
    name:'section-exploring-entrepreneurship',
    components:{
        CardVue
    },
    data:()=>({
        items:[
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
          
        ]
    })
}
</script>

<style>

</style>