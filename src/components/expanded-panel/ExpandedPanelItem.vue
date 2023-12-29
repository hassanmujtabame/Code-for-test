<template>
  <div class="accordion-item m-2" :class="{ 'border-bottom': borderBottom }">
    <h2 v-if="title || $slots.btnTitle" class="accordion-header" :id="idh">
      <slot name="before-btn"></slot>
      <button
        class="accordion-button d-flex"
        :class="[
          !isOpen ? 'collapsed' : '',
          classTitle,
          before ? 'before' : '',
        ]"
        type="button"
        :aria-expanded="isOpen"
        :aria-controls="id"
        @click="togglePanel"
      >
        <slot name="btnTitle">
          {{ title }}
        </slot>
      </button>
    </h2>
    <div
      :id="id"
      class="accordion-collapse collapse"
      :class="{ show: isOpen }"
      :aria-labelledby="idh"
      :style="{ display: isOpen ? 'block' : 'none' }"
    >
      <div class="accordion-body">
        <slot></slot>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "d-expanded-panel-item",
  props: {
    title: {
      type: String,
      required: true,
    },
    classTitle: {
      type: String,
    },
    before: {
      type: Boolean,
      default: false,
    },
    borderBottom: {
      type: Boolean,
      required: false,
    },
    opened: {
      type: Boolean,
      default: false,
    },
  },
  data() {
    return {
      id: "",
      idh: "",
      isOpen: this.opened, // Use the 'opened' prop to set initial state
    };
  },
  mounted() {
    let id = this.$parent.$attrs.id;
    let index = this.$parent.$children.findIndex((x) => x._uid == this._uid) + 1;
    this.id = id + "-" + index;
    this.idh = id + "-header" + index;
  },
  methods: {
    togglePanel() {
      this.isOpen = !this.isOpen; // Toggle the isOpen flag
    },
  },
};
</script>
