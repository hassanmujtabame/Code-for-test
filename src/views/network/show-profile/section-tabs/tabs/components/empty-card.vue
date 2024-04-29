<template>
  <div class="empty-tab" style="min-height: 200px">
    <img class="empty-img" src="/assets/img/noDataCloud.png" />
    <div class="main-text">{{ mainText }}</div>
    <div class="sec-text">{{ seconderyText }}</div>
  </div>
</template>

<script>
export default {
  name: "empty-tab",
  props: {
    mainText: {
      type: String,
      default: "لا توجد عناصر",
    },
    seconderyText: {
      type: String,
      default: "لم يضف هذا العضو أي عناصر حتى الأن",
    },
  },
  data() {
    return {};
  },
};
</script>

<style>
.empty-tab {
  display: block;
  text-align: center;
  justify-content: center;
  width: 100%;
  background-color: #fff;
}
.empty-img {
  width: 50%;
}
.main-text {
  font-size: 32px;
  color: #414042;
}
.sec-text {
  margin-top: 10px;
  font-size: 24px;
  color: #737373;
}
</style>
