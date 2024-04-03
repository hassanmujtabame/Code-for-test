<template>
  <div
    
    style="margin-top: 85px"
    class="consult"
  >
    <!-- section header-->
    <SectionHeader />
    <!--#section 1-->
    <!-- section help to start-->
    <SectionHelpToStart />
    <!--#section 2-->
    <!-- section 3-->
    <SectionThree />
    <!--#section 3-->
    <!-- section 4-->
    <SectionFour />
    <!--#section 4-->
    <!-- section 5-->
    <SectionFive />
    <!--#section 5-->
    <!-- section 6-->
    <SectionSix />
    <!--#section 6-->
    <!-- section 7-->
    <SectionSeven />
    <!--#section 7-->
    <!-- section 8-->
    <SectionEight />
    <!--#section 8-->
  </div>
</template>

<script>
import SectionHeader from "./parts/section-header/index.vue";
import SectionHelpToStart from "./parts/section-help-tostart/index.vue";
import SectionThree from "./parts/section-3/index.vue";
import SectionFour from "./parts/section-4/index.vue";
import SectionFive from "./parts/section-5/index.vue";
import SectionSix from "./parts/section-6/index.vue";
import SectionSeven from "./parts/section-7/index.vue";
import SectionEight from "./parts/section-8/index.vue";
export default {
  name: "consulting-home",
  components: {
    SectionHeader,
    SectionHelpToStart,
    SectionThree,
    SectionFour,
    SectionFive,
    SectionSix,
    SectionSeven,
    SectionEight,
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
