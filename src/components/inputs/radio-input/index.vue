<template>
    <div class="col-12 form-check mt-3">
        <input class="form-check-input" v-model="value_" type="radio" :name="name"  v-on="$listeners" :value="value">
        <label class="form-check-label clickable fs-r-12-17">
            <slot>
            {{ label }}
            </slot>
        </label>
    </div>
</template>

<script>
export default {
    name: 'd-radio-input',
    props: {
        trueValue: {
            default: true
        },
        falseValue: {
            default: false
        },
        name: {},
        label: {},
        value: {},
        valuem: {},
        errors: {
            type: [Array, Object],
        }
    },
    model: {
        prop: 'valuem',
        event: 'updateValue'
    },
    data: (vm) => {
        return {
            uuid: vm.name ?? `check-input-${vm.generateRandomString(8)}`,
            value_: false,
        }
    },
    watch: {
        errors: {
            immediate: true,
            deep: true,
            handler() { }
        },
        valuem: {
            deep: true,
            immediate: true,
            handler() {
               
                    this.value_ = this.valuem
                
            }
        },
        value_: {
            deep: true,
            immediate: true,
            handler(val) {
               this.$emit('updateValue',val)
                
            }
        }

    }
}
</script>

<style scoped>
.form-check-label {
    color: var(--label-color);
    font-size: 12px;
    line-height: 17px;
}
</style>