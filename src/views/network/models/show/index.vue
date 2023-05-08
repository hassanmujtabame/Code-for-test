<template>
  <div class="content-main" style="margin-top: 96px;" >
    <div v-if="loading">
        <d-overlays-simple />
    </div>
    <template v-else>
        <ModelPage v-if="loaded" :itemPage="itemPage" />
        <div v-else>
            Error
        </div>
    </template>
  </div>
</template>

<script>
import ModelsApi from '@/services/api/models.js'
import ModelPage from './page.vue'
export default {
 name:'itemPage-show',
 components:{
    ModelPage
 },
 data:()=>({
    itemPage:{},
    loading:true,
    loaded:false,

 }),
 methods:{
 async getModel(){
    this.loading=true;
    try {
        let {data} = await ModelsApi.getItem(this.$route.params.id)
        if(data.success){
            
            this.itemPage = data.data;
            this.loaded=true;
        }else{
            this.loaded=false
        }
    } catch (error) {

        console.log('error',error)
        this.loaded=false
    }
    this.loading=false;
 }
 },
 mounted(){
    this.getModel()
 }
}
</script>

<style scoped>
.content-main{
    position: relative;
    min-height: 300px;
}
</style>