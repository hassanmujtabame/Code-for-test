<template>
  <div style="margin-top: 85px " class="consult max-width-100-hidden">
      <div class="container">
        <h1 class="home-section-title">جدول مواعيدي</h1>
        <p  class="home-section-text">هنا جدول مواعيد الدورات والندوات الأونلاين وفي المقر</p>
         <SectionFilterList />
      </div>
  </div>
</template>

<script>
import SectionFilterList from './parts/section-filter-list/index'
export default {
name:'ready-services',
components:{

  SectionFilterList
},
data:()=>({})
}
</script>

<style>

</style>