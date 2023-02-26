<template>
  <div class="course-show-page__lectures" :class="{'offcanvas offcanvas-end':isTablet || isMobile}" tabindex="-1" :id="drawerId" aria-labelledby="course-menu-drawerLabel">
  <div class="course-show-page__lectures-close" :class="{'show':isTablet || isMobile}">
    <button :id="drawerId+'-close'" data-bs-dismiss="offcanvas" aria-label="Close" class="btn btn-danger"><i class="fa fa-window-close" aria-hidden="true"></i></button>
    </div>
    <div class="course-show-page__lectures-header">
      <h1>محتويات الدورة :</h1>
      <div v-if="isOwner" class="course-show-page__lectures-header_btns">
        <button @click="activeDraggable=!activeDraggable"  class="btn" :class="{'c-save':activeDraggable}">
        <i class="fa fa-align-justify" ></i>
        </button>
        <AddLectureBtn @add="showAddDialog" />
      </div>
    </div>
 <div class="course-show-page__lectures-content"  >

  <d-overlays-simple v-if="loading" />
  <div class="course-show-page__lectures-content-wrapper"  >
    <draggable :move="onMove" @end="onEnd"  tag="ol" group="lectures" v-model="lectures"  ghost-class="ghost" handle=".handle">
   
      <transition-group >
      <li @click="selected(lect,i)" class="course-show-page__lecture"   :class="{'selected':lect.uuid===selectedLecture,'lecture-project':['project','projects'].includes(lect.type)}" v-for="(lect,i) in lectures" :key="i">
        <span class="course-show-page__title">{{(i+1)}}. {{ lect.title }}</span>
        <span v-if="canEdit" class="course-show-page__actions">
          <i v-if="isDraggable" class="fa fa-align-justify handle"></i>
          <button v-if="!isDraggable" class="btn " @click="showEditDialog(lect)"><i class="fa fa-pen" style="color:blue"></i></button>
          <button v-if="!isDraggable" class="btn " @click="showConfirmDeleteItem(lect)"><i class="fa-solid fa-trash"  style="color:red"></i></button>
        </span>
        <span ><i v-if="lect.is_completed" style="color:green" class="fa fa-circle-check px-1"></i></span>
        <span v-if="['lecture'].includes(lect.type) || !lect.type" class="course-show-page__time">{{ lect.time }}</span>
      </li>
    </transition-group>
      </draggable>
      <div v-if="course.exams.length>0">
      <h1 class="course-show-page__lecture-section">الاختبارات</h1>
      <draggable  @end="onEndExam"  tag="ol" group="exams" v-model="lectures"  ghost-class="ghost" handle=".handle">
        <li @click="selected(exam,i)" class="course-show-page__lecture lecture-project"   :class="{'selected':exam.uuid===selectedLecture}" v-for="(exam,i) in course.exams" :key="i">
        <span class="course-show-page__title">{{(i+1)}}. {{ exam.title }}</span>
        <span v-if="canEdit" class="course-show-page__actions">
          <i v-if="isDraggable" class="fa fa-align-justify handle"></i>
          <template v-else>
          <button class="btn " @click="showEditDialog({...exam,type:'exam'})"><i class="fa fa-pen" style="color:blue"></i></button>
          <button  class="btn " @click="showConfirmDeleteItem({...exam,type:'exam'})"><i class="fa-solid fa-trash"  style="color:red"></i></button>
        </template>
        </span>

      </li>
      </draggable>
    </div>
    </div>
    </div>
   
  </div>
</template>

<script>
import academyAPI from '@/services/api/academy'
import AddLectureBtn from './add-lecture-btn'
import draggable from 'vuedraggable'
export default {
  props:{
    itemPage:{},
    isOwner:{
      type:Boolean,
      default:false,
    }
  },
  components:{
    AddLectureBtn,
    draggable
  },
  watch: {
    shouldDisableDragging(newValue) {
      this.isDraggable = !newValue;
    }
  },
  computed: {
    canEdit(){
      return this.isOwner && this.userAcademyRole == 'instructor'
    },
    shouldDisableDragging() {
      // Check some condition to determine if sorting should be disabled
      return !this.activeDraggable;
    }
  },
  data:(vm)=>{
    return {
      course:{...vm.itemPage,exams:vm.itemPage.exams.map(l=>{
            return {...l,type:'exam',uuid:vm.generateRandomString(16)}
          })},
      isDraggable: false,
      activeDraggable:false,
      loading:false,
      selectedLecture:null,
      lecture:{id:1,during:'02.53',title:'مقدمة مالية',video:'https://www.youtube.com/embed/dGG9pWXS3ZQ'},
      lectures:[],
      drawerId:'course-menu-drawer'
    }
  },
  methods:{
    closeDrawer(){
     
      var myOffcanvas = document.getElementById(this.drawerId+'-close')
      window.$(myOffcanvas).click()
    },
    showAddDialog(type){
      /**type:lecture | exam | project */
        this.fireOpenDialog(`add-${type}-course-dialog`,{page:this.itemPage,item:{id:null,title:null,video:null}})
    },
    showEditDialog(lect){

      let dialog  =null;
      if(lect.type===null || lect.type=='lecture')
      dialog = 'add-lecture-course-dialog'
      if(lect.type=='projects' || lect.type=='project')
      dialog = 'add-project-course-dialog';
      if(lect.type=='exam' )
      dialog = 'add-exam-course-dialog';
      if(dialog)
      this.fireOpenDialog(dialog,{page:this.itemPage,item:{...lect}})
    },
    showConfirmDeleteItem(lect){
        let dataEvent={
          title:'هل حقا تريد حذف هذا الدرس؟',
          description:lect.title,
          groupBtns:'d-flex justify-content-evenly',
          btns:[
            {title:'تراجع',class:"btn btn-custmer btn-danger"},
            {title:this.$t('confirm_delete'),action:()=>this.deleteItem(lect),class:"btn btn-custmer"},
          ]
        }
        this.showConfirmMsg(dataEvent)
    },
    async deleteExam(exam){
      try {

      let {data} =  await academyAPI.examsAPI.deleteExam(exam.id)
      if(data.success){
          let index  = this.course.exams.findIndex(l=>l.id===exam.id)
            if(index>-1){
              this.course.exams.splice(index,1)
            }
      }else{
          window.SwalError(data.message)
      }
      } catch (error) {
      if(error.response){
          let response = error.response
          if (response.status == 422) {
              this.setErrorsForm(this.$refs.form,response)
          }
      }
      }
    },

    async deleteItem(item){
      if(item.type=='exam')
      await this.deleteExam(item)
      else
      await this.deleteLecture(item)
    },
    async deleteLecture(lect){
        console.mylog('deleting ...',lect)
        try {

                        let {data} =  await academyAPI.lecturesAPI.deleteItem(lect.id)
                        if(data.success){
                           
                            let index  = this.lectures.findIndex(l=>l.id===lect.id)
                              if(index>-1){
                                this.lectures.splice(index,1)
                              }
                        }else{
                            window.SwalError(data.message)
                        }
                    } catch (error) {
                        if(error.response){
                            let response = error.response
                            if (response.status == 422) {
                                this.setErrorsForm(this.$refs.form,response)
                            }
                        }
                    }
                
      
    },
    updateLectures({item,type}){
      if(type=="completed"){
        let index  = this.lectures.findIndex(l=>l.id===item.id)
        if(index>-1){
          this.lectures[index].is_completed = true;
        }
        return;
      }
      if(type=='update'){
        if(item.type=='exam'){
        let index  = this.course.exams.findIndex(l=>l.id===item.id)
        console.mylog('updating ..',index,item,this.course.exams[index])
          if(index>-1){
            this.course.exams[index] = Object.assign(this.course.exams[index],item)
          }
      }else{
        let index  = this.lectures.findIndex(l=>l.id===item.id)
        if(index>-1){
          this.lectures[index] = Object.assign(this.lectures[index],item)
        }
      }
      return;
      }
      if(type=='add'){
        if(item.type=='exam')
        this.course.exams.push(item)
        else
        this.lectures.push(item)
      }
      if(type=='all'){
        this.initializing()
      }
    },
    async onEnd(evt){
      console.mylog('onEnd evt',evt)
      let ob= {...this.lectures[evt.newIndex]}
      console.mylog('onEnd ob',ob);
      console.mylog('old level',ob.level);
      console.mylog('new level',evt.newIndex+1);
      this.loading = true
      try{
        await academyAPI.lecturesAPI.orderItem(ob.id,{level:evt.newIndex+1})

      }catch(error){
        //
      }
      this.loading =false;
      return true;
    },
    async onEndExam(evt){
      console.mylog('onEnd evt',evt)
      let ob= {...this.course.exams[evt.newIndex]}
      console.mylog('onEnd ob',ob);
      console.mylog('old level',ob.level);
      console.mylog('new level',evt.newIndex+1);
      this.loading = true
      try{
        await academyAPI.examsAPI.orderItem(ob.id,{level:evt.newIndex+1})

      }catch(error){
        //
      }
      this.loading =false;
      return true;
    },
    onMove(/*evt, originalEvent*/){
      //console.mylog('evt',evt)
      //console.mylog('originalEvent',originalEvent);
      return true;
    },
    selected(lect){
      if(lect.group) return;
      this.closeDrawer()
      /** if student and is joinin this course */
      if(this.userAcademyRole=='student' && !this.itemPage.user_is_join_course){
        let DataEvt = {
          title:'أنت غير مشترك في الدورة !',
          description:`لا يمكنك مشاهدة الدروس ولا تحميل المرفقات الا بعد اشتركاك في الدورة `,
          btns:[
            {title:this.$t('join_confirmation'),action:()=>this.joinCourse()}
          ]
        }
        this.showConfirmMsg(DataEvt);
        return;
      }
      this.selectedLecture = lect.uuid
      this.fireEvent('course-lecture-selected',lect)
    },
  async joinCourse(){
    try {
      let {data} = await academyAPI.coursesApi.joinCourse(this.itemPage);
      if(data.success){
        let dataEvt ={
            title:'تم الانضمام الى هذه الدورة بنجاح',
            description:'',
            btns:[
              {title:this.$t('meeting-page')},
              {title:this.$t('undo-joining'),action:()=>this.confirmCancelJoin()},
            ]
    }
    this.showSuccessMsg(dataEvt)
      }else{
        window.SwalError(data.message)
      }
    } catch (error) {
      window.DHelper.catchException.call(this,error)
    }
  },
  async confirmCancelJoin(){
        try {
            let {data} = await academyAPI.coursesApi.cancelJoinCourse(this.itemPage.id)
            if(data.success){
              //
            }
        } catch (error) {
          window.DHelper.catchException.call(this,error)
        }
    },
     async initializing(){
      this.loading = true;
      try {
        let {data} = await academyAPI.lecturesAPI.getAll(this.itemPage.id)
        if(data.success){
          this.lectures = data.data.map(l=>{
            return {is_completed:false,...l,uuid:this.generateRandomString(16)}
            
          })
        }
      } catch (error) {
        console.mylog('error',error)
      }
      this.loading = false;

    }
  },
  mounted(){
    window.$('.dropdown-toggle').dropdown();
    this.initializing()
  },
  created(){
    window.EventBus.listen('update-lectures',this.updateLectures)
   
  },
  beforeDestroy(){
    window.EventBus.off('update-lectures',this.updateLectures)

  },
}
</script>

<style>
.course-show-page__lectures{
  background: #F6F8F9;
  max-width: 100%;
  width: 100%;
  max-height: 100%;
  height: 100%;
  padding-top: 20px;
  margin: 0 12px;
}
.course-show-page__lectures-header{
  margin:20px 0;
  display: flex;
}
.course-show-page__lectures-header_btns{
  flex-shrink: 0;
  display: flex;
}
.course-show-page__lectures-header>h1{
  flex: 1;
  /* 24 */
  padding-right: 1.3rem;
  margin: 0;
font-style: normal;
font-weight: 400;
font-size: 24px;
line-height: 32px;
/* identical to box height, or 133% */

text-transform: capitalize;

color: #414042;
}
.course-show-page__lectures-content{
  position: relative;

  /*height: calc(100% - 76px);*/
  height: 400px;
  overflow-y:auto ;
 
}
.course-show-page__lectures-content-wrapper{
  padding-right: 0rem;

}
.course-show-page__lecture{
  padding: 5px 10px;
  display: flex;
  justify-content: space-between;
  height: 40px;
  align-items: center;
  position: relative;
  cursor: pointer;

}
.course-show-page__lecture.lecture-project>.course-show-page__title{
  color:var(--m-color)
}
.course-show-page__lecture>span{
  font-style: normal;
font-weight: 400;
font-size: 16px;
line-height: 17px;
/* identical to box height, or 106% */

color: #414042;
}
.course-show-page__title{
  flex: 1;
}
.course-show-page__time,.course-show-page__actions{
  flex-shrink: 0;
}
.course-show-page__actions {
    position: absolute;
    right: -28px;
    top: calc(50% - 10px);
}
.course-show-page__actions>button{
  font-size: 10px;
    padding: 2px;
}
.course-show-page__lecture.selected{
  background: rgba(31, 185, 179, 0.2);
}.ghost{
  border:2px dashed red;
}
.course-show-page__lecture-section{
  font-size: 20px;
    color: #959090;
    border-bottom: 1px solid #d7d7d7;
    margin-right: -2rem;
    padding: 0 2rem;
}
.course-show-page__lectures-close{
  position: absolute;
  top: 0;
  right:0;
  left:auto;
  padding:5px;
  display: none;
  color:red;
}
html[lang=en] .course-show-page__lectures-close{
  left:0;
  right:auto;
}

  .course-show-page__lectures.offcanvas{
    margin: 0;
    /*position:absolute;*/

  }
  html[lang=en] .course-show-page__lectures.offcanvas{
    right:0;
    left:auto;
}
.course-show-page__lectures-close.show{
  display: block !important;
}

</style>