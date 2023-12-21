<template>
  <div class="accordion-item m-2" :class="{ 'border-bottom': borderBottom }">
    <h2 v-if="title || $slots.btnTitle" class="accordion-header" :id="idh">
      <slot name="before-btn"></slot>
      <button class="accordion-button d-flex" :class="[
        !isOpen ? 'collapsed' : '',
        classTitle,
        before ? 'before' : '',
      ]" type="button" :data-bs-toggle="isOpen ? 'collapse' : ''" :data-bs-target="`#${id}`" :aria-expanded="isOpen"
        :aria-controls="id" @click="togglePanel">
        <slot name="btnTitle">
          {{ title }}
        </slot>
      </button>
    </h2>
    <div :id="id" class="accordion-collapse collapse" :class="{ show: isOpen }" :aria-labelledby="idh"
      data-bs-parent="#accordionFlushExample1">
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
      require: true,
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
      require: true,
    },
  },
  data() {
    return {
      id: "",
      idh: "",
      isOpen: false,
    };
  },
  mounted() {
    // this.$parent.registerPanel(this);
    let id = this.$parent.$attrs.id;
    let index = this.$parent.$children.findIndex((x) => x._uid == this._uid) + 1;
    this.id = id + "-" + index;
    this.idh = id + "-header" + index;
  },
  methods: {
    togglePanel() {
      this.isOpen = !this.isOpen;
      this.$parent.togglePanel(this);
    },
  },
};
</script>
