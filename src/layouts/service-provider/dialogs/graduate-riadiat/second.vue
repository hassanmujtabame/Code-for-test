<template>
    <d-dialog-large :group="group"
    :xl="false"
    :openDialog="openDialog"
    :closeDialog="closeDialog"
    >
    <template v-slot:header>
        <span class="m-c">وظف خريج رياديات</span>
    </template>
      <template v-slot>
      <ValidationObserver ref="form" >
         <!--company name-->
         <div class="mb-3">
                        <ValidationProvider
                                :name="$t('company-name')"
                                vid="company_name"
                                rules="required"
                                v-slot="{errors}">
                        <label class="form-label">{{ $t('company-name') }} </label>
                                <input type="text" v-model="itemForm.company_name" class="form-control" :placeholder="$t('company-name')">
                                <div v-if="errors.length!==0" class="col-12 text-input-error">
                                    {{errors[0]}}
                                </div>
                        </ValidationProvider>
                    </div>
          <!-- type job -->
          <div class="mb-3">
                        <ValidationProvider
                        tag="div"
                        class="form-group"
                                :name="$t('job-type')"
                             vid="type"
                             rules="required"
                                v-slot="{errors}">
                        <label class="form-label">{{ $t('job-type') }} </label>
                        <select class="form-select" v-model="itemForm.type" >
                        <option v-for="(cat,i) in job_types" :key="i" :value="cat.id"> {{ cat.name }}</option>
                        </select>
                    
                        <div v-if="errors.length!==0" class="col-12 text-input-error">
                            {{errors[0]}}
                            </div>
                    </ValidationProvider>
                  </div>
                     <!--expected_salary-->
                     <div class="mb-3">
                        <ValidationProvider
                                :name="$t('expected_salary')"
                                vid="expected_salary"
                                rules="required|numeric"
                                v-slot="{errors}">
                                <input type="text" v-model="itemForm.expected_salary" class="form-control" :placeholder="$t('expected_salary')">
                                <div v-if="errors.length!==0" class="col-12 text-input-error">
                                    {{errors[0]}}
                                </div>
                        </ValidationProvider>
                    </div>
             <!-- job location -->
             <div class="mb-3">
                        <ValidationProvider
                        tag="div"
                        class="form-group"
                                :name="$t('job-location')"
                             vid="work_location"
                             rules="required"
                                v-slot="{errors}">
                        <label class="form-label">{{ $t('job-location') }} </label>
                        <select class="form-select" v-model="itemForm.work_location" >
                        <option v-for="(cat,i) in work_locations" :key="i" :value="cat.id"> {{ cat.name }}</option>
                        </select>
                       
                        <div v-if="errors.length!==0" class="col-12 text-input-error">
                            {{errors[0]}}
                            </div>
                    </ValidationProvider>
                  </div>
                   <!-- job duration contract -->
                <div class="mb-3">
                        <ValidationProvider
                                :name="$t('job-duration-contract')"
                                vid="duration_contract"
                                    rules="required"
                                v-slot="{errors}">
                        <label class="form-label">{{ $t('job-duration-contract') }} </label>
                        <select class="form-select" v-model="itemForm.duration_contract" >
                        <option v-for="(cat,i) in duration_contracts" :key="i" :value="cat.id"> {{ cat.name }}</option>
                        </select>
                        
                        <div v-if="errors.length!==0" class="col-12 text-input-error">
                            {{errors[0]}}
                            </div>
                    </ValidationProvider>
                  </div>
                   <!--position name-->
                   <div class="mb-3">
                        <ValidationProvider
                                :name="$t('job-position-name')"
                                vid="job_name"
                                rules="required"
                                v-slot="{errors}">
                                <label class="form-label">{{ $t('job-position-name') }} </label>

                                <input type="text" v-model="itemForm.job_name" class="form-control" :placeholder="$t('job-position-name')">
                                <div v-if="errors.length!==0" class="col-12 text-input-error">
                                    {{errors[0]}}
                                </div>
                        </ValidationProvider>
                    </div>
                       <!--required experience-->
                   <div class="mb-3">
                        <ValidationProvider
                                :name="$t('required_experience')"
                                vid="required_experience"
                                rules="required|numeric"
                                v-slot="{errors}">
                                <label class="form-label">{{ $t('required_experience') }} </label>

                                    <select class="form-select" v-model="itemForm.required_experience" >
                            <option  :value="0"> غير مطلوبة</option>
                            <option v-for="(ex,i) in 10" :key="i" :value="ex"> {{ ex }}</option>
                            </select>
                                <div v-if="errors.length!==0" class="col-12 text-input-error">
                                    {{errors[0]}}
                                </div>
                        </ValidationProvider>
                    </div>
                    <div class="mb-3">
                        <ValidationProvider
                            :name="$t('job-description')"
                            vid="desc"
                            rules="required"
                            v-slot="{errors}"
                            >
                        <label class="form-label">أكتب  تفاصيل  و متطلبات الوظيفة</label>
                        <d-ckeditor-classic v-model="itemForm.desc" class="form-control" rows="10"
                           :editorConfig="{
                            minHeight:'150px'
                           }"
                        placeholder=""></d-ckeditor-classic>
                            <div v-if="errors.length!==0" class="col-12 text-input-error">
                            {{errors[0]}}
                            </div>
                            </ValidationProvider>
                    </div>
    </ValidationObserver>
      </template>
      <template v-slot:actions>
          <button @click="save" style="height: 40px;" class="btn btn-main"> ارسل الوظيفة</button>
      </template>
    </d-dialog-large>
  </template>
  
  <script>
import jobsProviderAPIs from '@/services/api/service-provider/jobs'
  export default {
    name:'graduate-riadiat-second-step',
   props:{
      group:{
          type:String,
          default:'graduate-riadiat-recruitment-2'
      }
   },
   components:{

   },
   data:(vm)=>{
    return {
      itemDialog:{id:null},
      itemForm:{},
      showed:false,
      job_types:[
    {id:'part_time',name:vm.$t('part_time')},
    {id:'full_time',name:vm.$t('full_time')},
],
work_locations:[
    {id:'online',name:vm.$t('online')},
    {id:'offline',name:vm.$t('offline')},
],
duration_contracts:[
    {id:1,name:'سنة كاملة بالاضافة الى التجديد'}
],
   }},
   methods:{
    async save(){
let valid = await this.$refs.form.validate();
    if(!valid){
        console.log('form invalid');
        return ;
    }
    let formData = new FormData();
    Object.keys(this.itemForm).forEach(key=>{
        formData.append(key,this.itemForm[key]);
    })



    try {
        let { data } = await jobsProviderAPIs.sendJob(formData)
        if(data.success){
            let dataEvent={
                title:'لقد تم ارسال عرض العمل بنجاح',
                description:'ستواصل معك مقدم الخدمة اذا قبل بعرض  توظيفك لتحديد موعد لمقايلة العمل '
            }
           this.fireOpenDialog('standard-success-message',dataEvent)
            this.closeEvent()
        }
    } catch (error) {
        //
        if(error.response){
                let response =error.response
                if(response.status==422){
                    if(response.data.errors)
                    this.$refs.form.setErrors(response.data.errors)
                }
            }
       
    }
},
      openDialog(data){
        this.itemDialog=Object.assign({},data);
        this.itemForm={
        id:null,
        title:'',
        company_name:null,
        type:null,//part_time || full_time
        expected_salary:null,
        required_experience:0,
        job_name:null,
        work_location:null,//online || offline
        duration_contract:null,
        desc:null,
        user_id:this.itemDialog.id
    }
        this.showed=true
        return true;
      },
      closeDialog(){
        this.showed=false
        return true;
      },
      closeEvent(){
         this.fireEvent(this.group+'-close-dialog')
      }
   }
  }
  </script>
  
  <style scoped>
  .info-item{
    font-size: 16px;
    padding:5px;
  }
  .info-item-value{
    color: #2C98B3;
  }
  </style>