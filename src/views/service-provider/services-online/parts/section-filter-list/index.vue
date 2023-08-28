<template>
    <div class="mt-5 blog">
        <d-filter-list :call-list="loadList" 
        @change="changeFilter"
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
                    <readyServiceCard 
                    :image="item.image"
                   :title="item.title"
                   :description="item.desc"
                   :department="item.category_name"
                   :price="item.price"
                   :state="item.state"
                   :place="item.city"
                   :name="item.user_info"
                   :status="item.status"
                    :id="item.id"
                   
                   />
            </template>


        </d-filter-list>
    </div>
</template>

<script>
import readyServiceAPIs from '@/services/api/service-provider/provider/ready-service'
import readyServiceCard from '@/components/cards/ready-service.vue';
import sidebarFilter from './sidebar-filter.vue'
export default {
    name: 'section-filter-list',
    components:{
        readyServiceCard,
        sidebarFilter
    },
    data: () => ({
        fitlterSide:{
            state:'online',
            category_id:[],
            max_period:100,
            min_period:0,
            max_price:1000,
            min_price:0,
        },
        filterItem:{
            search:'online',
            price:'asc',
            state:null,
            category_id:[],
            max_period:100,
            min_period:0,
            max_price:1000,
            min_price:0,
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
            return await readyServiceAPIs.getAll(params)
        },
        async getCategories() {
            try {
                let { data } = await readyServiceAPIs.getCategories()
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
        this.getCategories();
    }
}
</script>

<style>

</style>