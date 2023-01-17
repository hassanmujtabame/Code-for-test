<template>
    <div class="container mt-5">
        <d-filter-list 
       
        :call-list="loadList" 
        classColCard="col-md-6 mt-2" 
        classColSearch="col-12 col-md-8"
        classColOrder="col-12 col-md-4"
        :pluralName="$t('exhibitions')" 
        :singleName="$t('exhibition')"
        :searchPlaceholder="$t('search')"
        orderName="price"
        :orderOpts="
             [
                {id:'asc',name:'الأقل سعرا'},
                {id:'desc',name:'الأغلى سعرا',}
            ]"
        @change="changeFilter"
        >
            <template v-slot:default="{ item }">
                <router-link class="router-link" :to="getRouteLocale('network-exhibition-show', { id: item.id })">
                    <exhibitionCard 
                    :img="item.image" 
                    :price="item.price"
                    :place="item.city"
                    :userName="item.user_info.name" 
                    :description="item.content" 
                     :title="item.title"
                    />
                </router-link>
            </template>
            <template v-slot:side>
                <sidebarBox :filterItem="filterItem" @change="changeFilter"/>
            </template>
        </d-filter-list>

    </div>
</template>

<script>
import exhibitionAPI from '@/services/api/exhibitions.js'
import sidebarBox from './sidebar.vue';
import exhibitionCard from '@/components/cards/exhibition.vue';
export default {
    name: 'filter-exhibitions',
    components: {
        exhibitionCard,
        sidebarBox
    },
    data: () => ({
        filterItem:{
        search:null,
      price:'asc',
      is_share:'all',
      category_id:[],
      valueMinDuring:0,
      valueMaxDuring:100,
      priceMin:null,
      priceMax:null
    }
    }),
    methods: {
        changeFilter(val){
            this.filterItem = {...this.filterItem,...val}
            this.fireEvent('d-filter-list-refresh')
        },
        async loadList(metaInfo) {
            try {
                let params = {
                    page: metaInfo.current_page,
                    ...this.filterItem
                }
                return await exhibitionAPI.getAll(params)

            } catch (error) {
                console.log('error', error)
                console.log('response', error.response)
            }
        }
    },
    mounted() {
        //this.loadList()
    }
}
</script>

<style>

</style>