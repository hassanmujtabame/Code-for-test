<template>
    <div class="container mt-5">
        <d-filter-list 
       
        :call-list="loadList" 
        classColCard="col-md-6 mt-2" 
        classColSearch="col-12 col-md-8"
        classColOrder="col-12 col-md-4"
        :pluralName="$t('available-for-hiring')" 
        :singleName="$t('graduate')"
        searchPlaceholder="أبحث  بالاسم او المجال"
        orderName="rate"
        :orderOpts="
             [
                {id:'asc',name:'الأقل تقييما'},
                {id:'desc',name:'الأغلى تقييما',}
            ]"
            @change="changeFilter"
  
        >
            <template v-slot:default="{ item }">
                <router-link class="router-link" :to="getRouteLocale('network-exhibition-show', { id: item.id })">
                    <exhibitionCard 
                    :img="item.image" 
                    :name="item.name" 
                    :description="item.job" 
                    />
                </router-link>
            </template>
            <template v-slot:side>
                <sidebarBox :filterItem="filterSide" @change="changeFilter"/>
            </template>
        </d-filter-list>

    </div>
</template>

<script>
import GraduateJobsApi from '@/services/api/graduate-jobs'
import sidebarBox from './sidebar.vue';
import exhibitionCard from '@/components/cards/card-member.vue';
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
      year_experience_from:0,
      year_experience_to:40
    },
        filterItem:{
            search:null,
            rate:'desc',
            is_share:null,
            category_id:[],
            year_experience_from:0,
         year_experience_to:40
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
                return await GraduateJobsApi.getAll(params)

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