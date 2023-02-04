<template>
  <div style="margin-top: 85px" class="consult">
    <SectionHeader />
    <SectionFilterList />
    <SectionContinueLearning />
    <SectionHear />
  </div>
</template>

<script>
import SectionHeader from './sections/section-header/index'
import SectionFilterList from './sections/section-filter-list/index'
import SectionContinueLearning from '@/views/service-provider/common-components/section-continue-learning/index'
import SectionHear from '@/views/service-provider/common-components/section-hear/index'

export default {
 name:'graduate-riadiate',
 components:{
  SectionHeader,
  SectionFilterList,
  SectionContinueLearning,
  SectionHear
 }
}
</script>

<style>

</style>