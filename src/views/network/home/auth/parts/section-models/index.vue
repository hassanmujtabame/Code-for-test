<template>
   <div class="sec-five mt-5 p-3">
            <div class="">
              <div
                class="d-flex justify-content-between align-items-center container"
              >
                <h1> نماذج رياديات      </h1>
                <div>
                <router-link class="router-link" custom 
                :to="getRouteLocale('network-models')"
                v-slot="{navigate}"
                >
                  <button @click="navigate" class="more"> المزيد</button>
                </router-link>
                </div>
              </div>
              <d-swiper  
              :slides-per-view="4"
              :items='items'
              >
                
                 <template v-slot="{item}">
                    <ModelItem :title="item.title" :img="item.img" 
                    :value="item.value"      />   
                  
           
                </template>
               
            
             
            </d-swiper>
          </div>
          </div>
</template>

<script>
import ModelItem from '@/components/cards/model.vue'
export default {
 name:'section-models',
 components:{
    ModelItem
 },
 data:()=>({
    items:[
        {title:'خطة العمل ودراسة الجدوى المالية',img:'/assets/img/Mask Group 1.png',value:500},
        {title:'خطة العمل ودراسة الجدوى المالية',img:'/assets/img/Mask Group 1.png',value:500},
        {title:'خطة العمل ودراسة الجدوى المالية',img:'/assets/img/Mask Group 1.png',value:500},
        {title:'خطة العمل ودراسة الجدوى المالية',img:'/assets/img/Mask Group 1.png',value:500},
        {title:'خطة العمل ودراسة الجدوى المالية',img:'/assets/img/Mask Group 1.png',value:500},
        {title:'خطة العمل ودراسة الجدوى المالية',img:'/assets/img/Mask Group 1.png',value:500}
    ]
 })
}
</script>

<style>

</style>