<template>
  <div style="margin-top: 85px" class="consult max-width-100-hidden">
    <!-- <SectionTop /> -->

    <div class="container">
      <SectionFilterList />
    </div>
    <!-- <div>

    <SectionLearning />
</div> -->
    <SectionHear />
  </div>
</template>

<script>
import SectionFilterList from "./parts/section-filter-list/index.vue";
import SectionHear from "@/views/service-provider/common-components/section-hear/index.vue";
import SectionTop from "./parts/section-top/index.vue";
import SectionLearning from "@/views/service-provider/common-components/section-continue-learning/index.vue";
export default {
  name: "ready-services",
  components: {
    SectionHear,
    SectionTop,
    SectionLearning,
    SectionFilterList,
  },
  data: () => ({}),
};
</script>

<style></style>
