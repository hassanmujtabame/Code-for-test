<template>
  <div
    class="d-flex warning-tap gap-2 justify-content-start align-items-center"
  >
    <div class="d-inline gap-2 flex-wrap icon">
      <img src="@/assets/img/warning.png" height="26px" width="auto" />
    </div>
    <div class="d-inline w-100">
      <slot></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: "WarningTape",
};
</script>

<style>
.warning-tap {
  padding: 13px;
  background-color: rgba(255, 222, 47, 0.1);
}
.warning-tap * {
  font-size: 16px;
  font-weight: 500;
  color: #dc831d;
}
</style>
