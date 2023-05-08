<template>
 <div style="margin-top: 85px;">
    
  <SectionHeader  />
  <div class="container mt-3">
   <SectionFilterList  />
  </div>
</div>

</template>

<script>
import SectionHeader from './parts/section-top/index'
import SectionFilterList from './parts/section-filter-list/index'
//import consultingAPI from '@/services/api/consulting'
export default {
 name:'page-consulting-categories',
 components:{
    SectionHeader,
    SectionFilterList
 },

 
}
</script>

<style>

</style>