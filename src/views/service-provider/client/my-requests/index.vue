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
            <h4 class="fw-bold">طلباتي للخدمة</h4>
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
            <router-link class="router-link" :to="getRouteLocale('service-provider-client-my-request-page',{id:item.id})">
            <d-my-request-card
                            :itemId="item.id"
                            :status="item.status"
                            :service="item.title"
                            :name="item.user_info.name"
                            :dateRequest="item.created_at"
                            :place="getPlaceItem(item)"
                            :price="item.price"
                            :during="item.execution_period"
                            :requests="item.count_requests"
                            :description="item.desc"
                            :homeDelivery="item.home_delivery"
                            :delivery="item.delivery_product_available"
                            >
                        </d-my-request-card>
                    </router-link>
        </template>
      </d-filter-list>
    </div>
    </div>
</template>
<script>
import myRequestClientAPI from '@/services/api/service-provider/user/my-requests-client.js'
export default {
    name: 'request-purchase-services',
    data:()=>{
        return {
            status:null,
            actions:[
                {status:null,label:'كل مشاريعك'},
                {status:'waiting',label:'في انتظار موافقتك'},
                {status:'underway',label:'مشاريع قيد التنفيذ'},
                {status:'finished',label:'مشاريع مكتملة'},
            ],
            filterItem:{
                search:null,
                created_at:'asc',
                status:null
            }
        }
        
    },
    methods:{
        getPlaceItem(item){
            switch (item.state) {
                case 'online': return this.$t('online');
                case 'service': return this.$t('ready-service');
                case 'offline': return item.city;
                default:
                    return 'N/A';
            }
        },
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
                return await myRequestClientAPI.getAll(params)

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