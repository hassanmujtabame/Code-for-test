<template>
   <div class="position-relative container" style="min-height:200px">
       <d-single-list
       :call-list="initializing" 
       :paginate="3"
       showMore="أعرض المزيد من المعارض"
       noMoreItems='لا يوجد المزيد من المعارض'
       style="min-height:200px"
       >
           <template v-slot="{item}">
   <CardItem  
   :itemId="item.id"
    :title="item.title"
    :price="item.price"
    :date="item.date_publish"
    :image="item.image"
    :place="item.city"
    :status="item.status"

   />
 </template>
   </d-single-list>
   </div>
 </template>
 
 <script>
  import userAPI from '@/services/api/user.js'
 import CardItem from './card.vue';
 export default {
 name:'d-tab-pane-your-blogs',
 components:{
   CardItem,
 },
 data:()=>({
   loading:false,
 }),
 methods:{
  async initializing(metaInfo){
   this.loading = true;
   try {
 
      return await userAPI.getExhibitionstUser(this.$route.params.id,metaInfo)
     
   } catch (error) {
       //
   }
   this.loading = false;
 
  }
 }
 }
 </script>
 
 <style>
 
 </style>