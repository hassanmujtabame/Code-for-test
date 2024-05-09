<template>
  <div
    class="show-available-time"
    :class="{ selected: selected }"
    @click="$emit('click', time)"
  >
    <div v-if="closeable" class="show-available-time__close">
      <i
        @click="$emit('delete', time)"
        class="fa fa-circle-xmark clickable c-r"
      ></i>
    </div>
    <div class="show-available-time__wrapper">
      <span class="show-available-time__text">
        <slot>
          {{ timeFormatAMPM(time, true) }}
        </slot>
      </span>
    </div>
  </div>
</template>

<script>
export default {
  name: "available-time-card",
  props: {
    time: {
      type: String,
    },
    closeable: {
      type: Boolean,
      default: false,
    },
    isSelected: {
      type: Boolean,
      default: false,
    },
  },
  data: () => ({
    selected: false,
  }),
  watch: {
    isSelected: {
      deep: true,
      immediate: true,
      handler() {
        this.selected = this.isSelected;
      },
    },
  },
};
</script>

<style scoped>
.show-available-time {
  cursor: pointer;
  position: relative;
  padding: 15px;
  background: #ffffff;
  border: 0.5px solid #cdd7d8;
  border-radius: 4px;
}
.show-available-time.selected {
  border: 0.5px solid #1fb9b3;
  color: #1fb9b3;
}
.show-available-time.selected * {
  color: #1fb9b3;
}
.show-available-time__wrapper {
  display: flex;
  align-items: center;
  justify-content: center;
}
.show-available-time__text {
  /** text */
  font-style: normal;
  font-weight: 400;
  font-size: 20px;
  line-height: 20px;
  /* identical to box height, or 100% */
  text-align: center;
  color: #cdd7d8;
  width: fit-content;
}
.show-available-time__close {
  --size-close-time: 15px;
  position: absolute;
  z-index: 3;
  /* width: var(--size-close-time); */
  /* height: var(--size-close-time); */
  left: -6px;
  display: flex;
  top: -8px;
  background: #ffffff;
  box-shadow: 2px 2px 10px rgba(12, 47, 51, 0.078);
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  font-size: var(--size-close-time);
}
html[lang="en"] .show-available-time__close {
  right: -6;
  left: auto;
}
</style>
