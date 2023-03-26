  <template>
  <div style="margin-top: 85px " class="consult">
        <!-- section top-->
        <SectionTop />
       <!-- section definition-->
       <SectionDefinition/>

        <!-- section features-->
        <SectionFeatures />

       <!-- section ads-->
       <SectionAds department="incubator" url="network/home-banners" />
        <SectionIncubationProgram />
        <!-- section 6-->
        <SectionSix />

        <!-- section 7-->
        <SectionSeven />

         <!-- section 8-->
         <SectionEight />

         <!-- section 9-->
         <SectionNine /> 
        <!-- section 10-->
        <SectionTen />
        <!-- section 11-->
        <SectionEleven />
        <!-- section 12-->
        <SectionTwelve/>
    </div>
</template>

<script>
import SectionTop from './parts/section-top/index.vue'
import SectionDefinition from './parts/section-definition/index.vue'
import SectionFeatures from './parts/section-features/index.vue'
import SectionAds from '@/common/components/advertisements/index'
//import SectionFour from './parts/section-4/index.vue'
import SectionIncubationProgram from './parts/section-incubation-program/index.vue'
import SectionSix from './parts/section-6/index.vue'
import SectionSeven from './parts/section-7/index.vue'
import SectionEight from './parts/section-8/index.vue'
import SectionNine from './parts/section-9/index.vue'
import SectionTen from './parts/section-10/index.vue'
import SectionEleven from './parts/section-11/index.vue'
import SectionTwelve from './parts/section-12/index.vue'
export default {
name:"incubator-home",
components:{
  SectionTop,
  SectionDefinition,
  SectionFeatures,
  SectionAds,
  SectionIncubationProgram,
  SectionSix,
  SectionSeven,
  SectionEight,
  SectionNine,
  SectionTen,
  SectionEleven,
  SectionTwelve
}
}
</script>

<style>

</style>