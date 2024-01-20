<template>
    <div style="margin-top: 85px; overflow-x: hidden; overflow-y: hidden" class="consult">
        <!--section-header-->
        <SectionHeader />
        <SectionIntro />
        <SectionFeatures />
        <SectionChoseUs />
        <SectionHowWorkProgram />
        <SectionJoin v-if="token && !user.affiliate"/>
        <SectionJoin v-if="!token"/>
        <SectionWhatWeProvide />
        <SectionGraduated title="ابرز سفيرات التسويق بالعموله" />
        <!-- <SectionDoubleWinings /> -->
        <SectionAreYouMember />
        <SectionRecognize />
        <SectionCommonQuistions />
        <!-- <SectionRecentCourses /> -->
        <SectionGraduated title=" المسوقين الاكثر ربحا " />
        <SectionContinueLearning />
        <!-- <SectionHear :itemPage="itemPage" /> -->
    </div>
</template>

<script>
import SectionHeader from './parts/section-header/index.vue'
import SectionWhatWeProvide from './parts/section-what-we-provide/index.vue'
import SectionChoseUs from './parts/section-chose-us/index.vue'
import SectionJoin from './parts/section-join/index.vue'
import SectionIntro from './parts/section-intro/index.vue'
import SectionHowWorkProgram from './parts/section-how-work-program/index.vue'
import SectionFeatures from './parts/section-features/index.vue'
import SectionAreYouMember from './parts/section-are-you-member/index.vue'
import SectionDoubleWinings from './parts/section-double-winings/index.vue'
import SectionRecognize from './parts/section-recognize-our-marketing/index.vue'
import SectionGraduated from './parts/section-graduated/index.vue'
import SectionRecentCourses from './parts/section-recent-courses-online/index.vue'
import SectionCommonQuistions from './parts/section-common-quistions/index.vue'
import SectionContinueLearning from '@/views/incubator/home/parts/section-continue-learning/index.vue'
import SectionHear from './parts/section-hear/index.vue'
import incubatorAPI from '@/services/api/incubator';


export default {
    name: 'affiliate-marketing-home',
    data: () => ({
        loading: true,
        hasError: false,
        itemPage: {}
    }),
    components: {
        SectionWhatWeProvide,
        SectionChoseUs,
        SectionJoin,
        SectionHeader,
        SectionIntro,
        SectionHowWorkProgram,
        SectionFeatures,
        SectionAreYouMember,
        SectionRecognize,
        SectionDoubleWinings,
        SectionGraduated,
        SectionRecentCourses,
        SectionContinueLearning,
        SectionHear,
        SectionCommonQuistions
    },
    methods: {
        async initializing() {
            this.loading = true;
            try {
                let { data } = await incubatorAPI.getDepartment(this.$route.params.id)
                if (data.success) {
                    this.itemPage = data.data
                }
            } catch (error) {
                console.log('error', error)
            }
            this.loading = false;
        }
    },
    mounted() {
        this.initializing()
    }
}
</script>

<style></style>