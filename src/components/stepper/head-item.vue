<template>
    <div class="d-stepper-head-item">
        <div class="d-stepper-head-item__wrapper">

            <div class="d-stepper-head-item__content">
                <slot name="icon-selected" v-if="status == 'finished'" :status="status">
                    <d-stepper-icon class="icon-status" :status="status"></d-stepper-icon>
                </slot>
                <slot name="icon-selected" v-if="status == 'in-progress'" :status="status">
                    <d-stepper-icon class="icon-status" :status="status"></d-stepper-icon>
                </slot>

                <slot name="icon-selected" v-if="status == 'not-started'" :status="status">
                    <d-stepper-icon class="icon-status" :status="status"></d-stepper-icon>
                </slot>
                <span @click="$emit('click', $event)" class="d-stepper-head-item__title clickable">
                    <slot></slot>
                </span>
            </div>

        </div>

    </div>
</template>

<script>
export default {
    name: 'd-stepper-head-item',
    props: {
        status: {
            type: String,
            default: 'disabled'//disabled| selected | done
        }
    },
    watch: {
        status() {

        }
    }
}
</script>

<style></style>