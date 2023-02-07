<template>
  <div style="margin-top: 85px " class="consult">
    <!--header -->
    <SectionHeader />
    <SectionFilterList />
  </div>
</template>

<script>
import SectionHeader from './parts/section-header/index';
import SectionFilterList from './parts/section-filter-list/index';

export default {
  name: 'courses-page',
  components:{
    SectionHeader,
    SectionFilterList,

  }
}
</script>

<style>

</style>