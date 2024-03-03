<template>
  <vc-date-picker
    v-model="date"
    :disabledDates="disabledDates"
    :locale="$i18n.locale"
    class="datetime-input"
    :class="{ 'hidden-date__time': hideDate }"
    :style="{ direction: $i18n.locale == 'ar' ? 'rtl' : 'ltr' }"
    :mode="mode"
    :is24hr="is24hr"
    :masks="masks"
    :maxDate="maxDate"
    :minDate="minDate"
    :disabled="disabled"
    :modelConfig="modelConfig"
  >
    <template v-slot="{ inputValue, inputEvents }">
      <input
        class="px-2 py-1 border rounded focus:outline-none focus:border-blue-300"
        :value="inputValue"
        v-on="inputEvents"
      />
    </template>
  </vc-date-picker>
</template>

<script>
export default {
  name: "date-picker-input",
  props: {
    value: {
      type: String,
    },
    hideDate: {
      type: Boolean,
      default: false,
    },
    disabled: {
      type: Boolean,
      default: false,
    },
    dateT: {
      Type: String,
      default: null,
    },
    is24hr: {
      type: Boolean,
      default: true,
    },
    disabledDates: {
      default: null,
    },
    minDate: {
      default: null,
    },
    maxDate: {
      default: null,
    },
    mode: {
      type: String,
      default: "dateTime",
    },
    mask: {
      type: String,
      default: "YYYY-MM-DD",
    },
  },
  data(vm) {
    return {
      date: null,
      modelV: null,
      modelConfig: {
        start: {
          timeAdjust: vm.mode == "date" ? "00:00:00" : undefined,
          dateAdjust:
            vm.mode == "time"
              ? vm.DateT ?? vm.dateToString(new Date())
              : undefined,
        },
      },
      masks: {
        input: vm.mask,
      },
    };
  },
  watch: {
    dateT() {},
    disabledDates: {
      deep: true,
      immediate: true,
      handler() {},
    },
    maxDate: {
      deep: true,
      immediate: true,
      handler() {},
    },
    mainDate: {
      deep: true,
      immediate: true,
      handler() {},
    },
    value: {
      immediate: true,
      handler(val) {
        if (!val) return;
        let date = new Date(val);
        if (this.mode == "time") {
          date = new Date();
          date.setHours(val.split(":")[0], val.split(":")[1], 0);
        }
        this.date = date;
      },
    },
    date: {
      deep: true,
      immediate: true,
      handler(val) {
        if (val == "Invalid Date") return;
        if (!val) {
          this.$emit("input", null);
          return;
        }
        /** من إجل جعل اكثر سهولة في الاستعمال */
        /*let value=this.$children[0].inputValues[0]
                let test= this.$children[0].$locale.format(val, this.mask)
                console.log('value',value,test,this.$children[0].$locale)
                this.$emit('input',value)
                */
        if (this.mode == "date") this.$emit("input", this.dateToString(val));
        else if (this.mode == "time") {
          this.$emit("input", this.timeToString(val));
        } else this.$emit("input", val.toISOString());
      },
    },
  },
  mounted() {
    this.$root.$on("input", (/*value*/) => {
      //console.log('dxggdfg',value);
    });
  },
};
</script>

<style scoped>
input {
  border: none !important;
  width: 100%;
  height: 100%;
}
.datetime-input {
  padding: 0;
  direction: ltr;
}
</style>
<style>
.vc-popover-content-wrapper.is-interactive {
  direction: ltr !important;
}
.hidden-date__time .vc-time-picker .vc-date-time .vc-date {
  display: none !important;
}
</style>
