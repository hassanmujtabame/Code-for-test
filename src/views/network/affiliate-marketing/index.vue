<template>
    <div style="margin-top: 85px" class="consult">
         <!--section-header-->
         <SectionHeader />
         <SectionIntro />
    </div>
</template>

<script>
import SectionHeader from './parts/section-header/index.vue'
import SectionIntro from './parts/section-intro/index.vue'
export default {
    name:'offers-page',
 components:{
    SectionHeader,
    SectionIntro,
 }
}
</script>

<style>

</style>