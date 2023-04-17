<template>
    <div class="bg-body-page py-3" style="margin-top: 96px;">
        <d-overlays-simple v-if="loading" />
    <div v-else-if="hasError">
      هناك خطأ غير معروف يرجي تحديث الصفحة
    </div>
    <div v-else >
      <d-filter-list
      :call-list="loadList"
      hideSide
      classColCard="col-12 mt-2"
      @change="changeFilter"
      >
        <template v-slot:total>
            <h4 class="fw-bold">{{ $t('project') }} : {{ itemPage.title }}</h4>
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
        <template v-slot:search>
            <router-link :to="getRouteLocale('service-provider-proposal-page',{id:$route.params.id})" class="btn btn-custmer">صفحة الطلب</router-link>
        </template>
        <template v-slot:default="{item}">
            <CardItem
                            :item="item"
                           
                            >
                        </CardItem>
        </template>
      </d-filter-list>
    </div>
    </div>
    
</template>
<script>
import myRequestsClientAPI from '@/services/api/service-provider/user/my-requests-client.js'
import CardItem from './card.vue'
export default {
    name: 'my-request-page',
    components:{
        CardItem
    },
    data:()=>{
        return {
            loading:false,
            hasError:false,
            status:null,
            actions:[
                {status:null,label:'كل طلبات'},
                {status:"provider",label:'مقدمي الخدمة تعرفهم'},
                {status:"graduate",label:'خريجي رياديات'},
                {status:"best_rate",label:'الاعلى تقييما'},
           
    
            ],
            itemPage:{},
            filterItem:{
                search:null,
                created_at:'asc',
                status:null
            }
        }
        
    },
    methods:{
        async initialize(){
            this.loading = true;
            this.hasError = false;
            try {

                let { data } = await myRequestsClientAPI.getItem(this.$route.params.id)
                        if(data.success){
                            this.itemPage = data.data
                        }else{
                            this.hasError = true;
                        }
            } catch (error) {
                console.log('error', error)
                console.log('response', error.response)
                this.hasError = true;
            }
            this.loading = false;
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
                return await myRequestsClientAPI.getOffersAll(this.$route.params.id,params)

            } catch (error) {
                console.log('error', error)
                console.log('response', error.response)
            }
        }
    },
    mounted(){
        this.initialize()
    }
}
</script>

<style>

</style>