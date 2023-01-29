<template>
  <div class="mt-5 mb-5 shadow rounded-2 p-3">
 
    <d-filter-list
      :call-list="loadList"
      hideSide
      classColCard="col-12 mt-2"
      @change="changeFilter"
        
      >
        <template v-slot:total>
            <h4 class="fw-bold">وظائف اعلنت عنها</h4>
        </template>
        <template v-slot:search>
           <div></div>
          </template>
        <template v-slot:order>
          <div></div>
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
  name: 'section-jobs-you-open',
  components:{
    CardInfo
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
                return await userAPI.getMyJobsOpen(params)

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