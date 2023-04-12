<template>
    <div class="consulting-booking">
  
  <div class="d-flex align-items-center justify-content-between">
      <div >
        <div class="d-flex"> 
     
          <h4 class="consulting-booking__title">
            {{ $t('field-counseling') }}  {{ title??'N/A' }}
          </h4>
          </div>
          <div class="d-flex gap-2 flex-wrap">
            <p class="consulting-booking__info-label">
          <d-user-rect :size="16" color="currentColor" />
          {{ userName }}
      </p>
      <p class="consulting-booking__info-label">
          <d-calendar-icon :size="16" color="currentColor" />
          {{ dateBooking }}
      </p>
      <p class="consulting-booking__info-label">
          <d-time-icon :size="16" color="currentColor" />
          {{ timeFormatAMPM(timeBooking,true) }}
      </p>
      <p class="consulting-booking__info-label">
          <d-time-icon :size="16" color="currentColor" />
          {{ duringBooking }}{{ $t('minute') }}
      </p>
      <p class="consulting-booking__info-label">
          <d-empty-wallet-icon :size="16" color="currentColor" />
          {{ price }}{{ $t('riyals') }}
      </p>
     
  </div>
          <p class="t-c w-75 m-0" v-html="desc">
      </p>
      </div>

      <div class="d-flex flex-column flex-shrink-0 justify-content-end">
          
          <div class="d-flex" v-if="status=='approve'">
          
            <button class="btn btn-custmer-w  mx-2"  @click="showConsultationLink">{{ $t('Consultation-link') }}</button>
          </div>
      </div>
  
  
  </div>
  </div>
  </template>
  
  <script>
  //import consultingAPI from '@/services/api/consulting';
  export default {
      name:'my-booking-client-card',
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
      price:{
          type:String,
      },
      desc:{
          type:String,
      },
      dateBooking:{
          type:String,
      },
      timeBooking:{
          type:String,
      },
      duringBooking:{
          type:String,
      },
      status:{
          type:String,
      },
  
   },

   methods:{
    showConsultationLink(){}
   }
  }
  </script>
  
  <style scoped>
  .consulting-booking{
      padding: 10px;
    border-bottom: 1px solid rgba(205, 215, 216, 1);
;
  }
  .consulting-booking__title{
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
  .consulting-booking__type{
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
  .consulting-booking__info-label{
    font-style: normal;
font-weight: 400;
font-size: 12px;
line-height: 17px;
/* identical to box height, or 142% */

color: #737373;
  }
  </style>    