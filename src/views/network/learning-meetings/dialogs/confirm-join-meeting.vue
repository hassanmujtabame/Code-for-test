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
    if(this.itemDialog.type=='live'){
      let time =  this.itemDialog.time?this.timeFormatAMPM(this.itemDialog.time):'N/A';
      let date = this.dateTextMonth(this.itemDialog.date);
      let dataEvt={
        title:'تم الانضمام في اللقاء بنجاح',
        description:`يسعدنا تسجيلك في هذا اللقاء الذي سيتم اذاعته عبر البث المباشر في تاريخ <span class="o-c">${date}</span> في الساعه <span class="o-c">${time}</span> سيرسل لك أدمن رياديات رسالة بها رابط اللقاء في نفس اليوم`,
        image:`${this.publicPath}assets/img/cuate-2.png`,
        btns:[
          {title:this.$t('Home'),action:()=>this.router_push('network-home')}
        ]
      }
      this.showConfirmMsg(dataEvt);
    }else{
      let dataEvt={
      title:'تم الانضمام في اللقاء بنجاح',
        description:``,
        image:`${this.publicPath}assets/img/Group 1171275411.png`,
        btns:[
          {title:'صفحة اللقاء'},
          {title:this.$t('undo-joining'),action:this.confirmCancelJoin,class:"btn btn-custmer-danger"}
        ]
      }
      this.showConfirmMsg(dataEvt);
    }
    //this.fireOpenDialog('success-join-meeting',this.itemDialog)
    this.closeEvent()
  },
  async confirmCancelJoin(){
        try {
            let {data} = await meetingsAPI.postCancelJoinMeeting(this.itemDialog.id)
            if(data.success){
                this.$emit('cancel',false)
                this.closeEvent()
            }
        } catch (error) {
            console.mylog('error',error)
            console.mylog('error response',error.response)
        }
    },
    async confirmJoin(){
      /*let ok=true;
      if(ok==1){
        //this.itemDialog.type='live'
        this.openSuccessJoinMeeting();
        return;
      } */
        try {
            let {data} = await meetingsAPI.postJoinMeeting(this.itemDialog.id)
            if(data.success){
                console.log('success',data)
                this.openSuccessJoinMeeting()
                this.$emit('success',true)
                this.closeEvent()
            }
        } catch (error) {
            console.mylog('error',error)
            console.mylog('error response',error.response)
        }
    },
    async checkBeforeJoin(){
      this.loading = true;
      try {
            let {data} = await meetingsAPI.postbeforeJoinMeeting(this.itemDialog.id)
            if(data.success){
              //this.closeEvent()
            }else{
              let dataEvt ={
                title:'لقد وصلت للحد الأقصى لانضمامك للقاءات هذا الشهر',
                description:`لقد انضممت الى 4 لقاءات هذا الشهر لا يمكنك لاسف الانضمام الى المزيد من اللقاءات .... لا تقلق مازال بأمكانك  تجربة مميزات فريدة اخرى في شبكة رياديات `,
                image:`${this.publicPath}assets/img/Group 1171275442.png`,
              }
              this.closeEvent()
              this.showConfirmMsg(dataEvt);
            }
        } catch (error) {
            console.mylog('error',error)
            console.mylog('error response',error.response)
        }
        this.loading = true;
    },
    openDialog(data){
      this.itemDialog=Object.assign({},data);
      this.checkBeforeJoin()
      this.showed=true;
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