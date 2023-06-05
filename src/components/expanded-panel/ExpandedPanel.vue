<template>
  <div class="accordion accordion-flush">
    <h3 v-if="title || $slots.title" :class="classTitle">
      <slot name="title">
        {{ title }}
      </slot>
    </h3>
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: "d-expanded-panel",
  props: {
    title: {
      type: String,
    },
    classTitle: {
      type: String,
      default: "fw-bolder",
    },
  },
  data: () => ({}),
};
</script>

<style>
</style>