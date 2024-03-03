<template>
  <div class="d-datepicker">
    <vc-date-picker
      v-model="date_value"
      mode="date"
      is24hr
      :max-date="maxDate"
      :popover="popover"
      :modelConfig="modelConfig"
    >
      <template v-slot="{ /*inputValue,*/ togglePopover, inputEvents }">
        <d-text-input
          readonly
          type="text"
          :value="date_value"
          v-on="disabledEvents || !popover ? {} : inputEvents"
          class="form-control px-3"
          v-bind="$attrs"
        >
          <template v-slot:[`prend-icon`]>
            <slot name="prend-icon" :togglePopover="togglePopover"></slot>
          </template>
          <template v-slot:[`append-icon`]>
            <slot name="append-icon" :togglePopover="togglePopover"></slot>
          </template>
        </d-text-input>
        <div class="icon-append-input">
          <slot :togglePopover="togglePopover"></slot>
        </div>
      </template>
    </vc-date-picker>
  </div>
</template>

<script>
export default {
  props: {
    value: {},
    minDate: {},
    maxDate: {},
    popover: {
      type: [Object, Array],
      default: () => {
        return {};
      },
    },
    mask: {
      type: String,
      default: "YYYY-MM-DD",
    },
    disabledEvents: {
      type: Boolean,
      default: false,
    },
  },
  model: {
    prop: "value",
    event: "updateValue",
  },
  data: (vm) => {
    return {
      date_value: null,
      modelConfig: {
        type: "string",
        mask: vm.mask, // Uses 'iso' if missing
      },
    };
  },
  watch: {
    date_value() {
      this.$emit("updateValue", this.date_value);
    },
    value: {
      immediate: true,
      handler() {
        if (this.value === undefined) this.date_value = null;
        else this.date_value = this.value;
      },
    },
    mask() {
      this.modelConfig.mask = this.mask;
    },
  },
  methods: {
    clickIconAppend(action) {
      if (action) {
        action();
      }
    },
  },
};
</script>

<style scoped>
.d-datepicker {
  width: 100%;
  position: relative;
}

.icon-append-input {
  position: absolute;
  top: 6px;
  left: 6px;
}

html[lang="en"].icon-append-input {
  right: 6px;
  left: auto;
}
</style>
