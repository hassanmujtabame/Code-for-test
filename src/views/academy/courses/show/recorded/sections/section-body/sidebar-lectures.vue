<template>
  <div class="course-show-page__lectures">
    <div class="course-show-page__lectures-header">
      <h1>محتويات الدورة :</h1>
      <div v-if="isOwner" class="course-show-page__lectures-header_btns">
       <AddLectureBtn @add="showAddDialog" />
        
      </div>
    </div>
    <div v-if="loading" class="course-show-page__lectures-content position-relative">
      <d-overlays-simple  />
    </div>
    <ol v-else class="course-show-page__lectures-content">
      <li @click="selected(lect,i)" class="course-show-page__lecture"   :class="{'selected':i===selectedLecture,'chapiter':lect.group}" v-for="(lect,i) in lectures" :key="i">
        <span class="course-show-page__title">{{(i+1)}}. {{ lect.title }}</span>
        <span v-if="isOwner" class="course-show-page__actions">
          <button class="btn " @click="showEditDialog(lect)"><i class="fa fa-pen" style="color:blue"></i></button>
          <button  class="btn " @click="showConfirmDeleteItem(lect)"><i class="fa-solid fa-trash"  style="color:red"></i></button>
        </span>
        <span v-if="!lect.group" class="course-show-page__time">{{ lect.time }}</span>
      </li>
    </ol>
  </div>
</template>

<script>
import academyAPi from '@/services/api/academy'
import AddLectureBtn from './add-lecture-btn'
export default {
  props:{
    itemPage:{},
    isOwner:{
      type:Boolean,
      default:false,
    }
  },
  components:{
    AddLectureBtn
  },
  data:()=>{
    return {
      loading:false,
      selectedLecture:0,
      lecture:{id:1,during:'02.53',title:'مقدمة مالية',video:'https://www.youtube.com/embed/dGG9pWXS3ZQ'},
      lectures:[],
      lecturesOld:[
      {id:1,during:'02.53',date:'2010-12-11T09:00',group:false,title:'مقدمة',video:'https://www.youtube.com/embed/dGG9pWXS3ZQ'},
      {id:2,during:'02.53',date:'2010-12-11T09:00',group:false,title:'خطة',video:'https://www.youtube.com/embed/dGG9pWXS3ZQ'},
      {id:3,during:'02.53',date:'2010-12-11T09:00',group:false,title:'مقدمة مالية',video:'https://www.youtube.com/embed/dGG9pWXS3ZQ'},
      {id:4,during:'02.53',date:'2010-12-11T09:00',group:false,title:'علم الماليات',video:'https://www.youtube.com/embed/dGG9pWXS3ZQ'},
      {id:5,during:'02.53',date:'2010-12-11T09:00',group:false,title:'طريقة العمل',video:'https://www.youtube.com/embed/dGG9pWXS3ZQ'},
      {id:6,during:'02.53',date:'2010-12-11T09:00',group:false,title:'ما العمل؟',video:'https://www.youtube.com/embed/dGG9pWXS3ZQ'},
      {id:7,during:'02.53',date:'2010-12-11T09:00',group:false,title:'دراسة الجدوى',video:'https://www.youtube.com/embed/dGG9pWXS3ZQ'},
      {id:8,during:'02.53',date:'2010-12-11T09:00',group:true,title:'مشروعك الأول',video:'https://www.youtube.com/embed/dGG9pWXS3ZQ'},
      {id:9,during:'02.53',date:'2010-12-11T09:00',group:false,title:'خطة العمل ودراسة الجدوى المالية',video:'https://www.youtube.com/embed/dGG9pWXS3ZQ'},
      {id:10,during:'02.53',date:'2010-12-11T09:00',group:false,title:'مقدمة',video:'https://www.youtube.com/embed/dGG9pWXS3ZQ'},
      {id:11,during:'02.53',date:'2010-12-11T09:00',group:false,title:'خطة',video:'https://www.youtube.com/embed/dGG9pWXS3ZQ'},
      {id:12,during:'02.53',date:'2010-12-11T09:00',group:false,title:'مقدمة مالية',video:'https://www.youtube.com/embed/dGG9pWXS3ZQ'},
      {id:13,during:'02.53',date:'2010-12-11T09:00',group:false,title:'علم الماليات',video:'https://www.youtube.com/embed/dGG9pWXS3ZQ'},
      {id:14,during:'02.53',date:'2010-12-11T09:00',group:false,title:'طريقة العمل',video:'https://www.youtube.com/embed/dGG9pWXS3ZQ'},
      {id:15,during:'02.53',date:'2010-12-11T09:00',group:false,title:'ما العمل؟',video:'https://www.youtube.com/embed/dGG9pWXS3ZQ'},
      {id:16,during:'02.53',date:'2010-12-11T09:00',group:false,title:'دراسة الجدوى',video:'https://www.youtube.com/embed/dGG9pWXS3ZQ'},
      {id:17,during:'02.53',date:'2010-12-11T09:00',group:true,title:'مشروعك الأول',video:'https://www.youtube.com/embed/dGG9pWXS3ZQ'},
      {id:18,during:'02.53',date:'2010-12-11T09:00',group:false,title:'خطة العمل ودراسة الجدوى المالية',video:'https://www.youtube.com/embed/dGG9pWXS3ZQ'},

      ]
    }
  },
  methods:{
    showAddDialog(type){
      /**type:lecture | exam | project */
      if(type=='lecture'){
        this.fireOpenDialog('add-lecture-dialog',{page:this.itemPage,item:{id:null,title:null,video:null}})
      }
    },
    showEditDialog(lect){
      this.fireOpenDialog('add-lecture-dialog',{page:this.itemPage,item:{...lect}})
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
    deleteItem(lect){
      let index  = this.lectures.findIndex(l=>l.id===lect.id)
      if(index>-1){
        this.lectures.splice(index,1)
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
    selected(lect,i){
      if(lect.group) return;
      this.selectedLecture = i
    },
     async initializing(){
      this.loading = true;
      try {
        let {data} = await academyAPi.lecturesAPI.getAll(this.itemPage.id)
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
}
</style>