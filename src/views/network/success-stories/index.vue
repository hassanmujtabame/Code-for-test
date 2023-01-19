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
    <AddStoryDialog />
    <SuccessAddStoryDialog />
 </div>
</template>

<script>
import SectionTop from './parts/section-top/index.vue'
import SectionBestStories from './parts/section-best-stories/index.vue'
import SectionFilterList from './parts/section-filter-list/index.vue'
import AddStoryDialog from './parts/dialogs/add-item.vue'
import SuccessAddStoryDialog from './parts/dialogs/success-add-item.vue'
export default {
 name:'successful-stories',
 components:{
    SectionTop,
    SectionBestStories,
    SectionFilterList,
    AddStoryDialog,
    SuccessAddStoryDialog
 }
}
</script>

<style>

</style>