<template>
 <div style="margin-top: 85px " class="consult bg-body-page ">
    <div class="container">
        <div class="course-show-page">
    <SectionHeader />
    <SectionBody />
</div>
</div>
  </div>
</template>

<script>
import SectionHeader from './sections/section-header/index.vue'
import SectionBody from './sections/section-body/index.vue'
export default {
 name:'course-show',
 components:{
    SectionHeader,
    SectionBody
 }
}
</script>

<style scoped>
.course-show-page{
    width: 100%;
    background: white;
    padding: 5px;
    border-radius: 10px 20px;
}
</style>