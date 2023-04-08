<template>
    <div style="margin-top: 96px;">
        <d-overlays-simple v-if="loading" />
    <div v-else-if="hasError">
      هناك خطأ غير معروف يرجي تحديث الصفحة
    </div>
        <div  v-else class="container mt-5">
      <d-filter-list
      :call-list="loadList"
      hideSide
      classColCard="col-12 mt-2"
      @change="changeFilter"
      >
        <template v-slot:total>
            <h4 class="fw-bold">طلبات المشاركة في المعرض</h4>
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

    </div>
</template>
<script>
import InvestProjectRequest from './card-item.vue'
import exhibitionsAPI from '@/services/api/exhibitions';
//import showConfirmSessionDialog from './confirm-accept/index'
export default {
    name: 'request-invet-projects',
    components:{
        InvestProjectRequest,
       // showConfirmSessionDialog
    },
    data:()=>{
        return {
            isOwner:false,
            itemPage:{},
            loading:true,
            hasError:false,
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
                return await exhibitionsAPI.getParticipateRequests(params)

            } catch (error) {
                console.log('error', error)
                console.log('response', error.response)
            }
        },
    convertTime(time){
        if(!time) return time;
        return time.substring(0,5)
    },
    async initializing() {
      this.loading = true;
      this.hasError = false;
            try {
                let { data } = await exhibitionsAPI.getItem(this.$route.params.id)
                if (data.success) {
                   this.itemPage = data.data;
                   this.itemPage.start_time = this.convertTime(this.itemPage.start_time)
                   this.itemPage.end_time = this.convertTime(this.itemPage.end_time)
                   this.isOwner = this.itemPage.user_info.id==this.user.id
                   if(!this.isOwner && process.env.NODE_ENV!='development'){
                    this.router_push('network-exhibition-show',{id:this.itemPage.id})
                   }
                }else{
                  this.hasError = true;
                }
            } catch (error) {
                console.mylog('error', error)
                console.mylog('error response', error.response)
                this.hasError = true;
              }

            this.loading = false;
        }
    },
    mounted(){
        this.initializing()
    }
}
</script>

<style>

</style>