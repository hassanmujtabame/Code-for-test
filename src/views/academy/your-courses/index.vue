<template>
  <div style="margin-top: 85px " class="consult">
    <div class="container mt-5">
    <SectionFilterList />
    </div>
  </div>
</template>

<script>
import SectionFilterList from './parts/section-filter-list/index';

export default {
  name: 'your-courses-page',
  components:{
    SectionFilterList
  }
}
</script>

<style>

</style>