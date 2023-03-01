<template>
  <d-filter-list 
  hideSide
  :call-list="loadList"
  :pluralName="$t('consulting-fields')"
  :singleName="$t('field')"
  searchPlaceholder="أبحث عن مجالات الاستشارة"
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
    items:[]
 }),
 methods:{
    async loadList(){
        try {
          return await consultingAPI.fields.getAll()
        } catch (error) {
           // 
        }
    }
 }

}
</script>

<style>

</style>