<template>
  <d-filter-list 
  hideSide
  :call-list="loadList"
  :pluralName="$t('consulting-fields')"
  :singleName="$t('field')"
  searchPlaceholder="أبحث عن مجالات الاستشارة"
  @change="changeFilter"
  classColCard="col-12 col-sm-6 col-md-3 mt-2"
  >
  <template v-slot="{item}">
    <router-link class="router-link" :to="getRouteLocale('consulting-field-consultants',{id:item.id})">
    <consultingFieldCard :item="item" />
  </router-link>
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