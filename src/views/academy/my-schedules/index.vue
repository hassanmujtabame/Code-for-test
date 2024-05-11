<template>
  <div style="margin-top: 95px">
    <div class="container">
      <div class="d-flex justify-content-between">
        <h1 class="home-section-title">جدول مواعيدي</h1>
        <button class="btn btn-danger px-5 my-3">
          <i class="fa-solid fa-plus"></i> {{ $t("add-schedule") }}
        </button>
      </div>

      <SectionFilterList />
    </div>
  </div>
</template>

<script>
import SectionFilterList from "./parts/section-filter-list/index";
export default {
  name: "ready-services",
  components: {
    SectionFilterList,
  },
  data: () => ({}),
};
</script>

<style></style>
