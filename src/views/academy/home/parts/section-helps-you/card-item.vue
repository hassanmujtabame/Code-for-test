<template>
  <div
    style="background-color: transparent"
    class="mt-5 academy-help-item gap-4 rounded-2"
  >
    <div class="academy-help-item_wrapper">
      <div class="img">
        <img height="72px" :src="src" alt="" />
      </div>
      <h1 class="academy-help-item-title">{{ title }}</h1>
      <div class="academy-help-item-text">
        {{ description }}
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "card-item",
  props: {
    src: {},
    title: {},
    description: {},
  },
};
</script>

<style scoped>
.img {
  height: 72px;
}
.academy-help-item {
  /* box-shadow: 0px 0px 6px 0.1px #1fb9b369; */
  flex-direction: column;
  display: flex;
  align-items: center;
  height: 100%;
}
.academy-help-item_wrapper {
  padding: 15px;
}
/* .academy-help-item:hover {
  box-shadow: 0px 0px 10px 2px var(--m-color);
} */
.academy-help-item-title {
  font-family: Cairo;
  font-size: 24px;
  font-weight: 700;
  line-height: 26.4px;
  color: #2cb7b3;
}
.academy-help-item-text {
  font-family: Cairo;
  font-size: 14px;
  font-weight: 400;
  line-height: 22.4px;

  color: #666666;
  display: flex;
  align-items: center;
  text-align: start;
  text-transform: capitalize;
}
</style>
