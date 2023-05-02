<template>
     <div class="container">
            <div class="box bg-white    rounded-3">
        
                <div class="row align-items-center p-0 position-relative ">
                    <div class="col-12 col-md-6 p-4">
                        <div style="" class="text-center " >
                                 <img class="" :src="`${publicPath}assets/img/reset-password.png`" alt="" width="320" height="220">
                        </div>
                        <div class="">

                            <ValidationObserver ref="form" tag="div" class="row g-3 needs-validation">
                        
    
                                <div class="col-md-4 w-100">
                                    <ValidationProvider
                                 tag="div"
                                    :name="$t('Password')"
                                 vid="password"
                                 rules="required"
                                    v-slot="{errors}">
                                    <d-text-input :errors="errors" v-model="itemForm.old_password" :type="show?'text':'password'" class="form-control"   label="كلمة المرور القديمة" >
                                        <template v-slot:append-icon>
                                        <span    style="color: #CDD7D8;font-size: 23px;"
                                            
                                                @click="show=!show"
                                                
                                                class="fa-regular mx-1"
                                                :class="{'fa-eye': !show, 'fa-eye-slash':show }"
                                                >
                                            </span>
                                        </template>
                                    </d-text-input>

                                </ValidationProvider>
                                <div class="col-md-12  mt-3">
                                    <ValidationProvider
                                 tag="div"
                                    :name="$t('Password')"
                                 vid="new_password"
                                 rules="required"
                                    v-slot="{errors}">
                                    <d-text-input :errors="errors" :type="showN?'text':'password'" 
                                    v-model="itemForm.new_password"
                                    class="form-control"   :label="$t('new-password')" >
                                    <template v-slot:append-icon>
                                    <span    style="color: #CDD7D8;font-size: 23px;"
                                     @click="showN=!showN"
                                     
                                    class="fa-regular mx-1"
                                    :class="{'fa-eye': !showN, 'fa-eye-slash':showN }"
                                    >
                                </span>
                            </template>    
                                    </d-text-input>
                                </ValidationProvider>
                        
                                    
                                    
                                </div>
    
                                <div class="col-md-12 mt-3">
                                    <ValidationProvider
                                 tag="div"
                                    :name="$t('Password-confirm')"
                                 vid="new_password_confirmation"
                                 rules="required|confirmed:new_password"
                                    v-slot="{errors}">
                                  
                                    <d-text-input :errors="errors" :type="showNc?'text':'password'"
                                    v-model="itemForm.new_password_confirmation"
                                    class="form-control"   :label="$t('Password-confirm')" >
                                    <template v-slot:append-icon>
                                        <span    style="color: #CDD7D8;font-size: 23px;"
                                     @click="showNc=!showNc"
                                     
                                    class="fa-regular mx-1"
                                    :class="{'fa-eye': !showNc, 'fa-eye-slash':showNc }"
                                    >
                                </span>
                                </template>
                                    </d-text-input>
                                  
                                </ValidationProvider>
                    
                                    
                                    
                                </div>
                            <p > نسيت كلمة السر ؟</p>
                                    
                                    
                                </div>
    
                         
                                
                                <div class="col-12 text-center ">
                                    <button  @click="resetPassword" class="btn btn-main  " type="submit"   role="button">  أستمر  </button>
                                </div>
                                
                            </ValidationObserver>
                        </div>

                    </div>
                    <div class=" col-12 col-md-6">
                        <div class="box">
                            <img :src="`${publicPath}assets/svg/riadiat-green-card.svg`"/>

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
        showN:false,
        showNc:false,
        itemForm:{
           // email:process.env.EMAIL||'',
            old_password:process.env.PASSWORD||'',
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
                let {data} = await this.$axios.post('user/auth/change-password',this.itemForm);
                if(data.success){
                    let info ={
                            data:data,
                            form:this.itemForm
                    }
                    this.$emit('success',info)
                }else{
                    window.SwalError(data.message)
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