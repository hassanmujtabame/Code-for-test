<template>
    <div class="col-12 form-check mt-3">
        <input class="form-check-input" v-model="value_" type="checkbox" :name="`correctRadios-${uuid}`"  v-on="$listeners">
        <label class="form-check-label clickable fs-r-12-17">
            {{ label }}
        </label>
    </div>
</template>

<script>
export default {
    name: 'd-check-input',
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
        errors: {
            type: [Array, Object],
        }
    },
    model: {
        prop: 'value',
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
        value: {
            deep: true,
            immediate: true,
            handler() {
                if (Array.isArray(this.value)) {
                    this.value_ = (this.value.includes(this.trueValue))
                } else {
                    this.value_ = this.value === this.trueValue ? true : false
                }
            }
        },
        value_: {
            deep: true,
            handler(val) {
                if (Array.isArray(val)) {
                    this.$emit('updateValue', val)
                } else {
                    this.$emit('updateValue', this.value_ === true ? this.trueValue : this.falseValue)
                }

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