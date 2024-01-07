<template>
    <div class="tab-pane fade" :class="{ 'show active': active }" :id="`${group}-${tag}`" role="tabpanel"
        :aria-labelledby="`${group}-${tag}-tab`" tabindex="0">
        <slot></slot>
    </div>
</template>
  
<script>
export default {
    name: 'd-tab-btn',
    props: {
        group: {
            type: String,
            default: 'pills'
        },
        tag: {},
        active: {
            type: Boolean,
            default: false,
        }

    },
    watch: {
        active() { }
    }
}
</script>
  
<style></style>