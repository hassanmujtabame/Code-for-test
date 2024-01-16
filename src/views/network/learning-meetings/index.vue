<template>
   <div style="margin-top: 85px" class="consult max-width-100-hidden">
      <SectionHeader />
      <div class="mt-5">
         <SectionList />
      </div>
   </div>
</template>

<script>
import SectionHeader from './parts/section-header/index.vue'
import SectionList from './parts/section-list/index.vue'
export default {
   name: 'learning-meetings',
   components: {
      SectionHeader,
      SectionList
   }
}
</script>

<style></style>