<template>
  <div>
    <div class="d-flex justify-content-between">
      <div class="title-text">{{ $t("operations") }}</div>
      <div>
        <button class="btn btn-default">
          استيراد البيانات
          <i class="fa-solid fa-download" style="color: #1fb9b3"></i>
        </button>
      </div>
    </div>
    <GenerateCodeBar />
  </div>
</template>

<script>
import GenerateCodeBar from "./GenerateCodeBar.vue";
export default {
  name: "affiliate-marketing-operations",
  components: {
    GenerateCodeBar,
  },
};
</script>

<style scoped>
.title-text {
  font-family: Cairo;
  font-size: 20px;
  font-weight: 700;
  line-height: 36px;
  color: #101828;
}
.btn-default {
  font-family: Cairo;
  font-size: 14px;
  font-weight: 700;
  line-height: 24px;
  color: #344054;
}
</style>
