<template>
  <div class="mt-3">
    <a
      class
      data-bs-toggle-old="offcanvas"
      @click="openDrawer"
      hrefd="#offcanvas-profile"
      role="button"
      aria-controls="offcanvas-profile"
    >
      <img class="rounded-circle" :src="user.image" alt width="32" height="32" />
    </a>
  </div>
</template>

<script>
export default {
  methods: {
    openDrawer() {
      this.fireEvent("drawer-side-open-drawer");
    }
  }
};
</script>

<style>
</style>