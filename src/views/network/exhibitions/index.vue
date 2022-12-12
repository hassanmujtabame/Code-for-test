<template>
  <div class="mt-5">
       
        <!--section header-->
        <SectionHeader />
        <!--#section header-->
       <!--section top exhibition-->
       <SectionTop/>
        <!--#section top exhibition-->
        <!--section filter exhibition-->
        <SectionFilter />
        <!--#section filter exhibition-->
      <addExhibitionDialg />
    </div>
</template>

<script>
import SectionHeader from './parts/section-header/index.vue';
import SectionTop from './parts/section-top-exhibitions/index.vue';
import SectionFilter from './parts/section-filter-exhibitions/index.vue';
import addExhibitionDialg from './parts/dialogs/add-exhibition.vue';
export default {
 name:'exhibitions-page',
 components:{
    SectionHeader,
    SectionTop,
    SectionFilter,
    addExhibitionDialg
 }
}
</script>

<style>

</style>