<template>
   <div style="margin-top: 85px" class="consult">
       <!--section header -->
       <SectionHeader/>
        <!-- section recent models-->
        <SectionRecentModel />
    </div>
</template>

<script>
import SectionHeader from './parts/section-header/index.vue'

import SectionRecentModel from './parts/section-recent-models/index.vue'
export default {
 name:'models-page',
 components:{
    SectionHeader,
    SectionRecentModel
 }
}
</script>

<style>

</style>