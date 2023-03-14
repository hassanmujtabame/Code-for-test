<template>
 <div class="container">
 <ForgetPasswordEmail @success="afterSuccessEmail" v-if="status=='email'" />
 <ForgetPasswordCheck @success="afterSuccessCheck" :dataInfo="dataCheck" v-if="status=='check'" />
 <NewPasswordForm @success="afterSuccessNew" :dataInfo="dataNew" v-if="status=='new'" />
 <ChangePasswordFinish v-if="status=='finish'" />
 
  </div>
</template>

<script>
import ForgetPasswordEmail from './ForgetPassword.vue'
import ForgetPasswordCheck from './ForgetPasswordCheck.vue'
import ChangePasswordFinish from './ForgetPasswordFinish.vue'
import NewPasswordForm from './ForgetPasswordEdit.vue'
export default {
 name:'forget-password-page',
 components:{
   ForgetPasswordEmail,
   ForgetPasswordCheck,
   NewPasswordForm,
   ChangePasswordFinish
 },
 data:()=>({
    status:'email',
    dataCheck:{},
    dataFinish:{},
    dataNew:{},
 }),
 methods:{
    afterSuccessEmail(evt){
        //this.dataCheck=evt
        this.dataCheck = evt
        this.status='check';
    },
    afterSuccessCheck(evt){
        this.dataNew = evt
        this.status='new';
    },
    afterSuccessNew(/*evt*/){
        this.status='finish';
    },
 },
 mounted(){
    this.status='email';
 }
}
</script>

<style>

</style>