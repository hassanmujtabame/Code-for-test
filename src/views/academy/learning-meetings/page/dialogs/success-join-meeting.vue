<template>
  <d-dialog-large :group="group"
  :xl="false"
  :openDialog="openDialog"
  :closeDialog="closeDialog"
  >
  <template v-slot>
          <div class="text-center" v-if="showed">
            <div>
                <h4>
                  تم الانضمام الى هذا اللقاء بنجاح
                </h4>
              </div>
          <div>
            <img :src="`${publicPath}assets/img/cuate-2.png`" alt="">
          </div>
          <div class="mt-3">
            <button @click="goBack" style="height: 40px;" class="btn btn-main">
            صفحة اللقاء
            </button>
          </div>
          <div class="mt-3">
          <button @click="confirmCancelJoin" style="height: 40px;" class="btn btn-custmer-danger">{{ $t('undo-joining') }}</button>
          </div>
  </div>
      </template>
  </d-dialog-large>
</template>

<script>
import meetingsAPI from '@/services/api/learning-meetings.js'
export default {
 props:{
    group:{
        type:String,
        default:'success-join-meeting'
    }
 },
 data:()=>({
  itemDialog:{id:null},
    showed:false,
 }),
 methods:{

  goBack(){
    this.closeEvent()
  },
  async confirmCancelJoin(){
        try {
            let {data} = await meetingsAPI.postCancelJoinMeeting(this.itemDialog.id)
            if(data.success){
                console.log('success',data)
                this.$emit('cancel',false)
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