<template>
   <div class="row">
          <div class="col-md-12">
            <d-filter-list hideSide 
            
            :call-list="loadList"
            classColCard="col-12 col-md-6 col-lg-3 mt-2"
            @change="changeFilter"
            >
                <template v-slot:total>
                    <h4>
                        قصص نجاح والهام
                    </h4>
                </template>
                <template v-slot:default="{item}">
                    <router-link class="w-100" :to="getRouteLocale('network-success-story-show',{id:item.id})">
                    <d-story-card 
                    :image="item.user_info.image"
                        :title="item.title"
                        :name="item.user_info.name"
                        :description="item.user_info.job"
                   />
                </router-link>
                </template>
            </d-filter-list>
       
</div>
    </div>
</template>

<script>
import StoriesApi from '@/services/api/stories.js'
export default {
    name: 'filter-list-stories',
    data:()=>({
        filterItem:{
      search:null,
      created_at:'asc',
    }
    }),
    methods:{
        changeFilter(val){
            this.filterItem = {...this.filterItem,...val}
            this.fireEvent('d-filter-list-refresh')
    },
        async loadList(metaInfo){
            let params = {
                page:metaInfo.current_page,
                ...this.filterItem
            }
            return await StoriesApi.getAll(params);
        }
    }
}
</script>

<style>

</style>