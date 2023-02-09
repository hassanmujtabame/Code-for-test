<template>
  <div class="request-purchase-service box">

<div class="d-flex align-items-center justify-content-between">
    <div class="request-purchase-service__wrapper-title">
        <div class="request-purchase-service__status-request" 
             :class="statusClass">
           {{ statusName }}
        </div>
        <h4 class="request-purchase-service__title clickable" @click="routeFull(item)">
            طلب شراء خدمة :
            <span class="request-purchase-service__title-name">
                {{ service }}
            </span>
        </h4>
    </div>
    <div class="request-purchase-service__wrapper-date">
        <p class="request-purchase-service__date">
            <d-time-icon :size="24" color="currentColor" />
            تاريخ بداية الطلب : {{ dateRequest }}
        </p>
    </div>


</div>
<div class="d-flex gap-2 flex-wrap">
    <p class="request-purchase-service__info">
        <d-user-rect-icon :size="16" color="currentColor" />
        {{ name }}
    </p>
    <p class="request-purchase-service__info">
        <d-localisation-icon :size="16" color="currentColor" />
        {{ state=='online'?$t('online'):place }}
    </p>
    <p class="request-purchase-service__info">
        <d-empty-wallet-icon :size="16" color="currentColor" />
        {{ price }} {{ $t('riyals') }}</p>
    <p class="request-purchase-service__info">
        <d-timer-icon :size="16" color="currentColor" />
        مدة التنفيذ: {{ during }} 
    </p>
    <p v-if="homeDelivery" class="request-purchase-service__info">
        <d-truck-icon :size="16" color="currentColor" />
        {{ state=='online'?$t('delivery_from_platform'):$t('delivery_to_home') }}
    </p>
    <p v-if="delivery&& state!=='online'" class="request-purchase-service__info">
        <d-thunder-icon :size="16" color="currentColor" />
        التسيلم عند توفر المنتج
    </p>
    <p class="request-purchase-service__info">
        <d-heart-icon :size="16" color="currentColor" />
        عدد الطلبات {{ requests }}
    </p>
</div>
<div class="d-flex flex-wrap align-items-center justify-content-between">
    <p class="request-purchase-service__description w-75 m-0" v-html="description">
    </p>
    <div v-if="state=='offline' && ['waiting','underway'].includes(status)"  class="d-flex  gap-1 flex-wrap">
        <button v-if="status=='underway'" @click="askDeliveryPurchase" style="height: 40px; width: 100px;" class="btn-main px-2 ">
            طلب تسليم
        </button>
        <button v-if="status=='waiting'" @click="confirmRequestPurchase" style="height: 40px; width: 100px;" class="btn-main px-2 ">
            تاكيد الطلب
        </button>
        <button class="btn rounded-2 border-danger text-danger px-2 bg-transparent   ">
            إلغاء الطلب
        </button>
    </div>
</div>
</div>
</template>

<script>
export default {
    name:'request-card',
 props:{
    item:{
        type:[Object,Array],
    },
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
        type:String,
    },
    state:{
        type:String,
    },
    homeDelivery:{
        type:Boolean,
        default:true
    },
    delivery:{
        type:Boolean,
        default:true
    },
    place:{
        type:String,
    },
    routeFull:{
        type:Function
    },
    price:{
        type:[String,Number],
    },
    description:{
        type:String,
    },
    requests:{
        type:[String,Number],
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
            case 'finished': return "مكتمل";
            case 'finish': return "مكتمل";
            case 'waiting': return "قيد الانتظار";
            case 'underway': return "قيد التنفيذ";
            case 'cancel': return"ملغاة";
                
        
            default:
                return this.status
        }
    }
 },
 methods:{
    confirmRequestPurchase(){
        this.fireOpenDialog('confirm-request-purchase',this.item)
    },
    askDeliveryPurchase(){
        this.router_push('service-provider-request-purchase-service-progress',{id:this.itemId})
    },
 }
}
</script>

<style scoped>
.box{
    padding: 10px;
}
.box-title{
    cursor: pointer;
}

.request-purchase-service__wrapper-title{
    display: flex;
}
.request-purchase-service__info{
    font-style: normal;
font-weight: 400;
font-size: 12px;
line-height: 17px;
/* identical to box height, or 142% */

color: #737373;
}
.request-purchase-service__title{
    padding:0px 10px;
    font-style: normal;
font-weight: 400;
font-size: 20px;
line-height: 24px;
/* or 120% */

display: flex;
align-items: center;
text-transform: capitalize;
color: #1FB9B3;
}
.request-purchase-service__title-name{
    
    font-style: normal;
font-weight: 400;
font-size: 20px;
line-height: 24px;
/* or 120% */

display: flex;
align-items: center;
text-decoration-line: underline;
text-transform: capitalize;

color: #414042;
}
.request-purchase-service__date{
    font-style: normal;
font-weight: 400;
font-size: 16px;
line-height: 24px;
/* identical to box height, or 150% */

color: #737373;
}
.request-purchase-service__status-request{
    min-width: 72px;
    background: #FFFFFF;
    border-radius: 4px;
    font-weight: 400;
    font-size: 12px;
    line-height: 17px;
    color: #FFFFFF;
    display: flex;
    justify-content: center;
    align-items: center;
}
.request-purchase-service__description{
    font-style: normal;
font-weight: 400;
font-size: 16px;
line-height: 24px;
/* or 150% */

color: #737373;
}
.status-request-underway{
    background-color: #F2631C;
}
.status-request-waiting{
    background-color: #FFBC00;
}
.status-request-finished,.status-request-finish{
    background-color: #1FB9B3;
}
.status-request-cancel{
    background-color: red;
}
</style>    