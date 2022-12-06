<template>
  <div>
    <DefaultHeader/>
    <main style="margin-top: 96px">
        <slot></slot>
        </main>
        <DefaultFooter/>
  </div>
</template>

<script>
import DefaultFooter from './footer.vue'
import DefaultHeader from './header.vue'
export default {
    name:'default-layout',
    components:{
        DefaultFooter,
        DefaultHeader
    }
}
</script>

<style>

</style>