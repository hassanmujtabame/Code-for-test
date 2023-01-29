<template>
  <div class="box p-3">
<div class="row">
  <div class="col-12 col-md-9">
    <div class="d-flex  flex-wrap justify-content-between flex-column">
  <div class="d-flex">
    <div style="    width: fit-content;" class="rounded-1 px-2 py-1 text-white"  :class="statusClass">
      {{ statusName }}
    </div>
    <h4 class="m-c ">
      إسم الوظيفة :
      <span> {{ title }}
      </span>
    </h4>
  </div>

<div class="d-flex gap-2 flex-wrap">

  <p class="t-c">
    <account-icon :size="16"/>
    {{ name }}
  </p>

  <p class="t-c">
    <localisationIcon :size="16" />
    {{$t(state)}}
  </p>
  <p class="t-c">
    <emptyWalletIcon :size="16" />

    {{price}} {{$t('riyals')}}
  </p>
  <p class="t-c">
    <timerIcon :size="16" />
    {{ $t(typeWork)}}
  </p>
  <p class="t-c">
    <accountCogIcon :size="16" />
        {{job}}
  </p>
  <p class="t-c">
   <schoolWalletIcon :size="16" />
    خبرة {{experience}} سنوات
  </p>
</div>
<p class="t-c w-75 m-0">
    {{ description }}
  </p>
</div>
  </div>
  <div class="col-12 col-md-3">
    <div class="d-flex flex-wrap align-items-center justify-content-between flex-column h-100">
  
  <div>
    <p class="t-c">
        <timeIcon :size="24" />
      تاريخ بداية الطلب : {{dateRequest}}
    </p>
  </div>
  <div class="d-flex  gap-1 flex-wrap">
    <button style="height: 40px; width: 120px;" class="btn-main px-2 ">
      تعديل الطلب
    </button>
    <button class="btn rounded-2 border-danger text-danger px-2 bg-transparent   ">
      إلغاء الطلب
    </button>
  </div>
</div>
  </div>
</div>


</div>
</template>

<script>
import accountIcon from '@/components/icon-svg/account.vue';
import accountCogIcon from '@/components/icon-svg/account-cog.vue';
import localisationIcon from '@/components/icon-svg/localisation.vue';
import emptyWalletIcon from '@/components/icon-svg/empty-wallet.vue';
import timeIcon from '@/components/icon-svg/time.vue';
import timerIcon from '@/components/icon-svg/timer.vue';
import schoolWalletIcon from '@/components/icon-svg/school-wallet.vue';

export default {
name:'card-info',
components:{
    accountIcon,
    accountCogIcon,
    localisationIcon,
    emptyWalletIcon,
    timerIcon,
    timeIcon,
    schoolWalletIcon
},
props:{
    itemId:{
        type:[String,Number],
    },
    name:{
        type:String,
        default:'N/A'
    },
    title:{
        type:String,
        default:'N/A'
    },
    description:{
        type:String,
        default:'N/A'
    },
    status:{
        type:String,
        default:'N/A'
    },
    state:{
        type:String,//online | offline
        default:'N/A'
    },
    typeWork:{
        type:String,//part time | full time
        default:'N/A'
    },

    experience:{
        type:[String,Number],
        default:'N/A'
    },
    price:{
        type:[String,Number],
        default:'N/A'
    },
    job:{
        type:String,
        default:'N/A'
    },
  
    dateRequest:{
        type:String,
        default:'N/A'
    }

 },
 computed:{
    statusClass(){
        return `status-job-${this.status}`
    },
    statusName(){
        switch (this.status) {
            case 'finished': return "مكتمل";
            case 'waiting': return "قيد الانتظار";
            case 'underway': return "قيد التنفيذ";
            case 'cancel': return"ملغاة";
                
        
            default:
                return this.status
        }
    }
 }
}
</script>

<style scoped>
.status-job-underway{
    background-color: #F2631C;
}
.status-job-waiting{
    background-color: #FFBC00;
}
.status-job-finished{
    background-color: #1FB9B3;
}
.status-job-cancel{
    background-color: #414042;
}

</style>