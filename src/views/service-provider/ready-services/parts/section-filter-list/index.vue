<template>
    <div class="mt-5 blog">
        <d-filter-list :call-list="loadList" 
        hideSide
        hideTotal
        classColCard="col-md-4 mt-3">
            <template v-slot:title>

               
                    <button @click="openAddService" style="line-height: 2.5; height: 40px;" class="btn-main btn-nav text-center text-white">
              {{ $t('add-new-service') }}
                    </button>
             
            </template>

            <template v-slot="{ item }">
                <router-link  class="router-link" :to="getRouteLocale('network-blog-show', { id: item.id })">
                    <readyServiceCard 
                    :image="item.image"
                   :title="item.title"
                   :description="item.description"
                   :department="item.department"
                   :status="item.state"
                   
                   />
                </router-link>
            </template>


        </d-filter-list>
    </div>
</template>

<script>
import serviceProviderAPIs from '@/services/api/service-provider.js'
import readyServiceCard from '@/components/cards/ready-service.vue';
export default {
    name: 'section-filter-list',
    components:{
        readyServiceCard
    },
    data: () => ({
        categories: [{ id: null, name: 'الكل' }],
        category_id: null,
    }),
    computed:{
        categoryName(){
            let category = this.categories.find(cat=>cat.id==this.category_id)
            return category.name
        }
    },
    methods: {
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
                category_id: this.category_id
            }
            return await serviceProviderAPIs.getReadyServicesAll(params)
        },
        async getCategories() {
            try {
                let { data } = await serviceProviderAPIs.getCategories()
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