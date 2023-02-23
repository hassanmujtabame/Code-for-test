<template>
  <div class="course-project-display">
    <h1 class="course-project-display__title">{{ lectureSelected.title }}</h1>
    <p class="course-project-display__observation">اقرا جيدا تعليمات المدرب وقم بارفاق مشروعك بنفس الصيغة التي طلبها المدرب</p>
    <h3 class="course-project-display__subtitle mt-5">تعليمات المدرب :</h3>
    <p class="course-project-display__note" v-html="lectureSelected.desc"></p>

       
      
    <h3 class="course-project-display__subtitle"> المرفقات المدرب:</h3>
    
    <div>
        <attachmentCard 
        v-for="(attachment,i) in lectureSelected.attachments" 
        :key="i"
                :item="attachment"            
                :showBorder="(lectureSelected.attachments.length-1)>i"
                />
    </div>

            <ValidationObserver ref="form" tag="div" v-if="userAcademyRole=='student'" class="my-3">
            <ValidationProvider
            :name="$t('project')"
            vid="file"
            v-slot="{errors,validate}"
            >
                <label :disabled="uploading"  class="btn btn-custmer">
                    <i v-if="uploading" class="fa fa-spinner fa-spin"></i>
                <span v-if="percentProject">{{ percentProject }} %</span>
                    إرفع مشروعك الان
                    <input type="file" @change="uploadFile($event,validate) || validate($event)"  class="hidden-file-input"/>
            </label>
            <d-error-input :errors="errors" v-if="errors.length" />
        </ValidationProvider>
        </ValidationObserver>
</div>
 
</template>

<script>
import academyAPI from '@/services/api/academy'
import attachmentCard from './attachments/card'
export default {
 name:'display-for-student',
 props:['lectureSelected','itemPage'],
 components:{
    attachmentCard
},
 data:(vm)=>{
    return {
        uploading:false,
        loaded:false,
        percentProject:0,
        itemForm:{
            project_id:vm.lectureSelected.id,
            file:null
        }
    }
 },
 methods:{
    async uploadFile(evt,validate){
  
    if(validate){
        let resValid = await validate(evt)
       if(!resValid.valid){
        this.itemForm.file = null
                return;
       }
    }
    if (!evt.target.files && evt.target.files.length===0) {
        this.itemForm.file = null
            return;
        }
        this.itemForm.file = evt.target.files[0]  
        this.uploadProjectFile()
},
    async uploadProjectFile(){
        this.percentProject = 0;
        if(this.uploading) return;
        this.uploading = true;
        let valid  = await this.$refs.form.validate();
        if(!valid){
            this.uploading = false;
            return;
        }
        let formData = this.loadObjectToForm(this.itemForm);
        let config ={
            onUploadProgress: progressEvent =>{
              
              const { loaded, total } = progressEvent;
              this.percentProject = Math.floor((loaded * 100) / total);
            /*if (percent < 100) {
              console.log(`${loaded} bytes of ${total} bytes. ${percent}%`);
            }*/
            } 
          }
        try {
            let { data } = await academyAPI.student.uploadProjectFile(formData,config)
            if(data.success){
                this.loaded = true;
                this.percentProject = 0;
                let dataEvent = {
                    title:'تم رفع مشروعك بنجاح',
                    description:''
                }
                this.showSuccessMsg(dataEvent)
            }else{
                window.SwalError(data.message)
            }
        } catch (error) {
            window.DHelper.catchExcption.call(this,error)
        }
        this.uploading = false;
    }
 }
}
</script>

<style scoped>
.course-project-display__title{
    font-style: normal;
    font-weight: 400;
    font-size: 24px;
    line-height: 32px;
    /* identical to box height, or 133% */
    text-transform: capitalize;
    color: #414042;
}
.course-project-display__observation{
    font-style: normal;
    font-weight: 400;
    font-size: 20px;
    line-height: 24px;
    /* identical to box height, or 120% */
    text-transform: capitalize;
    color: #414042;
}
.course-project-display__subtitle{
    font-style: normal;
    font-weight: 400;
    font-size: 20px;
    line-height: 24px;
    /* identical to box height, or 120% */
    text-transform: capitalize;
    color: #1FB9B3;
    
}
.course-project-display__note{
    font-style: normal;
    font-weight: 400;
    font-size: 20px;
    line-height: 24px;
    /* or 120% */
    text-align: right;
    text-transform: capitalize;
    color: #737373;
}
</style>