<template>
    <div class="mt-5 blog">
              
                <d-filter-list :call-list="loadList" 
                @change="changeFilter"
        hideSide
        classColCard="col-md-3  mt-3">
            <template v-slot:total>

                <h3 class="t-c ">
                    تحميلاتك لنماذج رياديات
                </h3>
            </template>

            <template v-slot="{ item }">
                              <router-link class="router-link" :to="getRouteLocale('network-model-show',{id:item.id})" > 
                              <ModelCard
                               :title="item.title" :img="item.image" 
                                :value="item.count_download"
                                hideCounter
                               />  
                               </router-link>    
                              </template>
                    
                </d-filter-list>
    
  </div>
</template>

<script>
import ModelsAPI from '@/services/api/models.js';
import ModelCard from '@/components/cards/model.vue'
export default {
 name:'section-filter',
 components:{
    ModelCard
 },
 data:()=>({
    filterItem:{
        search:null,
        created_at:'asc',
    },
 }),
 methods:{
    changeFilter(val){
            this.filterItem = {...this.filterItem,...val}
            this.fireEvent('d-filter-list-refresh')
        },
    async loadList(metaInfo){
        try {
          let params={
            page:metaInfo.current_page,
            ...this.filterItem
          }
           return await ModelsAPI.getMine(params)

           
        } catch (error) {
            console.log('error',error)
            console.log('response',error.response)
        }
    }
}
}
</script>

<style>

</style>
