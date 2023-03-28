<template>
       <div class="mt-5">
        
       <SectionHeader  :itemPage="itemPage" />
       <div  style="max-width:628px" class="px-5">
       <SectionDesc  :itemPage="itemPage" />
       <SectionLectures  :itemPage="itemPage" />
       <SectionInstructors  :itemPage="itemPage" />
       <div class="mt-5">
       <SectionRates :itemPage="itemPage"/>
      </div>
      <SectionSimilarCourses :itemPage="itemPage" />
      </div>
      <cardFixed :itemPage="itemPage" :isOwner="isOwner"/>
       <watchVideoLecture />

     </div>
   </template>

   <script>
   import SectionHeader from './sections/section-header/index.vue'
   import SectionDesc from './sections/section-desc/index.vue'
   import SectionLectures from './sections/section-lectures/index.vue'
   import SectionInstructors from './sections/section-instructors/index.vue'
   import SectionRates from './sections/section-rates/index.vue'
   import SectionSimilarCourses from './sections/section-similar-courses/index.vue'
   
   import watchVideoLecture from './dialogs/watch-video/index'
   import cardFixed from './card-fixed.vue'
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
       SectionDesc,
       SectionLectures,
       SectionInstructors,
       SectionRates,
       SectionSimilarCourses,
       watchVideoLecture,
       cardFixed,
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