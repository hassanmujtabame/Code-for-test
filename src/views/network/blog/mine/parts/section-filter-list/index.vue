<template>
    <div class="mt-5">
    <div class="blog">
   
        <div class="container mt-5">
        <d-filter-list 
        :call-list="loadList" 
        hideSide
        orderName="created_at"
        @change="changeFilter"
        classColCard="col-md-4 mt-3">
            <template v-slot:total>

                <h3 class="t-c ">
                    تدويناتك 
                </h3>
            </template>

            <template v-slot="{ item }">
                <router-link  class="router-link" :to="getRouteLocale('network-blog-show', { id: item.id })">
                    <BlogInfoCard 
                    :categories="item.categories"
                    :img="item.image" 
                    :title="item.title" 
                    :description="item.short_description??item.description"
                        :date="item.created_at" />
                </router-link>
            </template>


        </d-filter-list>
        </div>
    </div>
    </div>
</template>

<script>
import BlogsAPI from '@/services/api/blogs.js'
import BlogInfoCard from '@/components/cards/blog-info.vue';
export default {
    name: 'section-filter-list',
    components:{
        BlogInfoCard
    },
    data: () => ({
        filterItem:{
            created_at:'asc',
            search:null
        }
    }),
    methods: {
     
        changeFilter(val){
            this.filterItem = {...this.filterItem,...val}
            this.fireEvent('d-filter-list-refresh')
        },
        async loadList(metaInfo) {
            let params = {
                page: metaInfo.current_page,
                ...this.filterItem
            }
            return await BlogsAPI.getMine(params)
        }

    },
    mounted() {

    }
}
</script>

<style scoped>
.blog{
    border: 1px solid #c6c6c68c;
    border-radius: 9px;
}
</style>