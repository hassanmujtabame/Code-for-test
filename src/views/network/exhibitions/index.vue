<template>
  <div class="mt-5 max-width-100-hidden">
    <!--section header-->
    <SectionHeader />
    <!--#section header-->
    <!--section top exhibition-->
    <SectionTop />
    <!--#section top exhibition-->
    <!--section filter exhibition-->
    <div class="container mt-5">
      <SectionFilter />
    </div>
    <!--#section filter exhibition-->

    <addExhibitionDialg />
    <addSuccessExhibitionDialg />
  </div>
</template>

<script>
import SectionHeader from "./parts/section-header/index.vue";
import SectionTop from "./parts/section-top-exhibitions/index.vue";
import SectionFilter from "./parts/section-filter-exhibitions/index.vue";
import addExhibitionDialg from "@/components/dialogs/network/AddExhibition.vue";
import addSuccessExhibitionDialg from "./parts/dialogs/success-add-exhibition.vue";
export default {
  name: "exhibitions-page",
  components: {
    SectionHeader,
    SectionTop,
    SectionFilter,
    addExhibitionDialg,
    addSuccessExhibitionDialg,
  },
};
</script>

<style></style>
