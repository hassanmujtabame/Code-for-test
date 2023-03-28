<template>
  <div  class="container mt-5">
         <div class="course-show-page">
     <SectionHeaderOwner  :itemPage="itemPage" v-if="isOwner && userAcademyRole=='instructor'"/>
     <SectionHeader  :itemPage="itemPage" v-else />
     <SectionBody  :itemPage="itemPage" :isOwner="isOwner"/>
 </div>
 
  <AddLectureDialog/>
  <AddExamDialog />
  <AddProjectDialog />
  <updateCourseDialog group="update-course" :isOwner="isOwner  && userAcademyRole=='instructor'" />
   </div>
 </template>
 
 <script>
 import SectionHeader from './sections/section-header/index.vue'
 import SectionHeaderOwner from './sections/section-header-owner/index.vue'
 import SectionBody from './sections/section-body/index.vue'
 import AddLectureDialog from '../dialogs/add-lecture/index.vue'
 import AddExamDialog from '../dialogs/add-exam/index.vue'
 import AddProjectDialog from '../dialogs/add-project/index.vue'
 import updateCourseDialog from '@/views/academy/instructor/your-courses/dialogs/add-course/recorded-course'
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
     SectionBody,
     SectionHeaderOwner,
     AddLectureDialog,
     AddExamDialog,
     AddProjectDialog,
     updateCourseDialog
  },
  data:()=>{
     return {
         loading:false,
         hasError:false,
     }
  }
 }
 </script>
 
 <style scoped>
 .course-show-page{
     width: 100%;
     background: white;
     padding: 5px;
     border-radius: 10px 20px;
 }
 </style>