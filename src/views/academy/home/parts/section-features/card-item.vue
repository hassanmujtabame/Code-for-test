<template>
  <div class="academy-features-item border rounded-2">
    <div class="academy-features-item-img">
      <img :src="src" class="h-100 w-100" alt="" />
    </div>
    <div class="academy-features-item-text my-2">
      <slot></slot>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    src: {},
  },
};
</script>

<style scoped>
.academy-features-item {
  box-shadow: 0px 0px 6px 0.1px #1fb9b369;
  display: flex;
  height: 100px;
  width: 100%;
  align-items: center;
}
.academy-features-item:hover {
  box-shadow: 0px 0px 10px 2px var(--m-color);
}
.academy-features-item-img {
  height: 50px;
  width: 50px;
  margin: 0 5px;
  flex-shrink: 0;
}
.academy-features-item-text {
  line-height: 24px;
  /* or 120% */
  display: flex;
  align-items: center;
  text-align: start;
  text-transform: capitalize;

  color: #7c797e;
}
</style>
