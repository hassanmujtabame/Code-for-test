<template>
        <d-filter-list 
      
        :call-list="loadList" 
        hideSide
        hideTotal
        classTitle="col-md-6"
        classSearchOrder="col-md-6"
        :hideOrder="true"
        :hideSearch="true"
        >
            <template v-slot:default="{ item }">
                <router-link class="router-link h-100" :to="getRouteLocale('network-exhibition-show', { id: item.id })">
                    <exhibitionCard 
                    class="h-100"
                    :img="item.image" 
                    :price="item.price"
                    :place="item.city"
                    :isShared="item.is_share"
                    :userName="item.user_info ? item.user_info.name : 'N/A'"
                    :description="item.content" 
                    :title="item.title"
                    :userInfo="item.user_info"
                    />
                </router-link>
            </template>
            <template v-slot:side>
                <sidebarBox :filterItem="filterSide" @change="changeFilter"/>
            </template>
        </d-filter-list>
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

    filterSide:{
      is_share:null,
      category_id:[],
    },
        filterItem:{
            search:null,
            price:'asc',
            is_share:null,
            category_id:[],
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
                    paginate:9,
                    ...this.filterItem
                }
                return await exhibitionAPI.getMy(params)

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