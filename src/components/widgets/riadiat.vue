<template>
  <h1
    class="header-title-page select-title-main text-black"
    style="display: inline"
    :style="{
      color: fontColor,
      fontSize: fontsize,
      fontWeight: fontWeight,
      fontFamily: fontFamily,
    }"
  >
    {{ $t("Riadiat") }}
    <img src="@/assets/img/new/main-page/header/Vector 14.png" alt="" />
  </h1>
</template>

<script>
export default {
  name: "riadiat",
  props: {
    fontColor: {
      type: String,
      default: "#414042",
    },
    fontsize: {
      type: String,
      default: "64px",
    },
    fontWeight: {
      type: String,
      default: "700",
    },
    fontFamily: {
      type: String,
      default: "Cairo",
    },
  },
};
</script>

<style scoped>
.select-title-main {
  position: relative;
}

.select-title-main img {
  content: "";
  position: absolute;
  right: 0;
  bottom: 0px;
  width: 100%;
}
</style>
