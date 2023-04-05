<template>
    <div class="mt-5 blog">
        <d-filter-list :call-list="loadList" 
        @change="changeFilter"
        hideTop
        :searchPlaceholder="$t('search_by_service')"
        orderName="price"
        :orderOpts="
             [
                {id:'asc',name:'الأقل سعرا'},
                {id:'desc',name:'الأغلى سعرا',}
            ]"
        classColCard="col-md-4 mt-3">
            <template v-slot:side>
                <sidebarFilter   @change="changeFilter" :filter-item="fitlterSide" />
                </template>
            

            <template v-slot="{ item }">
               
                    <scheduleCard 
                   
                   :title="item.title"
                   :time="item.start_time"
                   :date="item.start_date"
                   color="var(--color-secondary)"
                   
                   />
        
            </template>


        </d-filter-list>
    </div>
</template>

<script>

import scheduleCard from './category-schedule-card.vue';
import sidebarFilter from './sidebar-filter.vue'
import academyAPI from '@/services/api/academy';
export default {
    name: 'section-filter-list',
    components:{
        scheduleCard,
        sidebarFilter
    },
    data: () => ({
        fitlterSide:{
            created_at:'asc',
            type:null, // course | meeting
            type_course:null, //live | on-site
        },
        filterItem:{
            //search:null,
            created_at:'asc',
            type:null, // course | meeting
            type_course:null, //live | on-site
        }
    }),
    methods: {
        changeFilter(val){
            this.filterItem = {...this.filterItem,...val}
            this.fireEvent('d-filter-list-refresh')
        },
        openAddService(evt){
        evt.preventDefault();
        this.fireOpenDialog('add-ready-service-dialog')
      },
      closeAddService(evt){
        evt.preventDefault();
        this.fireCloseDialog('add-ready-service-dialog')
      },
        async loadList(metaInfo) {
            let params = {
                page: metaInfo.current_page,
                paginate:6,
                ...this.filterItem
            }
            return await academyAPI.getMyAppointments(params)
        },
     
    },
    mounted() {
        //this.getCategories();
    }
}
</script>

<style>

</style>