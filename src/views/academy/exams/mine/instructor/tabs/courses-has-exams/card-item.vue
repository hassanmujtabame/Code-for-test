<template>
    <div class="academy-course-exams-item">
    <div class="academy-course-exams-item__wrapper">
    <div class="academy-course-exams-item__body">
    <div class="academy-course-exams-item__title">
  <h1>أسم الدورة : <span>{{ item.course_name }}</span></h1>
  
    </div>
    <div class="academy-course-exams-item__description">
        <div v-for="(exam,i) in exams" :key="i" class="academy-course-exam-item">
                                    <p class="academy-course-exam-item__title">
                                      {{exam.title}}
                                    </p>
                                       <div class="academy-course-exam-item__actions "> 
                                       
                                        <button @click="showItem(exam)" class="btn btn-custmer  btn-small ">
                                            عرض
                                        </button>
                                        <button class="btn rounded-2 border-danger text-danger bg-transparent btn-small mx-2  " data-bs-toggle="modal" href="#staticBackdrop2">
                                            حذف الاختبار
                                        </button>
                                    
                                    </div>
        </div>
                              
    </div>
    </div>
    </div>
    </div>
  </template>
  
  <script>
    import academyAPI from '@/services/api/academy'
  export default {
    props:['item'],
    data:(vm)=>{
        return {
            exams:vm.item.exams
        }
    },
    methods:{
        editItem(pro){
            let {student,projects_review,...course}= this.item
            console.mylog('editItem exam',student,projects_review)
            this.fireOpenDialog('add-exam-course-dialog',{page:course,item:{...pro}})
        },
        showItem(item){
            this.fireOpenDialog('display-exam-dialog',item)
        },
        showConfirmDeleteItem(lect){
        let dataEvent={
          title:'هل حقا تريد حذف هذا الاختبار؟',
          description:lect.title,
          groupBtns:'d-flex justify-content-evenly',
          btns:[
            {title:'تراجع',class:"btn btn-custmer btn-danger"},
            {title:this.$t('confirm_delete'),action:()=>this.deleteExam(lect),class:"btn btn-custmer"},
          ]
        }
        this.showConfirmMsg(dataEvent)
    },
    async deleteExam(exam){
      try {

      let {data} =  await academyAPI.examsAPI.deleteExam(exam.id)
      if(data.success){
          let index  = this.exams.findIndex(l=>l.id===exam.id)
            if(index>-1){
              this.exams.splice(index,1)
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
    }
  }
  </script>
  
  <style scoped>
  .academy-course-exams-item{
      width: 100%;
  }
  .academy-course-exams-item__wrapper{
      display: flex;
      padding: 10px;
      border-bottom: 1px solid #CDD7D8;
      width: 100%;
  }
 .academy-course-exams-item__body{
    width: 100%; 
 } 
  span {
      color:inherit
  }
  .academy-course-exams-item__title>h1{
      margin: 0;
      font-style: normal;
  font-weight: 400;
  font-size: 20px;
  line-height: 24px;
  /* or 120% */
  
  display: flex;
  align-items: center;
  text-transform: capitalize;
  
  color: #1FB9B3;
  }
  .academy-course-exams-item__description{
      margin:10px 0;
      font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
  /* or 150% */
  
  color: #737373;
  }
  .academy-course-exam-item{
    display: flex;
  }
  .academy-course-exam-item__title{
    flex:1;
    margin: 0;
    font-style: normal;
font-weight: 400;
font-size: 20px;
line-height: 24px;
/* or 120% */
display: flex;
align-items: center;
text-transform: capitalize;

color: #737373;
  }
  .academy-course-exam-item__actions{
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      flex-shrink: 0;
  }
  .academy-course-exams-item__btns{
      display: flex;
      flex-direction: row; 
  }
  </style>