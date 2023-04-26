<template>
 <div style="margin-top: 96px;">
    <d-overlays-simple v-if="loading" />
    <div v-else-if="hasError">
      هناك خطأ غير معروف يرجي تحديث الصفحة
    </div>
    <div v-else >
       
   <!-- section 1-->
   <SectionHeader :itemPage="itemPage"/>
   <div class="container" >
        <!--#section 1-->
       <!-- section 2-->
       <SectionDesc :itemPage="itemPage"/>
        <!--#section 2-->
        <!-- section 3-->
        <SectionProgramContent :itemPage="itemPage" />
        <!--#section 3-->
       <!-- section 4-->
       <SectionGraduated :itemPage="itemPage" />
        <!--#section 4-->
        <!-- section 5-->
        <div class="mt-5">
        <SectionPartners :itemPage="itemPage"/>
      </div>
        <!--#section 5-->
        <!-- section 6-->
        <SectionReadDept :itemPage="itemPage"/>
      </div>
      <SectionContinueLearning/>
      <SectionHear :itemPage="itemPage"/>
    </div>
    </div>
</template>

<script>
import SectionHeader from './parts/section-header/index.vue'
import SectionDesc from './parts/section-description/index.vue'
import SectionProgramContent from './parts/section-program-content/index.vue'
import SectionGraduated from './parts/section-graduated/index.vue'
import SectionPartners from './parts/section-our-partners/index.vue'
import SectionReadDept from './parts/section-read-dept/index.vue'
import SectionContinueLearning from '@/views/incubator/home/parts/section-continue-learning/index.vue'
import SectionHear from './parts/section-hear/index.vue'
import incubatorAPI from '@/services/api/incubator';

export default {
name:"program-incubator",
components:{
  SectionHeader,
  SectionDesc,
  SectionProgramContent,
  SectionGraduated,
  SectionPartners,
  SectionReadDept,
  SectionContinueLearning,
  SectionHear,
},
data:()=>({
  loading:true,
  hasError:false,
  itemPage:{}
}) 
,
methods:{
    async initializing(){
      this.loading  = true;
      try {
        let { data } = await incubatorAPI.getDepartment(this.$route.params.id)
        if(data.success){
          this.itemPage = data.data
        }
      } catch (error) {
          console.mylog('error',error)
        //
      }
      this.loading  = false;
    }
    },
    mounted(){
      this.initializing()
    }
}
</script>

<style>

</style>