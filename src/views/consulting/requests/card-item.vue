<template>
    <div class="consulting-request">
  
  <div class="d-flex align-items-center justify-content-between">
      <div >
        <div class="d-flex"> 
     
          <h4 class="consulting-request__title">
                  {{ userName??'N/A' }}
          </h4>
          </div>
          <div class="d-flex gap-2 flex-wrap">
      <p class="consulting-request__info-label">
          <d-calendar-icon :size="16" color="currentColor" />
          {{ dateRequest }}
      </p>
      <p class="consulting-request__info-label">
          <d-time-icon :size="16" color="currentColor" />
          {{ timeFormatAMPM(timeRequest,true) }}
      </p>
      
     
  </div>
          <p class="t-c w-75 m-0" v-html="desc">
      </p>
      </div>

      <div class="d-flex flex-column flex-shrink-0 justify-content-end">
          
          <div class="d-flex" v-if="status=='waiting'">
            <button class="btn btn-custmer" @click="acceptRequest">{{ $t('accept') }}</button>
            <button class="btn btn-custmer btn-danger mx-2" @click="confirmDisapproveRequest">{{ $t('reject') }}</button>
          </div>
          <div class="d-flex" v-if="status=='approve'">
            <button class="btn btn-custmer" @click="rescheduleRequest">{{ $t('reschedule') }}</button>
            <button class="btn btn-custmer-w  mx-2"  @click="confirmFinishRequest">{{ $t('finished') }}</button>
          </div>
      </div>
  
  
  </div>
  </div>
  </template>
  
  <script>
  import consultingAPI from '@/services/api/consulting';
  export default {
      name:'my-request-client-card',
   props:{
      itemId:{
          type:[String,Number],
      },
      title:{
          type:String,
      },
      userName:{
          type:String
      },
      place:{
          type:String,
      },
      desc:{
          type:String,
      },
      dateRequest:{
          type:String,
      },
      timeRequest:{
          type:String,
      },
      status:{
          type:String,
      },
  
   },

   methods:{
    rescheduleRequest(){
        this.fireOpenDialog('reschedule-session',{id:this.itemId
            ,session_date:this.dateRequest
            ,session_time:'09:00'})
    },
    async finishSession(){
         
          try {
            let {data} = await consultingAPI.requests.finishedIt(this.itemId)
            if(data.success){
              this.$emit('update-list')
            }else{
              window.SwalError(data.message)
            }
          } catch (error) {
            //
            window.DHelper.catchException.call(this,error,this.$refs.form)
          }
            
            
        },
    confirmFinishRequest(){
        let dataEvt={
            title:'انت على وشك انهاء الجلسة',
            description:'',
            type:'warning',
            btns:[
                {title:this.$t('confirm-finishing-session'),action:this.finishSession}
            ]
        }
        this.showConfirmMsg(dataEvt);
    },
    acceptRequest(){
       this.fireOpenDialog('show-session-confirmation',{
        id:this.itemId,
        title:this.userName,
        description:this.description
       })
    },
    async disapproveSession(){
         
         try {
           let {data} = await consultingAPI.requests.disapproveIt(this.itemId)
           if(data.success){
             this.$emit('update-list')
           }else{
             window.SwalError(data.message)
           }
         } catch (error) {
           //
           window.DHelp.catchException.call(this,error,this.$refs.form)
         }
           
           
       },
       confirmDisapproveRequest(){
        let dataEvt={
            title:'انت على وشك رفض الطلب',
            description:'',
            type:'warning',
            btns:[
                {title:this.$t('confirm-rejection'),action:this.disapproveSession}
            ]
        }
        this.showConfirmMsg(dataEvt);
    },
   }
  }
  </script>
  
  <style scoped>
  .consulting-request{
      padding: 10px;
    border-bottom: 1px solid rgba(205, 215, 216, 1);
;
  }
  .consulting-request__title{
    font-style: normal;
font-weight: 400;
font-size: 20px;
line-height: 24px;
/* or 120% */

display: flex;
align-items: center;
text-transform: capitalize;

color: #414042;
  }
  .consulting-request__type{
    font-style: normal;
font-weight: 400;
font-size: 20px;
line-height: 24px;
/* identical to box height, or 120% */

display: flex;
align-items: center;
text-transform: capitalize;
color: #F2631C;
  }
  .consulting-request__info-label{
    font-style: normal;
font-weight: 400;
font-size: 12px;
line-height: 17px;
/* identical to box height, or 142% */

color: #737373;
  }
  </style>    