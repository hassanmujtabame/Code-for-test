<template>
  <div class="mt-5 p-3">
            <div class="container">
              <div
                class="d-flex justify-content-center align-items-center container"
              >
                <h1>  تعرفي على مجالات التسويق لدينا</h1>
        
              </div>
              <d-swiper
        
            :slides-per-view="5"
            is-auto
            :space-between="10"
              :items="items"
            >
            <template  v-slot:default="{item}" >
                <CardVue :title="item.title" :img="item.img"
                :icon="item.icon"
                
                />
                </template>
              </d-swiper>
            </div>
          </div>
</template>

<script>
import CardVue from './card.vue'
export default {
    name:'section-recognize-our-marketing',
    components:{
        CardVue
    },
    data:()=>({
        items:[
        {title:'المجوهرات',img:'/assets/icons/jewelry.svg',icon:'jewelry'},
            {title:'الازيــــــاء',img:'/assets/icons/fashion.svg',icon:'fashion'},
            {title:'التقنية',img:'/assets/icons/techinic.svg',icon:'techinic'},
            {title:'الزهــــور والهدايا',img:'/assets/icons/flowers-gifts.svg',icon:'flowers-gifts'},
            {title:'التجـــــــارة الالكترونية',img:'/assets/icons/ecommerce.svg',icon:'ecommerce'},
            {title:'السباحة',img:'/assets/icons/swimming.svg',icon:'beauty'},
            {title:'التجميل',img:'/assets/icons/beauty.svg',icon:'beauty'},
            {title:'التجميل',img:'/assets/icons/beauty.svg',icon:'beauty'},
            {title:'التجميل',img:'/assets/icons/beauty.svg',icon:'beauty'},
          
        ]
    })
}
</script>

<style>

</style>