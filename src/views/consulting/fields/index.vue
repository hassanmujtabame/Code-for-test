<template>
  <div style="margin-top: 85px" class="consult">
    <!-- <div>

  <SectionHeader />
      </div> -->
    <div style="padding-top: 30px" class="container my-4">
      <h1 class="fw-bold text-dark">مجالات الاستشارة</h1>
    </div>
    <div class="container mt-3">
      <SectionFilterList />
    </div>
  </div>
</template>

<script>
import SectionHeader from "./parts/section-top/index";
import SectionFilterList from "./parts/section-filter-list/index";
export default {
  name: "page-consulting-categories",
  components: {
    SectionHeader,
    SectionFilterList,
  },
};
</script>

<style></style>
