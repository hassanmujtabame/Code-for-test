<template>
  <div class="sec-five p-3 max-width-100-hidden">
            <div class="container">
              <div
                class="d-flex justify-content-between align-items-center container"
              >
                <h1 class="home-section-title w-100 text-center">
                  أفضل مقدمي الخدمات هذا الشهر
                  </h1>
            
              </div>
              <d-swiper
              v-if="!loading"
            :slides-per-view="4"
            :space-between="10"
            is-auto
              :items="items"
            >
       
            <template  v-slot:default="{item}" >
              <router-link class="router-link" :to="getRouteLocale('service-provider-show-profile',{id:item.id})">
                <CardMember 
                :name="item.name" 
                :description="item.job" 
                :img="item.image"
                :rate="item.rate"
                showRate
                />
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
        items:[]
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