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
            <h4 class="fw-bold">طلبات إستشارة</h4>
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
            
            <InvestProjectRequest
                            :itemId="item.id"
                            :status="item.status"
                            :title="item.title"
                            :userName="item.user_info.name"
                            :dateRequest="item.created_at"
                            :place="item.city"
                            :price="item.price"
                            
                            :description="item.description"
                            
                            
                            >
                        </InvestProjectRequest>
            
        </template>
      </d-filter-list>
    </div>
    <showConfirmSessionDialog />
    </div>
</template>
<script>
import myRequestClientAPI from '@/services/api/service-provider/user/my-requests-client.js'
import InvestProjectRequest from './card-item.vue'
import showConfirmSessionDialog from './confirm-accept/index'
export default {
    name: 'request-invet-projects',
    components:{
        InvestProjectRequest,
        showConfirmSessionDialog
    },
    data:()=>{
        return {
            status:null,
            actions:[
                {status:null,label:'كل طلبات'},
                {status:'waiting',label:'طلبات بانتظار موافقتك'},
                {status:'underway',label:'طلبات تم الموافقة عليها'},
                {status:'finished',label:'طلبات تم الانتهاء منهت'},
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
                    paginate:4,
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