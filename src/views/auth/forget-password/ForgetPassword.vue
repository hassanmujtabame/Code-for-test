<template>
     <div class="container">
            <div class="box bg-white    rounded-3">
        
                <div class="row align-items-center p-0 position-relative ">
                    <div class="col-12 col-md-6 p-4">
                        <div style="" class="text-center " >
                                 <img class="" src="/assets/img/pot_1_@2x.png" alt="" width="320" height="220">
                        </div>
                        <div class="">

                            <h1 class="fw-bolder ">
                                نسيت كلمة السر ؟
                                                                                </h1>
                            <p>
                                لا تقلق سنساعدك على أستعادتها 

                            </p>
                            <ValidationObserver ref="form" tag="div" class="row g-3 needs-validation " novalidate>
                        
    
                                <div class="col-md-4 w-100">
                                    <d-text-input type="email" v-model="itemForm.email" class="form-control" id="validationCustom03"
                                        label="البريد الالكتروني" >
                                    
                                    </d-text-input>
                                </div>                         
                                <div class="col-12 text-center ">
                                    <button @click="doNext" class="btn btn-main  " type="submit"   role="button">  أستمر  </button>
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
export default{
    name:'forget-password',
    data:()=>({
        itemForm:{
            email:''
        }
    }),
    methods:{
        async doNext(){
           try {
            let { data } = await this.$axios.post('user/auth/forget-password', this.itemForm)
            if(data.success){
                
                let info ={
                            data:data.data,
                            form:this.itemForm
                    }
                    this.$emit('success',info)
            }else{
                window.SwalError(data.message)
            }
           } catch (error) {
            window.DHelper.catchException.call(this,error)
           }
        }
    }
}
</script>