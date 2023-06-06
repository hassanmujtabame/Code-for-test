<template>
  <d-dialog-large
  :xl="false"
  :open-dialog="openDialog"
  :close-dialog="closeDialog"
  :group="group"
  >
<template v-slot:header>
    تعديل بيانات الشركة
    </template>
<template v-slot>
    <ValidationObserver 
                        ref="form"
                        tag="form" @submit="save" autocomplete="off" class="row g-3 needs-validation" novalidate>
                            <div class="col-md-4 w-100">
                                <ValidationProvider
                                :name="$t('company-name')" 
                                vid="company_name"
                                rules="required"
                                v-slot="{errors}"
                                >
                                <d-text-input :errors="errors" type="text" 
                                class="form-control" 
                                v-model="itemForm.company_name"
                                    :label="$t('company-name')">
                                   
                                    </d-text-input>
                                      
                                </ValidationProvider>

                            </div>
                    
                            <div class="col-md-4 w-100">
                                <ValidationProvider
                                :name="$t('company_website')" 
                                vid="website"
                                rules="required"
                                v-slot="{errors}"
                                >
                                <d-text-input :errors="errors" type="text" class="form-control" 
                                    :label="$t('company_website')" 
                                    v-model="itemForm.website"
                                    >
                                    </d-text-input>
                                </ValidationProvider>
                                </div>
                            <div class="col-md-4 w-100">
                                <ValidationProvider
                                :name="$t('specialist_field')" 
                                vid="category_id"
                                rules="required"
                                v-slot="{errors}"
                                >
                                <d-select-input :errors="errors" :label="$t('specialist_field')" v-model="itemForm.category_id" class="form-select px-3"  >
                                    <option selected disabled>{{ $t('specialist_field') }}</option>
                                    <option v-for="(cat,i) in categories" :key="i" 
                                    :value="cat.id">{{ cat.name }}</option>
                                </d-select-input>
                                </ValidationProvider>
                            </div>
                            <div class="col-md-4 w-100">
                                <ValidationProvider
                                :name="$t('provided-services')" 
                                vid="services"
                                rules="required"
                                v-slot="{errors}"
                                >
                                <label class="form-label">{{$t('provided-services')}}</label>
                                <d-multi-select-tag v-model="itemForm.services"
                                :placeholder="$t('add_service')" 
                              >
    
                            </d-multi-select-tag> 
                                    <div v-if="errors.length!==0" class="col-12 text-input-error">
                                        {{errors[0]}}
                                    </div>
                                </ValidationProvider>
                            </div>
                            <div class="col-md-4 w-100">
                                <ValidationProvider
                                    :name="$t('What_will_you_offer_to_Riadiat')"
                                 vid="description"
                                 rules=""
                                    v-slot="{errors}">
                        <label class="form-label">{{ $t('What_will_you_offer_to_Riadiat') }}</label>
                                <d-ckeditor-classic  v-model="itemForm.description" class="form-control px-2"  cols="30" rows="5"
                                    :placeholder="$t('What_will_you_offer_to_Riadiat')"></d-ckeditor-classic>
                                    <div v-if="errors.length!==0" class="col-12 text-input-error">
                                        {{errors[0]}}
                                    </div>
                                </ValidationProvider>
                                </div>
                            <div class="col-md-4 w-100">
                                <ValidationProvider
                                :name="$t('Commercial_Register')" 
                                vid="services"
                                rules="ext:pdf"
                                v-slot="{errors,validate}"
                                >
                                <label class="w-100 position-relative border rounded-2">
                                    <input type="file"  @change="uploadFile($event,validate) || validate($event)"  class="form-control opacity-0 "
                                    accept=".pdf"
                                    required>
                                    <svg style="top: 6px;left: 6px;" class="position-absolute" width="24" height="24"
                                        viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path
                                            d="M15 22.75H9C3.57 22.75 1.25 20.43 1.25 15V9C1.25 3.57 3.57 1.25 9 1.25H15C20.43 1.25 22.75 3.57 22.75 9V15C22.75 20.43 20.43 22.75 15 22.75ZM9 2.75C4.39 2.75 2.75 4.39 2.75 9V15C2.75 19.61 4.39 21.25 9 21.25H15C19.61 21.25 21.25 19.61 21.25 15V9C21.25 4.39 19.61 2.75 15 2.75H9Z"
                                            fill="#CDD7D8" />
                                        <path
                                            d="M14.9999 10.2602C14.8099 10.2602 14.6199 10.1902 14.4699 10.0402L11.9999 7.57021L9.52994 10.0402C9.23994 10.3302 8.75994 10.3302 8.46994 10.0402C8.17994 9.75019 8.17994 9.2702 8.46994 8.9802L11.4699 5.9802C11.7599 5.6902 12.2399 5.6902 12.5299 5.9802L15.5299 8.9802C15.8199 9.2702 15.8199 9.75019 15.5299 10.0402C15.3799 10.1902 15.1899 10.2602 14.9999 10.2602Z"
                                            fill="#CDD7D8" />
                                        <path
                                            d="M12 15.2598C11.59 15.2598 11.25 14.9198 11.25 14.5098V6.50977C11.25 6.09977 11.59 5.75977 12 5.75977C12.41 5.75977 12.75 6.09977 12.75 6.50977V14.5098C12.75 14.9298 12.41 15.2598 12 15.2598Z"
                                            fill="#CDD7D8" />
                                        <path
                                            d="M12 18.2302C9.88995 18.2302 7.76995 17.8902 5.75995 17.2202C5.36995 17.0902 5.15995 16.6602 5.28995 16.2702C5.41995 15.8802 5.84996 15.6602 6.23996 15.8002C9.95996 17.0402 14.05 17.0402 17.77 15.8002C18.16 15.6702 18.59 15.8802 18.72 16.2702C18.85 16.6602 18.64 17.0902 18.25 17.2202C16.23 17.9002 14.11 18.2302 12 18.2302Z"
                                            fill="#CDD7D8" />
                                    </svg>
                                    <p style="top: 6px;right: 13px; color:#979797;" class="position-absolute px-2">
                                      {{ $t('Commercial_Register_max_10') }}
                                    </p>


                                </label>
                                <div v-if="errors.length!==0" class="col-12 text-input-error">
                                        {{errors[0]}}
                                    </div>
                                </ValidationProvider>
                            </div>
                            

                        </ValidationObserver>
</template>
<template v-slot:actions>
    <div class="col-12 m-2 text-start ">
                                <button class="btn btn-main  " type="submit" @click="save"
                                    role="button"> {{ $t('update') }} </button>
                            </div>
</template>
  </d-dialog-large>
</template>

<script>
import PartnersAPI from '@/services/api/partners.js'
export default {
 name:'update-partner-dialog',
 props:{
    group:{
        default:'update-partner-dialog'
    }
 },
 data:()=>({
    itemForm:{
        company_name:'',
                website:'',
                services:'',
                category_id:'',
                description:'',
                phone:'',
                pdf:null
    },
    categories:[],
    itemDialog:{},
    showDialog:false,
 }),
 methods:{
    async save(evt){
        if(evt) evt.preventDefault();
        let valid = await this.$refs.form.validate();
        if(!valid){
            console.log('form invalid');
            return ;
        }
        let formData = this.loadObjectToForm(this.itemForm)
        try {
           let {data} = await  PartnersAPI.updateItem(formData)
           if(data.success){
            this.$emit('success');
            this.fireCloseDialog(this.group)
            this.refreshPage()
           }else{
            window.SwalError(data.message)
           }
        } catch (error) {
            window.DHelper.catchException.call(error,this.$refs.form)
        }    
    },
    async uploadFile(evt,validate){
        let valid = await validate(evt);
        if(!valid){
            this.itemForm.pdf = null;
            return;
        }
    if (!evt.target.files && !evt.target.files[0]) {
            this.itemForm.pdf = null;
            return;
        }
        this.itemForm.pdf = evt.target.files[0];
    },
    async loadCategories(){
    try {
        let {data} =  await PartnersAPI.getCategories()
        if(data.success){
            this.categories = data.data
        }
    } catch (error) {
         console.log('error',error)
    }
},
    openDialog(dataEvt){
                this.itemDialog = dataEvt;
                let { company_name,
                website,
                services,
                category_id,
                description
                }= dataEvt;
                this.itemForm = Object.assign(this.itemForm,{
        company_name:'',
                website:'',
                services:'',
                category_id:'',
                description:'',
                phone:'',pdf:null},{ company_name,
                website,
                services,
                category_id,
                description
                })
                this.showDialog =  true;
                return true;
    },
    closeDialog(){
                this.showDialog =  false;
                return true;
    }
 },
 mounted(){
    this.loadCategories()
 }
}
</script>

<style>

</style>