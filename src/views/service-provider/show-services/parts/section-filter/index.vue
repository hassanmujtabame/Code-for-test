<template>
  <d-filter-list :call-list="loadList"
  @change="changeFilter"
  :searchPlaceholder="$t('search-for-project')"
  orderName="price"
  :orderOpts="
        [
          {id:'asc',name:'الأقل سعرا'},
          {id:'desc',name:'الأغلى سعرا',}
      ]"
  >

<template v-slot="{item}">
  <router-link class="router-link" :to="getRouteLocale('service-provider-show-service-page',{id:item.id})">
    <showRequest 
        :title="item.title"
        :description="item.description"
        :department="item.department"
        :category="item.category"
        :price="item.price"
        :during="item.rest_days"
        :place="item.city"
        :offers="item.count_offer"
        :datePublish="item.start_date"
     />
    </router-link>
</template>
<template v-slot:order>
                <select v-model="filterItem.price" class="form-select mb-3 py-3" aria-label=".form-select-lg example">  
                    <option v-for="(item,i) in orderList" :key="i" :value="item.id">{{ item.name }}</option>
                </select>
                <p style="top: -13px; right: 24px; background: white" class="position-absolute">
                    ترتيب حسب
                </p>
            </template>
            <template v-slot:side>
              <SidebarBox :filterItem="fitlterSide" 
              @change="changeFilter"/>
            </template>
</d-filter-list>
</template>

<script>
import myRequestsAPIs from '@/services/api/service-provider/user/my-requests.js'
import SidebarBox from './sidebar.vue'
import showRequest from '@/components/cards/show-request.vue'
export default {
 name:'section-filter',
  components:{
    showRequest,
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
            max_period:100,
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
      max_period:100,
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
            return await myRequestsAPIs.getAll(params)
        }
      
    }
}
</script>

<style>

</style>