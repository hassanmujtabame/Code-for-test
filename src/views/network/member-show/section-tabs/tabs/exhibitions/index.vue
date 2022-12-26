<template>
    <div>
    <ItemCard 
    v-for="(item,i) in items" :key="i" 
    :image="item.image"
    :title="item.content"
    :date="item.date"
    :price="item.price"
    :place="item.place"

    />

   </div>
   </template>
   
   <script>
   import ItemCard from './card.vue'
   import exhibitionsAPI from '@/services/api/exhibitions';
   export default {
    name:'exhibitions-tab',
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
        let { data} = await exhibitionsAPI.getAll(/*{user_id:this.userId}*/)
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