<template>
  <div style="margin-top: 85px " class="consult">
    <!--header -->
    <SectionHeader />

    <SectionFilterList />




  <SectionContinueLearning/>
   
<SectionHear />


  </div>
</template>

<script>
import SectionHear from '@/views/academy/common-components/section-hear/index.vue'
import SectionContinueLearning from '@/views/academy/common-components/section-continue-learning/index.vue'
import SectionHeader from './parts/section-header/index';
import SectionFilterList from './parts/section-filter-list/index';

export default {
  name: 'your-courses-page',
  components:{
    SectionHeader,
    SectionHear,
    SectionFilterList,
    SectionContinueLearning
  }
}
</script>

<style>

</style>