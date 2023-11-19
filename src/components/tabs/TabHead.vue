<template>
    <li class="nav-item m-2" :class="{ 'w-100': isMobile }" role="presentation">
        <BtnTab @selected="selected" :current="currentLocal" :group="group" :reference="reference"
            :className="{ 'w-100': isMobile }">
            <slot></slot>
        </BtnTab>

    </li>
</template>

<script>
import BtnTab from './BtnTab.vue'
export default {
    props: {
        group: {
            type: String,
            require: true,
        },
        reference: {
            type: String,
            require: true,
        },
        current: {
            type: String,
            default: ''
        }
    },
    components: {
        BtnTab
    },
    data: () => ({
        currentLocal: ''
    }),
    watch: {
        current: {
            immediate: true,
            handler(val) {
                this.currentLocal = val
            }
        }
    },
    methods: {
        selected(val) {
            this.currentLocal = val;
            this.$emit('update:current', val)
        }
    }
}
</script>

<style></style>