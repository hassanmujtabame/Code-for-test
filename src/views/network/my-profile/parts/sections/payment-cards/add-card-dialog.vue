<template>
  
    <d-dialog-large 
    mlg
    :group="group" 

    :closeDialog="closeDialog"
    :openDialog="openDialog"
    >
        <ValidationObserver ref="form" >
            <div class="col-12" style="box-shadow: 0px 1px 4px 0px;padding: 29px;">
                                        <div class="mt-3">
                                            <form action="">
                                                <div class="row">
                                                    <div class="col-12">
                                                        <ValidationProvider 
                                                        :name="$t('card_holder')"
                                                        vid="card_holder"
                                                        rules="required|alpha_spaces"
                                                        v-slot="{errors}"
                                                        >
                                                        <label class="form-label">{{ $t('card_holder') }}</label>
                                                        <input type="text" v-model="card_holder" class="border rounded-2 w-100  p-2 " name=""
                                                        @focus="sendChangeFaceCard('front')"
                                                         :placeholder="$t('card_holder')">
                                                         <d-error-input :errors="errors" v-if="errors.length" />
                                                    </ValidationProvider>
                                                    </div>
                                                    <div class="col-12">
                                                        <ValidationProvider 
                                                        tag="div"
                                                        class="mt-3"
                                                        :name="$t('card_number')"
                                                        vid="card_number"
                                                        :rules="ruleCardNumber"
                                                        v-slot="{errors}"
                                                        >
                                                        <label class="form-label">{{ $t('card_number') }}</label>
                                                        <div class="position-relative">
                                                        <input :maxlength="stateNumber.correct?stateNumber.mask_length:null" type="text" v-model="card_number" class="border rounded-2 w-100  p-2"
                                                        @focus="sendChangeFaceCard('front')"    
                                                         :placeholder="$t('card_number')">
                                                         <svg id="ccicon" class="ccicon" width="750" height="471"
                                                          viewBox="0 0 750 471" version="1.1" 
                                                          xmlns="http://www.w3.org/2000/svg" 
                                                          xmlns:xlink="http://www.w3.org/1999/xlink"
                                                          v-if="stateNumber.ccicon" 
                                                          v-html="stateNumber.ccicon"
                                                          >
                                                        
                                                        </svg>
                                                         
                                                        </div>
                                                        <d-error-input :errors="errors" v-if="errors.length" />
                                                    </ValidationProvider>
                                                    </div>
                                                    <div class="col-6">
                                                        <ValidationProvider 
                                                        tag="div"
                                                        class="mt-3"
                                                        :name="$t('expiry_date')"
                                                        vid="expiry_date"
                                                        rules="required|length:5"
                                                        v-slot="{errors}"
                                                        >
                                                        <label class="form-label">{{ $t('expiry_date') }}</label>
                                                        <input maxlength="5" type="text" 
                                                        v-model="expiry_date"
                                                        @focus="sendChangeFaceCard('front')"
                                                            class="border rounded-2 w-100  p-2 " id=""
                                                            :placeholder="$t('expiry_date')">
                                                        <div id="date_endHelp" class="form-text">على نمط شهر/سنة</div>
                                                        <d-error-input :errors="errors" v-if="errors.length" />
                                                    </ValidationProvider>
                                                    </div>
                                                    <div class="col-6">
                                                        <ValidationProvider 
                                                        tag="div"
                                                        class="mt-3"
                                                        :name="$t('security_code')"
                                                        vid="card_cvv"
                                                        rules="required|numeric|min:3|max:4"
                                                        v-slot="{errors}"
                                                        >
                                                        <label class="form-label">{{ $t('security_code') }}</label>
                                                        <input maxlength="4" type="text" class="border rounded-2 w-100  p-2"
                                                        v-model="card_cvv"
                                                        @focus="sendChangeFaceCard('back')"
                                                         placeholder="">
                                                        <div id="pinHelp" class="form-text"><bdi>3 أو 4 ارقام</bdi>
                                                        </div>
                                                        <d-error-input :errors="errors" v-if="errors.length" />
                                                    </ValidationProvider>
                                                    </div>
                                                    <div class="col-12">
                                                        <div class="form-check mt-3">
                                                            <input class="form-check-input" type="checkbox"
                                                                name="flexcheckDefault">
                                                            <label class="form-check-label m-c" for="flexcheckDefault">
                                                                {{ $t('save') }}
                                                            </label>
                                                        </div>
                                                    </div>
                                                </div>
                                            </form>

                                        </div>
                                        <d-credit-card :group="groupCard" />
                                    </div>
        </ValidationObserver>
  
    <template v-slot:actions>
        <button @click="save" type="button" class="btn btn-main">
             {{ $t('save') }} 
        </button>
    </template>
  </d-dialog-large>

</template>
<script>
import BlogsAPI from '@/services/api/blogs.js'
import creditCardMixins from '@/common/mixins/credit-card.vue';
export default {
    mixins:[creditCardMixins],
data:()=>{
return{
group:'add-credit-card',
showDialog:false,
}},
methods:{
async save(){
let valid = await this.$refs.form.validate();
    if(!valid){
        console.log('form invalid');
        return ;
    }
 let formData = new FormData();


    try {
        let { data } = await BlogsAPI.addBlog(formData)
        if(data.success){
            console.log('success',data)
           this.fireOpenDialog('success-add-blog',data.data[0])
            this.closeEvent()
        }
    } catch (error) {
        //
        if(error.response){
                let response =error.response
                if(response.status==422){
                    if(response.data.errors)
                    this.$refs.form.setErrors(response.data.errors)
                }
            }
       
    }
},
openDialog(){
   
    this.showDialog = true;
    return true;
},
closeDialog(){
    this.showDialog = false

    return true;
},
closeEvent(){
   this.fireEvent(this.group+'-close-dialog')
}
},
mounted(){

}
}
</script>

<style scoped>
label{
width:100%;
text-align: start;
}
.img-zone{
max-width: 430px;
}
</style>

