<template>
  <div class="course-show-page__lectures">
    <div class="course-show-page__lectures-header">
      <h1>محتويات الدورة :</h1>
    </div>
    <ol class="course-show-page__lectures-content">
      <li @click="selected(lect,i)" class="course-show-page__lecture"   :class="{'selected':i===selectedLecture,'chapiter':lect.group}" v-for="(lect,i) in lectures" :key="i">
        <span class="course-show-page__title">{{(i+1)}}. {{ lect.title }}</span>
        <span v-if="!lect.group" class="course-show-page__time">{{ lect.during }}</span>
      </li>
    </ol>
  </div>
</template>

<script>
export default {

  data:()=>{
    return {
      selectedLecture:0,
      lecture:{id:1,during:'02.53',title:'مقدمة مالية',video:'https://www.youtube.com/embed/dGG9pWXS3ZQ'},
      lectures:[
      {id:1,during:'02.53',date:'2010-12-11T09:00',group:false,title:'مقدمة',video:'https://www.youtube.com/embed/dGG9pWXS3ZQ'},
      {id:2,during:'02.53',date:'2010-12-11T09:00',group:false,title:'خطة',video:'https://www.youtube.com/embed/dGG9pWXS3ZQ'},
      {id:3,during:'02.53',date:'2010-12-11T09:00',group:false,title:'مقدمة مالية',video:'https://www.youtube.com/embed/dGG9pWXS3ZQ'},
      {id:3,during:'02.53',date:'2010-12-11T09:00',group:false,title:'علم الماليات',video:'https://www.youtube.com/embed/dGG9pWXS3ZQ'},
      {id:3,during:'02.53',date:'2010-12-11T09:00',group:false,title:'طريقة العمل',video:'https://www.youtube.com/embed/dGG9pWXS3ZQ'},
      {id:3,during:'02.53',date:'2010-12-11T09:00',group:false,title:'ما العمل؟',video:'https://www.youtube.com/embed/dGG9pWXS3ZQ'},
      {id:3,during:'02.53',date:'2010-12-11T09:00',group:false,title:'دراسة الجدوى',video:'https://www.youtube.com/embed/dGG9pWXS3ZQ'},
      {id:3,during:'02.53',date:'2010-12-11T09:00',group:true,title:'مشروعك الأول',video:'https://www.youtube.com/embed/dGG9pWXS3ZQ'},
      {id:3,during:'02.53',date:'2010-12-11T09:00',group:false,title:'خطة العمل ودراسة الجدوى المالية',video:'https://www.youtube.com/embed/dGG9pWXS3ZQ'},
      {id:1,during:'02.53',date:'2010-12-11T09:00',group:false,title:'مقدمة',video:'https://www.youtube.com/embed/dGG9pWXS3ZQ'},
      {id:2,during:'02.53',date:'2010-12-11T09:00',group:false,title:'خطة',video:'https://www.youtube.com/embed/dGG9pWXS3ZQ'},
      {id:3,during:'02.53',date:'2010-12-11T09:00',group:false,title:'مقدمة مالية',video:'https://www.youtube.com/embed/dGG9pWXS3ZQ'},
      {id:3,during:'02.53',date:'2010-12-11T09:00',group:false,title:'علم الماليات',video:'https://www.youtube.com/embed/dGG9pWXS3ZQ'},
      {id:3,during:'02.53',date:'2010-12-11T09:00',group:false,title:'طريقة العمل',video:'https://www.youtube.com/embed/dGG9pWXS3ZQ'},
      {id:3,during:'02.53',date:'2010-12-11T09:00',group:false,title:'ما العمل؟',video:'https://www.youtube.com/embed/dGG9pWXS3ZQ'},
      {id:3,during:'02.53',date:'2010-12-11T09:00',group:false,title:'دراسة الجدوى',video:'https://www.youtube.com/embed/dGG9pWXS3ZQ'},
      {id:3,during:'02.53',date:'2010-12-11T09:00',group:true,title:'مشروعك الأول',video:'https://www.youtube.com/embed/dGG9pWXS3ZQ'},
      {id:3,during:'02.53',date:'2010-12-11T09:00',group:false,title:'خطة العمل ودراسة الجدوى المالية',video:'https://www.youtube.com/embed/dGG9pWXS3ZQ'},

      ]
    }
  },
  methods:{
    selected(lect,i){
      if(lect.group) return;
      this.selectedLecture = i
    }
  }
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
}
.course-show-page__lectures-header{
  margin:20px 0;
}
.course-show-page__lectures-header>h1{
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
.course-show-page__time{
  flex-shrink: 0;
}
.course-show-page__lecture.selected{
  background: rgba(31, 185, 179, 0.2);
}
</style>