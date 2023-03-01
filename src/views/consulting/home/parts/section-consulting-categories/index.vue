<template>
<div>

<div
class="d-flex justify-content-between align-items-center container my-2"
>
<h1  class="home-section-title"> أبرز مجالات الاستشارة      </h1>
<div>
  <button @click="router_push('consulting-fields')" class="more">{{ $t('more') }}</button>
</div>
</div>
<div class="row">
<div v-for="(item,i) in items" :key="i" class=" col-12 mt-3 m-auto col-md-3">
   <consultingFieldCard :item="item"/>
</div>
</div>
</div>
</template>

<script>
import consultingFieldCard from '@/components/cards/consulting-field.vue'
import consultingAPI from '@/services/api/consulting/index.js'
export default {
 name:'section-consulting-fields',
 components:{
    consultingFieldCard
 },
 data:()=>({
    items:[]
 }),
 methods:{
    async initializing(){
        try {
            let { data } = await consultingAPI.fields.getBest()
            if(data.success){
                this.items = data.data
            }
        } catch (error) {
           // 
        }
    }
 },
 mounted(){
    this.initializing()
 }
}
</script>

<style>

</style>