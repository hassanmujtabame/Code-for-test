<template>
 <div class="container mt-5">
        <d-filter-list
        :pluralName="$t('meetings')"
        :singleName="$t('meeting')"
        :call-list="loadList"
        classColCard="col-12 col-md-6 mt-2"
        >
              <template v-slot="{item}">
                
                  <a href="">
                    <meetingCard 
                     :img="item.image"
                     :title="item.title"
                     :owner="item.userName"
                     :date="item.date"
                    />
           
                  </a>
              </template>
              <template v-slot:side>
                <sidebarBox  :filterItem="filterItem" @change="changeFilter"/>
              </template>
        </d-filter-list>
      </div> 
</template>

<script>
import learningMeetingsAPI from '@/services/api/learning-meetings';
import sidebarBox from './sidebar.vue';
import meetingCard from '@/components/cards/meeting.vue';
export default {
name:'section-list',
components:{
  meetingCard,
  sidebarBox
},
data: () => ({
        filterItem:{
            search:null,
      price:'asc',
      is_share:'all',
      category_id:[],
      valueMinDuring:0
    }
    }),
    methods: {
        changeFilter(val){
            this.filterItem = {...this.filterItem,...val}
            this.fireEvent('d-filter-list-refresh')
        },
    async loadList(metaInfo){
        try {
          let params = {
            page:metaInfo.current_page
          }
            return await learningMeetingsAPI.getAll(params)

        } catch (error) {
            console.log('error',error)
            console.log('response',error.response)
        }
    }
 }
}
</script>

<style>

</style>