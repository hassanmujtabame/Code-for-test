<template>
  <div class="circle-border">
    <img :src="item.img" height="56px" />
    <div>{{ item.name }}</div>
  </div>
</template>

<script>
export default {
  name: "department-card",
  props: {
    item: {},
  },
};
</script>

<style></style>
