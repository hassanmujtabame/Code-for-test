<template>
   <div class="position-relative" style="min-height:200px">
   <d-overlays-simple v-if="loading" />
   <div v-else-if="hasError">
     هناك خطأ غير معروف يرجي تحديث الصفحة
   </div>
   <div v-else class="container">
   <ItemCard v-for="(item,i) in items" :key="i"
   :item="item"
   />
 
  </div>
  </div>
  </template>
  
  <script>
  import ItemCard from './card.vue'
  import userAPI from '@/services/api/user.js'
  export default {
   name:'courses-tab',
   components:{
      ItemCard
   },
 data:()=>({
   loading:true,
   hasError:false,
   metaD:{},
   items:[]
 }),
 methods:{
 
   async initializing(){
       this.loading = true;
       try {
           let { data } = await userAPI.getCoursesUser(this.user.id)
           if(data.success){
               this.items.push(...data.data) 
 
           }else{
                 this.hasError = true;
               }
       } catch (error) {
           this.hasError = true;
           console.log('error',error);
           console.log('error response',error.response);  
       }
       this.loading = false;
   }
 },
 mounted(){
   this.initializing()
 }
 }
 </script>
 
 <style>
 
 </style>