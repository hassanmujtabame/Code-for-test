<template>
    <div class="mt-4">
        <div class="row justify-content-center">
            <navbar @elementName="elementName" />
        </div>
        <div class="container">
            <transition name="fade" mode="out-in">
                <component :is="currentComponent"></component>
            </transition>
        </div>
    </div>
</template>
<script>
import navbar from './navbar.vue';
import offers from './parts/offers/index.vue'
import exhiptions from './parts/exhiptions/index.vue'
import workspaces from './parts/workspaces/index.vue'
export default {
    name: 'section-operation',
    data: () => {
        return {
            currentComponent: 'offers'
        }
    },
    components: {
        navbar,
        offers,
        exhiptions,
        workspaces,
    },
    methods: {
        elementName(payload) {
            this.currentComponent = payload;
        },
    }
}
</script>
<style scoped>
.fade-enter-active,
.fade-leave-active {
    transition: opacity .5s;
}

.fade-enter,
.fade-leave-to {
    opacity: 0;
}
</style>