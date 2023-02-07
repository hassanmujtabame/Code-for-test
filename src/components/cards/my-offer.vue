<template>
  <div class="box">

<div class="d-flex align-items-center justify-content-between">
    <div class="d-flex">
        <div style="width: fit-content;"
            class="rounded-1 px-2 py-1 text-white" :class="statusClass">
           {{ statusName }}
    </div>
        <h4 class="box-title m-c " @click="router_push('service-provider-show-service-page',{id:itemId})">
                {{ service }}
        </h4>
    </div>
    <div>
        <p class="t-c">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none"
                xmlns="http://www.w3.org/2000/svg">
                <path
                    d="M12 22.75C6.07 22.75 1.25 17.93 1.25 12C1.25 6.07 6.07 1.25 12 1.25C17.93 1.25 22.75 6.07 22.75 12C22.75 17.93 17.93 22.75 12 22.75ZM12 2.75C6.9 2.75 2.75 6.9 2.75 12C2.75 17.1 6.9 21.25 12 21.25C17.1 21.25 21.25 17.1 21.25 12C21.25 6.9 17.1 2.75 12 2.75Z"
                    fill="#737373" />
                <path
                    d="M15.71 15.93C15.58 15.93 15.45 15.9 15.33 15.82L12.23 13.97C11.46 13.51 10.89 12.5 10.89 11.61V7.51001C10.89 7.10001 11.23 6.76001 11.64 6.76001C12.05 6.76001 12.39 7.10001 12.39 7.51001V11.61C12.39 11.97 12.69 12.5 13 12.68L16.1 14.53C16.46 14.74 16.57 15.2 16.36 15.56C16.21 15.8 15.96 15.93 15.71 15.93Z"
                    fill="#737373" />
            </svg>
            تاريخ تقديمك العرض : {{ dateRequest }}
        </p>
    </div>


</div>
<div class="d-flex gap-2 flex-wrap">
    <p class="t-c">
        <svg width="16" height="16" viewBox="0 0 16 16" fill="none"
            xmlns="http://www.w3.org/2000/svg">
            <path
                d="M10.0002 15.1666H6.00018C5.12018 15.1666 4.38685 15.0799 3.76685 14.8933C3.54018 14.8266 3.39351 14.6066 3.40685 14.3733C3.57351 12.3799 5.59351 10.8132 8.00018 10.8132C10.4068 10.8132 12.4202 12.3733 12.5935 14.3733C12.6135 14.6133 12.4668 14.8266 12.2335 14.8933C11.6135 15.0799 10.8802 15.1666 10.0002 15.1666ZM4.48018 14.0399C4.92018 14.1266 5.42018 14.1666 6.00018 14.1666H10.0002C10.5802 14.1666 11.0802 14.1266 11.5202 14.0399C11.1668 12.7599 9.70684 11.8132 8.00018 11.8132C6.29351 11.8132 4.83351 12.7599 4.48018 14.0399Z"
                fill="#737373" />
            <path
                d="M9.99992 1.33325H5.99992C2.66659 1.33325 1.33325 2.66659 1.33325 5.99992V9.99992C1.33325 12.5199 2.09325 13.8999 3.90659 14.4132C4.05325 12.6799 5.83325 11.3132 7.99992 11.3132C10.1666 11.3132 11.9466 12.6799 12.0933 14.4132C13.9066 13.8999 14.6666 12.5199 14.6666 9.99992V5.99992C14.6666 2.66659 13.3333 1.33325 9.99992 1.33325ZM7.99992 9.44657C6.67992 9.44657 5.61325 8.37326 5.61325 7.05326C5.61325 5.73326 6.67992 4.66659 7.99992 4.66659C9.31992 4.66659 10.3866 5.73326 10.3866 7.05326C10.3866 8.37326 9.31992 9.44657 7.99992 9.44657Z"
                stroke="#737373" stroke-linecap="round" stroke-linejoin="round" />
            <path
                d="M7.99995 9.94674C6.40662 9.94674 5.11328 8.64676 5.11328 7.05343C5.11328 5.46009 6.40662 4.16675 7.99995 4.16675C9.59328 4.16675 10.8866 5.46009 10.8866 7.05343C10.8866 8.64676 9.59328 9.94674 7.99995 9.94674ZM7.99995 5.16675C6.95995 5.16675 6.11328 6.01343 6.11328 7.05343C6.11328 8.10009 6.95995 8.94674 7.99995 8.94674C9.03995 8.94674 9.88662 8.10009 9.88662 7.05343C9.88662 6.01343 9.03995 5.16675 7.99995 5.16675Z"
                fill="#737373" />
        </svg>
        {{ name }}
    </p>
    <p class="t-c">
        <localisationIcon :size="16" />
        {{ $t(state) }}
    </p>
    <p class="t-c">
        <empty-wallet-icon :size="16" />
        {{ price }} {{ $t('riyals') }}
    </p>
    <p class="t-c">
        <timerIcon />
        مدة التنفيذ: {{ during }} 
    </p>
    <p v-if="throughPlatform" class="t-c">
        <!-- truck-->
        <TruckIcon />
        من خلال المنصة
    </p>
</div>
<div class="d-flex flex-wrap align-items-center justify-content-between">
    <p class="t-c w-75 m-0">
    {{ description }}   
    </p>

</div>
</div>
</template>

<script>
import emptyWalletIcon from '../icon-svg/empty-wallet.vue'
import localisationIcon from '../icon-svg/localisation.vue';
import timerIcon from '../icon-svg/timer.vue';
import TruckIcon from '../icon-svg/truck.vue';
export default {
    name:'my-offer-card',
    components:{
        emptyWalletIcon,
        localisationIcon,
        timerIcon,
        TruckIcon
    },
 props:{
    itemId:{
        type:[String,Number],
    },
    name:{
        type:String,
    },
    service:{
        type:String,
    },
    status:{
        type:String, // waiting || underway ..
    },
    state:{
        type:String,// online | offline
    },
    throughPlatform:{
        type:Boolean,
        default:true
    },
   
    price:{
        type:[String,Number],
    },
    description:{
        type:String,
    },
    during:{
        type:[String,Number],
    },
    dateRequest:{
        type:String,
    }

 },
 computed:{
    statusClass(){
        return `status-request-${this.status}`
    },
    statusName(){
        switch (this.status) {
            case 'underway': return "مختارة";
            case 'waiting': return "قيد الانتظار";
            case 'excluded': return"مستبعدة";
                
        
            default:
                return this.status
        }
    }
 }
}
</script>

<style scoped>
.box{
    padding: 10px;
}
.box-title{
    cursor: pointer;
    margin:0 5px
}

.status-request-waiting{
    background-color: #FFBC00;
}
.status-request-underway{
    background-color: #1FB9B3;
}
.status-request-excluded{
    background-color: #414042;
}

</style>    