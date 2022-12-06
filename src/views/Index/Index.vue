<template>
  <div>
    
    
      <!-- section-1 -->
      <SectMainSlider />
      <!-- #section-1 -->
      <div class="container">
        <!-- services -->
        <SectServices/>
        <!--# service-->
        <!-- section 3-->
        <SectCampRiadiat/>
        <!-- #section-3 -->
        <!-- section 4 -->
        <SectConsultingRiadiat/>
        <!-- #section 4-->
      </div>
    <!-- section 5 -->
    <SectTrainingCourses />
    <!-- #section 5-->
    <!-- section 6-->
      <SectPartnerRiadiat/>
    <!-- #section 6 -->
    <!-- section 7-->
     <SectAboutUs/>
    <!-- #section 7-->
      <div class="sex-eight mt-5">
        <div class="container">
          <h2 class="text-center">ماذا يقولون عن رياديات </h2>
            <div class="feature-carousel owl-carousel owl-theme">
                <div class="item">
                    <div class="row align-items-center p">
                        <div class="col-md-8 osition-relative">
                            <p>
                                رياديات  ساعدتني كثيرا في البداية فلقد قدمت لي الكثير من الحلول و الاستشارات و الدورات رياديات  ساعدتني كثيرا في البداية فلقد قدمت لي الكثير من الحلول و الاستشارات و الدورات رياديات  ساعدتني كثيرا في البداية فلقد قدمت لي الكثير من الحلول و الاستشارات و الدورات ..
                            شكرا رياديات 
                            </p>
                            <h6 style="color: #FFBC00;">
                                سلمى احمد
                            </h6>
                            <div class="position-absolute dote">
                                <img src="/assets/img/dot.png" alt="">
                            </div>
                        </div>
                        <div class="col-md-4">
                            <img class="rounded-3  " src="/assets/img/Rectangle 1765.png" alt=""  width="368" height="368">
                        </div>
                     

                    </div>
                </div>
                <div class="item">
                    <div class="row align-items-center p">
                        <div class="col-md-8 osition-relative">
                            <p>
                                رياديات  ساعدتني كثيرا في البداية فلقد قدمت لي الكثير من الحلول و الاستشارات و الدورات رياديات  ساعدتني كثيرا في البداية فلقد قدمت لي الكثير من الحلول و الاستشارات و الدورات رياديات  ساعدتني كثيرا في البداية فلقد قدمت لي الكثير من الحلول و الاستشارات و الدورات ..
                            شكرا رياديات 
                            </p>
                            <h6 style="color: #FFBC00;">
                                سلمى احمد
                            </h6>
                            <div class="position-absolute dote">
                                <img src="/assets/img/dot.png" alt="">
                            </div>
                        </div>
                        <div class="col-md-4">
                            <img class="rounded-3  " src="/assets/img/Rectangle 1765.png" alt=""  width="368" height="368">
                        </div>
                     

                    </div>
                </div>
                <div class="item">
                    <div class="row align-items-center p">
                        <div class="col-md-8 osition-relative">
                            <p>
                                رياديات  ساعدتني كثيرا في البداية فلقد قدمت لي الكثير من الحلول و الاستشارات و الدورات رياديات  ساعدتني كثيرا في البداية فلقد قدمت لي الكثير من الحلول و الاستشارات و الدورات رياديات  ساعدتني كثيرا في البداية فلقد قدمت لي الكثير من الحلول و الاستشارات و الدورات ..
                            شكرا رياديات 
                            </p>
                            <h6 style="color: #FFBC00;">
                                سلمى احمد
                            </h6>
                            <div class="position-absolute dote">
                                <img src="/assets/img/dot.png" alt="">
                            </div>
                        </div>
                        <div class="col-md-4">
                            <img class="rounded-3  " src="/assets/img/Rectangle 1765.png" alt=""  width="368" height="368">
                        </div>
                     

                    </div>
                </div>
    
            </div>

        </div>

      </div>
     <!-- section 8-->
     <SectBlog/>
     <!-- #section 8-->
      <!-- section subscripe-->
      <sectSubscripe/>
      <!-- #section subscripe-->
  </div>
</template>

<script>
import SectMainSlider from './parts/section-1/main-slider.vue'
import SectServices from './parts/section-2/services.vue'
import SectCampRiadiat from './parts/section-3/camp-riadiat.vue'
import SectConsultingRiadiat from './parts/section-4/consulting-riadiat.vue'
import SectTrainingCourses from './parts/section-5/training-courses.vue'
import SectPartnerRiadiat from './parts/section-6/partners-riadiat.vue'
import SectAboutUs from './parts/section-7/about-us.vue'
import SectBlog from './parts/section-8/sect-blog.vue'
import sectSubscripe from './parts/section-subscripe/sect-subscripe.vue'
export default {
  name: 'IndexView',
  components: {
    SectMainSlider,
    SectServices,
    SectCampRiadiat,
    SectConsultingRiadiat,
    SectTrainingCourses,
    SectPartnerRiadiat,
    SectAboutUs,
    SectBlog,
    sectSubscripe
  },
  data:()=>({
    
  })
}
</script>
