<template>
    <div class="mt-5">
    <div class="podcast">
        <ul class="nav nav-pills mb-3 rounded-2 align-items-center" id="pills-tab" role="tablist">
            <h5 class="m-c fw-bolder m-0">
                {{ $t('podcast_category') }} :
            </h5>
            <template  v-for="(btn, i) in categories"> 
            <li v-if="true" class="nav-item" role="presentation"  :key="'r'+i">
                <button @click="changeCategories(btn.id)" class="nav-link" :class="{ active: category_id === btn.id }" type="button">{{ btn.name }}
                
                </button>
                
            </li>
            <li v-if="categories.length>(i+1)" :key="'d'+i"> | </li>
        </template>
        </ul>
        <d-filter-list :call-list="loadList" 
        hideSide
        orderName="created_at"
        @change="changeFilter"
        classColCard="col-md-4 mt-3">
            <template v-slot:total>

                <h3 class="t-c ">
                 {{ categoryName }}
                </h3>
            </template>

            <template v-slot="{ item }">
                <router-link  class="router-link" :to="getRouteLocale('network-podcast-show', { id: item.id })">
                    <ItemCard 
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
import podcastAPI from '@/services/api/podcasts.js'
import ItemCard from '@/components/cards/podcast.vue';
export default {
    name: 'section-filter-list',
    components:{
        ItemCard
    },
    data: () => ({
        categories: [{ id: null, name: 'الكل' }],
        category_id: null,
        filterItem:{
            created_at:'asc'
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
                category_id: this.category_id,
                ...this.filterItem
            }
            return await podcastAPI.getAll(params)
        },
        async getCategories() {
            try {
                let { data } = await podcastAPI.getCategories()
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

<style scoped>
.podcast{
    border: 1px solid #c6c6c68c;
    border-radius: 9px;
}
</style>