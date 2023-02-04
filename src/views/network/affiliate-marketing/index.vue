<template>
    <div style="margin-top: 85px" class="consult">
         <!--section-header-->
         <SectionHeader />
         <SectionIntro />
         <SectionFeatures />
         <SectionHowWorkProgram />
         <SectionAreYouMember />
         <SectionRecognize />
    </div>
</template>

<script>
import SectionHeader from './parts/section-header/index.vue'
import SectionIntro from './parts/section-intro/index.vue'
import SectionHowWorkProgram from './parts/section-how-work-program/index.vue'
import SectionFeatures from './parts/section-features/index.vue'
import SectionAreYouMember from './parts/section-are-you-member/index.vue'
import SectionRecognize from './parts/section-recognize-our-marketing/index.vue'
export default {
    name:'offers-page',
 components:{
    SectionHeader,
    SectionIntro,
    SectionHowWorkProgram,
    SectionFeatures,
    SectionAreYouMember,
    SectionRecognize
 }
}
</script>

<style>

</style>