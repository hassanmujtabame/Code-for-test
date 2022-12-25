<template>
  <div class="container mt-5">
            <div class="d-flex justify-content-between">
                <div>
                    <h2>
                        أحدث النماذج
                    </h2>
                </div>

            </div>
            <div class="row mt-3">
               
                  <div v-for="(item,i) in items" :key="i" class="col-md-3 " >
                    <ModelCard :title="item.title" :img="item.img" 
                    :value="item.value"      
                     />   
                  </div>
            </div>
           
        </div>
</template>
<script>
import ModelsAPI from '@/services/api/models.js';
import ModelCard from '@/components/cards/model.vue'
export default {
 name:'recent-models',
 components:{
    ModelCard
 },
 data:()=>({
    items:[
        {title:'خطة العمل ودراسة الجدوى المالية',img:'/assets/img/Mask Group 1.png',value:500},
        {title:'خطة العمل ودراسة الجدوى المالية',img:'/assets/img/Mask Group 1.png',value:500},
        {title:'خطة العمل ودراسة الجدوى المالية',img:'/assets/img/Mask Group 1.png',value:500},
        {title:'خطة العمل ودراسة الجدوى المالية',img:'/assets/img/Mask Group 1.png',value:500}
    ]
 }),
 methods:{
    async getRecents() {
            try {
                let { data } = await ModelsAPI.getRecent()
                if (data.success) {
                   //
                }
            } catch (error) {
                console.log('error', error)
                console.log('error response', error.response)
            }
        }
 },
 mounted(){
    this.getRecents()
 }
}
</script>

<style>

</style>