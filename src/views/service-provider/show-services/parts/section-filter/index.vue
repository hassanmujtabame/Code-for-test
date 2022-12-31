<template>
  <d-filter-list :call-list="loadList">

<template v-slot="{item}">
  <router-link :to="getRouteLocale('service-provider-page-service',{id:item.id})">
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
                <select v-model="filterItem.price" class="form-select form-select-lg mb-3 py-3" aria-label=".form-select-lg example">  
                    <option v-for="(item,i) in orderList" :key="i" :value="item.id">{{ item.name }}</option>
                </select>
                <p style="top: -13px; right: 24px; background: white" class="position-absolute">
                    ترتيب حسب
                </p>
            </template>
            <template v-slot:side>
              <SidebarBox :filterItem="filterItem"  @change="filterItem=$event"/>
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
    filterItem:{
      price:'asc',
      state:null,
      category_id:null,
      valueMinDuring:0,
      valueMaxDuring:100,
      priceMin:null,
      priceMax:null
    },
    items:[
        {id:1,title:'تصميم فستان لحلفة تخرج',description:'أحتاج مصممة ازياء على وجهه السرعة تصمم لي فستان بسيط لحفلة تخرجي',department:'قسم الازياء',category:'الخياطة',place:'جدة',rest_days:'6 أيام',count_offer:'3',start_date:'نشر منذ ساعة',price:1500},
        {id:2,title:'تصميم فستان لحلفة تخرج',description:'أحتاج مصممة ازياء على وجهه السرعة تصمم لي فستان بسيط لحفلة تخرجي',department:'قسم الازياء',category:'الخياطة',place:'جدة',rest_days:'6 أيام',count_offer:'3',start_date:'نشر منذ ساعة',price:1500},
        {id:3,title:'تصميم فستان لحلفة تخرج',description:'أحتاج مصممة ازياء على وجهه السرعة تصمم لي فستان بسيط لحفلة تخرجي',department:'قسم الازياء',category:'الخياطة',place:'جدة',rest_days:'6 أيام',count_offer:'3',start_date:'نشر منذ ساعة',price:1500},
        {id:4,title:'تصميم فستان لحلفة تخرج',description:'أحتاج مصممة ازياء على وجهه السرعة تصمم لي فستان بسيط لحفلة تخرجي',department:'قسم الازياء',category:'الخياطة',place:'جدة',rest_days:'6 أيام',count_offer:'3',start_date:'نشر منذ ساعة',price:1500},
        {id:5,title:'تصميم فستان لحلفة تخرج',description:'أحتاج مصممة ازياء على وجهه السرعة تصمم لي فستان بسيط لحفلة تخرجي',department:'قسم الازياء',category:'الخياطة',place:'جدة',rest_days:'6 أيام',count_offer:'3',start_date:'نشر منذ ساعة',price:1500},
        {id:6,title:'تصميم فستان لحلفة تخرج',description:'أحتاج مصممة ازياء على وجهه السرعة تصمم لي فستان بسيط لحفلة تخرجي',department:'قسم الازياء',category:'الخياطة',place:'جدة',rest_days:'6 أيام',count_offer:'3',start_date:'نشر منذ ساعة',price:1500},
        {id:7,title:'تصميم فستان لحلفة تخرج',description:'أحتاج مصممة ازياء على وجهه السرعة تصمم لي فستان بسيط لحفلة تخرجي',department:'قسم الازياء',category:'الخياطة',place:'جدة',rest_days:'6 أيام',count_offer:'3',start_date:'نشر منذ ساعة',price:1500},
        {id:8,title:'تصميم فستان لحلفة تخرج',description:'أحتاج مصممة ازياء على وجهه السرعة تصمم لي فستان بسيط لحفلة تخرجي',department:'قسم الازياء',category:'الخياطة',place:'جدة',rest_days:'6 أيام',count_offer:'3',start_date:'نشر منذ ساعة',price:1500},
        {id:9,title:'تصميم فستان لحلفة تخرج',description:'أحتاج مصممة ازياء على وجهه السرعة تصمم لي فستان بسيط لحفلة تخرجي',department:'قسم الازياء',category:'الخياطة',place:'جدة',rest_days:'6 أيام',count_offer:'3',start_date:'نشر منذ ساعة',price:1500},
        {id:10,title:'تصميم فستان لحلفة تخرج',description:'أحتاج مصممة ازياء على وجهه السرعة تصمم لي فستان بسيط لحفلة تخرجي',department:'قسم الازياء',category:'الخياطة',place:'جدة',rest_days:'6 أيام',count_offer:'3',start_date:'نشر منذ ساعة',price:1500}
    ]
  }},
  watch:{
  filterItem:{
    deep:true,
    handler(){
      this.fireEvent('d-filter-list-refresh')
    }
  }
  },
    methods: {
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
                category_id: this.category_id,
                ...this.filterItem
            }
            return await myRequestsAPIs.getAll(params)
        }
      
    }
}
</script>

<style>

</style>