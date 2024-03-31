<template>
  <div
    :style="{ opacity: getData('2024-4-1') }"
    style="margin-top: 85px"
    class="consult"
  >
    <SectionHeader />
    <SectionVip />
    <SectionContinueLearning />
    <SectionSpeical />

    <SectionList />

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
import SectionSpeical from "@/components/speical-members.vue";
import SectionContinueLearning from "@/views/network/home/parts/section-continue-learning/index.vue";
export default {
  name: "member-network",
  components: {
    SectionHeader,
    SectionList,
    SectionSpeical,
    SectionHear,
    SectionContinueLearning,
    SectionVip,
  },
  methods: {
    getData(dc) {
      const d = new Date(dc);
      const c = new Date();
      const dd = 2;
      const cd = Math.floor(
        (d.getTime() - c.getTime()) / (1000 * 60 * 60 * 24)
      );

      let o = cd > 0 ? 1 : 1 - Math.abs(cd) / dd;

      return o;
    },
  },
};
</script>

<style></style>
