<template>
  <div class="course-show-page__body">
    <div class="row course-show-page__body-top">
      
       <!--display-->
       <div class="col-12 col-md-8">
        <previewLecture />
       </div>
       <!--lectures-->
       <div class="col-12 col-md-4">
        <LecturesList />
       </div>
    </div>
    <div class="row">
      <div class="col-12 col-md-8">
          <div class="course-show-page__details">
          <h1 class="course-show-page__details-title">تفاصيل الدورة  :</h1>
          <div class="course-show-page__details-content mt-2"> 
            <p>أكثر من 140,000 طالب مسجلين حتى الآن في النسخة الإنجليزية من هذه الدورة في 196 دولة</p>
<p>يرجى العلم بأن هذه الدورة تحتوي على ترجمة باللغة العربية</p>
<p>هل أنت جاهز للارتقاء إلى درجة أعلى في حياتك المهنية؟ في هذه الدورة، ستتعلم كل ما تحتاج لمعرفته حول الأعمال والبيزنس ... بداية من إنشاء شركة وحتى طرحها للاكتتاب العام. وتغطي هذه الدورة كافة الموضوعات المهمة التي ستتعلمها عند الحصول على ماجستير إدارة الأعمال من أي كلية من الكليات المرموقة + مفاهيم الأعمال المستمدة من الخبرة العلمية والتي ستجعلك أكثر نجاحًا</p>
</div>
</div>
          </div>
          <div class="col-12 col-md-4"></div>
    </div>
    <div class="row justify-content-between p-5">
      <div class="col-12 col-md-6">
        <RateCourse :item="{}" />
        </div>
  
        <div class="col-12 col-md-4">
          <attachmentsCourse :item="{}"/>
        </div>
    </div>
  </div>
</template>

<script>
import LecturesList from './sidebar-lectures.vue'
import previewLecture from './display-lecture.vue'
import RateCourse from './rate-course/index'
import attachmentsCourse from './attachments-course/index'
export default {
 name:'section-header',
 components:{
  LecturesList,
  previewLecture,
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