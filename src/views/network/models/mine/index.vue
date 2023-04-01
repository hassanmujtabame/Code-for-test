<template>
   <div style="margin-top: 85px" class="consult max-width-100-hidden">
      
        <div class="mt-5">
        <SectionFilterList />
        </div>
    </div>
</template>

<script>

import SectionFilterList from './parts/section-filter-list/index.vue'
export default {
 name:'models-page',
 components:{
    SectionFilterList
 }
}
</script>

<style>

</style>