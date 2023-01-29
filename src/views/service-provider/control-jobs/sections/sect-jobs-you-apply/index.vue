<template>
  <div class="mt-5 shadow rounded-2">
    <d-filter-list
      :call-list="loadList"
      hideSide
      classColCard="col-12 mt-2"
      @change="changeFilter"
      searchPlaceholder=" أبحث  في قائمة الوظائف  "
      :orderOpts="statuses"
      orderName="status"
      >
        <template v-slot:total>
            <h4 class="fw-bold">وظائف قدمت عليها</h4>
        </template>

        <template v-slot:default="{item}">
            <CardInfo :item-id="item.id"
            :dateRequest="item.created_at"
            :name="item.user_name"
                          :title="item.title"
                          :status="item.status"
                          :state="item.state"
                          :price="item.expected_salary"
                          :job="item.job_name"
                          :experience="item.required_experience"
                          :description="item.desc"
                          :type-work="item.type_job" 
                          
                            >
                        </CardInfo>
        </template>
      </d-filter-list>
  </div>
</template>

<script>
import userAPI from '@/services/api/user.js'
import CardInfo from './card.vue'
export default {
  name: 'section-jobs-for-apply',
  components:{
    CardInfo
  },
    data:()=>{
        return {
            status:null,
            statuses:[
                {name:'عرض الجميع',id:null},
                {name:'لم تراجع بعد',id:"waiting"},
                {name:'مناسب',id:"underway"},
            ],
            filterItem:{
                search:null,
                created_at:'asc',
                status:null
            }
        }
        
    },
    methods:{
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
                return await userAPI.getMyJobsApplied(params)

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