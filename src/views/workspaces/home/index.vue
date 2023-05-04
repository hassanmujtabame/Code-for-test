<template>
  <div style="margin-top:86px">
    <sectionHeader />

  <div class="container">
    <sectionRecents />
    <sectionFilter />
  </div>
  </div>
</template>

<script>
import sectionHeader from './parts/section-header'
import sectionRecents from './parts/recent-workspaces'
import sectionFilter from './parts/section-filter-list'
export default {
name:'workspaces-page',
components:{
    sectionHeader,
    sectionRecents,
    sectionFilter
}
}
</script>

<style>

</style>