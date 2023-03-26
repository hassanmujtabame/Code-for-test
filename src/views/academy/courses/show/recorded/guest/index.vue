<template>
       <div class="mt-5">
       <SectionHeader  :itemPage="itemPage" />
     </div>
   </template>

   <script>
   import SectionHeader from './sections/section-header/index.vue'
    //import coursesAPI from '@/services/api/academy/courses'
   export default {
    name:'course-show-recorded',
    props:{
      itemPage:{},
      isOwner:{
        type:Boolean,
        default:false,
      }
    },
    components:{
       SectionHeader
    },
    data:()=>{
       return {
           loading:false,
           hasError:false,
       }
    },
    methods:{
     
     },
     mounted(){
  
     }
   }
   </script>
   
   <style scoped>
   </style>