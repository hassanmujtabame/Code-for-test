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
                        
    
                                <div class="col-md-4 w-100">
                                    <ValidationProvider
                                 tag="div"
                                    :name="$t('Password')"
                                 vid="password"
                                 rules="required"
                                    v-slot="{errors}">
                                    <div class="position-relative">
                                    <input :type="show?'text':'password'" class="form-control"   placeholder="كلمة المرور القديمة" >

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
        form:{
            email:process.env.EMAIL||'',
            password:process.env.PASSWORD||''
        },
        hasError:false,
        message:'',
    }),
     methods:{
        async resetPassword(){
        this.$emit('success',{})
    },
    async resetPasswordold(e){
            e.preventDefault();
            this.hasError=false;
            this.message='';
            let valid = await this.$refs.form.validate();
        if(!valid){
            console.log('form invalid');
            return ;
        }
            try {
                let {data} = await this.$axios.post('user/auth/reset-password',this.form);
                if(data.success){
                    let info ={
                            data:data,
                            form:this.form
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