<template>
  <div class="course-show-page__preview">
    <div class="course-show-page__preview-header">
        <h1>{{itemPage.title}}</h1>
        <h6>03 <bdi>يونيو</bdi> | 09:00 ص</h6>
    </div>
    <div class="course-show-page__preview-content">
    <div class="course-show-page__preview-content-wrapper">
      <img v-if="lectureSelected===null" :src="itemPage.image_path" 
                    class="rounded-3 w-100 h-100"/> 
        <video 
        v-else-if="lectureSelected.type=='lecture' || lectureSelected.type===null"
                   
                    class="rounded-3 w-100 h-100"
                    :src="lectureSelected.video" 
                  ></video> 
        <div v-else-if="['project','projects'].includes(lectureSelected.type)" 
                    class="rounded-3 w-100 h-100"> 
        </div>
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
import ExamDisplay from './exam-display/index'
export default {
  props:{
    itemPage:{},
    isOwner:{
      type:Boolean,
      default:false,
    }
  },
  components:{
    ExamDisplay
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
  height:350px;
  border: 1px solid;
  border-radius: 10px;
  /*overflow: auto;*/
}
</style>