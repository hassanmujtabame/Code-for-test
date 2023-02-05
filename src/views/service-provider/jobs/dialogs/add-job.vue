<template>
  
    <d-dialog-large 
    mlg
    :group="group" 
    :loading="loading"
    :closeDialog="closeDialog"
    :openDialog="openDialog"
    >
        <ValidationObserver ref="form" >
            <div class="add-dialog-blog add-portfolio m-3 p-0">
            
                <div class="">
                    <!-- title -->
                    <div class="mb-3">
                        <ValidationProvider
                                :name="$t('job-title')"
                             vid="title"
                             rules="required"
                                v-slot="{errors}">
                        <label class="form-label">{{ $t('job-title') }} </label>
                        <input type="text" v-model="itemForm.title" class="form-control" :placeholder="$t('job-title')">
                        <div v-if="errors.length!==0" class="col-12 text-input-error">
                            {{errors[0]}}
                            </div>
                            </ValidationProvider>
                    </div>
                    <!--department-->
                    <div class="mb-3">
                        <ValidationProvider
                        tag="div"
                        class="form-group"
                                :name="$t('job-department')"
                             vid="service_category_id"
                             rules="required"
                                v-slot="{errors}">
                        <label class="form-label">{{ $t('job-department') }} </label>
                        <select class="form-select" v-model="itemForm.service_category_id" 
                        @change="loadFields($event)">
                        <option v-for="(cat,i) in categories" :key="i" :value="cat.id"> {{ cat.name }}</option>
                        </select>
                        <div v-if="errors.length!==0" class="col-12 text-input-error">
                            {{errors[0]}}
                            </div>
                            </ValidationProvider>
                  </div>
                <!-- job fields -->
                <div class="mb-3">
                        <ValidationProvider
                        tag="div"
                        class="form-group"
                                :name="$t('job-category')"
                             vid="field_id"
                             rules="required"
                                v-slot="{errors}">
                        <label class="form-label">{{ $t('job-category') }} </label>
                        <select class="form-select" v-model="itemForm.field_id" >
                        <option v-for="(cat,i) in fields" :key="i" :value="cat.id"> {{ cat.name }}</option>
                        </select>
                
                        <div v-if="errors.length!==0" class="col-12 text-input-error">
                            {{errors[0]}}
                            </div>
                            </ValidationProvider>
                  </div>
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

                                <input type="text" v-model="itemForm.required_experience" class="form-control" :placeholder="$t('required_experience')">
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
                </div>
            </div>
        </ValidationObserver>
        <template v-slot:header>
           <div class="m-c"> {{ itemForm.id?$t('update-job'):$t('post-job') }} </div>          
        </template>
    <template v-slot:actions>
        <button @click="save" type="button" class="btn btn-main">
             {{ itemForm.id?$t('update'):$t('post-the-job') }} 
        </button>
    </template>
  </d-dialog-large>

</template>
<script>
import jobsProviderAPIs from '@/services/api/service-provider/jobs'

export default {
data:(vm)=>{
return{
    loading:false,
group:'add-job',
showDialog:false,
categories:[],
fields:[],
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
file:null,
itemForm:{
}
}},
methods:{
async save(){
    this.loading =  false;
let valid = await this.$refs.form.validate();
    if(!valid){
        console.log('form invalid');
        this.loading =  false;
        return ;
    }
    let formData = new FormData();
    Object.keys(this.itemForm).forEach(key=>{
        formData.append(key,this.itemForm[key]);
    })



    try {
        let { data } = this.itemForm.id?await jobsProviderAPIs.updateItem(this.itemForm.id,formData):await jobsProviderAPIs.addItem(formData)
        if(data.success){
            let dataEvent={
                title:'تهانينا لقد انتهيت من اعلان الوظيفة',
                description:'سيراجع فريقنا الاعلان في خلال ساعات و سنخبرك عندما يتم عرضه في صفحة الوظائف'
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
    this.loading =  false;
},

async loadTags(){
    try {
        let {data} =  await jobsProviderAPIs.getTags()
        if(data.success){
            this.tags = data.data
        }
    } catch (error) {
         console.log('error',error)
    }
},

async loadFields(val,ch=true){
    console.log('cc',val)
    if(ch)
    this.itemForm.field_id = null;
   
    if(!this.itemForm.service_category_id) {
        this.fields = [];
        return;
    }
    try {
        let {data} =  await jobsProviderAPIs.getFields(this.itemForm.service_category_id)
        if(data.success){
            this.fields = data.data
        }
    } catch (error) {
         console.log('error',error)
    }
},
async loadCategories(){
    try {
        let {data} =  await jobsProviderAPIs.getCategories()
        if(data.success){
            this.categories = data.data
        }
    } catch (error) {
         console.log('error',error)
    }
},
openDialog(dataEvent){
    this.loading =  false;
    this.itemForm={
        id:null,
        title:'',
        field_id:null,
        company_name:null,
        type:null,//part_time || full_time
        expected_salary:null,
        required_experience:null,
        service_category_id:null,//department
        job_name:null,
        work_location:null,//online || offline
        duration_contract:null,
    }
    if(dataEvent){
        let { id,
        title,
        field_id,
        company_name,
        type_job,//part_time || full_time
        expected_salary,
        required_experience,
        service_category_id,
        job_name,
        work_location,
        duration_contract
    } = dataEvent
        this.itemForm = {...this.itemForm,id,
        title,
        field_id,
        company_name,
        type:type_job,
        expected_salary,
        required_experience,
        service_category_id,
        job_name,
        work_location,
        duration_contract}
        this.loadFields(service_category_id,false)
    }
    this.showDialog = true;
    return true;
},
closeDialog(){
    this.showDialog = false

    return true;
},
closeEvent(){
   this.fireEvent(this.group+'-close-dialog')
}
},
mounted(){
    this.loadCategories()
}
}
</script>

<style scoped>
label{
width:100%;
text-align: start;
}
.img-zone{
max-width: 430px;
}
</style>

