<template>
    <div class="mt-5">
    <div class="blog" style="background: white;">
   <button @click="addBlog" class="btn bg-main border text-white" style="display: flex; margin-right: auto; margin-left: 30px; margin-top: 10px;" >
                        <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M21.3346 17H10.668C10.1213 17 9.66797 16.5467 9.66797 16C9.66797 15.4533 10.1213 15 10.668 15H21.3346C21.8813 15 22.3346 15.4533 22.3346 16C22.3346 16.5467 21.8813 17 21.3346 17Z" fill="white"/>
                            <path d="M16 22.3327C15.4533 22.3327 15 21.8793 15 21.3327V10.666C15 10.1193 15.4533 9.66602 16 9.66602C16.5467 9.66602 17 10.1193 17 10.666V21.3327C17 21.8793 16.5467 22.3327 16 22.3327Z" fill="white"/>
                            <path d="M20.0013 30.3327H12.0013C4.7613 30.3327 1.66797 27.2393 1.66797 19.9993V11.9993C1.66797 4.75935 4.7613 1.66602 12.0013 1.66602H20.0013C27.2413 1.66602 30.3346 4.75935 30.3346 11.9993V19.9993C30.3346 27.2393 27.2413 30.3327 20.0013 30.3327ZM12.0013 3.66602C5.85463 3.66602 3.66797 5.85268 3.66797 11.9993V19.9993C3.66797 26.146 5.85463 28.3327 12.0013 28.3327H20.0013C26.148 28.3327 28.3346 26.146 28.3346 19.9993V11.9993C28.3346 5.85268 26.148 3.66602 20.0013 3.66602H12.0013Z" fill="white"/>
                        </svg>
                        أضف تدوينة 
                    </button>
        <d-filter-list :call-list="loadList" 
        hideSide
        orderName="created_at"
        searchPlaceholder="أبحث  في قائمة تدويناتك"
        @change="changeFilter"
        classColCard="col-12 col-md-4 mt-2">
            <template v-slot:total>

                <h3 class="page-title">
                    التدوينات    
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
import BlogsAPI from '@/services/api/academy/blogs.js'
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
          addBlog(){
            this.fireOpenDialog('add-blog')
        },
        changeFilter(val){
            this.filterItem = {...this.filterItem,...val}
            this.fireEvent('d-filter-list-refresh')
        },
        async loadList(metaInfo) {
            let params = {
                page: metaInfo.current_page,
                category_id: this.category_id,
                ...this.filterItem
            }
            return await BlogsAPI.getAll(params)
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