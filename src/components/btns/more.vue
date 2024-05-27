<template>
  <button @click="$emit('click')" class="btn-more">
    <div class="px-5">
      {{ $t("more") }}
    </div>
    <i class="fa-solid fa-arrow-left"></i>
  </button>
</template>

<script>
export default {
  name: "more-button",
};
</script>

<style scoped>
.btn-more {
  display: flex;
  align-items: center;
  padding: 20px;
  border: 0px;
  border-radius: 40px;
  background: #ffbc00;
  color: #78350f;
  font-family: Cairo;
  font-size: 24px;
  font-weight: 700;
  line-height: 24px;
  text-align: left;
}
</style>
