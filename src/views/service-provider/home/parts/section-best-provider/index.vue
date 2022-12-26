<template>
  <div class="sec-five mt-5 p-3">
            <div class="">
              <div
                class="d-flex justify-content-between align-items-center container"
              >
                <h1 class="w-100 text-center"> أفضل مقدمي الخدمة هذا الشهر</h1>
            
              </div>
              <d-swiper
              style="overflow-x: hidden"
            :slides-per-view="5"
            :space-between="10"
             
              :items="items"
            >
       
            <template  v-slot:default="{item}" >
              <router-link class="router-link" :to="getRouteLocale('service-provider-show-profile',{id:item.id})">
                <CardMember 
                :name="item.name" 
                :description="item.description" 
                :img="item.img"/>
              </router-link>
                </template>
            </d-swiper>
 </div>
    </div>
  
</template>

<script>

import CardMember from '@/components/cards/card-member.vue'

export default {
    name:'section-best-provider',
    components:{
        CardMember
    },
    data:()=>({
        items:[
            {id:1,name:'العنود محمد',description:'التصوير',img:'/assets/img/Rectangle 1775qa.png'},
            {id:1,name:'العنود محمد',description:'التصوير',img:'/assets/img/Rectangle 1775qa.png'},
            {id:1,name:'العنود محمد',description:'التصوير',img:'/assets/img/Rectangle 1775qa.png'},
            {id:1,name:'العنود محمد',description:'التصوير',img:'/assets/img/Rectangle 1775qa.png'},
            {id:1,name:'العنود محمد',description:'التصوير',img:'/assets/img/Rectangle 1775qa.png'},
            {id:1,name:'العنود محمد',description:'التصوير',img:'/assets/img/Rectangle 1775qa.png'},
            {id:1,name:'العنود محمد',description:'التصوير',img:'/assets/img/Rectangle 1775qa.png'},
            {id:1,name:'العنود محمد',description:'التصوير',img:'/assets/img/Rectangle 1775qa.png'},
            {id:1,name:'العنود محمد',description:'التصوير',img:'/assets/img/Rectangle 1775qa.png'},
        ]
    })
}
</script>

<style>

</style>