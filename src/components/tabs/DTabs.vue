<template>
  <ul class="nav nav-pills mb-3 justify-content-center p-0" :id="`${group}-tab`" role="tablist">
    <slot></slot>
  </ul>
</template>

<script>
export default {
  props: {
    group: {
      require: true,
    },
    current: {
      type: String,
      default: "",
    },
  },
};
</script>

<style></style>