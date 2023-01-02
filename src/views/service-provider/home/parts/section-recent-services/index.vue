<template>
<div class="container mt-5">
            <div class="d-flex justify-content-between align-items-center container">
            <h1> أحدث الخدمات المضافة </h1>
            <div>
                <router-link class="router-link" custom :to="getRouteLocale('service-provider-ready-services')" v-slot="{navigate}">
                    <button @click="navigate" class="more">المزيد</button>
                </router-link>
              </div>
          </div>
          <div class="row order mt-3">
            <div v-for="(item,i) in items" :key="i" class="col-md-4">
              <router-link  class="router-link" :to="getRouteLocale('service-provider-ready-service', { id: item.id })">

                    <CardService 
                    :image="item.image"
                    :description="item.description"
                    :title="item.title"
                    :place="item.city"
                    :price="item.price"
                    :name="item.user_name"
                    />
                    </router-link>
            </div>
          </div>

        </div>
</template>

<script>
import serviceProviderAPIs from '@/services/api/service-provider';
import CardService from './card.vue'
export default {
 name:'section-recent-services',
 components:{
    CardService
 }
 ,
    data:()=>({
      loading:true,
        items:[]
    }),
    methods:{
      async loadList(){
          this.loading = true;
          try {
            let { data } = await serviceProviderAPIs.getRecentServices()
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