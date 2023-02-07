<template>
  <div style="margin-top:85px">
    <div class="container dashbord">
  <SectionHeader />
  <SectionBalance />
</div>

</div>
</template>

<script>
import SectionHeader from './parts/section-header/index.vue'
import SectionBalance from './parts/section-balance/index.vue'
export default {
 name:'your-courses-page',
 components:{
  SectionHeader,
  SectionBalance
 }
}
</script>

<style>

</style>