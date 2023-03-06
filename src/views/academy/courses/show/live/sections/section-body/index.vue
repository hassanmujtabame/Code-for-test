<template>
  <div class="course-show-page__body">
    <div class="row course-show-page__body-top">
      
       <!--display-->
       <div class="col-12 col-md-12">
        <previewLecture :itemPage="itemPage" :isOwner="isOwner" />
       </div>
       <!--lectures-->
       
    </div>
    <div class="row">
      <div class="col-12 col-md-8">
        <div class="course-show-page__details">
        <h1 class="course-show-page__details-title">تفاصيل الدورة  :</h1>
        <div class="course-show-page__details-content mt-2"> 
          <p v-html="itemPage.desc"></p>
        </div>
        </div>
        </div>
        <div class="col-12 col-md-4">
          <PlaceDatesSection :itemPage="itemPage"/>
        </div>
    </div>
    <div class="row justify-content-between py-5">
      <div class="col-12 col-md-6">
        <RateCourse :itemPage="itemPage" />
        </div>
        <div class="col-12 col-md-4">
          <attachmentsCourse :itemPage="itemPage" :isOwner="isOwner"/>
        </div>
    </div>
  </div>
</template>

<script>
import previewLecture from './display-lecture.vue'
import RateCourse from '../../../common/rate-course/index'
import attachmentsCourse from '../../../common/attachments-course/index'
import PlaceDatesSection from './place-dates'
export default {
 name:'section-body',
 props:{
    itemPage:{},
    isOwner:{
      type:Boolean,
      default:false,
    }
  },
 components:{
  previewLecture,
  PlaceDatesSection,
  RateCourse,
  attachmentsCourse
 }
}
</script>

<style scoped>
.course-show-page__body-top {
    border: 1px solid #f1f1f1;
    border-radius: 8px;
    padding: 0px 15px 0px 0;
}
html[lang=en] .course-show-page__body-top{
  padding: 0px 0px 0px 15px;
}
.course-show-page__details-title{
  font-style: normal;
font-weight: 400;
font-size: 24px;
line-height: 32px;
/* identical to box height, or 133% */
text-transform: capitalize;

color: var(--m-color);
}
.course-show-page__details-text{
  font-style: normal;
font-weight: 400;
font-size: 16px;
line-height: 17px;
/* or 106% */

color: #415C5E;
}

</style>