<template>
  <d-dialog-large :group="group"
  :xl="false"
  :openDialog="openDialog"
  :closeDialog="closeDialog"
  >
    <template v-slot>
        <div class="text-center" v-if="showed">

<img :src="`${publicPath}assets/img/feeling-sorry.png`" />
 <p class="dialog-title mt-1">
  نعتذر لك إذا كان التعليق أزعجك!
 </p>
 <p class="dialog-desc m-0">
  أخبرنا من فضلك عن سبب انزعاجك من هذا التعليق وسوف نقوم باتخاذ الإجراء المناسب
 </p>
 <ValidationObserver ref="form">
 <div class="mt-4">
  <ValidationProvider
  :name="$t('reason_objection')"
  vid="comment"
  rules="required"
  v-slot="{errors}"
  >
  <textarea class="form-control" 
  v-model="comment" 
  rows="3" 
  placeholder="سبب الاعتراض على التعليق"
  ></textarea>
  <d-error-input :errors="error" v-if="errors.length>0" />
</ValidationProvider>
 </div>
</ValidationObserver>
</div>
    </template>
    <template v-slot:actions>
        <button @click="sendAbuse" style="height: 40px;" class="btn btn-main"> {{$t('send_abuse')}}</button>
    </template>
  </d-dialog-large>
</template>

<script>
import userAPI from '@/services/api/user.js'
export default {
 props:{
    group:{
        type:String,
        default:'abuse-comment'
    }
 },
 data:()=>({
    itemDialog:{id:null},
    comment:'',
    showed:false,
 }),
 methods:{
    async sendAbuse(){
      let valid = this.$refs.form.validate()
      if (!valid) {
                console.log('form invalid')
                return;
            }
        try {
            let {data} = await userAPI.sendAbuseCommentOnRate({comment:this.comment,rate_id:this.itemDialog.id})
            if(data.success){
              this.$emit('success',this.itemDialog)
                this.closeEvent()
            }
        } catch (error) {
            console.log('error',error)
            console.log('error response',error.response)
        }
    },
    openDialog(data){
      this.itemDialog=Object.assign({},data);
      this.showed=true
      return true;
    },
    closeDialog(){
      this.showed=false
      return true;
    },
    closeEvent(){
       this.fireEvent(this.group+'-close-dialog')
    }
 }
}
</script>

<style scoped>
.dialog-title{
  font-weight: 400;
font-size: 24px;
line-height: 32px;
/* or 133% */

text-align: center;
text-transform: capitalize;

color: #414042;
}
.dialog-desc{
  font-style: normal;
font-weight: 400;
font-size: 16px;
line-height: 24px;
/* or 150% */

text-align: center;

color: #707070;
}

</style>