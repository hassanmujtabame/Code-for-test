<template>
  <li class="nav-item rounded-3" role="presentation">
    <button
      class="nav-link px-4 shadow text-color"
      :class="{ active: active }"
      :id="`${group}-${tag}-tab`"
      data-bs-toggle="pill"
      :data-bs-target="`#${group}-${tag}`"
      type="button"
      role="tab"
      :aria-controls="`${group}-${tag}`"
      :aria-selected="active"
    >
      <slot></slot>
    </button>
  </li>
</template>

<script>
export default {
  name: "d-tab-btn",
  props: {
    group: {
      type: String,
      default: "pills",
    },
    tag: {},
    active: {
      type: Boolean,
      default: false,
    },
  },
  watch: {
    active() {},
  },
};
</script>

<style scoped>
.text-color {
  color: #888 !important;
}
.nav-link {
  width: 100%;
}
</style>
