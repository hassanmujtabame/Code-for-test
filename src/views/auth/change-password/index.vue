<template>
 <div class="container">
 <ChangePasswordForm @success="afterSuccessForm" v-if="status=='form'" />
 <ChangePasswordFinish v-if="status=='finish'" />
 <NewPasswordForm @success="afterSuccessNew" v-if="status=='new'" />
 
  </div>
</template>

<script>
import ChangePasswordForm from './ChangePassword.vue'
import ChangePasswordFinish from './ChangePasswordFinish.vue'
import NewPasswordForm from './NewPassword.vue'
export default {
 name:'register-page',
 components:{
   ChangePasswordForm,
   NewPasswordForm,
   ChangePasswordFinish
 },
 data:()=>({
    status:'form',

    dataCheck:{},
    dataFinish:{}
 }),
 methods:{
    afterSuccessForm(/*evt*/){
        //this.dataCheck=evt
        this.status='new';
    },
    afterSuccessNew(/*evt*/){
        this.status='finish';
    },
 },
 mounted(){
    this.status='form';
 }
}
</script>

<style>

</style>