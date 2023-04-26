<template>
  <div class="mt-5">
       
   <!-- section 1-->
   <SectionHeader />
        <!--#section 1-->
       <!-- section 2-->
       <SectionDesc/>
        <!--#section 2-->
        <!-- section 3-->
        <SectionProgramContent />
        <!--#section 3-->
       <!-- section 4-->
       <SectionGraduated />
        <!--#section 4-->
        <!-- section 5-->
        <SectionPartners/>
        <!--#section 5-->
        <!-- section 6-->
        <SectionReadDept />
        <!--#section 6-->
        <!-- section 7-->
        <SectionSeven />
        <!--#section 7-->
         <!-- section 8-->
         <SectionEight />
        <!--#section 8--> 
         <!-- section 9-->
         <SectionNine />
        <!--#section 9-->   
        <!-- section 10-->
        <SectionTen />
        <!--#section 10-->  
        <!-- section 11-->
        <SectionEleven />
        <!--#section 11--> 
        <!-- section 12-->
        <SectionTwelve/>
        <!--#section 12--> 

    

    </div>
</template>

<script>
import SectionHeader from './parts/section-header/index.vue'
import SectionDesc from './parts/section-description/index.vue'
import SectionProgramContent from './parts/section-program-content/index.vue'
import SectionGraduated from './parts/section-graduated/index.vue'
import SectionPartners from './parts/section-our-partners/index.vue'
import SectionReadDept from './parts/section-read-dept/index.vue'

export default {
name:"program-incubator",
components:{
  SectionHeader,
  SectionDesc,
  SectionProgramContent,
  SectionGraduated,
  SectionPartners,
  SectionReadDept
}
}
</script>

<style>

</style>