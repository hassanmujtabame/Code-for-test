<template>
  <div class=" d-flex gap-2 justify-content-end my-3">
    <div v-if=" itemPage.exams.length>0">
                    <button @click="showConfirmDeleteExam(itemPage.exams[0])"  class="btn-main btn-action-page btn-delete px-3 w-100 border-0 rounded-2">
                        <i class="fa fa-file-circle-minus"></i>
                        حذف الاختبار
                    </button>
                    </div>
                    <div> 
                        <button @click="addExam"  class="btn btn-action-page btn-primary px-3 w-100 border-0 rounded-2"  role="button">
                            <i v-if="itemPage.exams.length>0" class="fa fa-file-pen"></i>
                            <i v-else class="fa fa-file-circle-plus"></i>
                           {{ itemPage.exams.length>0? $t('exam-modification'): $t('add-exam')}}
                        </button>
                    </div>
                    <div> 
                        <button @click="updateCourse"  class="btn-main btn-action-page px-3 w-100 border-0 rounded-2"  role="button">
                            <i class="fa fa-pen-to-square"></i>
                        تعديل
                        </button>
                    </div>
                    <div>
                        <button  class="btn-main btn-action-page btn-warning  px-3 w-100 border-0 rounded-2" role="button">
                            <i class="fa-solid fa-share-nodes"></i>
                                شارك
                        </button>
                    </div>
                    <div>
                        <button @click="confirmDeleteItem"  class="btn-main btn-action-page btn-delete px-3 w-100 border-0 rounded-2"   role="button">
                            <i class="fa fa-trash-can"></i>
                         حذف
                        </button>
                    </div>
                </div>
</template>

<script>
import academyAPI from '@/services/api/academy'
export default {
 name:'actions-page',
 props:{
    itemPage:{}
 },
watch:{
    itemPage:{
        deep:true,
        immediate:true,
        handler(){}
    }
},
methods:{
    updateCourse(){
        this.fireOpenDialog('add-course-first',this.itemPage)
        //this.fireOpenDialog('update-course',this.itemPage)
    },
    confirmDeleteItem(){
        let dataEvt={
            title:'انت على وشك حذف الدورة',
            description:`${this.itemPage.title}`,
            type:'warning',
            btns:[
                {title:this.$t('confirm_delete'),action:this.deleteItem,class:'btn btn-danger'}
                ]
        };
        this.showConfirmMsg(dataEvt)
    },
    async deleteItem(){
        try {
                let {data} =  await academyAPI.coursesApi.deleteItem(this.itemPage.id)
                if(data.success){
                    this.router_push('academy-my-courses')
                }else{
                    window.SwalError(data.message)
                }
            } catch (error) {
                console.mylog('error.response',error.response)
                if(error.response){
                    //if(error.response.status==500)
                    window.SwalError(error.response.data.message)
                }
               
                
            }
    },
    addExam(){
        let item = {id:null,title:null}
        if(this.itemPage.exams.length>0){
            item= this.itemPage.exams[0]
        }
        this.fireOpenDialog(`add-exam-course-dialog`,{page:this.itemPage,item:item})
        
    },
    showConfirmDeleteExam(lect){
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
    async deleteExam(lect){
        console.mylog('deleting ...',lect)
        try {

                        let {data} =  await academyAPI.examsAPI.deleteExam(lect.id)
                        if(data.success){
                           this.$emit('delete',lect)
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

<style>

</style>