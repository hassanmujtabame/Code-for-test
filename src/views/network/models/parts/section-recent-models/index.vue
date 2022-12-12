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
                    <card-vue :title="item.title" :img="item.img" 
                    :value="item.value"       ></card-vue>   
                  </div>
           
                  <sectionFilter/>
            </div>
           
        </div>
</template>
<script>
import cardVue from './card.vue'
import sectionFilter from './filter.vue'
export default {
 name:'recent-models',
 components:{
    cardVue,
    sectionFilter
 },
 data:()=>({
    items:[
        {title:'خطة العمل ودراسة الجدوى المالية',img:'/assets/img/Mask Group 1.png',value:500},
        {title:'خطة العمل ودراسة الجدوى المالية',img:'/assets/img/Mask Group 1.png',value:500},
        {title:'خطة العمل ودراسة الجدوى المالية',img:'/assets/img/Mask Group 1.png',value:500},
        {title:'خطة العمل ودراسة الجدوى المالية',img:'/assets/img/Mask Group 1.png',value:500}
    ]
 })
}
</script>

<style>

</style>