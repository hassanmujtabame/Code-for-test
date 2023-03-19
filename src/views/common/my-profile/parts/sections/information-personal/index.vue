<template>
 <div id="list-item-2">
                <div class="box border mt-5 ">
                        <h3 class="border-bottom py-2 t-c px-3">
                            معلومات شخصية   
                        </h3>
                        <ValidationObserver ref="form">
                            <div class=" p-3">
                                    <div class="row align-items-start">
                                        <label class="col-md-4 m-c fs-5 fw-bolder">
                                            <i class="fa fa-cake-candles"></i>
                                                {{$t('birthday')}} :
    
                                        </label>
                                        <div class="col-md-8 row mb-3">
                                            <ValidationProvider
                                                tag="div"
                                                :name="$t('birthday')"
                                                vid="birth_date"
                                                rules="required"
                                                v-slot="{errors}"
                                                >
                                               
                                                <date-picker-input mode="date" class="form-control" v-model="itemForm.birth_date" />
                                            <d-error-input :errors="errors" v-if="errors.length"/>
                                            </ValidationProvider>
                                        </div>
    
                                    </div>
                                    <div class="row align-items-start ">
                                        <label class="col-md-4 m-c fs-5 fw-bolder">
                                            <i class="fa fa-globe"></i>
                                                {{$t('nationality')}} :
                                        </label>
                                        <div class="col-md-8 row mb-3 ">
                                        
                                            <ValidationProvider
                                                tag="div"
                                                :name="$t('nationality')"
                                                vid="nationality"
                                                rules="required"
                                                v-slot="{errors}"
                                                >
                                                    <d-text-input :errors="errors" type="text" v-model="itemForm.nationality" class="form-control" placeholder="حدد جنسيتك">
                                                    </d-text-input>
                                            </ValidationProvider>
                                        </div>
                                    

                                    </div>
                                    <div class="row  align-items-start mb-4">
                                            <label class="col-md-4 m-c fs-5 fw-bolder">
                                                <i class="fa fa-user-group"></i>

                                                    {{$t('gender')}}:
                                            </label>
                                            <div class="col-md-8 row">
                                                <div class="w-100 ">
                                                    <ValidationProvider
                                                    tag="div"
                                                :name="$t('gender')"
                                                vid="gender"
                                                rules="required"
                                                v-slot="{errors}"
                                                >
                                                    <div class="">
                                                        <d-select-input :errors="errors" v-model="itemForm.gender" :placeholder="$t('select-your-gender')"  class="form-select" >
                                                            <option value="" class="t-c " disabled selected>{{$t('select-your-gender')}}</option>
                                                            <option value="male">{{$t('male')}} </option>
                                                            <option value="female">{{$t('female')}}</option>
                                                        </d-select-input>
                                                    </div>
                                                    
                                            </ValidationProvider>
                                                </div>
                                        
    
                                            </div>
        
                                    </div>
                                    <div class="row align-items-start ">
                                            <label class="col-md-4 m-c fs-5 fw-bolder">
                                                <i class="fa fa-id-card"></i>
                                                   {{ $t('number_residence_id') }} :
        
                                            </label>
                                            <div class="col-md-8 row">
                                                <div class="col-md-12">
                                                    <ValidationProvider
                                                    tag="div"
                                                    class="mb-3"
                                                        :name="$t('number_residence_id')"
                                                        vid="identification_number"
                                                        rules="required"
                                                        v-slot="{errors}"
                                                        >
                                                        <d-text-input :errors="errors" type="text" v-model="itemForm.identification_number" class="form-control" placeholder="ادخل رقم هويتك الوطنية">
                                                       </d-text-input>
                                                </ValidationProvider>
                                                    </div>
                                                </div>
                                    </div>
                                    <!--file-->
                                    <div v-if="isSaoudi" class="row align-items-start ">
                                            <label class="col-md-4 m-c fs-5 fw-bolder">
                                                <i class="fa fa-id-card"></i>
                                                   {{ $t('freelance_document') }} :
        
                                            </label>
                                            <div class="col-md-8 row mb-3">
                                                <div class="col-md-12">
                                                    <ValidationProvider
                                                    tag="div"
                                                        :name="$t('freelance_document')"
                                                        vid="file"
                                                        rules="required"
                                                        v-slot="{errors,validate}"
                                                        >
                                                        <d-file-input :validate="validate" :errors="errors" v-model="file" placeholder="أرفق وثيقة العمل الحر الخاصة بك" />
                                                    
                                                        </ValidationProvider>
                                                    </div>
                                                </div>
                                    </div>
                            </div>
                        </ValidationObserver>
                        <div class="m-auto text-center p-3">
                            <button @click="save" class="btn-main">
                                {{$t('save')}}
                            </button>
                        </div>
                </div>                       

            </div>
</template>

<script>
import userAPI from '@/services/api/user.js'
export default {
 name:'list-item',
 props:['currentUser'],
 data:(vm)=>{
    return {
        itemForm:{
                gender:'',
                birth_date:'',
                nationality:'',
                identification_number:'',
                ...vm.currentUser.personal_informations
        },
        file:null,
    }
 },
 computed:{
    isSaoudi(){
        return ['سعودي','سعودسة','saoudi'].includes(this.itemForm.nationality)
    }
 },
 methods:{
    async save(evt){
            if(evt) evt.preventDefault();
            let valid = await this.$refs.form.validate();
            if(!valid){
                console.log('form invalid')
                return;
            }
             let formData =  new FormData();
             Object.keys(this.itemForm).forEach(key=>{
                formData.append(`${key}`,this.itemForm[key])
             })
             if(this.isSaoudi)
             formData.append('file',this.file)
             
            try {
                let {data} = await userAPI.postPersonalInformation(formData)
                if(data.success){
                    window.SwalSuccess(data.message)
                }else{
                    window.SwalError(data.message)
                }
            } catch (error) {
                console.log('error',error)
                if(error.response){
                    if(error.response.status == 422){
                        this.$refs.form.setErrors(error.response.data.errors)
                    }
                }
                
            }
    },
    handlerFile(file){
        this.file = file
    },
    emptyFile(){
        this.file = null;
    }
 }
}
</script>

