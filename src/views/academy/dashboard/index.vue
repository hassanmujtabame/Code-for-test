<template>
  <div style="margin-top:85px">
    <div class="container dashbord">
  <SectionHeader />
  <SectionBalance />
  <SectionWidgets v-if="userAcademyRole=='student'" />
  <SectionInstructorWidgets v-if="userAcademyRole=='instructor'" />
</div>

</div>
</template>

<script>
import SectionHeader from './parts/section-header/index.vue'
import SectionBalance from './parts/section-balance/index.vue'
import SectionWidgets from './parts/section-widgets/index.vue'
import SectionInstructorWidgets from './parts/section-instructor-widgets/index.vue'
export default {
 name:'your-courses-page',
 components:{
  SectionHeader,
  SectionBalance,
  SectionWidgets,
  SectionInstructorWidgets
 }
}
</script>

<style>

</style>