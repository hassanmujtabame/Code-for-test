<template>
  <div class="sec-five  mt-5 p-3">
            <div class="">
              <div
                class="d-flex justify-content-center align-items-center container"
              >
                <h1 class="home-section-title text-center"> مجالات أخرى  في الأكاديمية</h1>
        
              </div>
              <d-swiper
            :slides-per-view="7"
            is-auto
            :space-between="10"
              :items="items"
              class="academy-departments"
            >
       
            <template  v-slot:default="{item}" >
              <router-link class="router-link" :to="getRouteLocale('academy-department-show',{id:item.id})">
                <CardVue :title="item.title" :img="item.img"/>
              </router-link>
                </template>
              </d-swiper>
                
            </div>
          </div>
</template>

<script>
import CardVue from './card.vue'

export default {
    name:'section-exploring-entrepreneurship',
    props:{
        itemPage:{}
    },
    components:{
        CardVue
    },
    data:()=>({
        items:[
            {id:1,title:'ريــــــــادة الاعمال',img:'/assets/svg/business.svg'},
            {id:1,title:'المحاسبة والمالية',img:'/assets/svg/account.svg'},
            {id:1,title:'التسويق',img:'/assets/svg/shopping.svg'},
            {id:1,title:'القانون',img:'/assets/svg/law.svg'},
            {id:1,title:'الاستراتيجية والقيادة',img:'/assets/svg/stratigy-leadership.svg'},
            {id:1,title:'الاستراتيجية والقيادة',img:'/assets/svg/stratigy-leadership.svg'},
            {id:1,title:'الاستراتيجية والقيادة',img:'/assets/svg/stratigy-leadership.svg'},
            {id:1,title:'الاستراتيجية والقيادة',img:'/assets/svg/stratigy-leadership.svg'},
            {id:1,title:'الاستراتيجية والقيادة',img:'/assets/svg/stratigy-leadership.svg'},
            {id:1,title:'الاستراتيجية والقيادة',img:'/assets/svg/stratigy-leadership.svg'},
          
        ]
    })
}
</script>

<style>

</style>