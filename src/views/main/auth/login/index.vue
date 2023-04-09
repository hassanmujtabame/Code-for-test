<template>
 <div class="container">
 <LoginForm @change-form="afterSuccessForm" v-if="status=='form'" />
 <ResendCodeView @success="afterSuccessCheck" @cancel="status='form'" :dataInfo="dataCheck" v-if="status=='resend-code'" />
  </div>
</template>

<script>
import ResendCodeView from './ResendCode.vue'
import LoginForm from './loginForm.vue'

export default {
 name:'login-page',
 metaInfo(){
      return {title:this.$t('login')}
 },
 components:{
   LoginForm,
   ResendCodeView
 },
 data:()=>({
    status:'form',

    dataCheck:{},
    dataFinish:{}
 }),
 methods:{
    afterSuccessForm(evt){
        this.dataCheck=evt
        this.status='resend-code';
    },
    afterSuccessCheck(/*evt*/){
      /*this.dataFinish= evt*/
      window.SwalSuccess('تم تفيعل حسابك بنجاح')
        this.status='form';
    },
 },
 mounted(){
    this.status='form';
 }
}
</script>

<style>

</style>