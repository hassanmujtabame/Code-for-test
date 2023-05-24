<template>
  <div style="margin-top:83px">
    <Header />

  <div class="container">
    <sectionRecents />
    <sectionFilter />
  </div>
  </div>
</template>

<script>
import Header from '@/components/pages/workspaces/header'
import sectionRecents from './parts/recent-workspaces'
import sectionFilter from './parts/section-filter-list'
export default {
name:'orkspacesPage',
components:{
    Header,
    sectionRecents,
    sectionFilter
}
}
</script>

<style>

</style>