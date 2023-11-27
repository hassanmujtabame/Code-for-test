<template>
    <div style="margin-top: 85px; position: relative;" class="consult row p-5 col-12">
        <div class="col-3">
            <RightSideBar @elementName="elementName" />
        </div>
        <div class="col-9">
            <!-- {{ currentComponent }} -->
            <div class="container">
                <transition name="fade" mode="out-in">
                    <component :is="currentComponent"></component>
                </transition>
            </div>
        </div>

    </div>
</template>

<script>
import Summary from "./summary/index.vue"
import Profile from "./profile/index.vue"
import Logout from "./logout/index.vue"
import Referalls from "./referalls/index.vue"
import Visits from "./visits/index.vue"
import Deals from "./deals/index.vue"
import Paner from "./paner/index.vue"
import Urls from "./urls/index.vue"
import RightSideBar from './RightSideBar.vue'

export default {
    name: 'affiliate-marketing-home',
    components: {
        Profile,
        Logout,
        Summary,
        Urls,
        Referalls,
        Visits,
        Deals,
        RightSideBar,
        Paner
    },
    data: () => ({
        loading: true,
        hasError: false,
        itemPage: {},
        currentComponent: 'Summary'
    }),
    methods: {
        elementName(payload) {
            this.currentComponent = payload;
        }
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