<template>
          <div class="container">
            <div class="box bg-white    rounded-3">
        
                <div class="row align-items-center p-0 position-relative ">
                    <div class="col-12 col-md-6 p-4">
                        <div style="" class="text-center " >
                                 <img class="" :src="`${publicPath}assets/img/pot_2_.png`" alt="" width="320" height="220">
                        </div>
                        <div class="">

                            <h1 class="fw-bolder ">
                                أكتب الرمز 
                                                                                                                                        </h1>
                            <p>
                                تلقيت رمز الاستعادة على البريد التالي  
                                <span>
                                    {{dataInfo.form.email}}
                                </span>
                            </p>
                            <p v-if="code" style="color:red">
                            للتجريب فقط :رقم التاكيد هو <i>{{code}}</i>
                            </p>
                          
                            <p>
                                لم يصلك الرمز؟
                                <a href="#" @click="resendCode" class="m-c">
                                    أعد الارسال
                                </a>
                            </p>
                            <ValidationObserver class="row g-3 needs-validation " ref="form">
                    
                            <ValidationProvider
                                tag="div"
                                :name="$t('confirm-code')"
                                class="col-md-4 w-100"
                                vid="pin_code"
                                rules="required"
                                v-slot="{errors}"
                            >
                                <div class="col-md-4 w-100">
                                    <d-text-input :errors="errors" type="text" v-model="pin_code" class="form-control" id="validationCustom01"
                                        label="   رمز استعادة كلمة السر" >
                                    </d-text-input>
                                </div>
                         </ValidationProvider>
                                <div class="col-12 text-center ">
                                    <button @click="verifyCode" class="btn btn-main" >  
                                                أستمر
                                          </button>
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
 name:'forget-password-check',
 props:{
    dataInfo:{}
 },
    data:(vm)=>{
        return {
            code:vm.dataInfo.data.pin_code,
            pin_code:'',
        }
    },
    methods: {

        async resendCode(e){
            if(e)
            e.preventDefault();
         
                let {email} = this.dataInfo.form
            try {
                let {data} = await this.$axios.post('user/auth/resend-code',{email});
                if(data.success){
                   this.code = data.data.pin_code
                }else{
                    window.SwalError(data.message)
                }
                
            } catch (error) {
                window.SwalError('خطا غير معروف')
                if(error.response){
                    let response =error.response
                    if(response.status==422){
                        this.message = response.data.message;
                        if(Object.hasOwnProperty.call(response.data,'errors')){
                            this.$refs.form.setErrors(response.data.errors)
                        }
                    }
                }
            }
        },
        async verifyCode(e){
            if(e)
            e.preventDefault();
         
                let {email} = this.dataInfo.form
                let pin_code = this.pin_code
            try {
                let {data} = await this.$axios.post('user/auth/verify-code',{email,pin_code});
                if(data.success){
                    this.$emit('success',this.dataInfo)
                }else{
                    window.SwalError(data.message)
                }
                
            } catch (error) {
                window.SwalError('خطا غير معروف')
                if(error.response){
                    let response =error.response
                    if(response.status==422){
                        this.message = response.data.message;
                        if(Object.hasOwnProperty.call(response.data,'errors')){
                            this.$refs.form.setErrors(response.data.errors)
                        }
                    }
                }
            }
        }
    },
}
</script>

<style>

</style>