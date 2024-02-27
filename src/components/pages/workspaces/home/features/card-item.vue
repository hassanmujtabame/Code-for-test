<template>
  <div
    style="min-height: 150px"
    class="work-spaces-features-item d-flex flex-column border rounded-2"
  >
    <div class="work-spaces-features-item-img py-1">
      <img :src="src" class="h-100 w-100" alt="" />
    </div>
    <div class="work-spaces-features-item-text text-center my-2">
      <slot class="font-weight-bold" style="color: '#4D4D4D'"></slot>
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
.work-spaces-features-item {
  box-shadow: 0px 0px 6px 0.1px #1fb9b369;
  display: flex;
  height: 100px;
  align-items: center;
}
.work-spaces-features-item:hover {
  box-shadow: 0px 0px 10px 2px var(--m-color);
}
.work-spaces-features-item-img {
  height: 74px;
  width: 74px;
  margin: 0 5px;
  flex-shrink: 0;
}
.work-spaces-features-item-text {
  font-size: 1.2em;
  text-transform: capitalize;
  color: #7c797e;
}
</style>
