<template>
  <div style="margin-top: 85px" class="consult">
    <SectionHeader />
    <SectionVip />
    <SectionList />
    <SectionContinueLearning />

    <!-- <div>

    <SectionHear />
    </div> -->
  </div>
</template>

<script>
import SectionHeader from "./parts/section-header/index.vue";
import SectionList from "./parts/section-list/index.vue";
import SectionHear from "@/views/network/home/parts/section-hear/index.vue";
import SectionVip from "@/components/section-members-vip.vue";
import SectionContinueLearning from "@/views/network/home/parts/section-continue-learning/index.vue";
export default {
  name: "member-network",
  components: {
    SectionHeader,
    SectionList,
    SectionHear,
    SectionContinueLearning,
    SectionVip,
  },
};
</script>

<style></style>
