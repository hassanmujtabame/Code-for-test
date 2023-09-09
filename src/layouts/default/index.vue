<template>
  <div>
    <DefaultHeader/>
    <MyDrawer v-if="user"/>
    <main style="margin-top: 135px">
        <slot></slot>
        </main>
        <d-standard-rate-dialog />
        <SectSubscribe/>
        <DefaultFooter/>
  </div>
</template>

<script>
import DefaultFooter from '@/layouts/common/footer.vue'
import MyDrawer from '@/layouts/common/drawer.vue'
import DefaultHeader from './header.vue'
import SectSubscribe from '@/layouts/common/section-subscribe/sect-subscribe.vue';
export default {
    name:'default-layout',
    components:{
        DefaultFooter,
        DefaultHeader,
        SectSubscribe,
        MyDrawer
    }
}
</script>

<style>

</style>