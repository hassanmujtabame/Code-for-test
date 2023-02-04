<template>
 <div class="container">
 <RegisterForm @success="afterSuccessForm" v-if="status=='form'" />
 <RegisterCheck @success="afterSuccessCheck" :dataInfo="dataCheck" v-if="status=='check'" />
 <RegisterFinish v-if="status=='finish'" :dataInfo="dataFinish" />
  </div>
</template>

<script>
import RegisterForm from './RegisterView.vue'
import RegisterFinish from './RegisterFinish.vue'
import RegisterCheck from './RegisterCheck.vue'
export default {
 name:'register-page',
 components:{
    RegisterForm,
    RegisterFinish,
    RegisterCheck
 },
 data:()=>({
    status:'form',

    dataCheck:{},
    dataFinish:{}
 }),
 methods:{
    afterSuccessForm(evt){
        this.dataCheck=evt
        this.status='check';
    },
    afterSuccessCheck(/*evt*/){
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