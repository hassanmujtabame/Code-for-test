<template>
  <d-dialog-large :group="group"
  :xl="false"
  :openDialog="openDialog"
  :closeDialog="closeDialog"
  >
    <template v-slot>
        <div class="text-center" v-if="showed">

<img src="/assets/img/feeling-sorry.png" />
 <p class="dialog-title mt-1">
  نعتذر لك إذا كان التعليق أزعجك!
 </p>
 <p class="dialog-desc m-0">
  أخبرنا من فضلك عن سبب انزعاجك من هذا التعليق وسوف نقوم باتخاذ الإجراء المناسب
 </p>
 <div class="mt-4">
  <textarea class="form-control" rows="3" placeholder="سبب الاعتراض على التعليق">

  </textarea>
 </div>
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
    showed:false,
 }),
 methods:{
  sendAbuse(){

  },
    async delBlog(){
        try {
            let {data} = await userAPI.deleteCreditCardInfo(this.itemDialog.id)
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