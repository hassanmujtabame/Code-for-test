<template>
<d-dialog-large :xl="false"
:group="group"
:closeDialog="closeDialog"
:openDialog="openDialog"
>
<template v-slot:header>قدم طلبك الان</template>
<template v-slot:default>
  <ValidationObserver ref="form" tag="form" @submit="save">
    <!--title-->
    <ValidationProvider
      tag="div"
      :name="$t('title_request')"
      vid="title"
      rules="required"

      v-slot="{errors}"
      >
      <d-text-input :errors="errors" type="text" v-model="itemForm.title" class=" p-2 mt-2" :label="$t('title_request')"/>
      </ValidationProvider>
        <!--قيمة الايجار المطلوب -->
    <ValidationProvider
      tag="div"
      :name="$t('value_rent')"
      vid="rent"
      rules="required"

      v-slot="{errors}"
      >
      <d-text-input :errors="errors" type="text" v-model="itemForm.rent" class="rounded-2 p-2 mt-2" :label="$t('value_rent')"/>
      
      </ValidationProvider>             
       <!--عنوان المكان بالتفصيل-->
    <ValidationProvider
      tag="div"
      :name="$t('address_place_details')"
      vid="address"
      rules="required"

      v-slot="{errors}"
      >
      <d-text-input :errors="errors" type="text" v-model="itemForm.address" class="rounded-2 p-2 mt-2" :label="$t('address_place_details')" />
  
      </ValidationProvider>
        <!--مساحة المكان-->
    <ValidationProvider
      tag="div"
      :name="$t('space_place')"
      vid="place_area"
      rules="required"

      v-slot="{errors}"
      >
      <d-text-input :errors="errors" type="text" v-model="itemForm.place_area" class="rounded-2 p-2 mt-2" :label="$t('space_place')" />
      </ValidationProvider>         
       <!--أكتب رسالتك  للعميل-->
    <ValidationProvider
      tag="div"
      :name="$t('write_your_message')"
      vid="desc"
      rules="required"

      v-slot="{errors}"
      >

      <d-textarea-input :errors="errors" v-model="itemForm.desc" class="w-100 border p-1 mt-2" rows="10" :label="$t('write_your_message')"></d-textarea-input>
      
      </ValidationProvider>    
      <!-- ارفق صور او فيديو هات للمكان-->
    <ValidationProvider
      tag="div"
      :name="$t('File')"
      vid="image"
      rules="required"

      v-slot="{errors,validate}"
      >

                    <div class="d-flex upload-request-file form-control align-items-center  mb-3 justify-content-center">
                        <label for="fileinput1" class="form-label">
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M15 22.75H9C3.57 22.75 1.25 20.43 1.25 15V9C1.25 3.57 3.57 1.25 9 1.25H15C20.43 1.25 22.75 3.57 22.75 9V15C22.75 20.43 20.43 22.75 15 22.75ZM9 2.75C4.39 2.75 2.75 4.39 2.75 9V15C2.75 19.61 4.39 21.25 9 21.25H15C19.61 21.25 21.25 19.61 21.25 15V9C21.25 4.39 19.61 2.75 15 2.75H9Z" fill="#979797"/>
                                <path d="M14.9995 10.2602C14.8095 10.2602 14.6195 10.1902 14.4695 10.0402L11.9995 7.57021L9.52945 10.0402C9.23945 10.3302 8.75945 10.3302 8.46945 10.0402C8.17945 9.75019 8.17945 9.2702 8.46945 8.9802L11.4695 5.9802C11.7595 5.6902 12.2395 5.6902 12.5295 5.9802L15.5295 8.9802C15.8195 9.2702 15.8195 9.75019 15.5295 10.0402C15.3795 10.1902 15.1895 10.2602 14.9995 10.2602Z" fill="#979797"/>
                                <path d="M12 15.2598C11.59 15.2598 11.25 14.9198 11.25 14.5098V6.50977C11.25 6.09977 11.59 5.75977 12 5.75977C12.41 5.75977 12.75 6.09977 12.75 6.50977V14.5098C12.75 14.9298 12.41 15.2598 12 15.2598Z" fill="#979797"/>
                                <path d="M12.0004 18.2302C9.89044 18.2302 7.77043 17.8902 5.76043 17.2202C5.37043 17.0902 5.16043 16.6602 5.29043 16.2702C5.42043 15.8802 5.85045 15.6602 6.24045 15.8002C9.96045 17.0402 14.0504 17.0402 17.7704 15.8002C18.1604 15.6702 18.5904 15.8802 18.7204 16.2702C18.8504 16.6602 18.6404 17.0902 18.2504 17.2202C16.2304 17.9002 14.1104 18.2302 12.0004 18.2302Z" fill="#979797"/>
                                </svg>
                                
                                
                        </label>
                        <input @change="uploadFile($event) || validate($event)"  class="form-control d-none" type="file" onchange="readName(this)" id="fileinput1">
                        <span id="selected_filename" class="mx-3 gray font-13 ">
                            ارفق صور او فيديو هات للمكان
                        </span>
                    </div>
                    <d-error-input v-if="errors.length" :errors="errors"/>
      </ValidationProvider>
  </ValidationObserver>
</template>
<template v-slot:actions>
  <button  class="btn bg-main text-white" @click="save">ارسال الطلب</button>
</template>
</d-dialog-large>
</template>
<script>
import projectsAPI from '@/services/api/projects.js'
export default {
  name:"make-offer",
  props:{
    group:{
        type:String,
        default:'make-offer'
    }
  },
  data:()=>({
    showDialog:false,
    project:{},
    itemForm:{
      title:'',
      place_area:'',
      rent:null,
      address:'',
      desc:'',
      image:null,
    }
  }),
  methods:{
    closeMe(){
    this.fireCloseDialog(this.group)
  },
    openSuccessDialog(){
    this.fireOpenDialog('success-make-offer')
  },
  async save(evt){
    if(evt) evt.preventDefault();
    
            let valid = await this.$refs.form.validate();
        if(!valid){
            console.log('form invalid');
            return ;
        }
            let formData = new FormData();
            Object.keys(this.itemForm).forEach(key=>{
                formData.append(key,this.itemForm[key])
            })
            formData.append('invest_project_id',this.project.id)
            try {
                let { data } = await projectsAPI.makeOffer(formData)
                if(data.success){
                  this.openSuccessDialog()
                  this.closeMe()
                Object.keys(this.itemForm).forEach(key=>{
                    this.itemForm[key]=null;
                })
                this.$nextTick(() => {
                        if (this.$refs["form"]) {
                        this.$refs.form.reset();
                        }
                    });
                }
            } catch (error) {
                console.log('error',error)
                if(error.response){
                    let response =error.response
                    console.log('error',response)
                    if(response.status==422){
                        if(response.data.errors)
                        this.$refs.form.setErrors(response.data.errors)
                    }
                }
            }
    },
  uploadFile(evt){
    if (!evt.target.files && !evt.target.files[0]) {
            this.itemForm.image = null;
            
            return;
        }
        this.itemForm.image = evt.target.files[0];
    },
    openDialog(data){
      this.project = data;
        this.showDialog = true;
        return true;
    },
    closeDialog(){
        this.showDialog = false

        return true;
    },
  }
}

</script>