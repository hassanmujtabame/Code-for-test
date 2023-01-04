<template>
   <div style="margin-top: 85px " class="consult">
        <!-- section 1 -->
        <SectionOne/>
        <!-- #section 1 -->
        <!-- section 2-->
        <SectionTwo/>
        <!-- #section 2-->
         <!-- section 3-->
         <SectionThree/>
        <!-- #section 3-->
        <!-- section 4-->
        <SectionSchedules />
        <!-- #section 4-->
        <!-- section 5-->
        <SectionTopMember />
        <!-- #section 5-->
        <!-- section subscribe-->
        <SectionPartners />
        <!-- #section subscribe-->
          <!-- section join us-->
          <SectionJoin />
        <!-- #section join us-->
       <!-- section numbers in network-->
       <SectionNumbers />
        <!-- #section numbers in network-->
       <!-- section influenceurs -->
       <SectioninFluenceurs />
       <!-- #section influenceurs -->
     <!-- section continue learning -->
     <SectionContinueLearning />
       <!-- #section continue learning -->
      <!-- section hear about us -->
      <SectionHear />
       <!-- #section hear about us -->
</div>
</template>
<script>
import SectionOne from './parts/section-1/index.vue';
import SectionTwo from './parts/section-2/index.vue';
import SectionThree from './parts/section-3/index.vue';
import SectionSchedules from './parts/section-schedules/index.vue';
import SectionTopMember from './parts/section-top-members/index.vue';
import SectionPartners from './parts/section-partners/index.vue';
import SectionJoin from './parts/section-join-us/index.vue';
import SectionNumbers from './parts/section-numbers/index.vue';
import SectioninFluenceurs from './parts/section-influenceurs/index.vue';
import SectionContinueLearning from './parts/section-continue-learning/index.vue';
import SectionHear from './parts/section-hear/index.vue';
export default {
name:'IndexPageGuest',
components:{
    SectionOne,
    SectionTwo,
    SectionThree,
    SectionSchedules,
    SectionTopMember,
    SectionPartners,
    SectionJoin,
    SectionNumbers,
    SectioninFluenceurs,
    SectionContinueLearning,
    SectionHear
},
methods:{
        loadJS(src,async=true,defer=false){
          const plugin = document.createElement("script");
          plugin.setAttribute(
          "src",
          src
        );
        if(defer)
        plugin.setAttribute("defer",true)
        plugin.async = async;
        document.body.appendChild(plugin);
        }
      },
created(){
    
}
}
</script>

