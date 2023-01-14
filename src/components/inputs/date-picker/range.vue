<template>
  <vc-date-picker 
  v-model="range" 
  :mode="mode" 
  :masks="masks" 
  is-range 
  is24hr 
  :locale="$i18n.locale"
    :modelConfig="modelConfig" 
    :style="{ 'text-align': $i18n.locale == 'ar' ? 'rtl' : 'ltr' }"
    >
    <template v-slot="{ inputValue, inputEvents, isDragging }">
      <div class="row justify-start items-center">
        <div class=" col-auto row">
          <ValidationProvider 
          :name="names.start" 
          :vid="vids.start" 
          :rules="rules.start" 
          v-slot="{ errors }">
            <div class="col-12 relative">
              <timeIcon v-if="mode == 'time'" class="text-gray-600 w-4 h-full mx-2 absolute pointer-events-none" />

              <calendarIcon v-else class="text-gray-600 w-4 h-full mx-2 absolute pointer-events-none" />

              <input class="flex-grow pl-8 pr-2 py-1 bg-gray-100 border rounded w-full"
                :class="isDragging ? 'text-gray-600' : 'text-gray-900'" :value="inputValue.start"
                v-on="inputEvents.start" />
            </div>
            <div v-if="errors.length !== 0" class="col-12 text-input-error">
              {{ errors[0] }}
            </div>
          </ValidationProvider>
        </div>
        <span class="col-auto">
          <svg class="d-arrow w-4 h-4 stroke-current text-gray-600" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
          </svg>
        </span>
        <div class=" col-auto row">
          <ValidationProvider 
          :name="names.end" 
          :vid="vids.end" 
          :rules="rules.end" 
          v-slot="{ errors }"
          >
            <div class="col-12 relative">
              <timeIcon v-if="mode == 'time'" class="text-gray-600 w-4 h-full mx-2 absolute pointer-events-none" />

              <calendarIcon v-else class="text-gray-600 w-4 h-full mx-2 absolute pointer-events-none" />
              <input class="flex-grow pl-8 pr-2 py-1 bg-gray-100 border rounded w-full"
                :class="isDragging ? 'text-gray-600' : 'text-gray-900'" :value="inputValue.end"
                v-on="inputEvents.end" />
            </div>
            <div v-if="errors.length !== 0" class="col-12 text-input-error">
              {{ errors[0] }}
            </div>
          </ValidationProvider>
        </div>
      </div>
    </template>
  </vc-date-picker>
</template>


<script>
import calendarIcon from '@/components/icon-svg/calendar.vue';
import timeIcon from '@/components/icon-svg/time.vue';
export default {
  name: 'date-picker-range',
  components: {
    calendarIcon,
    timeIcon
  },
  props: {
    rules: {
      type: [Array, Object],
      default: () => {
        return {
          start: "",
          end: ""
        }
      }
    },
    vids: {
      type: [Array, Object],
      default: () => {
        return {
          start: "start_date",
          end: "end_date"
        }
      }
    },
    names: {
      type: [Array, Object],
      default: () => {
        return {
          start: "start date",
          end: "end date"
        }
      }
    },
    valueStart: {
      type: String
    },
    valueEnd: {
      type: String
    },
    is24hr: {
      type: Boolean,
      default: true
    },
    mode: {
      type: String,
      default: 'dateTime'
    },
    mask: {
      type: String,
      default: 'YYYY-MM-DD',
    },
  },
  data(vm) {
    return {
      range: {
        start: null,
        end: null,
      },
      modelConfig: {
        type: 'string',
        mask: vm.mask,
        start: {
          timeAdjust: vm.mode == 'date' ? '00:00:00' : undefined,
          dateAdjust: vm.mode == 'time' ? vm.dateToString(new Date()) : undefined
        },
        end: {
          timeAdjust: vm.mode == 'date' ? '23:59:59' : undefined,
          dateAdjust: vm.mode == 'time' ? vm.dateToString(new Date()) : undefined
        },

      },
      masks: {
        input: vm.mask,
      },
    };
  },
  methods: {
    emitUpdate(val, name) {
      //console.log(val)
      if (val == 'Invalid Date') return;
      if (!val) {
        this.$emit(name, null)
        return;
      }
      /** من إجل جعل اكثر سهولة في الاستعمال */
      /*let value=this.$children[0].inputValues[0]
      let test= this.$children[0].$locale.format(val, this.mask)
      console.log('value',value,test,this.$children[0].$locale)
      this.$emit('input',value)
*/
      
      if (typeof val === 'string')
        this.$emit(name, val)
      else
        if (this.mode == 'date')
          this.$emit(name, this.dateToString(val))
        else
          if (this.mode == 'time')
            this.$emit(name, this.timeToString(val))
          else
            this.$emit(name, val.toISOString())
    }

  },
  watch: {
    valueStart: {
      immediate: true,
      handler(val) {
        if (!val) return;
        let date = new Date(val);
        if (this.mode == 'time') {
          date = new Date();
          date.setHours(val.split(':')[0], val.split(':')[1], 0)
        }

        this.range.start = date
      }
    },
    valueEnd: {
      immediate: true,
      handler(val) {
        if (!val) return;
        let date = new Date(val);
        if (this.mode == 'time') {
          date = new Date();
          date.setHours(val.split(':')[0], val.split(':')[1], 0)
        }
        this.range.end = date
      }
    },
    range: {
      deep: true,
      immediate: true,
      handler(val) {
        //console.log('range',val)
        if (!val) {
          this.emitUpdate(null, 'update:valueStart')
          this.emitUpdate(null, 'update:valueEnd')
          return;
        }
        this.emitUpdate(val.start, 'update:valueStart')
        this.emitUpdate(val.end, 'update:valueEnd')
      }
    },
  }
};
</script>

<style  scoped>
@media (min-width: 640px) {
  .sm\:flex-row {
    flex-direction: row;
  }
}


.flex {
  display: flex;
}

.justify-start {
  justify-content: flex-start;
}

.items-center {
  align-items: center;
}

.flex-col {
  flex-direction: column;
}

.flex-shrink-0 {
  flex-shrink: 0;
}

.flex-grow {
  flex-grow: 1;
}

.w-4 {
  width: 1rem;
}

.relative {
  position: relative;
}

.absolute {
  position: absolute;
}

.pointer-events-none {
  pointer-events: none;
}

.mx-2 {
  margin-left: 0.5rem;
  margin-right: 0.5rem;
}

.h-full {
  height: 100%;
}

html[dir='ltr'] .pl-8 {
  padding-left: 2rem;
}

html[dir='rtl'] .pl-8 {
  padding-right: 2rem;
}

html[dir='ltr'] .pr-2 {
  padding-right: 0.5rem;
}

html[dir='rtl'] .pr-2 {
  padding-left: 0.5rem;
}

.py-1 {
  padding-top: 0.25rem;
  padding-bottom: 0.25rem;
}

.text-gray-600 {
  --text-opacity: 1;
  color: #718096;
  color: rgba(113, 128, 150, var(--text-opacity));
}

.stroke-current {
  stroke: currentColor;
}

input {
  max-width: 100%;
  font-size: .9rem;
}

html[dir='rtl'] .d-arrow {
  transform: rotate(180deg);
}
</style>