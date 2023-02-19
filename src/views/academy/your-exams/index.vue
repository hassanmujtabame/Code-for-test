<template>
  <div style="margin-top: 85px " class="consult">
    <div class="bg-body-page">
      <div class="container mt-5">
    <SectionFilterList />
    </div>
  </div>
  </div>
</template>

<script>

import SectionFilterList from './parts/section-filter-list/index';

export default {
  name: 'your-certifcates-page',
  components:{

    SectionFilterList,

  }
}
</script>

<style>

</style>