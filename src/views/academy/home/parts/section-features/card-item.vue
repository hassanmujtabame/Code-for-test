<template>
  <div class="academy-features-item rounded-3" :class="{ 'dark-card': isDark }">
    <div class="academy-features-item-img">
      <img :src="src" class="h-100 w-100" alt="" />
    </div>
    <div class="academy-features-item-title my-2">
      {{ title }}
    </div>
    <div
      class="academy-features-item-text my-2"
      :class="{ 'light-text': isDark }"
    >
      {{ description }}
    </div>
  </div>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      default: "",
    },
    description: {
      type: String,
      default: "",
    },
    isDark: {},
    src: {},
  },
};
</script>

<style scoped>
.academy-features-item {
  padding: 24px;
  min-height: 293px;
  width: 100%;
  align-items: center;
  background-color: #e1eeef;
}
.academy-features-item:hover {
  box-shadow: 0px 0px 10px 2px var(--m-color);
}
.academy-features-item-img {
  height: 64px;
  width: 64px;
}
.academy-features-item-title {
  margin-top: 20px;
  font-family: Cairo;
  font-size: 24px;
  font-weight: 700;
  line-height: 44.98px;

  color: #2cb7b3;
}
.academy-features-item-text {
  font-family: Cairo;
  font-size: 14px;
  font-weight: 500;
  line-height: 26.24px;

  color: #232426;
}
.light-text {
  color: #fff;
}
.dark-card {
  background-color: #414042;
}
</style>
