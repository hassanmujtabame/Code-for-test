<template>
  <div class="box p-3">
<div class="row">
  <div class="col-12 col-md-9">
    <div class="d-flex  flex-wrap justify-content-between flex-column">
  <div class="d-flex">
    <h4 class="m-c ">
      طلب توظيف من :
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

      <p class="t-c w-75 m-0" v-html="description"></p>

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

 }
}
</script>