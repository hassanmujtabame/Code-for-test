<template>
   <div style="margin-top: 85px" class="consult">
     <SectionHeader />
      <SectionList />
    </div>
</template>

<script>
import SectionHeader from './parts/section-header/index.vue'
import SectionList from './parts/section-list/index.vue'
export default {
 name:'learning-meetings',
 components:{
    SectionHeader,
    SectionList
 }
}
</script>

<style>

</style>