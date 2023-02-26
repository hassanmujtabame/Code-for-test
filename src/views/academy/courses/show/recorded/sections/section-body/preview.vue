<template>
  <div class="course-show-page__preview">
    <div class="course-show-page__preview-header d-flex">
      <div class="d-flex flex-column flex-grow-1">
        <h1>{{itemPage.title}}</h1>
        <h6>03 <bdi>يونيو</bdi> | 09:00 ص</h6>
      </div>
        <div v-if="isTablet || isMobile" class="justify-self-end align-self-center">
          <button class="btn btn-secondary" type="button" data-bs-toggle="offcanvas" data-bs-target="#course-menu-drawer" aria-controls="course-menu-drawer">
            <i class="fa fa-bars"></i>
          </button>
        </div>
    </div>
    <div class="course-show-page__preview-content">
    <div class="course-show-page__preview-content-wrapper">
      <template  v-if="lectureSelected===null">
        <finishedShow v-if="itemPage.is_completed && userAcademyRole=='student'"  :itemPage="itemPage"/>
      <welcomeShow v-else :itemPage="itemPage"/> 
      </template>
        <LectureShow 
        v-else-if="lectureSelected.type=='lecture' || lectureSelected.type===null"
        :itemPage="itemPage"
        :lectureSelected="lectureSelected" /> 

        <ProjectShow v-else-if="['project','projects'].includes(lectureSelected.type)" 
        :itemPage="itemPage"
        :lectureSelected="lectureSelected"            
        /> 
        <div v-else-if="lectureSelected.type=='exam'" 
                    class="rounded-3 w-100 h-100"> 
                    <ExamDisplay :exam="lectureSelected" />
        </div>
        <div v-else  class="rounded-3 w-100 h-100 text-center"> 
          <h1>غير معروف</h1>
        </div>
        </div>
    </div>
  </div>
</template>

<script>
import welcomeShow from './welcome-show/index.vue' 
import finishedShow from './finished-display/index.vue' 
import LectureShow from './lecture-display/index'
import ExamDisplay from './exam-display/index'
import ProjectShow from './project-display/index'
export default {
  name:'preview-zone',
  props:{
    itemPage:{},
    isOwner:{
      type:Boolean,
      default:false,
    }
  },
  components:{
    ExamDisplay,
    welcomeShow,
    finishedShow,
    LectureShow,
    ProjectShow
  },
  data:()=>{
    return {
      lectureSelected:null,
    }
  },
  methods:{
    updateLecture(item){
      console.mylog('updateLecture',item)
      this.lectureSelected = item
    }
  },
  created(){
    window.EventBus.listen('course-lecture-selected',this.updateLecture)
   
  },
  beforeDestroy(){
    window.EventBus.off('course-lecture-selected',this.updateLecture)
   
  },
}
</script>

<style scoped>

.course-show-page__preview-content-wrapper{
  height: calc(500px - 88px);
  /*border: 1px solid;*/
  border-radius: 10px;
  overflow: auto;
}
</style>