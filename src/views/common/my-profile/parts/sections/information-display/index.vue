<template>
 <div id="list-item-1">
                <div class="box border ">
                    <h3 class="border-bottom py-2 t-c px-3">
                        معلومات العرض
                    </h3>
                    <ValidationObserver ref="form">
                    <div class="row p-3">
                        <div class="col-md-3">
                            <div class="main-img">
                                <div class="col-md-12">
                                    <label for="imginput" class="form-label file-label first w-100">
                             
                                        <div class="add-img-selected">
        
                                            <img class="w-100 h-100 rounded-circle" :src="urlTmp??imageUser" id="image_selected-2" />
                                        </div>
                                    </label>
                                    <ValidationProvider
                                    :name="$t('Image')"
                                    vid="image"
                                    rules="image"
                                    v-slot="{validate,errors}"
                                    >
                                    <input @change="uploadImage($event,validate)" class="form-control d-none" type="file"
                                        id="imginput">
                                        <d-error-input :errors="errors" v-if="errors.length"></d-error-input>
                                    </ValidationProvider>
                                </div>  
                                <!-- <img class="rounded-circle img-person" src="../assets/img/صورة واتساب بتاريخ 2022-10-18 في 09.53.21.jpg" alt="" width="140" height="140"> -->
                                <p class="pen">
                                    <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <circle cx="20" cy="20" r="20" fill="#FFBC00"/>
                                        <path d="M23 30.75H17C11.57 30.75 9.25 28.43 9.25 23V17C9.25 11.57 11.57 9.25 17 9.25H19C19.41 9.25 19.75 9.59 19.75 10C19.75 10.41 19.41 10.75 19 10.75H17C12.39 10.75 10.75 12.39 10.75 17V23C10.75 27.61 12.39 29.25 17 29.25H23C27.61 29.25 29.25 27.61 29.25 23V21C29.25 20.59 29.59 20.25 30 20.25C30.41 20.25 30.75 20.59 30.75 21V23C30.75 28.43 28.43 30.75 23 30.75Z" fill="white"/>
                                        <path d="M16.4998 25.6901C15.8898 25.6901 15.3298 25.4701 14.9198 25.0701C14.4298 24.5801 14.2198 23.8701 14.3298 23.1201L14.7598 20.1101C14.8398 19.5301 15.2198 18.7801 15.6298 18.3701L23.5098 10.4901C25.4998 8.50006 27.5198 8.50006 29.5098 10.4901C30.5998 11.5801 31.0898 12.6901 30.9898 13.8001C30.8998 14.7001 30.4198 15.5801 29.5098 16.4801L21.6298 24.3601C21.2198 24.7701 20.4698 25.1501 19.8898 25.2301L16.8798 25.6601C16.7498 25.6901 16.6198 25.6901 16.4998 25.6901ZM24.5698 11.5501L16.6898 19.4301C16.4998 19.6201 16.2798 20.0601 16.2398 20.3201L15.8098 23.3301C15.7698 23.6201 15.8298 23.8601 15.9798 24.0101C16.1298 24.1601 16.3698 24.2201 16.6598 24.1801L19.6698 23.7501C19.9298 23.7101 20.3798 23.4901 20.5598 23.3001L28.4398 15.4201C29.0898 14.7701 29.4298 14.1901 29.4798 13.6501C29.5398 13.0001 29.1998 12.3101 28.4398 11.5401C26.8398 9.94006 25.7398 10.3901 24.5698 11.5501Z" fill="white"/>
                                        <path d="M27.8501 17.8298C27.7801 17.8298 27.7101 17.8198 27.6501 17.7998C25.0201 17.0598 22.9301 14.9698 22.1901 12.3398C22.0801 11.9398 22.3101 11.5298 22.7101 11.4098C23.1101 11.2998 23.5201 11.5298 23.6301 11.9298C24.2301 14.0598 25.9201 15.7498 28.0501 16.3498C28.4501 16.4598 28.6801 16.8798 28.5701 17.2798C28.4801 17.6198 28.1801 17.8298 27.8501 17.8298Z" fill="white"/>
                                     </svg>
                                        
                                </p>
                            </div>
                        </div>
                        <div class="col-md-8 border ">
                            <div class="d-flex justify-content-between t-c p-2">
                                <p class="">
                                    نبذة تعريفية
                                </p>
                                <p>
                                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M5.53999 19.5196C4.92999 19.5196 4.35999 19.3096 3.94999 18.9196C3.42999 18.4296 3.17999 17.6896 3.26999 16.8896L3.63999 13.6496C3.70999 13.0396 4.07999 12.2296 4.50999 11.7896L12.72 3.09956C14.77 0.929561 16.91 0.869561 19.08 2.91956C21.25 4.96956 21.31 7.10956 19.26 9.27956L11.05 17.9696C10.63 18.4196 9.84999 18.8396 9.23999 18.9396L6.01999 19.4896C5.84999 19.4996 5.69999 19.5196 5.53999 19.5196ZM15.93 2.90956C15.16 2.90956 14.49 3.38956 13.81 4.10956L5.59999 12.8096C5.39999 13.0196 5.16999 13.5196 5.12999 13.8096L4.75999 17.0496C4.71999 17.3796 4.79999 17.6496 4.97999 17.8196C5.15999 17.9896 5.42999 18.0496 5.75999 17.9996L8.97999 17.4496C9.26999 17.3996 9.74999 17.1396 9.94999 16.9296L18.16 8.23956C19.4 6.91956 19.85 5.69956 18.04 3.99956C17.24 3.22956 16.55 2.90956 15.93 2.90956Z" fill="#737373"/>
                                        <path d="M17.3399 10.9508C17.3199 10.9508 17.2899 10.9508 17.2699 10.9508C14.1499 10.6408 11.6399 8.27083 11.1599 5.17083C11.0999 4.76083 11.3799 4.38083 11.7899 4.31083C12.1999 4.25083 12.5799 4.53083 12.6499 4.94083C13.0299 7.36083 14.9899 9.22083 17.4299 9.46083C17.8399 9.50083 18.1399 9.87083 18.0999 10.2808C18.0499 10.6608 17.7199 10.9508 17.3399 10.9508Z" fill="#737373"/>
                                        <path d="M21 22.75H3C2.59 22.75 2.25 22.41 2.25 22C2.25 21.59 2.59 21.25 3 21.25H21C21.41 21.25 21.75 21.59 21.75 22C21.75 22.41 21.41 22.75 21 22.75Z" fill="#737373"/>
                                    </svg>
                                        
                                </p>
                            </div>
                            <ValidationProvider
                                    :name="$t('Bio')"
                                    vid="bio"
                                    rules=""
                                    v-slot="{errors}"
                                    >
                            <textarea v-model="itemForm.bio" class="w-100 border-0" rows="10">
                            </textarea>
                            <d-error-input :errors="errors" v-if="errors.length"></d-error-input>
                            </ValidationProvider>
                        </div>
                        <div class="m-auto text-center p-3">
                            <button @click="save" class="btn-main">
                                {{$t('save')}}
                            </button>
                        </div>
                    </div>
                </ValidationObserver>
                </div>

            </div>  
</template>

<script>
import userAPI from '@/services/api/user.js'
export default {
 name:'display-info-item',
 props:['currentUser'],
 data:(vm) => {
   return { 
  
    urlTmp:null,
    imageUrl:vm.currentUser.image,
    itemForm:{
        image:null,
        bio:vm.currentUser.bio,
    }
 }
},
computed:{
  imageUser(){
    return this.imageUrl
  }
},
 methods:{
    async save(evt) {
            if (evt) evt.preventDefault();
            let valid = await this.$refs.form.validate();
            if (!valid) {
                console.log('form invalid')
                return;
            }
            let formData = new FormData();
            Object.keys(this.itemForm).forEach(key => {
                formData.append(`${key}`, this.itemForm[key])
            })

            try {
                let { data } = await userAPI.postDisplayInformation(formData)
                if (data.success) {
                    window.SwalSuccess(data.message)
                } else {
                    window.SwalError(data.message)
                }
            } catch (error) {
                console.log('error', error)
                if (error.response) {
                    if (error.response.status == 422) {
                        this.$refs.form.setErrors(error.response.data)
                    }
                }

            }
        },
    async uploadImage(evt,validate){
        let valid = await validate(evt);
        if(!valid.valid){
            this.itemForm.image = null;
            if(this.urlTmp) {
                URL.revokeObjectURL(this.urlTmp);
                this.urlTmp = null
            }
            return
        }
        this.itemForm.image = evt.target.files[0];
        if(this.itemForm.image)
        this.urlTmp = URL.createObjectURL( this.itemForm.image);
        else{
            URL.revokeObjectURL(this.urlTmp);
            this.urlTmp = null
        }
        

    },
 }
}
</script>

<style scoped>
 .file-label {
    border: 0;
}
.add-img-selected{
    width: 150px;
    height: 150px;
    border-radius: 50%;
    border: 5px solid #1FB9B3;
}
</style>