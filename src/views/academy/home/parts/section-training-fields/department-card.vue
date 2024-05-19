<template>
  <div class="circle-border">
    <img
      :id="item.id"
      :src="item.image_path"
      height="56px"
      @error="handleImageError"
    />
    <div class="item-name mt-1">{{ item.name }}</div>
  </div>
</template>

<script>
export default {
  name: "department-card",
  props: {
    item: {},
  },
  methods: {
    handleImageError(event) {
      event.target.src = `${this.publicPath}assets/img/fi_1411586.png`;
    },
  },
};
</script>

<style scoped>
.circle-border {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 156px;
  height: 156px;
  border-radius: 50%;
  border: 2px solid #2cb7b3;
  background-color: #fff;
  color: #2cb7b3;
}
.item-name {
  font-family: Cairo;
  font-size: 16px;
  font-weight: 700;
  line-height: 30px;
  text-align: center;
}
</style>
