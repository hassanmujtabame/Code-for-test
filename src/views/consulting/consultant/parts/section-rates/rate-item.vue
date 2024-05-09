<template>
  <div class="comment px-4 py-2 border-bottom">
    <div class="d-flex justify-content-between align-items-center">
      <h6 class="m-0 item-name">
        {{ item.name }}
      </h6>
      <p class="m-0">
        <span class="s-c item-rate"> ({{ item.rate }}) </span>
        <span>
          <d-rate-font-stars size="12" :value="item.rate" readonly />
        </span>
      </p>
    </div>
    <small class="s-c item-comment">
      {{ item.comment }}
    </small>
  </div>
</template>

<script>
export default {
  props: {
    item: {},
  },
};
</script>

<style scoped>
.item-name {
  font-size: 16px;
  font-weight: 400;
  color: #737373;
}
.item-comment {
  font-size: 12px;
  font-weight: 400;
  color: #979797;
}
.item-rate {
  font-size: 10px;
  font-weight: 400;
  color: #c6cacc;
}
</style>
