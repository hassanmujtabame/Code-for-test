<template>
  <div class="container">
    <div class="row">
      <div class="col-md-6 col-12 position-relative">
        <div style="z-index: 4" class="position-relative">
          <h1 style="color: #1fb9b3">دوراتك التدريبية</h1>
          <p style="color: #888">
            لوريم هو ببساطة نص شكلي (بمعنى أن الغاية هي الشكل وليس المحتوى)
            ويُستخدم في صناعات المطابع ودور النشر. كان لوريم إيبسوم ولايزال
            المعيار للنص الشكلي منذ القرن الخامس عشر عندما قامت مطبعة مجهولة برص
            مجموعة من الأحرف بشكل عشوائي أخذتها من نص، لتكوّ
          </p>
        </div>
        <img
          style="height: 300px; z-index: 3; left: 201px; top: -47px"
          class="position-absolute"
          src="../../../../../../assets/img/academy/Frame 1171276924.png"
          alt=""
        />
      </div>
      <div
        class="col-md-6 d-flex justify-content-end align-items-center col-12"
      >
        <button
          class="btn bg-main text-white"
          @click="addCourseFirst"
          role="button"
        >
          <plusCircleOutline :size="24" color="currentColor" />
          أضافة دورة جديدة
        </button>
      </div>
    </div>
  </div>
  <!-- <div class="consulting ">
      <div class="container">
        <div class="row align-items-center justify-content-between">
          <div class="col-md-6">
            <h1 class="fs-1 text-white">
              دوراتك التدريبة </h1>
            <p class="text-white">
              طوري مهاراتك و أنطلقي في عالم ريادة الاعمال والعمل الحر , أكاديمية رياديات ستكون معكِ خطوة بخطوة
              ويمكن من خلالها الحصول على المساعدة والتشجيع للدخول في مجال ريادة الأعمال من خلال مجموعة من الخدمات
              والمزايا
            </p>

          </div>
          <div class="col-md-6">
            <div style="overflow: inherit;" class=" m-auto text-start ">
              <img class="img-fluid" :src="`${publicPath}assets/img/Frame-4.png`" alt="">
            </div>

          </div>

        </div>
      </div>
    </div> -->
</template>

<script>
import plusCircleOutline from "@/components/icon-svg/plus-circle-outline.vue";

export default {
  name: "section-header",
  components: { plusCircleOutline },
  methods: {
    async addCourseFirst() {
      let { data } = await window.axios.get(
        `academy/instructor/meetings?page=1`
      );

      if (!this.user.statusInstructor) {
        window.errorMsg("لم يفعل حسابك بعد !");
      } else if (this.user.statusInstructor && data.data.length < 4) {
        window.errorMsg(
          `يجب عليك رفع ${4 - data.data.length} من اللقاءات لكى تنشئ دوره`
        );
      } else {
        this.fireOpenDialog("add-course-first");
      }
    },
  },
};
</script>

<style></style>
