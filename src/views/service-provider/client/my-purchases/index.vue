<template>
    <div style="margin-top: 96px;">
        <div class="container mt-5">
      <d-filter-list
      :call-list="loadList"
      hideSide
      classColCard="col-12 mt-2"
      @change="changeFilter"
      >
        <template v-slot:total>
            <h4 class="fw-bold">{{ $t('my-purchases') }}</h4>
        </template>
        <template v-slot:before-body>
            <ul class="nav nav-pills  mb-3">
                    <li v-for="(btn,i) in actions" :key="i" class="nav-item col-12 col-md-3">
                        <button class="nav-link  border w-75 t-c m-auto" :class="{active:status==btn.status}"
                             type="button" 
                             @click="changeStatus(btn.status)"
                            >{{ btn.label }}</button>
                    </li>
                </ul>
        </template>
        <template v-slot:default="{item}">
            <d-my-purchase-card
                :itemId="item.id"
                :status="item.status"
                :service="item.service.title"
                :state="item.service.state"
                :name="item.user_info.name"
                :price="item.service.price"
                :dateRequest="item.created_at"
                :place="item.city"
                :during="item.execution_period"
                :executionPlace="item.execution_place"
                :requests="item.count_requests"
                :description="item.description"
                :homeDelivery="item.home_delivery"
                :delivery="item.delivery_product_available"
                >
                        </d-my-purchase-card>
        </template>
      </d-filter-list>
    </div>
    </div>
</template>
<script>
import myPurchasesAPI from '@/services/api/service-provider/user/my-purchases.js'
export default {
    name: 'request-purchase-services',
    data:()=>{
        return {
            status:null,
            actions:[
                {label:'كل المشتريات',status:null},
                {label:'لم يوافق عليها  بعد',status:"waiting"},
                {label:'قيد التنفيذ',status:"underway"},
                {label:'قمت بأستلمها',status:"finished"},
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
                return await myPurchasesAPI.getAll(params)

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