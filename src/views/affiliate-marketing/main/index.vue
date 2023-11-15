<template>
    <div style="margin-top: 85px; position: relative;" class="consult row p-5 col-12">
        <div class="col-3">
            <RightSideBar /> 
        </div>
        <div class="box col-9" style="border: 2px solid #000">
            <component :is="currentComponent"></component>
        </div>

    </div>
</template>

<script>
import Summary from "./summary/index.vue"
import Urls from "./urls/index.vue"
import RightSideBar from './RightSideBar.vue'

export default {
    name: 'affiliate-marketing-home',
    components: {
        Summary,
        Urls,
        RightSideBar
    },
    data: () => ({
        loading: true,
        hasError: false,
        itemPage: {},
        currentComponent: 'Summary'
    }),
}
</script>

<style></style>