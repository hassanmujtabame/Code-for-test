<template>
<div>

<div
class="d-flex justify-content-between align-items-center container my-2"
>
<h1  class="home-section-title"> أبرز مجالات الاستشارة      </h1>
<div>
  <button @click="router_push('consulting-fields')" class="more">{{ $t('more') }}</button>
</div>
</div>
<!-- <div  v-if="isMobile">
<d-swiper
              v-if="!loading"
              :slides-per-view="4"
              :space-between="10"
              is-auto
              :pagination="false"
              :navigation="true"
              :items="items"
            >
       
            <template  v-slot:default="{item}" >
               <router-link class="router-link" :to="getRouteLocale('consulting-field-consultants',{id:item.id})">
   <consultingFieldCard :item="item"/>
   </router-link>
   </template>
            </d-swiper>
         </div>
<div class="row" v-else>
<div v-for="(item,i) in items" :key="i" class=" col-12 mt-3 m-auto col-md-3">
   <router-link class="router-link" :to="getRouteLocale('consulting-field-consultants',{id:item.id})">
   <consultingFieldCard :item="item"/>
   </router-link>
</div>
</div> -->

   <div class="container">
        <d-swiper
          v-if="!loading"
          :slides-per-view="4"
          is-auto
          :space-between="10"
          :items="items"
        >
          <template v-slot="{ item }">
            <router-link
              class="router-link"
              :to="getRouteLocale('consulting-field-consultants', { id: item.id })"
            >
            
   <consultingFieldCard :item="item"/>
             
            </router-link>
          </template>
        </d-swiper>
      </div>
</div>
</template>

<script>
import consultingFieldCard from '@/components/cards/consulting-field.vue'
import consultingAPI from '@/services/api/consulting/index.js'
export default {
 name:'section-consulting-fields',
 components:{
    consultingFieldCard
 },
 data:()=>({
    items:[],
    loading: false
 }),
 methods:{
    async initializing(){
      this.loading = true;
        try {
            let { data } = await consultingAPI.fields.getBest()
            if(data.success){
                this.items = data.data
            }
        } catch (error) {
           // 
        }
        this.loading = false;
    }
 },
 mounted(){
    this.initializing()
 }
}
</script>

<style>

</style>