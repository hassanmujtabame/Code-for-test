<template>
    <div style="margin-top: 85px" class="consult">
         <!--section-header-->
         <SectionHeader />
         <SectionIntro />
         <SectionFeatures />
         <SectionHowWorkProgram />
    </div>
</template>

<script>
import SectionHeader from './parts/section-header/index.vue'
import SectionIntro from './parts/section-intro/index.vue'
import SectionHowWorkProgram from './parts/section-how-work-program/index.vue'
import SectionFeatures from './parts/section-features/index.vue'
export default {
    name:'offers-page',
 components:{
    SectionHeader,
    SectionIntro,
    SectionHowWorkProgram,
    SectionFeatures,
 }
}
</script>

<style>

</style>