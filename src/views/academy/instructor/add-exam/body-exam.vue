<template>
   <div class="container shadow p-4 rounded-2">
            <div class="d-flex justify-content-between">
                <div class="">
                    <h3>
                    {{ this.lectureId?$t('exam-modification'):$t('new-exam') }}
                    </h3>
                </div>
                <div class="w-25">
                    <ValidationObserver tag="div" ref="form-title" v-slot="{invalid}">
                                <ValidationProvider tag="div" 
                                :name="$t('exam-title')"
                                vid="title"
                                rules="required"
                                v-slot="{errors}"
                                >
                                    <d-text-input type="text" v-model="itemForm.title" :errors="errors"  :label="$t('exam-title')">
                                      <!--append-icon-->
                        <template v-slot:append-icon>
                            <div class="">
                                <button @click="saveTitle" :disabled="invalid || saving" class="btn no-border" :class="{'c-save':!invalid,'t-c':invalid}" >
                                    <i v-if="!saving" class="fa fa-floppy-disk"></i>
                                    <i v-else class="fa fa-spinner fa-spin"></i>
                                </button>
                            </div>
                                </template>
                                      </d-text-input>
                                  </ValidationProvider>
                                  </ValidationObserver>
                <div class="text-end mt-3">
                <button @click="addQuestion" :disabled="!lectureId" class="btn btn-custmer rounded-2 px-4">
                    اضافة سؤال
                </button>
            </div>
                </div>
            </div>
           
            <div class="position-relative">
                <d-overlays-simple v-if="loading" />
                <div class="row justify-content-stretch" style="min-height: 200px;">
                    <div v-for="(q,i) in questions" :key="i" class="col-md-6 mt-4">
                           <AddQuestion @delete="showConfirmDeleteItem" @saved="savedQuestion" @update="updateQuestion"  :item="q"  />
                    </div>
                    <div class="mt-3 text-center">
                        <a v-if="false" class="btn bg-main text-white px-3"
                            role="button">
                            أرفعي الاختبار
                        </a>

                    </div>
                </div>
            </div>
        </div>
</template>

<script>
import AddQuestion from './parts/add-question.vue'
import academyAPI from '@/services/api/academy';
export default {
    name: 'add-exam-body',
    props:{
        courseId:{},
        itemSelected:{
            type:[Array,Object],
            default:()=>{return {id:null,title:null}}
        }
    },
    components:{
        AddQuestion
    },
    data:(vm)=>{
        return {
            saving: false,
            loading:false,
            itemForm:{
                id:vm.itemSelected.id??null,
                title:vm.itemSelected.title??null,
            },
            questions:[],
            lectureId:vm.itemSelected.id??null,
            itemDialog:{...vm.itemSelected}
        }
    },
    methods:{
        showConfirmDeleteItem(question){
            console.mylog('showConfirmDeleteItem',question)
        let dataEvent={
          title:'هل حقا تريد حذف هذا السؤال؟',
          description:question.title,
          groupBtns:'d-flex justify-content-evenly',
          btns:[
            {title:'تراجع',class:"btn btn-custmer btn-danger"},
            {title:this.$t('confirm_delete'),action:()=>this.deleteItem(question),class:"btn btn-custmer"},
          ]
        }
        this.showConfirmMsg(dataEvent)
    },
    async deleteItem(question){
        console.mylog('deleting ...',question)
        if(!question.id){
            let index  = this.questions.findIndex(l=>l.uuid===question.uuid)
                              if(index>-1){
                                this.questions.splice(index,1)
                              }
        return;
        }
       
        try {

                        let {data} =  await academyAPI.examsAPI.deleteQuestion(question.id)
                        if(data.success){
                           
                            let index  = this.questions.findIndex(l=>l.id===question.id)
                              if(index>-1){
                                console.mylog('deleted',index,this.questions[index],question)
                                //let questions = this.questions.filter(x=>x)
                                this.questions.splice(index,1)
                                //this.questions = [];
                                //this.questions = questions.filter(x=>x);
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
    savedQuestion(question){
        let index  = this.questions.findIndex(l=>l.uuid===question.uuid)
                              if(index>-1){
                                this.questions[index] = Object.assign(this.questions[index],question)
                              }
    },
        async saveTitle(){
          this.saving = true;
          let valid = await this.$refs['form-title'].validate();
          if(!valid) {
            this.saving = false;
            console.mylog('invalid title')
            return;
          }
          let formData = new FormData();
            formData.append('title', this.itemForm.title)
            formData.append('type', 'exam')
             
              try {
               let {data } = this.itemForm.id?  await academyAPI.examsAPI.updateExam(this.itemForm.id,formData) :await academyAPI.examsAPI.addExam(this.courseId,formData)
               if(data.success){
                if(this.itemForm.id){
                  this.$emit('update',{...this.itemForm,type:'exam'})
                }else{
                  this.itemForm.id= data.data.exam_id
                  this.$emit('add',{...this.itemForm,type:'exam'})
                 
                this.lectureId = this.itemForm.id;
                this.itemDialog.id = this.itemForm.id
                }
                
                this.itemDialog.title = this.itemForm.title
               }else{
                window.SwalError(data.message)
               }
            
          } catch (error) {
            console.mylog('error',error)
                  if(error.response){
                      let response = error.response
                      if (response.status == 422) {
                          this.setErrorsForm(this.$refs.form,response)
                      }
                  }
          }
          this.saving = false;
      },
        addQuestion(){
            this.questions.push({
                title:`سؤال ${this.questions.length+1}`,
                uuid:this.generateRandomString(8),
                exam_id:this.lectureId,
                options:[]
            })
        },
        updateQuestion(item){
            let index =this.questions.findIndex(q=>q.uuid==item.uuid)
            if(index>-1){
                this.questions[index] = Object.assign(this.questions[index],item)
            }

            this.$emit('update',this.questions)
        },
        async loadQuestions(){
            this.loading = true;
            try {
                let {data} =  await academyAPI.examsAPI.getQuestions(this.itemForm.id)
                if(data.success){
                
                    let questions = []
                    data.data.forEach(question=>{
                        console.mylog('question',question)
                            questions.push({
                                title:question.title,
                                id:question.id,
                                uuid:this.generateRandomString(8),
                                exam_id:this.lectureId,
                                    options:question.options.map((x,i)=>{
                                        return {id:question.question_values[i],title:x,is_correct: parseInt(question.corrects[i])}
                                    })
                            })
                    })
                    console.mylog('questions',questions)
                    this.questions = questions
                    
                }
            } catch (error) {
                console.mylog('error',error)
              //  
            }
            this.loading = false;
        }
    },
    mounted(){
       this.loadQuestions()
    }
}
</script>

<style>

</style>