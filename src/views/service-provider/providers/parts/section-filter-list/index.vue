<template>
    <div class="mt-5 blog">
        <d-filter-list :call-list="loadList" 
        @change="changeFilter"
        singleName=""
        classColCard="col-12 col-md-6 mt-3"
        pluralName="مقدمو الخدمة"
        :searchPlaceholder="$t('search_by_service_provider')"
        orderName="rate"
        
        :orderOpts="
             [
                {id:'asc',name:'الأقل تقييما'},
                {id:'desc',name:'الأعلى تقييما',}
            ]">
            <template v-slot:side>
                <sidebarFilter   @change="changeFilter" :filter-item="fitlterSide" />
                </template>
            

            <template v-slot="{ item }">
                <router-link  class="router-link" :to="getRouteLocale('service-provider-ready-service', { id: item.id })">
                    <cardInfoVue />
                </router-link>
            </template>


        </d-filter-list>
    </div>
</template>

<script>
import serviceProviderAPIs from '@/services/api/service-provider/provider/index'
//import readyServiceCard from '@/components/cards/ready-service.vue';
import sidebarFilter from './sidebar-filter.vue'
import cardInfoVue from './card-item'
export default {
    name: 'section-filter-list',
    components:{
        cardInfoVue,
        sidebarFilter
    },
    data: () => ({
        fitlterSide:{
            state:null,
            category_id:[],
            prd:null,
            rate_value:null,
        },
        filterItem:{
            search:null,
            rate:'asc',
            state:null,
            category_id:[],
            prd:null,
           rate_value:null,
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
        
                ...this.filterItem
            }
            return await serviceProviderAPIs.getAll(params)
        },
        async getCategories() {
            try {
                let { data } = await serviceProviderAPIs.readyService.getCategories()
                if (data.success) {

                    let categories = data.data;
                    categories.unshift({ id: null, name: 'الكل' })
                    this.categories=categories
                }
            } catch (error) {
                console.log('error', error)
                console.log('error response', error.response)
            }
        }
    },
    mounted() {
        //this.getCategories();
    }
}
</script>

<style>

</style>