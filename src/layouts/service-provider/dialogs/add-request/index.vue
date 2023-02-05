<template>
    <d-dialog-large :group="group"
    :xl="false"
    :openDialog="openDialog"
    :closeDialog="closeDialog"
    >
      <template v-slot>
      <ValidationObserver ref="form" >
         <!--Title-->
         <div class="mb-3">
                        <ValidationProvider
                                :name="$t('request-title')"
                                vid="title"
                                rules="required"
                                v-slot="{errors}">
                        <label class="form-label">{{ $t('request-title') }} </label>
                                <input type="text" v-model="itemForm.title" class="form-control" :placeholder="$t('request-title')">
                                <d-error-input :errors="errors" v-if="errors.length" />

                        </ValidationProvider>
                    </div>
          <!--Price-->
          <div class="mb-3">
                        <ValidationProvider
                                :name="$t('request-price')"
                                vid="price"
                                rules="required|numeric"
                                v-slot="{errors}">
                        <label class="form-label">{{ $t('request-price') }} </label>
                                <input type="text" v-model="itemForm.price" class="form-control" :placeholder="$t('request-price')">
                                <d-error-input :errors="errors" v-if="errors.length" />
                        </ValidationProvider>
                    </div>
            <!--execution_period-->
          <div class="mb-3">
                        <ValidationProvider
                                :name="$t('execution_period')"
                                vid="execution_period"
                                rules="required|numeric"
                                v-slot="{errors}">
                        <label class="form-label">{{ $t('execution_period') }} </label>
                                <input type="text" v-model="itemForm.execution_period" class="form-control" :placeholder="$t('execution_period')">
                                <d-error-input :errors="errors" v-if="errors.length" />
                        </ValidationProvider>
                    </div>
          <!-- category -->
          <div class="mb-3">
                        <ValidationProvider
                        tag="div"
                        class="form-group"
                                :name="$t('request-category')"
                             vid="category_id"
                             rules="required"
                                v-slot="{errors}">
                        <label class="form-label">{{ $t('request-category') }} </label>
                        <select class="form-select" v-model="itemForm.category_id" 
                        @change="loadFields($event)"
                        >
                        <option v-for="(cat,i) in categories" :key="i" :value="cat.id"> {{ cat.name }}</option>
                        </select>
                    
                        <d-error-input :errors="errors" v-if="errors.length" />
                    </ValidationProvider>
                  </div>
                     <!--field-->
                     <div class="mb-3">
                        <ValidationProvider
                        tag="div"
                        class="form-group"
                                :name="$t('request-field')"
                             vid="field_id"
                             rules="required"
                                v-slot="{errors}">
                        <label class="form-label">{{ $t('request-field') }} </label>
                        <select class="form-select" v-model="itemForm.field_id" >
                        <option v-for="(field,i) in fields" :key="i" :value="field.id"> {{ field.name }}</option>
                        </select>
                    
                        <d-error-input :errors="errors" v-if="errors.length" />
                    </ValidationProvider>
                  </div>
                     
             <!-- specialites -->
             <div class="mb-3">
                        <ValidationProvider
                        tag="div"
                        class="form-group"
                                :name="$t('specialite')"
                             vid="speciaite_id"
                             rules="required"
                                v-slot="{errors}">
                        <label class="form-label">{{ $t('select-specialite') }} </label>
                        <select class="form-select" v-model="itemForm.speciaite_id" >
                        <option v-for="(spec,i) in specialites" :key="i" :value="spec.id"> {{ spec.name }}</option>
                        </select>
                       
                        <d-error-input :errors="errors" v-if="errors.length" />
                    </ValidationProvider>
                  </div>
             
                 
                    <div class="mb-3">
                        <ValidationProvider
                            :name="$t('request-description')"
                            vid="description"
                            rules="required"
                            v-slot="{errors}"
                            >
                        <label class="form-label">أكتب وصف لطلبك بالتفاصيل</label>
                        <d-ckeditor-classic v-model="itemForm.desc" class="form-control" rows="10"
                           :editorConfig="{
                            minHeight:'150px'
                           }"
                        placeholder=""></d-ckeditor-classic>
                        <d-error-input :errors="errors" v-if="errors.length" />

                            </ValidationProvider>
                    </div>
                    <div class="mb-3">
                        <ValidationProvider
                                    :name="$t('required-skills')"
                                 vid="skills"
                                 rules="required"
                                    v-slot="{errors}">
                        <label class="form-label">{{$t('required-skills')}}</label>
                            <d-multi-select-tag v-model="itemForm.skills" 
                              >
    
                            </d-multi-select-tag>
                            <d-error-input :errors="errors" v-if="errors.length" />

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
import myRequestsSPAPIs from '@/services/api/service-provider/user/my-requests'

  export default {
    name:'add-request-sp',
   props:{
      group:{
          type:String,
          default:'add-request-sp'
      }
   },
   data:(vm)=>{
    return {
      itemDialog:{id:null},
      itemForm:{},
      showDialog:false,
      categories:[],
fields:[],
specialites:[],
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
        let { data } = this.itemForm.id?await myRequestsSPAPIs.updateItem(this.itemForm.id,formData):await myRequestsSPAPIs.addItem(formData)

        if(data.success){
            let dataEvent={
                title:'لقد تم أضافة طلب جديد لك',
                description:'سيتم مراجعة الطلب  من خلالنا  خلال يوم  و سنخبرك عندما يكون جاهز  لاستقبال الطلبات'
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
      openDialog(dataEvent){

        this.itemForm={
        id:null,
        title:'',
        field_id:null,
        category_id:null,
        specialite_id:null,
        price:null,
        execution_period:0,
        description:'',
        skills:''
    }
    if(dataEvent){
        let { id,
            title,
        field_id,
        category_id,
        specialite_id,
        price,
        execution_period,
        description,
        skills
    } = dataEvent
        this.itemForm = {...this.itemForm,id,
            title,
        field_id,
        category_id,
        specialite_id,
        price,
        execution_period,
        description,
    skills}
        this.loadFields(category_id,false)
    }
        this.showDialog=true
        return true;
      },
      closeDialog(){
        this.showDialog=false
        return true;
      },
      closeEvent(){
         this.fireEvent(this.group+'-close-dialog')
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
        let {data} =  await myRequestsSPAPIs.getFields(this.itemForm.service_category_id)
        if(data.success){
            this.fields = data.data
        }
    } catch (error) {
         console.log('error',error)
    }
},
async loadCategories(){
    try {
        let {data} =  await myRequestsSPAPIs.getCategories()
        if(data.success){
            this.categories = data.data
        }
    } catch (error) {
         console.log('error',error)
    }
},
   },
   mounted(){
    this.loadCategories()
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