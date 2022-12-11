<template>
  <div>
    <DefaultHeader/>
    <main style="margin-top: 96px">
        <slot></slot>
        </main>
        <SectSubscribe/>
        <DefaultFooter/>
  </div>
</template>

<script>
import DefaultFooter from '@/layouts/common/footer.vue'
import DefaultHeader from './header.vue'
import SectSubscribe from '@/layouts/common/section-subscribe/sect-subscribe.vue';
export default {
    name:'default-layout',
    components:{
        DefaultFooter,
        DefaultHeader,
        SectSubscribe
    }
}
</script>

<style>

</style>