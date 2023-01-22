<template>
    <div class="row">
          <div  class="d-flex justify-content-between align-items-center container">
          <d-filter-list
          group="d-filter-list-2"
          classColCard="col-md-6 mt-3"
          :call-list="initializing"
          hideSide
          hideTitle
          :orderOpts="[
                {id:'asc',name:'المضاف حديثا'},
                {id:'desc',name:'الاقدم'}
            ]"
             @change="changeFilter"
          >
          <template v-slot:total>
              <h1 class="text-bold">  {{ $t('Moral_investment_projects') }}</h1>
          </template>
              <template v-slot:head-end>

                  <router-link :to="getRouteLocale('network-investment-project-request-add')" class="btn bg-main text-white p-2">
                      أعرض مشروعك لاستثمار
                  </router-link>
              </template>
       <template v-slot:default="{item}">
        
              <router-link class="router-link" :to="getRouteLocale('network-investment-project-show',{id:item.id})">   
              <DMoralProjectLarge
                 :title="item.title"
                 :description="item.description"
                 :publisher="item.user_info.name"
                 :date-publish="item.created_at"
                 :rest-day="item.rest_days"
                 :offers="item.count_invest"
                 :offered_property="item.offered_property"
                 :minRent="item.amount_financing_required"
                 :maxRent="item.minimum_investment"
                 :place="item.place"

                 />
              </router-link>
          </template>
          </d-filter-list>
      </div>
      </div>
</template>

<script>
import projectsAPI from '@/services/api/projects.js'
import DMoralProjectLarge from '@/components/cards/projects/moral/large.vue';
//import investmentProject from '@/components/cards/offer-investment-project.vue';
export default {
name:'sect-invest-project-moral',
components:{
  DMoralProjectLarge
},
data:()=>({
    filterItem:{
        search:'',created_at:'asc'
    }

 }),
 methods:{
    changeFilter(val){
            this.filterItem = {...this.filterItem,...val}
            this.fireEvent('d-filter-list-2-refresh')
    },
  async initializing(metaInfo){
   
              let params = {
              page: metaInfo.current_page,
              ...this.filterItem
          }
              return await projectsAPI.getAllPage('moral',4,params)

  }
}
}
</script>

<style>

</style>