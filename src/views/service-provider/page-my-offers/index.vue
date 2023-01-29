<template>
    <div style="margin-top: 96px;">
      <d-filter-list
      :call-list="loadList"
      hideSide
      classColCard="col-12 mt-2"
      @change="changeFilter"
      :orderOpts="[
        {id:'asc',name:'قرب موعد التسليم '},
        {id:'desc',name:'أبعد موعد التسليم '},
      ]"
      >
        <template v-slot:total>
            <h4 class="fw-bold">العروض التي قدمتها</h4>
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
            <MyOfferCard
                            :itemId="item.id"
                            :status="item.status"
                            :state="item.state"
                            :service="item.title"
                            :price="item.price"
                            :name="item.user_name"
                            :dateRequest="item.created_at"
                            :throughPlatform="item.through_platform"
                            :during="item.rest_days"
                            
                            :description="item.description"
                          
                            >
                        </MyOfferCard>
        </template>
      </d-filter-list>
    </div>
</template>
<script>
import userAPI from '@/services/api/user.js'
import MyOfferCard from '@/components/cards/my-offer.vue'
export default {
    name: 'page-my-offers',
    components:{
        MyOfferCard
    },
    data:()=>{
        return {
            status:null,
            actions:[
                {label:'كل عروضك',status:null},
                {label:'عروض تم اختيارك بها',status:"selected"},
                {label:'لم تتم الموافقة بعد',status:"waiting"},
                {label:'تم استبعادك',status:"excluded"},
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
                return await userAPI.getMyOffers(params)

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