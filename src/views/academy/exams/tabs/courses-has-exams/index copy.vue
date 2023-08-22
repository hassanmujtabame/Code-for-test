<template>
<div class="tab-pane fade" id="pills-courses-has-exams" role="tabpanel" aria-labelledby="pills-courses-has-exams-tab" tabindex="0">
                        <div class="box">

                        <div v-for="(exam, i) in items" :key="i" class="col-12d-flexalign-items-center">
                        
                            <div class="d-flex align-items-center justify-content-between">
                        
                                    <h6 >
                                        أسم الدورة : {{exam.course_name}}
                                    </h6>
                                </div>
               
    
    
                                <div v-for="(item,i) in exam.exams" :key="i" class="d-flex flex-wrap align-items-center justify-content-between">
                                    <p class="t-c w-75 m-0">
                                        {{item.title}}
                                     </p>
                                       <div class="d-flex  gap-1 flex-wrap"> 
                                        <button @click="showItem(exam)" style="height: 40px; width: 100px;"  class="btn-main px-2 ">
                                            عرض
                                            
                                        </button>
                                     
                                    </div>
                                </div>
                        <hr>
                       
                        </div>
                 
                        </div>


                        </div>
</template>


<script> 
import CoursesAPI from '@/services/api/academy/courses.js'

export default {
 name:'students-fails-exams',
   data:(vm)=>{
    return{
    metaInfo:{
        current_page:1,
        total:0,
        last_page:0,
        paginate:vm.paginate
    },
    items:[],
    loading:false,
 }
},
methods:{
        showItem(item){
            this.fireOpenDialog('display-exam-dialog',item)
        },
   async studentsPassExam(){
        try{
          let {data } = await CoursesAPI.getCoursesHasExams()
          if(data.success){
              this.items = data.data
              console.log('data',data.data);
          }else{
            //window.SwalError(data.message)
          }
        }catch(error){
          //

        }
    },
 
},
mounted(){
    this.studentsPassExam()
}
}

</script>

<style scoped>
.modal-backdrop{
--bs-backdrop-zindex: none !important;
}
#my-modal___BV_modal_header_ , #my-modal___BV_modal_footer_{
      visibility: hidden !important;
}
</style> 


















