<template>
     <div class="container">
            <div class="box bg-white    rounded-3">
                <div class="row align-items-center p-0 position-relative ">
                    <div class="col-12 col-md-6 p-4">
                        <div style="" class="text-center " >
                                 <img class="" src="/assets/img/pot_3_.png" alt="" width="320" height="220">
                        </div>
                        <div class="">

                            <h1 class="fw-bolder ">
                                أعادة تعين كلمة السر                                                                                                                                        </h1>
                            <p>أختر كلمة سر قوية وسهلة الحفظ   
                            </p>
             
                            <form class="row g-3 needs-validation " novalidate>
                        
                                <div class="col-md-4 w-100 position-relative">
                                    <ValidationProvider
                                 tag="div"
                                    :name="$t('Password')"
                                 vid="password"
                                 rules="required"
                                    v-slot="{errors}">
                                    <d-text-input :errors="errors" v-model="itemForm.password" :type="show?'text':'password'" class="form-control"   label="كلمة المرور" >
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
                                </div>
                                <div class="col-md-4 w-100">
                                    <ValidationProvider
                                 tag="div"
                                    :name="$t('password-confirmation')"
                                 vid="password_confirmation"
                                 rules="required|confirmed:password"
                                    v-slot="{errors}">
                                    <d-text-input :errors="errors" v-model="itemForm.password_confirmation" :type="showC?'text':'password'" class="form-control"   label="تاكيد كلمة السر" >
                                        <template v-slot:append-icon>
                                        <span    style="color: #CDD7D8;font-size: 23px;"
                                            
                                                @click="showC=!showC"
                                                
                                                class="fa-regular mx-1"
                                                :class="{'fa-eye': !showC, 'fa-eye-slash':showC }"
                                                >
                                            </span>
                                        </template>
                                    </d-text-input>

                                </ValidationProvider>
                                </div>
                                <div class="col-12 text-center ">
                                    <button @click="resetPassword" :disabled="loading" class="btn btn-main  " >  
                                            تغير كلمة السر
                                        </button>
                                </div>
                                
                            </form>
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

        showC:false,
        loading:false,
        itemForm:{
            password:'',
            password_confirmation:''
        },
        hasError:false,
        message:'',
    }),
     methods:{

    async resetPassword(e){
            e.preventDefault();
            this.hasError=false;
            this.loading =  true
            this.message='';
            let valid = await this.$refs.form.validate();
        if(!valid){
            this.loading = false
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
            this.loading = false
        }
 }
}
</script>

<style>

</style>