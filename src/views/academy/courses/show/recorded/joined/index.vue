<template>
  <div style="margin-top: 85px " class="consult">
    <d-overlays-simple v-if="loading" />
    <div v-else-if="hasError">
      هناك خطأ غير معروف يرجي تحديث الصفحة
    </div>
    <div v-else class="container mt-5">
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
 import coursesAPI from '@/services/api/academy/courses'
 export default {
  name:'course-show-recorded',
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
         itemPage:{},
         isOwner:false
     }
  },
  methods:{
     async initializing() {
       this.loading = true;
       this.hasError = false;
             try {
                 let { data } = await coursesAPI.getItem(this.$route.params.id)
                 if (data.success) {
                    this.itemPage = data.data;
                    this.isOwner = this.itemPage.user_info.id==this.user.id
                    if((!this.isOwner && !this.itemPage.user_is_join_course) || this.itemPage.type!=='recorded'){
                      this.router_push('academy-course-show',{id:this.itemPage.id})
                    }
                  }else{
                   this.hasError = true;
                 }
             } catch (error) {
                 console.log('error', error)
                 console.log('error response', error.response)
                 this.hasError = true;
               }
 
             this.loading = false;
         }
   },
   mounted(){
     this.initializing()
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