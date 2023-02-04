<template>
    <div style="margin-top: 85px" class="consult">
         <!--section-header-->
         <SectionHeader />
         <SectionTwo />
    </div>
</template>

<script>
import SectionHeader from './parts/section-header/index.vue'
import SectionTwo from './parts/section-2/index.vue'
export default {
    name:'offers-page',
 components:{
    SectionHeader,
    SectionTwo,
 }
}
</script>

<style>

</style>