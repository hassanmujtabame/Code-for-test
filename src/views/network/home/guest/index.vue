<template>
  <div style="" class="consult">
    <!-- section header -->
    <SectionHeader />
    <!-- #section Header -->
    <!-- section 2-->
    
      <!-- شبكة رياديات: وسع دائرة معارفك-->
      <SectionGrowYourNetwork />
      
      <SectionFeatures />

      <!--section network's goals-->
      <!-- <SectionNetworkGoals /> -->

      <!-- <SectionOurAds /> -->

      <!--معسكر ريادة الاعمال-->
      <!-- <SectionCampLeadership v-if="false" /> -->


    <div class=" mt-5">
      <SectionAds department="network" url="network/home-banners" />
    </div>

    <!-- #section 2-->
    <!-- section 3-->
    <SectionThree />
    <!-- #section 3-->
    <!-- section 4-->
    <SectionMembership />
    <SectionSchedules />
    <!-- #section 4-->
    <!-- section 5-->
    <SectionTopMember />
    <!-- #section 5-->
    <!-- section subscribe-->
    <SectionPartners />
    <!-- #section subscribe-->
    <!-- section join us-->
    <SectionJoin />
    <!-- #section join us-->
    <!-- section numbers in network-->
    <SectionNumbers />
    <!-- #section numbers in network-->
    <!-- section influenceurs -->
    <SectioninFluenceurs />
    <!-- #section influenceurs -->
    <!-- section continue learning -->
    <SectionContinueLearning />
    <!-- #section continue learning -->
    <!-- section hear about us -->
    <SectionHear />
    <!-- #section hear about us -->
  </div>
</template>
<script>
import SectionHeader from './parts/section-header/index.vue';
import SectionThree from './parts/section-3/index.vue';
import SectionMembership from './parts/section-membership/index.vue';
import SectionSchedules from './parts/section-schedules/index.vue';
import SectionTopMember from './parts/section-top-members/index.vue';
import SectionPartners from '../auth/parts/section-partners/index.vue';
import SectionJoin from './parts/section-join-us/index.vue';
import SectionNumbers from './parts/section-numbers/index.vue';
import SectioninFluenceurs from './parts/section-influenceurs/index.vue';
import SectionContinueLearning from './parts/section-continue-learning/index.vue';
import SectionHear from './parts/section-hear/index.vue';
import SectionAds from '@/common/components/advertisements/index'
import SectionNetworkGoals from './parts/section-network-goals/index.vue'
import SectionCampLeadership from './parts/cam-leadership/index.vue'
import SectionGrowYourNetwork from './parts/grow-your-network/index.vue'
import SectionOurAds from './parts/section-our-ads/index.vue'
// import SectionMakeBig from './parts/section-make-big/index.vue'
import SectionFeatures from "./parts/section-features/index.vue";

export default {
  name: 'IndexPageGuest',
  components: {
    SectionFeatures,
    SectionHeader,
    SectionOurAds,
    SectionThree,
    SectionMembership,
    SectionSchedules,
    SectionTopMember,
    SectionPartners,
    SectionJoin,
    SectionNumbers,
    SectioninFluenceurs,
    SectionContinueLearning,
    SectionHear,
    SectionAds,
    SectionGrowYourNetwork,
    SectionNetworkGoals,
    SectionCampLeadership
  },
  methods: {
    loadJS(src, async = true, defer = false) {
      const plugin = document.createElement("script");
      plugin.setAttribute(
        "src",
        src
      );
      if (defer)
        plugin.setAttribute("defer", true)
      plugin.async = async;
      document.body.appendChild(plugin);
    }
  },
  created() {

  }
}
</script>

