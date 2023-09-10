<template>
  <main style="margin-top:85px">
    <div class="container dashbord">
        <!--section top-->
        <SectionTop v-if="!isFirst" />
        <SectionFirstVisit v-else />
        <!--section balance-->
        <SectionBalance />
      <!--section my ready services-->
      <SectionMyReadyServices />
      
      
      <!--section my offers-->
      <SectionMyOffers />
      <SectionMyWorkSpace/>
      <AskRiyadiate/>
    
</div>
</main>
</template>

<script>
import SectionTop from './parts/section-header/index.vue'
import SectionFirstVisit from './parts/section-first-visit/index.vue'
import SectionBalance from './parts/section-balance/index.vue'
import SectionMyOffers from './parts/section-my-offers/index.vue'
import SectionMyWorkSpace from './parts/section-my-work-space/index.vue'
import AskRiyadiate from './parts/ask-riyadiate/index.vue'
import SectionMyReadyServices from './parts/section-my-ready-services/index.vue'

export default {
 name:'service-provider-dashboard',
 components:{
    SectionTop,
    SectionFirstVisit,
    SectionMyOffers,
    SectionBalance,
    SectionMyReadyServices,
    SectionMyWorkSpace,
    AskRiyadiate
 },
 data:()=>({
  isFirst:false,
 })
}
</script>

<style>

</style>