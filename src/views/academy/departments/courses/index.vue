<template>
  <div style="margin-top: 85px " class="consult">
    <d-overlays-simple v-if="loading" />
    <div v-else-if="hasError">
      هناك خطأ غير معروف يرجي تحديث الصفحة
    </div>
    <div v-else class="container">
    <!--header -->
    <SectionHeader :departmentId="itemPage.id" :title="itemPage.title" />
    <div class="container">
    <SectionFilterList :departmentId="itemPage.id" />
    </div>
  </div>
</div>
</template>

<script>
import SectionHeader from './parts/section-header/index';
import SectionFilterList from './parts/section-filter-list/index';
import academyAPI from '@/services/api/academy'

export default {
  name: 'courses-page',
  components:{
    SectionHeader,
    SectionFilterList,

  },
  data:()=>({
      loading:true,
      hasError:false,
      itemPage:{},
  }),methods:{
   async initializing(){
        this.loading = true;
        this.hasError = false;
        try {
            let { data } = await academyAPI.getDepartment(this.$route.params.id)
                if(data.success){
                    this.itemPage = {...data.data,title:data.data.name};
                }else{
                    this.hasError = true;
                }
        } catch (error) {
            this.hasError = true;
        }
        this.loading = false;
    }
 },
 mounted(){
    this.initializing()
 }
}
</script>

<style>

</style>