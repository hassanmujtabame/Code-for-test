<template>
       <div style="margin-top: 85px " class="consult">
    <d-overlays-simple v-if="loading" />
    <div v-else-if="hasError">
      هناك خطأ غير معروف يرجي تحديث الصفحة
    </div>
    <div v-else >
        
       <SectionHeader  :itemPage="itemPage" />
       <div  style="max-width:628px" class="px-5">
       <SectionDesc  :itemPage="itemPage" />
       <SectionWhatLearn :itemPage="itemPage" />
       <div class="mt-4">
       <SectionAttachments hideHeader v-if="['live'].includes(itemPage.type)" :itemPage="itemPage" />
      </div>
       <SectionLectures v-if="itemPage.type=='recorded'" :itemPage="itemPage" />
       <SectionInstructors  :itemPage="itemPage" />
       <div class="mt-4">
       <SectionRates :itemPage="itemPage"/>
      </div>
      <SectionSimilarCourses :itemPage="itemPage" />
      </div>
      <cardFixed :itemPage="itemPage" :isOwner="isOwner"/>
       <watchVideoLecture />

     </div>
     </div>
   </template>

   <script>
   import SectionHeader from './sections/section-header/index.vue'
   import SectionDesc from './sections/section-desc/index.vue'
   import SectionWhatLearn from './sections/section-what-learn/index.vue'
   import SectionLectures from './sections/section-lectures/index.vue'
   import SectionInstructors from './sections/section-instructors/index.vue'
   import SectionRates from './sections/section-rates/index.vue'
   import SectionSimilarCourses from './sections/section-similar-courses/index.vue'
   import SectionAttachments from './sections/section-attachments'
   import watchVideoLecture from './dialogs/watch-video/index'
   import cardFixed from './card-fixed.vue'
    import academyAPI from '@/services/api/academy'
   export default {
    name:'course-show-recorded',
    components:{
       SectionHeader,
       SectionDesc,
       SectionWhatLearn,
       SectionLectures,
       SectionInstructors,
       SectionRates,
       SectionSimilarCourses,
       SectionAttachments,
       watchVideoLecture,
       cardFixed,
    },
    data:()=>{
       return {
           loading:true,
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
                 let { data } = await academyAPI.coursesApi.getItem(this.$route.params.id)
                 if (data.success) {
                    this.itemPage = data.data;
                    this.isOwner = this.itemPage.user_info.id==this.user.id
                   
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