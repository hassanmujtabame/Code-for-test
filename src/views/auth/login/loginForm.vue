<template>
        <div class="container">
            <div class="box bg-white    rounded-3">
        
                <div class="row align-items-center p-0 position-relative ">
                    <div class="col-12 col-md-6 p-4">
                        <div :style="{top: '17px',left: $i18n.locale=='ar'?'auto':'0',right: $i18n.locale!=='ar'?'auto':'0'}" class="position-absolute form-loging" >
                            <h6>
                                ليس لديك حساب ؟   
                                <router-link :to="getRouteLocale('register')" class="m-c">
                                      أنشئ حساب الان
                                </router-link>
                            </h6>
                        </div>
                        <h1 class="fw-bolder">مرحبا بك من جديد</h1>
                        <p>لنبدأمن جديد ال انطلاق نحو المستقبل</p>
                        <div v-if="hasError" class="alert alert-danger" role="alert">
                            {{message}}
                            <div v-if="verifyCode">
                            <a href="#" @click="resendCode">{{ $t('resend-code') }}</a>
                            </div>
                        </div>
                        <ValidationObserver ref="form" @submit="login" class="row g-3 needs-validation" novalidate>
                            <div class="col-md-4 w-100 row">
                                <ValidationProvider
                                    :name="$t('Email')"
                                 vid="email"
                                 rules="required"
                                    v-slot="{errors}">
                                    <div class="col-12">
                                <input type="text" 
                                class="form-control" 
                                id="validationCustom03"       
                                :placeholder="$t('Email')" 
                                v-model="form.email"
                                required
                                >
                            </div>
                                <div v-if="errors.length!==0" class="col-12 text-input-error">
                                {{errors[0]}}
                                </div>
                                </ValidationProvider>
                            </div>
                            <div class="col-md-4 w-100 mt-3 row">
                                <ValidationProvider
                                 tag="div"
                                    :name="$t('Password')"
                                 vid="password"
                                 rules="required"
                                    v-slot="{errors}">
                                    <div class="col-12 position-relative">
                                <input 
                                id="password-field"  
                                :type="show?'text':'password'"
                                v-model="form.password"
                                 class="form-control " 
                                    :placeholder="$t('Password')" required>
                                    <span    style="color: #CDD7D8;font-size: 23px;"
                                     toggle="#password-field"
                                     @click="show=!show"
                                     
                                    class="icon-input-end fa-regular toggle-password position-absolute"
                                    :class="{'fa-eye': !show, 'fa-eye-slash':show }"
                                    >
                                </span>
                            </div>
                                <div v-if="errors.length!==0" class="col-12 text-input-error">
                                {{errors[0]}}
                                </div>
                                </ValidationProvider>
                            </div>
                            <div class="d-flex justify-content-between mt-3 ">
                                <div class="form-check">
                                    <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault">
                                    <label class="form-check-label" for="flexCheckDefault">
                                       {{$t('rememberme')}}
                                    </label>
                                    </div>
                                    <div>
                                        <router-link :to="getRouteLocale('forget-password')" class="m-c">
                                            {{$t('forgot_password')}}
                                        </router-link>
                                    </div>
                                </div>
                            <div class="col-12 text-center ">
                                <button @click="login" class="btn btn-main  "   role="button"> {{ $t('login') }}  </button>
                            </div>
                            
                        </ValidationObserver>

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
        verifyCode:false,

    }),
    methods:{
        async resendCode(e){
            if(e)
            e.preventDefault();
         
            let email = this.form.email
            try {
                let {data} = await this.$axios.post('user/auth/resend-code',{email});
                if(data.success){
                   let pin_code = data.data.pin_code
                  
                   this.$emit('change-form',{data:{pin_code},form:{email}})
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
       async login(e){
            e.preventDefault();
            this.hasError=false;
            this.verifyCode = false;
            this.message='';
            let valid = await this.$refs.form.validate();
        if(!valid){
            console.log('form invalid');
            return ;
        }
            try {
                let {data} = await this.$axios.post('user/auth/login',this.form);
                if(data.success){
                    let {token,...user} = data.data
                    window.store.commit('auth/SET_TOKEN',token) ;
                  window.store.commit('auth/SET_USER',user);
                  window.store.commit('auth/SET_IS_PROVIDER',false);
                  //this.$router.push('/')
                  window.location.reload()
                }else{
                    this.message = data.message;
                    this.hasError=true;
                    if(data.data.type=='verify_code'){
                            this.verifyCode = true
                        }
                }
                
            } catch (error) {
                console.log('error',error)
                this.message='خطا غير معروف'
                if(error.response){
                    let response =error.response
                    if(response.status==422){
                        this.message = response.data.message;
                        if(Object.hasOwnProperty.call(response.data,'errors')){
                            this.$refs.form.setErrors(response.data.errors)
                        }
                    }else
                    if(response.status==401){
                        this.message = response.data.message;
                        if(response.data['type']=='verify_code'){
                            this.verifyCode = true
                        }
                    }
                }

                this.hasError=true;
            }
        }
    }
}
</script>
