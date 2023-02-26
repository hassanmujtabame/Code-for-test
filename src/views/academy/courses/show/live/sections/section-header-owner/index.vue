<template>
 <div class="course-show-page__header">
            <div class="row">
                <div v-for="(widget,i) in widgets" :key="i" class="col-6 col-md-3">
                    <widgetInfo v-bind="widget" />
                </div>
            </div>
            <div class="text-end">
                <div class=" d-flex gap-2 justify-content-end my-3">
                    <div v-if=" itemPage.exams.length>0">
                    <button @click="showConfirmDeleteItem(itemPage.exams[0])"  class="btn-main btn-action-page btn-delete px-3 w-100 border-0 rounded-2">
                        <d-trash-outline-icon :size="32" color="white"/>
                        حذف الاختبار
                    </button>
                    </div>
                    <div> 
                        <button @click="addExam"  class="btn btn-action-page btn-primary px-3 w-100 border-0 rounded-2"  role="button">
                          <i class="fa fa-plus"></i>
                           {{ itemPage.exams.length>0? $t('exam-modification'): $t('add-exam')}}
                        </button>
                    </div>
                    <div> 
                    <button @click="updateCourse"  class="btn-main btn-action-page px-3 w-100 border-0 rounded-2" >
                        <d-rect-edit-icon />
                            تعديل
                    </button>
                    </div>
                    <div>
                        <button   class="btn-main btn-action-page btn-wraning px-3 w-100 border-0 rounded-2"  >
                            <d-send-icon />
                                شارك
                        </button>
                    </div>
                    <div>
                    <button  class="btn-main btn-action-page btn-delete px-3 w-100 border-0 rounded-2"     role="button">
                        <d-trash-outline-icon :size="32" color="white"/>
                        حذف
                    </button>
                    </div>
                </div>
            </div>
  </div>
</template>

<script>
import widgetInfo from './widget-info.vue'
import academyAPI from '@/services/api/academy'
export default {
 name:'section-header-owner',
 props:{
    itemPage:{}
 },
 components:{
  widgetInfo
 },
 data:(vm)=>{
    return{
        exams:[],
  widgets:[
    {title:'المشاهدات',content:`${vm.itemPage.views} شخص`,link:null},
    {title:'حجزو مقعد للدورة القادمة',content:`${vm.itemPage.booking_next_course} شخص`,link:null},
    {title:'عدد خريجين الدورة',content:'20/40',link:'/'},
    {title:'موعد المجموعه الثانية',content:vm.dateReverse(vm.itemPage.next_course_date),link:'/'},
  ]
}
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
        this.fireOpenDialog('update-course',this.itemPage)
    },
    addExam(){
        let item = {id:null,title:null}
        if(this.itemPage.exams.length>0){
            item= this.itemPage.exams[0]
        }
        this.fireOpenDialog(`add-exam-course-dialog`,{page:this.itemPage,item:item})
        
    },
    showConfirmDeleteItem(lect){
        let dataEvent={
          title:'هل حقا تريد حذف هذا الاختبار؟',
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