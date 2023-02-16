<template>
    <d-dialog-large 
    :group="group"
          :loading="loading"
          :closeDialog="closeDialog"
          :openDialog="openDialog"
          fullscreen
    >
  
      <template v-slot:header>
        <span v-html="titleDialog"></span>
        </template>
      <template v-slot:default>
        <div v-if="showDialog" class="container shadow p-4 rounded-2">
          <div>
            <h4>
                إضافة مشروع
            </h4>
            <p>
                قم بظبط أعدادات المشاريع  التي سيقوم الطلاب برفعها اليك - سنقوم بتنبيهك فور  ارسال الطلاب مشارعيهم اليك و يمكن ان تجد المشاريع في الصفحة الرئيسية للدورة
            </p>
          </div>
         <!-- form-->
         <div class="accordion-body">
                    <ValidationObserver ref="form" >
                        <div class="row">
                            <div class="col-md-6">
                                <div class="m">
                                    <d-text-input v-model="itemForm.title"  label="عنوان المشروع "/>
                                    <div class="mt-3">
                                        <d-select-input  v-model="itemForm.state" label="مكان المشروع"  >
                                            <option value="" class="t-c" selected>حدد مكان المشروع</option>
                                            <option value="online">{{ $t('online') }}</option>
                                            <option value="offline">{{ $t('offline') }}</option>
                                        </d-select-input>
                                    </div>
                                    <div class="mt-3">
                                      <div  class="">
                                  <div>
                                    <textarea name="" id="" class="border w-100 p-3" rows="10" placeholder="أضف تعليمات للطلاب تظهر لهم في صفحة المشروع">
                                        كيف حالكم طلابي !
اتمنى ان يكون الدروس السابقة قد استفدتم منها والان حان دور المشروع - قموا برفع مشروع بصيغة ال PDF يحتوى على كذا وكذ وكذا وكذا 
 لقد قمت بارفاق ملفات تساعدكم في اتمام مشروعكم 
بالتوفيق 
                                    </textarea>
                                  </div>
                                </div>
                                    </div>
                                 
                                </div>
                            </div>
                            <div class="col-md-6">
                                
                              <attachmentsList  :itemPage="itemDialog" :lectureId="lectureId"/>

                            </div>
                        </div>
                    </ValidationObserver>
                    <div class="mt-2">
                        <button  class="btn bg-main text-white  "  data-bs-toggle="modal" href="#staticBackdrop2" role="button">
                         حفظ
                        </button>
                    </div>
                </div>
        </div>
      </template>
    </d-dialog-large>
  </template>
  
  <script>
  import academyAPI from '@/services/api/academy';
  import attachmentsList from './attachments/index'

  export default {
    name:'add-project-course-dialog',
    props:{
      group:{
          type:String,
          default:'add-project-course-dialog'
      }
    },
    components:{
      attachmentsList
},
    computed:{
      titleDialog(){
       return this.itemForm.id?`${this.$t('project-modification')}: <span class="m-c">${this.itemDialog.title}</span>`: this.$t('new-project')
      }
    },
    data:()=>({

      loading :  false,
      saving: false,
      showDialog : false,
      itemDialog:{video:null},
      itemPage:{},
      itemForm:{id:null,title:'',state:'',desc:''},
      lectureId:null,
    }),
    methods:{
      async save(){
        this.saving = true;
        let valid = await this.$refs.form.validate();
        if(!valid) {
          this.saving = false;
          console.mylog('invalid title')
          return;
        }
        let formData = this.loadObjectToForm(this.itemForm)
            try {
             let {data } = this.itemForm.id?  await academyAPI.projectsAPI.updateProject(this.itemForm.id,formData) :await academyAPI.projectsAPI.addProject(this.itemPage.id,formData)
             if(data.success){
              if(this.itemForm.id){
                this.$emit('update',{...this.itemForm})
                this.fireEvent('update-lectures',{title:this.itemForm.title})
              }else{
                this.itemForm.id= data.data.project_id
                this.$emit('add',{...this.itemForm})
                this.fireEvent('update-lectures',{...this.itemForm})
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
      openDialog(dataItem){

        this.itemForm={id:null,title:'',state:'',desc:''}
          this.itemPage ={... dataItem.page}
          this.itemDialog = {... dataItem.item}
          if(dataItem){
          //fill object
          }
         
          this.loading =  false;
          this.lectureId = this.itemForm.id??null;
          
          this.showDialog = true;
          return true;
      },
      closeDialog(){
          this.showDialog = false
          this.fireEvent('update-lectures',{item:{},type:'all'})
          return true;
      },
      closeEvent(){
         this.fireEvent(this.group+'-close-dialog')
      }
    }
  }
  </script>
  
  <style scoped>

  </style>