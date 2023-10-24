<template>
  <div style="margin-top: 85px " class="consult">
    <SectionTop />
    <SectionFilterList />
  </div>
</template>

<script>

import SectionFilterList from './parts/section-filter-list/index';
import SectionTop from './parts/section-top/index';

export default {
  name: 'your-certifcates-page',
  components:{
    SectionTop,
    SectionFilterList,

  }
}
</script>

<style>

</style>