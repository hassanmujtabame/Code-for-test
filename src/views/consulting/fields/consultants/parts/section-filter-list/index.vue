<template>
  <d-filter-list 
  :call-list="loadList"
  :pluralName="$t('consultants')"
  :singleName="$t('consultant')"
  searchPlaceholder="أبحث عن مستشار"
  @change="changeFilter"
  >
  <template v-slot="{item}">
    <consultantCard :item="item" class="mx-auto" />
    </template>
    <template v-slot:side>
                <sidebarBox  :filterItem="filterSide" @change="changeFilter"/>
              </template>
  </d-filter-list>
</template>

<script>
import consultantCard from '@/components/cards/consultant.vue'
import consultingAPI from '@/services/api/consulting'
import sidebarBox from './sidebar.vue';
export default {
    name:'section-filter-list',
    components:{
      consultantCard,
      sidebarBox
    },
 data:()=>({
    items:[],
    filterSide:{
      during:null,
      min_price:0,
      max_price:1000
    },
    filterItem:{
            created_at:'asc',
            search:null,
            during:null,
            min_price:0,
            max_price:1000
        }
 }),
 methods:{
   changeFilter(val){
            this.filterItem = {...this.filterItem,...val}
            this.fireEvent('d-filter-list-refresh')
        },
    async loadList(metaInfo){
      let params = {
                page: metaInfo.current_page,
                field_id: this.$route.params.id,
                paginate:this.isMobile?2:6,
                ...this.filterItem
            }
        try {
          return await consultingAPI.getAll(params)
        } catch (error) {
           // 
        }
    }
 }

}
</script>

<style>

</style>