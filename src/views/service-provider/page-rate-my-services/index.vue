<template>
    <div  class="page-rate-service" :class="{'page-rate-service':isMobile}">
        <div class="container ">
            <div class="page-rate-service-card mt-5">
            <d-filter-list
            hideSide
            :searchPlaceholder="$t('search_by_service')"
            :fakeItems="items"
            :call-list="loadList"
            classColCard="col-12"
            >
            <template v-slot:total>
                
                <h4 class="fw-bold">
                    تقييم خدماتي
                        </h4>
                </template>
            <template v-slot="{item}">
                <cardRate
                            :name="'اسم المقيم'"
                            :images="item.image"
                            @send-abuse="openSendAbuse(item)"
                            >
                            </cardRate>
            </template>
        </d-filter-list>
        </div>
    </div>
        <sendAbuseDialog />
    </div>
</template>
<script>
import cardRate from './card-rate.vue';
import sendAbuseDialog from './abuse-comment.vue'
export default {
    name: 'request-purchase-services',
    components:{
        cardRate,
        sendAbuseDialog
    },
    data:()=>{
        return {
            status:'all',
            actions:[
                {label:'كل الطلبات',status:"all"},
                {label:'طلبات بأنتظار الموافقة',status:"pending"},
                {label:'طلبات تعمل عليها',status:"processing"},
                {label:'طلبات تم الانتهاء منها',status:"completed"},
            ],
            items:[
                {service:'تصميم ازياء',name:'محمد علي',place:'الدمام',price:'2500',during:'7 أيام',dateRequest:'25-10-2022',status:'completed',homeDelivery:true,delivery:true},
                {service:'تصميم ازياء',name:'محمد علي',place:'الدمام',price:'2500',during:'7 أيام',dateRequest:'25-10-2022',status:'processing',homeDelivery:true,delivery:true},
                {service:'تصميم ازياء',name:'محمد علي',place:'الدمام',price:'2500',during:'7 أيام',dateRequest:'25-10-2022',status:'pending',homeDelivery:true,delivery:true},
                {service:'تصميم ازياء',name:'محمد علي',place:'الدمام',price:'2500',during:'7 أيام',dateRequest:'25-10-2022',status:'completed',homeDelivery:true,delivery:true},
            ]
        }
        
    },
    methods:{
    openSendAbuse(item){
      this.fireOpenDialog('abuse-comment',item);
    },
        changeFilter(status){
            this.status=status
        },
        loadList(){

        }
    }
}
</script>

<style>
.page-rate-service{
    margin-top: 160px;
    background-color: transparent;

}
.page-rate-service-mobile{
    margin-top: 100px;
}
.page-rate-service-card{
    background: white;
    border: 1px solid #cfcfcf;
    border-radius: 4px;
}
</style>