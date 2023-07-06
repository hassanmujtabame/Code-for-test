<template>
    <div class="mt-5 blog">
                <ul class="nav nav-pills mb-3 rounded-2 align-items-center" id="pills-tab" role="tablist">
                    <h5 class="m-c fw-bolder m-0">
                        تصنيف المواضيع :
                    </h5>
                    <template  v-for="(btn, i) in categories" > 
                    <li v-if="true" :key="i" class="nav-item"  >
                <button @click="changeCategories(btn.id)" class="nav-link" :class="{ active: category_id === btn.id }" type="button">{{ btn.name }}</button>
            </li>
            <li v-if="categories.length>(i+1)" :key="'d'+i"> | </li>
             </template>
                </ul>
                <d-filter-list :call-list="loadList" 
                @change="changeFilter"
        hideSide
        classColCard="col-md-3  mt-3">
            <template v-slot:total>

                <h3 class="t-c ">
                    نماذج {{ categoryName }}
                </h3>
            </template>

            <template v-slot="{ item }">
                              <router-link class="router-link" :to="getRouteLocale('network-model-show',{id:item.id})" > 
                              <ModelCard
                               :title="item.title" :img="item.image" 
                                :value="item.count_download"
                               />  
                               </router-link>    
                              </template>
                    
                </d-filter-list>
    
  </div>
</template>

<script>
import ModelsAPI from '@/services/api/models.js';
import ModelCard from '@/components/cards/model.vue'
export default {
 name:'section-filter',
 components:{
    ModelCard
 },
 data:()=>({
    filterItem:{
        search:null,
        created_at:'asc',
    },
    categories: [{ id: null, name: 'الكل' }],
    category_id:null
 }),
 computed:{
        categoryName(){
            let category = this.categories.find(cat=>cat.id==this.category_id)
            return category.name
        }
    },
 methods:{
    changeFilter(val){
            this.filterItem = {...this.filterItem,...val}
            this.fireEvent('d-filter-list-refresh')
        },
  changeCategories(cat){
            this.category_id=cat;
            this.fireEvent('d-filter-list-refresh')
        },
    async loadList(metaInfo){
        try {
          let params={
            page:metaInfo.current_page,
            category_id:this.category_id,
            ...this.filterItem
          }
           return await ModelsAPI.getAll(params)

           
        } catch (error) {
            console.mylog('error',error)
            console.mylog('response',error.response)
        }
    },
    async getCategories() {
            try {
                let { data } = await ModelsAPI.getCategories()
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
 mounted(){
    this.getCategories()
 }
}
</script>

<style>

</style>
