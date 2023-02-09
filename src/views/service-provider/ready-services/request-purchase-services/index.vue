<template>
    <div style="margin-top: 96px;">
      <d-filter-list
      :call-list="loadList"
      hideSide
      classColCard="col-12 mt-2"
      @change="changeFilter"
      >
        <template v-slot:total>
            <h4 class="fw-bold">طلبات شراء خدماتك</h4>
        </template>
        <template v-slot:before-body>
            <ul class="nav nav-pills  mb-3">
                    <li v-for="(btn,i) in actions" :key="i" class="nav-item col-12 col-md-3">
                        <button class="nav-link  border w-75 t-c m-auto mt-1" :class="{active:status==btn.status}"
                             type="button" 
                             @click="changeStatus(btn.status)"
                            >{{ btn.label }}</button>
                    </li>
                </ul>
        </template>
        <template v-slot:default="{item}">
            <d-request-purchase-card
                            :item="item"
                            :itemId="item.id"
                            :state="item.state"
                            :status="item.status"
                            :service="item.title"
                            :name="item.from_user"
                            :dateRequest="item.created_at"
                            :place="item.city"
                            :during="item.implementation_period"
                            :requests="item.count_requests"
                            :description="item.note"
                            :homeDelivery="item.home_delivery"
                            :delivery="item.delivery_product_available"
                            >
                        </d-request-purchase-card>
        </template>
      </d-filter-list>
      <confirmRequestPurchase />
    </div>
</template>
<script>
import readyServiceAPI from '@/services/api/service-provider/provider/ready-service.js'
import confirmRequestPurchase from './dialogs/confirm-request-puchase.vue'
export default {
    name: 'request-purchase-services',
    components:{
        confirmRequestPurchase
    },
    data:()=>{
        return {
            status:null,
            actions:[
                {label:'كل الطلبات',status:null},
                {label:'طلبات بأنتظار الموافقة',status:"waiting"},
                {label:'طلبات تعمل عليها',status:"underway"},
                {label:'طلبات تم الانتهاء منها',status:"finished"},
            ],
            filterItem:{
                search:null,
                created_at:'asc',
                status:null
            }
        }
        
    },
    methods:{
        changeStatus(status){
            this.status =  status
            this.filterItem.status=status;
            this.fireEvent('d-filter-list-refresh')
        },
        changeFilter(val){
            this.filterItem = {...this.filterItem,...val}
            this.fireEvent('d-filter-list-refresh')
        },
        async loadList(metaInfo) {
            try {
                let params = {
                    page: metaInfo.current_page,
                    ...this.filterItem
                }
                return await readyServiceAPI.getRequestsForPurchaseService(params)

            } catch (error) {
                console.log('error', error)
                console.log('response', error.response)
            }
        }
    }
}
</script>

<style>

</style>