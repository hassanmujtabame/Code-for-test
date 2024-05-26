<template>
  <h1
    class="text_"
    style="display: inline"
    :style="{
      color: fontColor,
      fontSize: fontsize,
      fontWeight: fontWeight,
      fontFamily: fontFamily,
      backgroundImage: `url(${require('@/assets/img/new/main-page/header/Vector 14.png')})`,
    }"
  >
    {{ $t("Riadiat") }}
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
.text_ {
  background-repeat: no-repeat;
  background-size: 100% auto;
  background-position-y: 90%;
}
</style>
