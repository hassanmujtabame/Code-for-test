<template>
    <div class="mt-5">
      <SectionTop />
      <SectionFilterList />
    </div>
</template>

<script>
import SectionTop from './parts/section-top/index.vue'
import SectionFilterList from './parts/section-filter-list/index.vue'
export default {
 name:'services-online',
 components:{
    SectionTop,
    SectionFilterList
 }
}
</script>

