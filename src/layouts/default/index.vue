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
import DefaultFooter from './footer.vue'
import DefaultHeader from './header.vue'
import SectSubscribe from './section-subscripe/sect-subscribe.vue';
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