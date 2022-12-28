<template>
   <div>
    <d-overlays-simple v-if="loading" />
    <div v-else-if="hasError">
      هناك خطأ غير معروف يرجي تحديث الصفحة
    </div>
    <div v-else>
            <h5 class="m-c"> {{ item.title }}
            </h5>
            <p v-html="item.description">
                 </p>
          </div>
        </div>
</template>

<script>
import storiesAPI from '@/services/api/stories';
export default {
 name:'story-tab',
 props:{
  userId:{
    type:[String,Number]
  }
 },
 data:()=>({
  loading:true,
  item:{}
 }),
 methods:{
  async loadList(){
    this.loading = true;
      try {
        let { data} = await storiesAPI.getMyStory()
        if(data.success){
          this.item=data.data
        }
      } catch (error) {
        console.log('error',error)
        console.log('error response',error.response)
      }
    this.loading = false;
  }
 },
 mounted(){
  this.loadList()
 }
}
</script>

<style>

</style>