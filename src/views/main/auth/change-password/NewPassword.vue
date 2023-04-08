<template>
     <div class="container">
            <div class="box bg-white    rounded-3">
        
                <div class="row align-items-center p-0 position-relative ">
                    <div class="col-12 col-md-6 p-4">
                        <div style="" class="text-center " >
                                 <img class="" src="/assets/img/reset-password.png" alt="" width="320" height="220">
                        </div>
                        <div class="">

                            <ValidationObserver ref="form" tag="div" class="row g-3 needs-validation">
                        
    
                                <div class="col-md-12">
                                    <ValidationProvider
                                 tag="div"
                                    :name="$t('Password')"
                                 vid="new_password"
                                 rules="required"
                                    v-slot="{errors}">
                                    <div class="position-relative">
                                    <input :type="show?'text':'password'" 
                                    v-model="itemForm.new_password"
                                    class="form-control"   :placeholder="$t('new-password')" >

                                        <span    style="color: #CDD7D8;font-size: 23px;"
                                     toggle="#password-field"
                                     @click="show=!show"
                                     
                                    class="icon-input-end fa-regular toggle-password position-absolute"
                                    :class="{'fa-eye': !show, 'fa-eye-slash':show }"
                                    >
                                </span>
                                    </div>
                                    <d-error-input :errors="errors" v-if="errors.length" />
                                </ValidationProvider>
                        
                                    
                                    
                                </div>
    
                                <div class="col-md-12">
                                    <ValidationProvider
                                 tag="div"
                                    :name="$t('Password-confirm')"
                                 vid="new_password_confirmation"
                                 rules="required|confirmed:new_password"
                                    v-slot="{errors}">
                                    <div class="position-relative">
                                    <input :type="showc?'text':'password'"
                                    v-model="itemForm.password_confirmation"
                                    class="form-control"   :placeholder="$t('Password-confirm')" >

                                        <span    style="color: #CDD7D8;font-size: 23px;"
                                     toggle="#password-field"
                                     @click="showc=!showc"
                                     
                                    class="icon-input-end fa-regular toggle-password position-absolute"
                                    :class="{'fa-eye': !show, 'fa-eye-slash':show }"
                                    >
                                </span>
                                    </div>
                                    <d-error-input :errors="errors" v-if="errors.length" />
                                </ValidationProvider>
                    
                                    
                                    
                                </div>
                                
                                <div class="col-12 text-center ">
                                    <button  @click="resetPassword" class="btn btn-main  " type="submit"  role="button">  أستمر  </button>
                                </div>
                                
                            </ValidationObserver>
                        </div>

                    </div>
                    <div class=" col-12 col-md-6">
                        <div class="box">
                            <img src="/assets/svg/riadiat-green-card.svg"/>

                        </div>

                    </div>

                </div>
            </div>

        </div>
</template>

<script>
export default {
    data:()=>({
        show:false,
        showc:false,
        form:{
            
            new_password:'',
            new_password_confirmation:''
        },
        hasError:false,
        message:'',
    }),
     methods:{
    async resetPasswordOld(){
        this.$emit('success',{})
    },
    async resetPassword(e){
            e.preventDefault();
            this.hasError=false;
            this.message='';
            let valid = await this.$refs.form.validate();
        if(!valid){
            console.log('form invalid');
            return ;
        }
            try {
                let {data} = await this.$axios.post('user/auth/new-password',this.itemForm);
                if(data.success){
                    let info ={
                            data:data,
                            form:this.itemForm
                    }
                    this.$emit('success',info)
                }else{
                    this.message = data.message;
                    this.hasError=true;
                }
                
            } catch (error) {
                this.message='خطا غير معروف'
                if(error.response){
                    let response =error.response
                    if(response.status==422){
                        this.message = response.data.message;
                        if(Object.hasOwnProperty.call(response.data,'errors')){
                            this.$refs.form.setErrors(response.data.errors)
                        }
                    }
                }

                this.hasError=true;
            }
        }
 }
}
</script>