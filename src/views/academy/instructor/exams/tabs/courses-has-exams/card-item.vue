<template>
    <div class="academy-course-exams-item">
    <div class="academy-course-exams-item__wrapper">
    <div class="academy-course-exams-item__body">
    <div class="academy-course-exams-item__title">
  <h1>أسم الدورة : <span>{{ item.course_name }}</span></h1>
  
    </div>
    <div class="academy-course-exams-item__description">
        <div v-for="(exam,i) in item.exams" :key="i" class="academy-course-exam-item">
                                    <p class="academy-course-exam-item__title">
                                      {{exam.title}}
                                    </p>
                                       <div class="academy-course-exam-item__actions "> 
                                       
                                        <button  class="btn btn-custmer  btn-small ">
                                            عرض
                                        </button>
                                        <button class="btn rounded-2 border-danger text-danger bg-transparent btn-small mt-2  " data-bs-toggle="modal" href="#staticBackdrop2">
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
  export default {
    props:['item']
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
    color: #737373;
    flex:1
  }
  .academy-course-exam-item__actions{
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      flex-shrink: 0;
  }
  .academy-course-exams-item__btns{
      display: flex;
      flex-direction: row; 
  }
  </style>