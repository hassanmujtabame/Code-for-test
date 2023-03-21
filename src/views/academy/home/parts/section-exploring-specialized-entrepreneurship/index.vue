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
    name:'section-exploring-specialized-entrepreneurship',
    components:{
        CardVue
    },
    data:()=>({
        items:[
            {id:1,title:'المجوهرات',img:'/assets/svg/jewelry.svg'},
            {id:1,title:'الازيــــــاء',img:'/assets/svg/fashion.svg'},
            {id:1,title:'التقنية',img:'/assets/svg/techinic.svg'},
            {id:1,title:'الزهــــور والهدايا',img:'/assets/svg/flowers-gifts.svg'},
            {id:1,title:'التجـــــــارة الالكترونية',img:'/assets/svg/ecommerce.svg'},
            {id:1,title:'السباحة',img:'/assets/svg/swimming.svg'},
            {id:1,title:'التجميل',img:'/assets/svg/beauty.svg'},
            {id:1,title:'التجميل',img:'/assets/svg/beauty.svg'},
            {id:1,title:'التجميل',img:'/assets/svg/beauty.svg'},
          
        ]
    })
}
</script>

<style>

</style>