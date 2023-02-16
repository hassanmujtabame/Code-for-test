<template>
  <div class="course-show-page__lectures">
    <div class="course-show-page__lectures-header">
      <h1>محتويات الدورة :</h1>
      <div v-if="isOwner" class="course-show-page__lectures-header_btns">
        <button @click="activeDraggable=!activeDraggable"  class="btn" :class="{'c-save':activeDraggable}">
        <i class="fa fa-align-justify" ></i>
        </button>
        <AddLectureBtn @add="showAddDialog" />
      </div>
    </div>
 <div class="position-relative">
  <d-overlays-simple v-if="loading" />
    <draggable :move="onMove" @end="onEnd"  tag="ol" group="people" class="course-show-page__lectures-content" v-model="lectures"  ghost-class="ghost" handle=".handle">
   
      <transition-group >
      <li @click="selected(lect,i)" class="course-show-page__lecture"   :class="{'selected':i===selectedLecture,'chapiter':lect.group}" v-for="(lect,i) in lectures" :key="i">
        <span class="course-show-page__title">{{(i+1)}}. {{ lect.title }}</span>
        <span v-if="isOwner" class="course-show-page__actions">
          <i v-if="isDraggable" class="fa fa-align-justify handle"></i>
          <button v-if="!isDraggable" class="btn " @click="showEditDialog(lect)"><i class="fa fa-pen" style="color:blue"></i></button>
          <button v-if="!isDraggable" class="btn " @click="showConfirmDeleteItem(lect)"><i class="fa-solid fa-trash"  style="color:red"></i></button>
        </span>
        <span v-if="!lect.group" class="course-show-page__time">{{ lect.time }}</span>
      </li>
    </transition-group>
      </draggable>
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
    shouldDisableDragging() {
      // Check some condition to determine if sorting should be disabled
      return !this.activeDraggable;
    }
  },
  data:()=>{
    return {
      isDraggable: false,
      activeDraggable:false,
      loading:false,
      selectedLecture:0,
      lecture:{id:1,during:'02.53',title:'مقدمة مالية',video:'https://www.youtube.com/embed/dGG9pWXS3ZQ'},
      lectures:[],
    }
  },
  methods:{
    showAddDialog(type){
      /**type:lecture | exam | project */
        this.fireOpenDialog(`add-${type}-course-dialog`,{page:this.itemPage,item:{id:null,title:null,video:null}})
    },
    showEditDialog(lect){
      console.mylog('lect',lect)
      let dialog  =null;
      if(lect.type===null || lect.type=='lecture')
      dialog = 'add-lecture-course-dialog'
      if(lect.type=='projects' || lect.type=='project')
      dialog = 'add-project-course-dialog';
      console.mylog('lect',dialog)
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
    async deleteItem(lect){
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
      if(type=='update'){
        let index  = this.lectures.findIndex(l=>l.id===item.id)
      if(index){
        this.lectures[index] = Object.assign(this.lectures[index],item)
      }
      return;
      }
      if(type=='add'){
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
    onMove(/*evt, originalEvent*/){
      //console.mylog('evt',evt)
      //console.mylog('originalEvent',originalEvent);
      return true;
    },
    selected(lect,i){
      if(lect.group) return;
      this.selectedLecture = i
    },
     async initializing(){
      this.loading = true;
      try {
        let {data} = await academyAPI.lecturesAPI.getAll(this.itemPage.id)
        if(data.success){
          this.lectures = data.data
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
  padding-right: 2rem;
  cursor: pointer;
  /*height: calc(100% - 76px);*/
  height: 400px;
  overflow-y:auto ;
 
}
.course-show-page__lecture{
  padding: 5px 10px;
  display: flex;
  justify-content: space-between;
  height: 40px;
  align-items: center;
  position: relative;

}
.course-show-page__lecture.chapiter>.course-show-page__title{
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


</style>