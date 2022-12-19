<template>
  <div class="content-main" style="margin-top: 96px;" >
    <div v-if="loading">
        <DOverlay />
    </div>
    <template v-else>
        <ModelPage v-if="loaded" :item="model" />
        <div v-else>
            Error
        </div>
    </template>
  </div>
</template>

<script>
import ModelsApi from '@/services/api/models.js'
import ModelPage from './page.vue'
import DOverlay from '@/components/overlays/simple'
export default {
 name:'model-show',
 components:{
    ModelPage,
    DOverlay
 },
 data:()=>({
    model:{},
    loading:true,
    loaded:false,

 }),
 methods:{
 async getModel(){
    this.loading=true;
    try {
        let {data} = await ModelsApi.getItem(this.$route.params.id)
        if(data.success){
            
            this.model = data.data;
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