<template>
   <div style="margin-top: 85px " class="consult max-width-100-hidden">
      <div class="consulting">
         <!-- <SectionTop /> -->
      </div>
      <div class="container">
         <SectionFilterList />
      </div>

      <SectionLearning />
      <SectionHear />
   </div>
</template>

<script>
import SectionFilterList from './parts/section-filter-list/index'
import SectionHear from '@/views/service-provider/common-components/section-hear/index.vue'
import SectionTop from './parts/section-top/index.vue'
import SectionLearning from '@/views/service-provider/common-components/section-continue-learning/index.vue'
export default {
   name: 'providers-page',
   components: {
      SectionHear,
      SectionTop,
      SectionLearning,
      SectionFilterList
   },
   data: () => ({})
}
</script>

<style></style>