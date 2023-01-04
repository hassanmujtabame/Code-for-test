<template>
  <div style="margin-top: 85px" class="consult">
      <!--section header-->
      <SectionHeader/>
      <div class="container">
       <!-- section numbers-->
       <SectionNumbers />
        <!--أعرف اكثر عن مجالات الاستثمار-->
        <SectionKnowMore />
        <!--جولات تنتهي هذا الاسبوع -->
      <SectionNearExpired/>
      </div>
      

      <div class="mt-5">

    <!-- مشاريع الاستثمار مادي-->
        <section-invest-project-1 />
<!-- مشاريع الاستثمار معنوي-->
<section-invest-project-2 />
      </div>

  
    </div>
</template>

<script>
import SectionHeader from './parts/section-header/index.vue'
import SectionNumbers from './parts/section-numbers/index.vue'
import SectionKnowMore from './parts/section-know-more/index.vue'
import SectionNearExpired from './parts/sect-project-near-expired/index.vue'
import SectionInvestProject1 from './parts/sect-invest-project-1/index.vue'
import SectionInvestProject2 from './parts/sect-invest-project-2/index.vue'
export default {
name:'investment-project',
components:{
    SectionHeader,
    SectionNumbers,
    SectionKnowMore,
    SectionNearExpired,
    SectionInvestProject1,
    SectionInvestProject2
}
}
</script>

<style>

</style>