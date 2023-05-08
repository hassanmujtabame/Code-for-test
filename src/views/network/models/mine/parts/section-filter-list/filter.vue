<template>
    <div class="mt-5 blog">
              
                <d-filter-list :call-list="loadList" 
                @change="changeFilter"
        hideSide
        classColCard="col-md-3  mt-3">
            <template v-slot:total>

                <h3 class="t-c ">
                    تحميلاتك لنماذج رياديات
                </h3>
            </template>

            <template v-slot="{ item }">
                <router-link class="router-link" :to="getRouteLocale('network-model-show',{id:item.id})" > 

                              <ModelCard
                               :title="item.title" :img="item.image" 
                                :value="item.count_download"
                                hideCounter
                               />  
                              </router-link>    
                              </template>
                    
                </d-filter-list>
    
  </div>
</template>

<script>
import netwrokAPI from '@/services/api/network';
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
 }),
 methods:{
async downloadFile(item,evt){
    if(evt) evt.preventDefault();
    
    try {
        let {data} = await netwrokAPI.models.download(item.id)
        if(data.success){
            this.downloadFileFormUrl(data.data.file,'_blank')
        }else{
            window.SwalError(data.message)
        }
        

    } catch (error) {
        console.mylog('error',error)
        window.DHelper.catchException.call(this,error)
    }
},
    changeFilter(val){
            this.filterItem = {...this.filterItem,...val}
            this.fireEvent('d-filter-list-refresh')
        },
    async loadList(metaInfo){
        try {
          let params={
            page:metaInfo.current_page,
            ...this.filterItem
          }
           return await netwrokAPI.models.getMine(params)

           
        } catch (error) {
            console.mylog('error',error)
            console.mylog('response',error.response)
        }
    }
}
}
</script>

<style>

</style>
