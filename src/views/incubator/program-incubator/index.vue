<template>
 <div style="margin-top: 96px;">
    <d-overlays-simple v-if="loading" />
    <div v-else-if="hasError">
      هناك خطأ غير معروف يرجي تحديث الصفحة
    </div>
    <div v-else >
       
   <!-- section 1-->
   <SectionHeader />
   <div class="container" >
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
      </div>
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
import incubatorAPI from '@/services/api/incubator';

export default {
name:"program-incubator",
components:{
  SectionHeader,
  SectionDesc,
  SectionProgramContent,
  SectionGraduated,
  SectionPartners,
  SectionReadDept
},
data:()=>({
  loading:false,
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