<template>
       <div class="mt-5">
       <SectionHeader  :itemPage="itemPage" />
       <SectionDesc  :itemPage="itemPage" />
     </div>
   </template>

   <script>
   import SectionHeader from './sections/section-header/index.vue'
   import SectionDesc from './sections/section-desc/index.vue'
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
       SectionHeader,
       SectionDesc
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
   
   <style>
   .course-guest-section__title{
    font-style: normal;
    font-weight: 600;
    font-size: 24px;
    line-height: 40px;
      /* identical to box height, or 167% */
      display: flex;
      align-items: center;
      text-transform: capitalize;
      /* Turquoise text */
      color: #0C2F33;
      margin: 0;
   }
   </style>