<template>
  <div class="overlay" v-bind="$attrs">
    <slot>
      <i class="fas fa-spinner fa-fw fa-2x fa-spin" style="color: white"></i>
    </slot>
  </div>
</template>

<script>
export default {
  name: "over-lay",
};
</script>

<style>
.overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(
    0,
    0,
    0,
    0.5
  ); /* Adjust the overlay color and opacity as needed */
  z-index: 9999;
  display: flex;
  align-items: center;
  justify-content: center;
}
</style>