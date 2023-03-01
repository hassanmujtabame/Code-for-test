<template>
  <d-filter-list 
  hideSide
  :call-list="loadList"
  :pluralName="$t('consultants')"
  :singleName="$t('consultant')"
  searchPlaceholder="أبحث عن مستشار"
  @change="changeFilter"
  >
  <template v-slot="{item}">
    <consultingFieldCard :item="item" />
    </template>
  </d-filter-list>
</template>

<script>
import consultingFieldCard from '@/components/cards/consulting-field.vue'
import consultingAPI from '@/services/api/consulting'
export default {
    name:'section-filter-list',
    components:{
        consultingFieldCard
    },
 data:()=>({
    items:[],
    filterItem:{
            created_at:'asc',
            search:null
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
                ...this.filterItem
            }
        try {
          return await consultingAPI.fields.getAll(params)
        } catch (error) {
           // 
        }
    }
 }

}
</script>

<style>

</style>