<template>
  <d-filter-list :call-list="loadList"
  @change="changeFilter"
  :searchPlaceholder="$t('search-for-proposal')"
  :pluralName="$t('proposals')"
  :singleName="$t('proposal')"
  orderName="price"
  :orderOpts="
        [
          {id:'asc',name:'الأقل سعرا'},
          {id:'desc',name:'الأغلى سعرا',}
      ]"
  >

  <template v-slot="{item}">
  <router-link class="router-link" :to="getRouteLocale('service-provider-proposal-page',{id:item.id})">
    <showProposal 
        :title="item.title"
        :description="item.description"
        :department="item.category_name"
        :category="item.field_name"
        :price="item.price"
        :during="item.rest_days"
        :place="item.city"
        :offers="item.count_offer"
        :datePublish="item.created_at"
     />
    </router-link>
  </template>
            <template v-slot:side>
              <SidebarBox :filterItem="fitlterSide" 
              @change="changeFilter"/>
            </template>
  </d-filter-list>
</template>

<script>
import proposalsAPIs from '@/services/api/service-provider/user/proposals.js'
import SidebarBox from './sidebar.vue'
import showProposal from '@/components/cards/proposal.vue'
export default {
 name:'section-filter',
  components:{
    showProposal,
    SidebarBox
  },
  data:(vm)=>{
  
    return {
    orderList:[
        {id:'asc',name:vm.$t('lower-price')},
        {id:'desc',name:vm.$t('higher-price')},
    ],
    fitlterSide:{
            state:null,
            category_id:[],
            city_id:[],
            max_period:360,
            min_period:0,
            max_price:1000,
            min_price:0,
        },
    filterItem:{
      search:null,
      price:'asc',
      state:null,
      category_id:[],
      city_id:[],
      max_period:360,
            min_period:0,
            max_price:1000,
            min_price:0,
    },
    items:[]
  }},
    methods: {
      changeFilter(val){
            this.filterItem = {...this.filterItem,...val}
            this.fireEvent('d-filter-list-refresh')
        },
        openAddService(evt){
        evt.preventDefault();
        this.fireOpenDialog('add-my-request-dialog')
      },
      closeAddService(evt){
        evt.preventDefault();
        this.fireCloseDialog('add-my-request-dialog')
      },
        async loadList(metaInfo) {
            let params = {
                page: metaInfo.current_page,
                ...this.filterItem
            }
            return await proposalsAPIs.getMine(params)
        }
      
    }
}
</script>

<style>

</style>