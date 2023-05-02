<template>
  <d-filter-list  
        :call-list="loadList"
            classColCard="col-12 col-md-6 mt-2"
            :classTotal="'col-md-3'"
            :classTitle="'col-md-2'"
            classSearchOrder="col-md-5"
            :singleName="$t('job')"
            :pluralName="$t('the_jobs')"
            >
            <template v-slot:title>
              <h4 class="t-c fw-bolder">
                قائمة الوظائف
              </h4>
            </template>
                      <template v-slot:head-end>

          <button @click="openAddJob" class="btn bg-main text-white p-2">
            أعلن عن وظيفة
          </button>
          </template>
                <template v-slot="{item}">
                 <router-link :to="getRouteLocale('service-provider-job-show',{id:item.id})"
                 >
                  <d-job-card
                  :title="item.title"
                  :place="item.state"
                  :description="item.desc"
                  :during="item.during"
                  :department="item.category_name"
                  :category="item.field_name??item.filed_name"
                  :datePublish="item.created_at"
                  :offers="item.count_offers"
                  >
                
                  <template v-slot:icon>
                    <img :src="`${publicPath}assets/svg/sewing.svg`" />

                  </template>
                  </d-job-card>
                </router-link>
                  </template>
                  <template v-slot:side>
                <sidebarFilter   @change="changeFilter" :filter-item="fitlterSide" />
                </template>

      </d-filter-list >
</template>
<script>
import jobsProviderAPIs from '@/services/api/service-provider/jobs'
import sidebarFilter from './sidebar-filter.vue'
export default {
 name:'section-filter-list',
 components:{
  sidebarFilter,
 },
 data:()=>{
    return {
      fitlterSide:{
            state:null,
            category_id:[],
            max_period:100,
            min_period:0,
            max_salary:1000,
            min_salary:0,
        },

        filterItem:{
            search:null,
            created_at:'asc',
            state:null,
            category_id:[],
            max_period:100,
            min_period:0,
            max_salary:1000,
            min_salary:0,
        },
        items:[
            {id:1,title:'تصميم فستان لحلفة تخرج',department:'قسم الازياء',category:'الخياطة',place:'جدة',during:'7 أيام',offers:3,price:150,datePublish:'نشر منذ ساعة'},
            {id:2,title:'تصميم فستان لحلفة تخرج',department:'قسم الازياء',category:'الخياطة',place:'جدة',during:'7 أيام',offers:3,price:150,datePublish:'نشر منذ ساعة'},
            {id:3,title:'تصميم فستان لحلفة تخرج',department:'قسم الازياء',category:'الخياطة',place:'جدة',during:'7 أيام',offers:3,price:150,datePublish:'نشر منذ ساعة'},
            {id:4,title:'تصميم فستان لحلفة تخرج',department:'قسم الازياء',category:'الخياطة',place:'جدة',during:'7 أيام',offers:3,price:150,datePublish:'نشر منذ ساعة'},
            {id:5,title:'تصميم فستان لحلفة تخرج',department:'قسم الازياء',category:'الخياطة',place:'جدة',during:'7 أيام',offers:3,price:150,datePublish:'نشر منذ ساعة'},

        ]
    }
 },
 methods:{
  openAddJob(){
    this.fireOpenDialog('add-job')
  },
  changeFilter(val){
            this.filterItem = {...this.filterItem,...val}
            this.fireEvent('d-filter-list-refresh')
        },
        async loadList(metaInfo) {
            let params = {
                page: metaInfo.current_page,
        
                ...this.filterItem
            }
            return await jobsProviderAPIs.getAll(params)
        },
     loadListOld(/*metaInfo*/){
        return new Promise((resolve/*, reject*/) =>{ 
  let meta = {
        current_page: 1,
        from: 1,
        last_page: 2,
        per_page: 10,
        to: 10,
        total: 18
    }
    let data={success:true,data:this.items,meta:meta}
            resolve({data:data})
    //reject({success:false,message:'Promise Rejected'}) 
})
    }
 }
}
</script>

<style>

</style>