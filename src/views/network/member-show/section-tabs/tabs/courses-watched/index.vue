<template>
 <div>
 <ItemCard />
 <ItemCard />
 <ItemCard />
</div>
</template>

<script>
import ItemCard from './card.vue'
import blogsAPI from '@/services/api/blogs.js'
export default {
 name:'courses-tab',
 components:{
    ItemCard
 },
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
  //this.loadList()
 }

}
</script>

<style>

</style>