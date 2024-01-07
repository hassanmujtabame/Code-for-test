<template>
  <li class="nav-item" role="presentation">
    <button class="nav-link" :class="{ active: active }" :id="`${group}-${tag}-tab`" data-bs-toggle="pill"
      :data-bs-target="`#${group}-${tag}`" type="button" role="tab" :aria-controls="`${group}-${tag}`"
      :aria-selected="active">
      <slot></slot>
    </button>
  </li>
</template>

<script>
export default {
  name: 'd-tab-btn',
  props: {
    group: {
      type: String,
      default: 'pills'
    },
    tag: {},
    active: {
      type: Boolean,
      default: false,
    }

  },
  watch: {
    active() { }
  }
}
</script>

<style></style>