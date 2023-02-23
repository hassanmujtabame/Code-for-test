<template>
 <div class="container mt-5">
        <d-filter-list
        :pluralName="$t('the_meetings')"
        :singleName="$t('meeting')"
        :call-list="loadList"
        :searchPlaceholder="$t('search_by_name')"
        classColCard="col-12 col-md-6 mt-2"
        @change="changeFilter"
        >
              <template v-slot="{item}">
                
                  <router-link class="router-link" :to="getRouteLocale('network-learning-meeting-show',{id:item.id})">
                    <meetingCard 
                    :item="item"
                     :img="item.image"
                     :title="item.title"
                     :type="item.type"
                     :date="item.date"
                    />
        
                  </router-link>
              </template>
              <template v-slot:side>
                <sidebarBox  :filterItem="filterSide" @change="changeFilter"/>
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
  filterSide:{
      type:null,
      category_id:[]
    },
        filterItem:{
      search:null,
      created_at:'asc',
      type:null,
      category_id:[]
    }
    }),
    methods: {
        changeFilter(val){
          console.log(val)
            this.filterItem = {...this.filterItem,...val}
            this.fireEvent('d-filter-list-refresh')
        },
    async loadList(metaInfo){
        try {
          let params = {
            page:metaInfo.current_page,
            ...this.filterItem
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