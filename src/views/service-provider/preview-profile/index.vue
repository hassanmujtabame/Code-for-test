<template>
  <div style="margin-top: 96px;">
        <div class="container my-profile">
            <div class="row">
                <div class="col-md-3 mt-3 mb-3">
                    
                    <SectionUser />
                    <RateCard />

                </div>
                <div class="col-md-9 mt-3">
                    <!--my service-->
                    <SectionMyService />
                    <!--section gallery-->
                    <SectionGallery />
                    

                </div>
            </div>
        </div>
        <div class="main-top py-3 px-5 mb-1">
            <div class="row align-items-center text-center m-auto">
                <div class="col-md-6 mt-2">
                    <div class="img-screen  mobile-hide">
                    <img class="img-fluid" :src="`${publicPath}assets/svg/mobile-screen-1.svg`" alt />
                    </div>
                </div>
                <div class="col-md-6 mt-4">
                    <h2
                    class="home-section-title text-white"
                    >أكملي دوراتك، مراسلاتك وشاركي فـــــــي الشبكة والحاضنة من خلال تطبيق رياديــــــات</h2>
                    <div class="mt-4">
                    <a href>
                        <img
                        :class="{'h-40px':isMobile}"
                        :src="`${publicPath}assets/svg/app-store-dark.svg`"
                        alt
                        />
                    </a>
                    <a href>
                        <img
                        :class="{'h-40px':isMobile}"
                        :src="`${publicPath}assets/svg/google-play-dark.svg`"
                        alt
                        />
                    </a>
                    </div>
                </div>
            </div>
        </div>

        <HearSection />

    </div>
</template>

<script>
//import readyServiceAPI from '@/services/api/service-provider/provider/ready-service.js'
import SectionMyService from './parts/section-my-services/index.vue';
import SectionGallery from './parts/section-gallery/index.vue';
import SectionUser from './parts/section-user/index.vue';
import HearSection from '@/views/service-provider/common-components/section-hear/index.vue';
import RateCard from './parts/section-user/rate-provider/index.vue';
export default {
 name:'show-profile-service-provider',
 components:{
    SectionMyService,
    SectionGallery,
    SectionUser,
    HearSection,
    RateCard
 }
}
</script>

<style>

</style>