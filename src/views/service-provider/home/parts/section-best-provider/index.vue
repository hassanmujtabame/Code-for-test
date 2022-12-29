<template>
  <div class="sec-five mt-5 p-3">
            <div class="">
              <div
                class="d-flex justify-content-between align-items-center container"
              >
                <h1 class="w-100 text-center"> أفضل مقدمي الخدمة هذا الشهر</h1>
            
              </div>
              <d-swiper
              v-if="!loading"
              style="overflow-x: hidden"
            :slides-per-view="5"
            :space-between="10"
             
              :items="items"
            >
       
            <template  v-slot:default="{item}" >
              <router-link class="router-link" :to="getRouteLocale('service-provider-show-profile',{id:item.id})">
                <CardMember 
                :name="item.name" 
                :description="item.job" 
                :img="item.image"/>
              </router-link>
                </template>
            </d-swiper>
 </div>
    </div>
  
</template>

<script>

import CardMember from '@/components/cards/card-member.vue'
import serviceProviderAPIs from '@/services/api/service-provider';
export default {
    name:'section-best-provider',
    components:{
        CardMember
    },
    data:()=>({
      loading:true,
        items:[
           /* {id:1,name:'العنود محمد',description:'التصوير',img:'/assets/img/Rectangle 1775qa.png'},
            {id:1,name:'العنود محمد',description:'التصوير',img:'/assets/img/Rectangle 1775qa.png'},
            {id:1,name:'العنود محمد',description:'التصوير',img:'/assets/img/Rectangle 1775qa.png'},
            {id:1,name:'العنود محمد',description:'التصوير',img:'/assets/img/Rectangle 1775qa.png'},
            {id:1,name:'العنود محمد',description:'التصوير',img:'/assets/img/Rectangle 1775qa.png'},
            {id:1,name:'العنود محمد',description:'التصوير',img:'/assets/img/Rectangle 1775qa.png'},
            {id:1,name:'العنود محمد',description:'التصوير',img:'/assets/img/Rectangle 1775qa.png'},
            {id:1,name:'العنود محمد',description:'التصوير',img:'/assets/img/Rectangle 1775qa.png'},
            {id:1,name:'العنود محمد',description:'التصوير',img:'/assets/img/Rectangle 1775qa.png'},
    */]
    }),
    methods:{
      async loadList(){
          this.loading = true;
          try {
            let { data } = await serviceProviderAPIs.getBestProvider()
            if(data.success){
              this.items = data.data
            }
          } catch (error) {
            console.log('error',error)
            console.log('error response',error.response)
          }
          this.loading = false;
      }
    },
    mounted(){
      this.loadList()
    }
}
</script>

<style>

</style>