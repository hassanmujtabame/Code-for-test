<template>
  <d-dialog-large :group="group"
  :xl="false"
  :openDialog="openDialog"
  :closeDialog="closeDialog"
  >
    <template v-slot>
        <div class="text-center" v-if="showed">

<img :src="`${publicPath}assets/svg/warning-dialog.svg`">
 <p class="mt-1">
  هل أنت متأكد من أنضمامك للقاء ؟
 </p>
 <p class=" m-0">
  بأنضمامك الى هذا اللقاء سيتبقى لك <span style="color:#F2631C">{{itemDialog.available_meetings_month-1}} لقاءات</span> هذا الشهر
 </p>
</div>
    </template>
    <template v-slot:actions>
        <button @click="confirmJoin" style="height: 40px;" class="btn btn-main"> {{$t('confirm_join_meeting')}}</button>
    </template>
  </d-dialog-large>
</template>

<script>
import meetingsAPI from '@/services/api/learning-meetings.js'
export default {
 props:{
    group:{
        type:String,
        default:'confirm-join-meeting'
    }
 },
 data:()=>({
    itemDialog:{id:null},
    showed:false,
 }),
 methods:{
  openSuccessJoinMeeting(){
    this.fireOpenDialog('success-join-meeting',this.itemDialog)
    this.closeEvent()
  },
    async confirmJoin(){
        try {
            let {data} = await meetingsAPI.postJoinMeeting(this.itemDialog.id)
            if(data.success){
                console.log('success',data)
                this.openSuccessJoinMeeting()
                this.$emit('success',true)
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

<style>

</style>