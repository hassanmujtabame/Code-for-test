<template>
    <div class="mt-5">
    <div class="blog">

        <d-filter-list :call-list="loadList" 
        hideSide
        orderName="created_at"
        searchPlaceholder="أبحث  في قائمة اللقاءات"
        @change="changeFilter"
        classColCard="col-md-12">
            <template v-slot:total>

                <h3 class="page-title">
                    قائمة لقائتك
                </h3>
            </template>

            <template v-slot="{ item }">
                <router-link  class="router-link" :to="getRouteLocale('academy-blog-show', { id: item.id })">
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
</template>

<script>
import instructorMeetingsAPI from '@/services/api/academy/instructor/meetings.js'
import BlogInfoCard from './meeting-item.vue';
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
    computed:{
        categoryName(){
            let category = this.categories.find(cat=>cat.id==this.category_id)
            return category.name
        }
    },
    methods: {
        changeCategories(cat){
            this.category_id=cat;
            this.fireEvent('d-filter-list-refresh')
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
            return await instructorMeetingsAPI.getAll(params)
        },
    
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
.page-title{
    font-style: normal;
font-weight: 600;
font-size: 32px;
line-height: 40px;
/* identical to box height, or 125% */

text-align: right;
text-transform: capitalize;

color: #414042;
}
</style>