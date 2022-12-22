<template>
 <div style="margin-top: 85px" class="consult">
      <!--section top-->
      <SectionTop />
      <div class="container mt-5">
        <!--best stories-->
        <SectionBestStories />
            
          <!-- filter list-->
          <SectionFilterList />
       
    </div>
 </div>
</template>

<script>
import SectionTop from './parts/section-top/index.vue'
import SectionBestStories from './parts/section-best-stories/index.vue'
import SectionFilterList from './parts/section-filter-list/index.vue'
export default {
 name:'successful-stories',
 components:{
    SectionTop,
    SectionBestStories,
    SectionFilterList
 }
}
</script>

<style>

</style>