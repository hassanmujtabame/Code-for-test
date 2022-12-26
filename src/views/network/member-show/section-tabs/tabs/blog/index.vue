<template>
  <div>
   <ItemCard v-for="(item,i) in items" :key="i" 
   :title="item.title"
   :date="item.date"
   :liked="item.liked"
   :watched="item.watched"
   :itemId="item.id"
   />

  </div>
</template>

<script>
import blogsAPI from '@/services/api/blogs';
import ItemCard from './card.vue'
export default {
 name:'blog-tab',
 props:{
  userId:{
    type:[String,Number]
  }
 },
 components:{
    ItemCard
 },
 data:()=>({
  loading:true,
  items:[]
 }),
 methods:{
  async loadList(){
    this.loading = true;
      try {
        let { data} = await blogsAPI.getAll({user_id:this.userId})
        if(data.success){
          this.items.push(...data.data)
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